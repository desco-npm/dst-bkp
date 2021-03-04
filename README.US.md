<div align="right">
  <a href="README.md">
    <img alt="Ler em Portugês do Brasil" src="https://img.shields.io/static/v1?label=&message=🇧🇷 Ler em Português do Brasil&color=green&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/4M0hgyF/dst-bkp.png"></td>
    <td>  
      <h1>@desco/dst-bkp</h1>
      Global package for periodic copying and restoration of the Don't Starve Together game worlds.
      <br /><br />
      <div align="center">
        <img alt="MIT License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge">
        <img alt="Version 1.0.3" src="https://img.shields.io/static/v1?label=Version&message=1.0.3&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        🚀 Ready to use! 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">See other NPM projects here.</a>

> <a href="https://github.com/descoifica" target="_blank">See other projects here.</a>

---

## 📋 Table of Contents

* [🛠️ Technology](#Technology)
* [⚙️ Installation](#Installation)
* [✨ Creating or Configuring a Periodic Copy Routine](#Creating-or-Configuring-a-Periodic-Copy-Routine)
* [🏁 Start Periodic Copy](#Start-Periodic-Copy)
* [❤️ Restore a Copy](#Restore-a-Copy)

---

<a name="Technology"></a>


## 🛠️ Technology

The following technologies are used:

* [NodeJS](https://nodejs.org/en/);
* [Moment](https://www.npmjs.com/package/moment);

---

<a name="Installation"></a>

## ⚙️ Installation

It is necessary to have <a href="https://nodejs.org/en/" target="_blank"> NodeJS </a> installed on the computer to run and even install, <a href = "https: // nodejs.org/en/ "target =" _ blank "> click here </a> to download and install.
 
Give preference to the **LTS** version which is more stable.
 
The installation process is standard, in Windows you only need an *"install, install, install"*.

With <a href="https://nodejs.org/en/" target="_blank"> NodeJS </a> already installed, open the command line of your choice and enter the following command:
 
```bash
npm install -g @desco/dst-bkp
```
 
This command will install **@desco/dst-bkp** on your machine.
 
> Note that it will be necessary to close and reopen the command line for **@desco/dst-bkp** to be recognized by it.

### Execution Policy Error

By default, Windows comes with blocked third-party script execution causing this error

![5](/assets/5.png)

To resolve, open the command line of your choice as a system administrator and run the command `Set-ExecutionPolicy Unrestricted`, answering the confirmation question as` (A) Yes for Everyone`.

![6](/assets/6.png)
![4](/assets/4.png)

> Watch out! This Windows restriction policy was created to increase your security, disable at your own risk!

After disabling, try the **@desco/dst-bkp** installation process again.

---

<a name="Creating-or-Configuring-a-Periodic-Copy-Routine"></a>

## ✨ Creating or Configuring a Periodic Copy Routine

To start/configure **@desco/dst-bkp** in the **world** that you want to keep a periodic copy of, open its **cluster** directory on your preferred command line and run:
 
```bash
dst-bkp
```
 
Some questions will be asked, they are:
 
***How many minutes should the copy be performed? (Each game day has 4 minutes)***
 
Once the periodic copy routine is started, the **cluster** of the world will be copied from **N** in **N** minutes, this value is chosen by the player and by default it is used - and recommended - 4 minutes, that is, the time that lasts a day in the game.
 
***In which directory should copies be kept?***
 
Copies must be made somewhere, where? Set the directory address here.
 
*** What is the copy limit? (The oldest ones will be removed) ***
 
To avoid an absurd amount of copies filling the hard disk, ** @ desco / dst-bkp ** deletes the oldest copies, leaving the player to define the number of copies.
 
If you want a single copy, set **1**, but note that you risk losing an older copy by dying while away from the computer and the game resets. Since the copy is made every **N** minutes, if you only have one copy and you take longer than that, the world will be lost anyway.
 
If you want to have all copies, simply set a huge number. For example: If the copy is made every **4** minutes which is a day in the game, we can define a complete copy as ***9000*** days, or ***9000*** copies. Does anyone have such a long world? Has? So just increase the number!
 
By default, the standard answer to this question is the number equivalent to **1** year of the game, according to the time set between copies.
 
![1](/assets/1.png)
 
After answering the questions, a menu of options will appear, this is the default menu of the program that will always be displayed when invoked with the configuration already made.
 
There are three options and you can *"navigate"* between them using the up and down arrows, as well as you can select with the **enter** key.

---

<a name="Start-Periodic-Copy"></a>

## 🏁 Start Periodic Copy
 
This option will start the copy of the **cluster/world** at the interval defined in the configuration process.
 
With each new copy a message will be displayed.
 
![2](/assets/2.png)
 
To cancel the process, simply close the command line or press **ctrl + c**.

---

<a name="Restore-a-Copy"></a>

## ❤️ Restore a Copy

Do you want to recover an old copy?
 
Use this option to choose the desired copy.
 
You can *"navigate"* between them using the up and down arrows, just as you can select with the **enter** key.
 
![3](/assets/3.png)

---

## Author

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
        <img alt="GitHub Overview @descodifica" src="https://img.shields.io/static/v1?label=GitHub Overview&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>