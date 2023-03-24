---
title: "tomcat"
description: "tomcat中的相关知识"
---
## 一、tomcat
是apache软件基金会的一个核心项目，是一个开源免费的轻量级web服务器，支持servlet/jsp少量javaee规范。也被称为web容器、servlet容器。servlet需要依赖于tomcat才能运行。
## 二、安装
    1、在官网中下载对应版本的tomcat。官网https://tomcat.apache.org/

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

    8、关闭---ctrl+c

    9、占用端口号解决方法：

        （1）找到端口号，杀死进程

![image](/img/java/tomcat/杀死进程一.png)

![image](/img/java/tomcat/杀死进程二.png)


        （2）修改配置文件，如第5点



## 使用

