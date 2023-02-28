---
title: "java入门（安装和使用）"
description: "java入门（安装和使用）"
---

## 一、java核心特性
最大的核心优势就是跨平台，一次编写，处处运行，其次还有简单易学，面向对象。可移植和安全性等优点

## 二、java版本
javaSE：标准版，桌面程序、控制台开发……

javaME：微型版，嵌入式开发，手机、家电……

javaEE：企业版，企业级开发，web端、服务器开发……

## 三、JDK、JRE、JVM
JDK：Java Development Kit,开发者工具

JRE：Java Runtime Environment,运行时环境

JVM：虚拟机，屏蔽硬件，跨平台性

三者的关系：JDK包含JRE，JRE包含JVM

## 四、Java环境配置
### （一）jdk
1、企业中用java8这个版本，下载地址Java 软件 | Oracle 中国

2、进入官网页面选择产品-java，能看到一个下载Java,点击按钮
![image](/img/java/00/01.png)

3、 找到java8,https://www.oracle.com/cn/java/technologies/javase/javase8-archive-downloads.html
选择适合自己电脑的版本安装
![image](/img/java/00/02.png)

4、双击下载的安装包，可以用默认的安装路径，也可以自己选择安装路径（建议安装路径为英文）

5、安装成功后，设置环境变量配置

        （1）path是一个常见的环境变量，告诉系统除了在当前目录下寻找次程序外，还可以到path指定的目录下寻找

        （2）JAVA_HOME 为以后其他软件寻找jdk做准备

        （3）classpath 不需要配置，jdk1.5版本以上，jre会自动搜索当前路径下的类文件及相关jar文件


**配置系统变量**：我的电脑/此电脑->属性->高级系统设置->环境变量->系统变量
![image](/img/java/00/03.png)

**将系统变量添加到path**
![image](/img/java/00/04.png)


**测试jdk是否安装成功** ：java -version

### （二）idea
        1、进入 IDEA 官方下载页面，https://www.jetbrains.com/idea/，
点击 DOWNLOAD
![image](/img/java/00/05.png)


        2、根据自己的需求选择对应的版本，IntelliJ IDEA 提供了两个版本，即 Ultimate（旗舰版） 和 Community（社区版）。社区版是免费的，但它的功能较少。旗舰版是商业版，提供了一组出色的工具和特性。我这里选择了windows下的社区版本
![image](/img/java/00/06.png)


        3、双击下载的IntelliJ IDEA 安装包，选择 Next，正式开始安装

![image](/img/java/00/07.png)


        4、设置 IDEA 的安装目录，建议不要安装在系统盘（通常 C 盘是系统盘），这里选择安装到 D 盘
![image](/img/java/00/08.png)


        5、自行选择需要的功能，若无特殊需求，按图中勾选即可
![image](/img/java/00/09.png)


对上图中选项说明如下：

+ Create Desktop Shortcut：创建桌面快捷方式图标，建议勾选 64-bit launcher；
+ Update context menu：是否将从文件夹打开项目添加至鼠标右键，根据需要勾选；
+ Create Associations：关联文件格式，可以不推荐勾选，使用如 Sublime Text、EditPlus 等轻量级文本编辑器打开；
+ Download and install 32-bit JetBrains Runtime：下载并安装 JetBrains 的 JRE。如果已经安装了JRE，则无需勾选此项；
+ Update PATH variable (restart needed)：是否将 IDEA 启动目录添加到环境变量中，即可以从命令行中启动 IDEA，根据需要勾选。

        6、选择开始菜单文件夹后，点击 Install 等待安装
![image](/img/java/00/10.png)


        7、等待安装进度条达到 100% 后，点击 Finish，IntelliJ IDEA 就安装完成了。可以勾选 Run IntelliJ IDEA 选项，表示关闭此窗口后运行 IDEA。
![image](/img/java/00/11.png)


## 五、HelloWorld
        1、打开已安装好的IDEA，”New Project"

        2、设置工程的名称、地址、语言、JDK选择先前安装的版本。

        3、在左侧生成Hello的工程文件夹，代码写在src里，右击src在new里可以新建java class
![image](/img/java/00/12.png)


         流传说无论什么语音，入门都一个helloworld，算是到门边了，一个java入门就结束了，之后就开始学习java语法和使用的框架以及后面需要的数据库等，在这篇文章中jdk是必须，idea可被替换。
