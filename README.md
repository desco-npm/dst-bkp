# @desco/dst-bkp

> [Read the American English Version](README.en.md)

Pacote global para cópia periódica e restauração dos mundos do jogo **Don't Starve Together**.
 
## NodeJS
 
É necessário ter o <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
instalado no computador para rodar e até mesmo instalar, <a href="https://nodejs.org/en/" target="_blank">clique aqui</a> para baixar e instalar.
 
Dê preferência para a versão **LTS** que é mais estável.
 
O processo de instalação é padrão, no Windows basta um *"instalar, instalar, instalar"*.
 
## Instalação
 
Com o <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> já instalado, abra a linha de comando de sua preferência e entre com o seguinte comando:
 
```
npm install -g @desco/dst-bkp
```
 
Este comando irá instalar o **@desco/dst-bkp** na sua máquina.
 
> Note que será preciso fechar e abrir novamente a linha de comando para que o **@desco/dst-bkp** seja reconhecido por ela

### Erro de Política de Execução

Por padrão, o Windows vem com a execução de scripts de terceiros bloqueada causando este erro

![5](/assets/5.png)

Para resolver, abra a linha de comando de sua preferência como administrador do sistema e execute o comando `Set-ExecutionPolicy Unrestricted`, respondendo a pergunta de confirmação como `(A) Sim para Todos`.

![6](/assets/6.png)
![4](/assets/4.png)

> Cuidado! Esta política de restrição do Windows foi criada para aumentar sua segurança, desabilite por sua conta e risco!

Após desabilitar, tente novamente o processo de instalação do **@desco/dst-bkp**.

## Usando
 
### Configurando
 
Para configurar o **@desco/dst-bkp** no **mundo** que deseja manter uma cópia periódica, abra o diretório do **cluster** dele na linha de comando de sua preferência e rode:
 
```
dst-bkp
```
 
Algumas perguntas serão feitas, são elas:
 
***A cada quantos minutos a cópia deverá ser executada? (Cada dia do jogo tem 4 minutos)***
 
A partir do momento que a rotina de cópia periódica for iniciada, o **cluster** do mundo será copiado de **N** em **N** minutos, esse valor é escolhido pelo jogador e por padrão é usado - e recomendado - 4 minutos, ou seja, o tempo que dura um dia no jogo.
 
***Em qual diretório as cópias deverão ser guardadas?***
 
As cópias devem ser feitas em algum local, onde? Defina aqui o endereço do diretório.
 
***Qual o limite de cópias? (As mais antigas serão removidas)***
 
Para evitar uma quantidade absurda de cópias lotando o disco rígido, o **@desco/dst-bkp** apaga as cópias mais antigas, cabendo ao jogador definir a quantidade de cópias.
 
Se deseja uma única cópia, defina **1**, porém note que corre o risco de perder uma cópia mais antiga por morrer enquanto esta longe do computador e o jogo reseta. Como a cópia é feita a cada **N** minutos, se tiver apenas uma cópia e você demorar mais que esse tempo, o mundo estará perdido de qualquer forma.
 
Se quiser ter todas as cópias, simplesmente defina um número enorme. Por exemplo: Se a cópia é feita a cada **4** minutos que é um dia no jogo, podemos definir uma cópia completa como ***9000*** dias, ou ***9000*** cópias. Alguém tem um mundo tão longo? Tem? Então só aumentar o número!
 
Por padrão, a resposta padrão para esta pergunta é o número equivalente a **1** ano do jogo, de acordo com o tempo definido entre as cópias.
 
![1](/assets/1.png)
 
Após responder as perguntas, um menu de opções irá surgir, este é o menu padrão do programa que sempre será exibido quando invocado com a configuração já feita.
 
São três opções e você pode *"navegar"* entre elas utilizando as setas para cima e para baixo, assim como pode selecionar com a tecla **enter**.
 
### Iniciar Cópia Periódica
 
Esta opção irá começar a cópia do **cluster/mundo** no intervalo definido no processo de configuração.
 
A cada nova cópia uma mensagem será exibida.
 
![2](/assets/2.png)
 
Para cancelar o processo, simplesmente feche a linha de comando ou pressione **ctrl+c**.
 
***Restaurar uma Cópia***
 
Deseja recuperar uma cópia antiga?
 
Use essa opção para escolher a cópia desejada.
 
Você pode *"navegar"* entre elas utilizando as setas para cima e para baixo, assim como pode selecionar com a tecla **enter**.
 
![3](/assets/3.png)
 
***Reconfigurar***
 
Esta opção irá iniciar novamente o processo de configuração descrito anteriormente, toda configuração informada aqui irá sobrescrever a anterior!
 

