#!/usr/bin/env node

require('colors')

const clear = require('clear')
const path = require('path')
const fs = require('fs-extra')
const ncp = require('ncp').ncp
const prompts = require('prompts')
const moment = require('moment')
const rimraf = require('rimraf')

class DstBackup {
  constructor () {
    this.version = '1.0.0'

    this.init()
  }

  async init () {
    clear()

    this.clusterDir = process.cwd()
    this.configAddrs = path.join(this.clusterDir, '.dstbkp')

    if (!await this.configExists()) {
      await this.config()

      console.log('')
    }

    this.configs = JSON.parse(await fs.readFileSync(this.configAddrs, 'utf8'))

    const method = (await prompts({
      type: 'select',
      choices: [
          {
              title: 'Iniciar Cópia Periodica',
              value: 'backup',
              description: `Começa a executar a cópia do mundo periodicamente`,
          },
          {
              title: 'Restaurar uma Cópia',
              value: 'restore',
              description: 'Restaura uma cópia anterior do mundo',
          },
          {
              title: 'Reconfigurar',
              value: 'config',
              description: 'Reconfigura a rotina de cópias',
          },
      ],
      name: 'method',
      message: 'O que deseja fazer?',
      validate: resp => resp ? true : 'Informe uma opção'
    })).method

    if (!method) process.exit()

    this[method]()
  }

  async configExists () {
    return await fs.existsSync(this.configAddrs)
  }

  async config () {
    const responses = { version: this.version, }

    responses.minutes = (await prompts({
      type: 'number',
      name: 'minutes',
      message: (
        'A cada quantos minutos a cópia deverá ser executada? (Cada dia do jogo tem 4 minutos)'
      ),
      initial: 4,
    })).minutes

    responses.dir = (await prompts({
      type: 'text',
      name: 'dir',
      message: 'Em qual diretório as cópias deverão ser guardadas?',
      validate: resp => {
        return resp && fs.existsSync(resp) ? true : 'Diretório não existe!'
    }
    })).dir

    responses.limit = (await prompts({
      type: 'number',
      name: 'limit',
      message: (
        'Qual o limite de cópias? (As mais antigas serão removidas)'
      ),
      initial: Math.round((70 * 4) / responses.minutes),
    })).limit

    if (Object.values(responses).indexOf(undefined) >= 0) process.exit()

    if (await this.configExists()) {
      await fs.unlink(this.configAddrs)
    }

    await fs.writeFileSync(this.configAddrs, JSON.stringify(responses, null, 1))

    console.log(
      `\nConfiguração criada! Caso queira alterar, use a opção "Reconfigurar"`
    )

    return Promise.resolve()
  }

  async backup () {
    const seconds = this.configs.minutes * 60
    const milliseconds = seconds * 1000
    
    console.log('')

    console.log(`Uma cópia será feita dentro de ${this.configs.minutes} minutos\n`)

    setInterval(async () => {
      const time = moment().format('YYYY-MM-DD HH-mm-ss')

      console.log(`[${time}] Efetuando cópia...`)

      const distDir = path.join(this.configs.dir, time)

      fs.mkdirSync(distDir)
      ncp(this.clusterDir, distDir)

      console.log(`[${time}] Feito!\n`)

      const versions = await this.listVersions()
      const oldVersions = versions.slice(this.configs.limit - 1)

      oldVersions.map(async i => {
        const dir = path.join(this.configs.dir, i)

        await rimraf.sync(dir)
      })

      console.log(`Uma nova cópia será feita dentro de ${this.configs.minutes} minutos\n`)
    }, milliseconds)
  }

  async listVersions () {
    return await fs.readdirSync(this.configs.dir).reverse()
  }

  async restore () {
    const version = (await prompts({
      type: 'select',
      choices: (await this.listVersions()).map(i => ({ title: i, value: i, })),
      name: 'version',
      message: 'Escolha uma cópia para restaurar',
      validate: resp => resp ? true : 'Informe uma opção'
    })).version
    
    console.log('\nRestaurando...')

    await rimraf.sync(path.join(this.clusterDir, 'caves'))
    await rimraf.sync(path.join(this.clusterDir, 'master'))
    await ncp(path.join(this.configs.dir, version), this.clusterDir)

    console.log('Feito!\n')
  }
}

module.exports = new DstBackup()