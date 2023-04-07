---
title: "java开发的一些配置"
description: "java开发配置中的相关知识"
---

## 一、idea
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

             Create Desktop Shortcut：创建桌面快捷方式图标，建议勾选 64-bit launcher；

             Update context menu：是否将从文件夹打开项目添加至鼠标右键，根据需要勾选；

             Create Associations：关联文件格式，可以不推荐勾选，使用如 Sublime Text、EditPlus 等轻量级文本编辑器打开；

             Download and install 32-bit JetBrains Runtime：下载并安装 JetBrains 的 JRE。如果已经安装了JRE，则无需勾选此项；

             Update PATH variable (restart needed)：是否将 IDEA 启动目录添加到环境变量中，即可以从命令行中启动 IDEA，根据需要勾选。

    6、选择开始菜单文件夹后，点击 Install 等待安装
![image](/img/java/00/10.png)


    7、等待安装进度条达到 100% 后，点击 Finish，IntelliJ IDEA 就安装完成了。可以勾选 Run IntelliJ IDEA 选项，表示关闭此窗口后运行 IDEA。
![image](/img/java/00/11.png)

## 二、jdk

    1、jdk8下载地址  https://www.oracle.com/cn/java/technologies/downloads/

    2、openJDK小版本 https://www.openlogic.com/openjdk-downloads

    3、企业中用java8这个版本

    4、进入官网页面选择产品-java，能看到一个下载Java,点击按钮
![image](/img/java/00/01.png)

    5、 找到java8,https://www.oracle.com/cn/java/technologies/javase/javase8-archive-downloads.html
选择适合自己电脑的版本安装
![image](/img/java/00/02.png)

    6、双击下载的安装包，可以用默认的安装路径，也可以自己选择安装路径（建议安装路径为英文）

    7、安装成功后，设置环境变量配置

        （1）path是一个常见的环境变量，告诉系统除了在当前目录下寻找次程序外，还可以到path指定的目录下寻找

        （2）JAVA_HOME 为以后其他软件寻找jdk做准备

        （3）classpath 不需要配置，jdk1.5版本以上，jre会自动搜索当前路径下的类文件及相关jar文件

        （4）**配置系统变量**：我的电脑/此电脑->属性->高级系统设置->环境变量->系统变量
![image](/img/java/00/03.png)

        （5）**将系统变量添加到path**
![image](/img/java/00/04.png)


    8、测试jdk是否安装成功 ：java -version

## 三、mysql或docker
### （一）mysql
    1、mysql各版本下载地址: https://downloads.mysql.com/archives/community/

    2、下载，然后安装，安装不成功需要严格卸载，否则下次安装不成功，每个版本的安装步骤大同小异，详细的可以按照对应的版本去百度查找详细的安装步骤

    3、MySQL服务的开启和关闭

        （1）在搜索窗口中搜索服务，打卡即可

        （2）运行窗口输入services.msc,回车

        （3）命令提示符中，输入net start mysql   关闭将start改为stop

                发生系统错误 5 表示权限不够，需要以管理员运行方式运行

                拒绝访问  表示服务名错误，第2点里面可以知道服务名是什么

    4、mysql的登录和退出

        1、登录 mysql -uroot -p密码

        2、退出 exit

    5、遇到的问题

        输入mysql，回车后提示如下错误：“'mysql'不是内部或外部命令，也不是可运行的程序或批处理文件。” 
![image](/img/java/开发配置/mysql-检查是否安装.png)

    6、解决办法

        （1）在【我的电脑】(或【此电脑】)图标上点击鼠标右键，点击【属性】。在打开页面的右侧有【相关属性】区域，可以找到【高级系统设置】（如下图所示）。
![image](/img/java/开发配置/mysql-环境变量配置01.png)


        （2）在弹出的系统属性弹框中，选择【高级】选项卡，然后点击【环境变量】（如下图所示）
![image](/img/java/开发配置/mysql-环境变量配置02.png)



        （3）在环境变量弹框中点击下方系统变量中找到变量Path，选中后点击【编辑】按钮，如下图所示。

![image](/img/java/开发配置/mysql-环境变量配置03.png)


        （4）点击【浏览】按钮，选择MySQL安装目录下的bin目录，点击确定即可，然后依次点击【确定】关闭所有弹框，如下图所示。

![image](/img/java/开发配置/mysql-环境变量配置04.png)


        （5）到此为止mysql的环境变量设置完毕了。


### （二）docker
    1、docker下载地址:    https://www.docker.com/get-started/


    2、双击下载的exe文件，首次启动会创建虚拟机，稍等几分钟即可。

    3、检测是否安装成功：可以在终端cmd输入docker -v来进行检查docker版本。

![image](/img/docker/docker检查版本.png)

       如果在docker desktop安装过程中出现了安装失败，那么重新进行第二步运行相应的步骤和开启hyper-v的操作，然后要重新启动电脑，再进行docker desktop安装。

    4、拉取mysql镜像
```js
//最新版本
docker pull mysql
//指定版本
docker pull mysql:5.7
```
    5、启动MySql
```js
#启动镜像
docker run -d --name mysql-test -p 3306:80 mysql
```
       启动一次后，图形界面软件会保留，以后直接点击开启就可以启动了：
![image](/img/docker/docker启动mysql.png)

    6、操作MySql

        （1）进入mysql容器
```js

docker exec -it   mysql名称   bash
```
        （2）登录
```js
mysql -u root -p
```
        （3）使用mysql
```js
use mysql
```
    7、关闭docker中的mysql容器
```js
docker stop mysqlserver
```
    8、退出容器
```js
exit
```

## 四、tomcat
### （一）下载安装
    1、tomcat各版本下载地址  https://tomcat.apache.org/

    2、将下载的安装包解压到没有空格的安装路径中

    3、文件目录

![image](/img/java/tomcat/文件目录.png)

    4、启动，双击startup.bat，若是一闪而过，需要配置jdk环境变量

           (1)系统变量中

                    CATALINA_HOME

                    D:\softWare\apache-tomcat-8.5.82

![image](/img/java/tomcat/系统变量配置.png)

           (2)path中

                    %CATALINA_HOME%\bin;%CATALINA_HOME%\lib

![image](/img/java/tomcat/path变量配置.png)

![image](/img/java/tomcat/启动tomcat.png)

    5、输入http://localhost:8080,发现黑款启动了，但是输入的网址无法加载

                    在安装目录---》config--->server.xml文件中，查看端口号，地址栏修改端口号再启动就可以了

![image](/img/java/tomcat/网页展示.png)

此时同局域网下，别人也可以访问

    6、解决乱码

       （1）打开tomcat下的conf文件夹

       （2）找到logging.properties文件，记事本打开

       （3）搜索 java.util.logging.ConsoleHandler.encoding

       （4）将等号后面的UTF-8修改成gbk就好了

![image](/img/java/tomcat/解决黑款乱码问题.png)

    7、卸载，删除目录就可以了

    8、关闭---启动的黑款中ctrl+c

    9、占用端口号解决方法：

        （1）找到端口号，杀死进程

![image](/img/java/tomcat/杀死进程一.png)

![image](/img/java/tomcat/杀死进程二.png)


        （2）修改配置文件，如第5点

        （3）一般使用默认端口号8080，不做修改

### （二）集成到idea

    1、run(运行)---Edit Configurations...(编辑配置...)

![image](/img/java/tomcat/idea集成tomcat（1）.png)


    2、点击编辑配置模板，找到Tomcat服务器，选择本地

![image](/img/java/tomcat/idea集成tomcat（2）.png)

    3、选择tomcat安装的目录，然后点击确认
![image](/img/java/tomcat/idea集成tomcat（3）.png)

    4、重复以上1和2步骤，检查是否配置成功

## 五、maven的安装和配置

### （一）下载安装

    1、maven各版本下载地址 https://archive.apache.org/dist/maven/maven-3/

    2、解压下载的压缩包（位置要选好，因为这个解压的目录就是安装的目录，最好是全英文）

    3、配置本地仓库：修改cong/settings.xml中的<localRepository>为一个指定目录

```js
<localRepository>D:\softWare\maven\maven-repository</localRepository>
```

    4、配置阿里云私服：修改cong/settings.xml中<mirrors>标签，为其添加如下标签：
```js
<!-- 阿里云仓库 -->
<mirror>    
    <id>alimaven</id>    
    <mirrorOf>central</mirrorOf>    
    <name>aliyun maven</name>    
    <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
</mirror>
```

    5、配置环境变量MANVEN_HOME为maven的解压目录，并将其bin目录加入PATH环境变量(此处不截图记录了)

    6、测试----cmd---输入mvn -v

### （二）idea集成maven

    1、选择ieda中的file---settings---build,execution,deployment---build tools---maven

    2、设置idea使用本地安装的maven,并修改配置文件及本地仓库路径

![image](/img/java/maven/idea集成maven（1）.png)

## 六、mybatis的一些配置
    1、不需要安装，官网：https://mybatis.org/mybatis-3/zh/index.html

    2、在开发中需要做一些配置

            （1）配置mysql方言

                选中sql语句，右键，选择make 'list()' default ------ 选择第三个-----搜索mysql-----选中它

![image](/img/java/mybatis/02-配置mysql方言.png)


            （2）配置数据库的连接

![image](/img/java/mybatis/03-配置数据库.png)

    3、application.properties配置
```java
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql:///mybatis
spring.datasource.username=root
spring.datasource.password=xxxxx
```

## 七、redis
    1、redis下载地址 

    2、暂时没有用到，用到的时候再更新

## 八、华为云

    1、华为云下载地址:  https://mirrors.huaweicloud.com/home

    2、暂时没有用到，用到的时候再更新

## 九、其他工具
### （一）数据库图形化界面
    1、navicat下载地址 :

    2、傻瓜式安装

    3、注意

            禁止自动更新，避免使用的时候出现意外

            需要破解版才能永久使用，可自行百度查找破解方式

### （二）postman

    1、postman下载地址: https://www.postman.com/downloads/

    2、傻瓜式安装

    3、需要注意的是禁止自动更新，避免使用的时候出现意外

### （三）截图软件
    1、sinpaste截图软件下载地址:  https://zh.snipaste.com/download.html

    2、解压式安装

### （四）git
    1、git代码管理工具下载地址:  https://npm.taobao.org/mirrors/git-for-windows/

### （五）svn
    1、svn代码管理工具下载地址: