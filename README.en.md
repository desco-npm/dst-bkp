# @desco/dst-bkp

> [Ler a versão em Poruguês do Brasil](README.md)

Global package for periodic copying and restoration of game worlds **Don't Starve Together**.
 
## NodeJS
 
You must have <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
 installed on the computer to run and even install, <a href="https://nodejs.org/en/" target="_blank"> click here </a> to download and install.
 
Give preference to the **LTS** version which is more stable.
 
The installation process is standard, on Windows you just need to *"install, install, install"*.
 
## Installation
 
With <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> already installed, open the command line of your choice and enter the following command:
 
``
npm install -g @desco/dst-bkp
``
 
This command will install **@desco/dst-bkp** on your machine.
 
> Note that it will be necessary to close and reopen the command line for **@desco/dst-bkp** to be recognized by it.
 
## Using
 
### Setting
 
To configure **@desco/dst-bkp** in the **world** that you want to keep a periodic copy of, open its **cluster** directory on your preferred command line and run:
 
``
dst-bkp
``
 
Some questions will be asked, they are:
 
***How many minutes should the copy be performed? (Each game day has 4 minutes)***
 
Once the periodic copy routine is started, the **cluster** of the world will be copied from **N** in **N** minutes, this value is chosen by the player and by default is used - and recommended - 4 minutes , that is, the time that lasts a day in the game.
 
***In which directory should copies be kept?***
 
Copies must be made somewhere, where? Set the directory address here.
 
***What is the copy limit? (The oldest ones will be removed)***
 
To avoid an absurd amount of copies filling the hard drive, **@desco/dst-bkp** deletes the oldest copies, leaving the player to define the number of copies.
 
If you want a single copy, set **1**, but note that you risk losing an older copy by dying while away from the computer and the game resets. Since the copy is made every **N** minutes, if you only have one copy and you take longer than that, the world will be lost anyway.
 
If you want to have all copies, simply set a huge number. For example: If the copy is made every **4** minutes which is a day in the game, we can define a complete copy as ***9000*** days, or ***9000*** copies. Does anyone have such a long world? Have? So just increase the number!
 
By default, the standard answer to this question is the number equivalent to **1** year of the game, according to the time set between copies.
 
![1](/assets/1.png)
 
After answering the questions, an options menu will appear, this is the program's default menu that will always be displayed when invoked with the configuration already made.
 
There are three options and you can *"navigate"* between them using the up and down arrows, just as you can select with the **enter** key.
 
### Start Periodic Copy
 
This option will start copying the **cluster/world** at the interval defined in the configuration process.
 
With each new copy a message will be displayed.
 
![2](/assets/2.png)
 
To cancel the process, simply close the command line or press **ctrl + c**.
 
***Restore a Copy***
 
Do you want to recover an old copy?
 
Use this option to choose the desired copy.
 
You can *"navigate"* between them using the up and down arrows, just as you can select with the **enter** key.
 
![3](/assets/3.png)
 
***Reset***
 
This option will start the configuration process described above again, any configuration entered here will overwrite the previous one!