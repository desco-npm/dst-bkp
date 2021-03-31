<div align="right">
  <a href="README.US.md">
    <img alt="Read in American English" src="https://img.shields.io/static/v1?label=&message=Read+in+American+English&color=red&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/4M0hgyF/dst-bkp.png"></td>
    <td>  
      <h1>@desco/dst-bkp</h1>
      Pacote global para cópia periódica e restauração dos mundos do jogo Don't Starve Together.
      <br /><br />
      <div align="center">
        <img alt="Licença MIT" src="https://img.shields.io/static/v1?label=Licen%C3%A7a&message=MIT&color=green&style=for-the-badge">
        <img alt="Versão 1.0.3" src="https://img.shields.io/static/v1?label=Vers%C3%A3o&message=1.0.3&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        🚀 Pronto para uso! 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">Veja outros projetos NPM aqui.</a>

> <a href="https://github.com/descoifica" target="_blank">Veja outros projetos aqui.</a>

---

## 📋 Tabela de conteúdos

- [🛠️ Tecnologias](#Tecnologias)
- [⚙️ Instalação](#Instalação)
- [✨ Criando ou Configurando uma Rotina de Cópia Periódica](#Criando-ou-Configurando-uma-Rotina-de-Cópia-Periódica)
- [🏁 Iniciar Cópia Periódica](#Iniciar-Cópia-Periódica)
- [❤️ Restaurar uma Cópia](#Restaurar-uma-Cópia)

---

<a name="Tecnologias"></a>

## 🛠️ Tecnologias

As seguintes tecnologias são utilizadas:

- [NodeJS](https://nodejs.org/en/);
- [Moment](https://www.npmjs.com/package/moment);

---

<a name="Instalação"></a>

## ⚙️ Instalação

É necessário ter o <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> instalado no computador para rodar e até mesmo instalar, <a href="https://nodejs.org/en/" target="_blank">clique aqui</a> para baixar e instalar.

Dê preferência para a versão **LTS** que é mais estável.

O processo de instalação é padrão, no Windows basta um _"instalar, instalar, instalar"_.

Com o <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> já instalado, abra a linha de comando de sua preferência e entre com o seguinte comando:

```bash
npm install -g @desco/dst-bkp
```

Este comando irá instalar o **@desco/dst-bkp** na sua máquina.

> Note que será preciso fechar e abrir novamente a linha de comando para que o **@desco/dst-bkp** seja reconhecido por ela

<a name="Como-Usar"></a>

### Erro de Política de Execução

Por padrão, o Windows vem com a execução de scripts de terceiros bloqueada causando este erro

![5](/assets/5.png)

Para resolver, abra a linha de comando de sua preferência como administrador do sistema e execute o comando `Set-ExecutionPolicy Unrestricted`, respondendo a pergunta de confirmação como `(A) Sim para Todos`.

![6](/assets/6.png)
![4](/assets/4.png)

> Cuidado! Esta política de restrição do Windows foi criada para aumentar sua segurança, desabilite por sua conta e risco!

Após desabilitar, tente novamente o processo de instalação do **@desco/dst-bkp**.

---

<a name="Criando-ou-Configurando-uma-Rotina-de-Cópia-Periódica"></a>

## ✨ Criando ou Configurando uma Rotina de Cópia Periódica

Para iniciar/configurar o **@desco/dst-bkp** no **mundo** que deseja manter uma cópia periódica, abra o diretório do **cluster** dele na linha de comando de sua preferência e rode:

```bash
dst-bkp
```

Algumas perguntas serão feitas, são elas:

**_A cada quantos minutos a cópia deverá ser executada? (Cada dia do jogo tem 4 minutos)_**

A partir do momento que a rotina de cópia periódica for iniciada, o **cluster** do mundo será copiado de **N** em **N** minutos, esse valor é escolhido pelo jogador e por padrão é usado - e recomendado - 4 minutos, ou seja, o tempo que dura um dia no jogo.

**_Em qual diretório as cópias deverão ser guardadas?_**

As cópias devem ser feitas em algum local, onde? Defina aqui o endereço do diretório.

**_Qual o limite de cópias? (As mais antigas serão removidas)_**

Para evitar uma quantidade absurda de cópias lotando o disco rígido, o **@desco/dst-bkp** apaga as cópias mais antigas, cabendo ao jogador definir a quantidade de cópias.

Se deseja uma única cópia, defina **1**, porém note que corre o risco de perder uma cópia mais antiga por morrer enquanto esta longe do computador e o jogo reseta. Como a cópia é feita a cada **N** minutos, se tiver apenas uma cópia e você demorar mais que esse tempo, o mundo estará perdido de qualquer forma.

Se quiser ter todas as cópias, simplesmente defina um número enorme. Por exemplo: Se a cópia é feita a cada **4** minutos que é um dia no jogo, podemos definir uma cópia completa como **_9000_** dias, ou **_9000_** cópias. Alguém tem um mundo tão longo? Tem? Então só aumentar o número!

Por padrão, a resposta padrão para esta pergunta é o número equivalente a **1** ano do jogo, de acordo com o tempo definido entre as cópias.

![1](/assets/1.png)

Após responder as perguntas, um menu de opções irá surgir, este é o menu padrão do programa que sempre será exibido quando invocado com a configuração já feita.

São três opções e você pode _"navegar"_ entre elas utilizando as setas para cima e para baixo, assim como pode selecionar com a tecla **enter**.

---

<a name="Iniciar-Cópia-Periódica"></a>

## 🏁 Iniciar Cópia Periódica

Esta opção irá começar a cópia do **cluster/mundo** no intervalo definido no processo de configuração.

A cada nova cópia uma mensagem será exibida.

![2](/assets/2.png)

Para cancelar o processo, simplesmente feche a linha de comando ou pressione **ctrl+c**.

---

<a name="Restaurar-uma-Cópia"></a>

## ❤️ Restaurar uma Cópia

Deseja recuperar uma cópia antiga?

Use essa opção para escolher a cópia desejada.

Você pode _"navegar"_ entre elas utilizando as setas para cima e para baixo, assim como pode selecionar com a tecla **enter**.

![3](/assets/3.png)

---

## Autor

<table>
  <tr>
    <td width="150px">
      <img src="https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.0-9/539886_235546170253505_5977326689811409130_n.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_eui2=AeGgFWn_fWInwRkTo3mHSP993TbQ0TzG0Y3dNtDRPMbRjS-eZL1tr4I5maqz6O-jva9qWnIxKOsD3UtSm9CTeCys&_nc_ohc=Qw6NaDGrtIgAX9uFF2c&_nc_ht=scontent.fsdu1-1.fna&oh=5ebac9874d7a24e157c8c99fd965c2a4&oe=606539CE" width="100px;" alt=""/>
      <b>Rafael A. R. Dias</b>
    </td>
    <td>  
      <a href="mailto:eu@diasrafael.com.br" target="_blank" >
        <img alt="Email eu@diasrafael.com.br" src="https://img.shields.io/static/v1?label=Email&message=eu@diasrafael.com.br&color=red&logo=gmail&style=for-the-badge">
      </a>
      <a href="https://www.linkedin.com/in/diasrafael/" target="_blank">
        <img alt="Linkedin @diasrafael" src="https://img.shields.io/static/v1?label=Linkedin&message=@diasrafael&color=blue&logo=linkedin&style=for-the-badge">
      </a>
      <a href="https://www.facebook.com/eudiasrafael" target="_blank">
        <img alt="Facebook @eudiasrafael" src="https://img.shields.io/static/v1?label=Facebook&message=@eudiasrafael&color=blue&logo=facebook&style=for-the-badge">
      </a>
      <a href="https://github.com/descodifica" target="_blank">
        <img alt="GitHub Geral @descodifica" src="https://img.shields.io/static/v1?label=GitHub+Geral&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub+NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>
