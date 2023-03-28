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

    8、关闭---启动的黑款中ctrl+c

    9、占用端口号解决方法：

        （1）找到端口号，杀死进程

![image](/img/java/tomcat/杀死进程一.png)

![image](/img/java/tomcat/杀死进程二.png)


        （2）修改配置文件，如第5点

        （3）一般使用默认端口号8080，不做修改

## 三、使用
### 配置
    方式一：直接将项目放在tomcat目录下的webpacks目录下

        /xxx:项目的访问路径---->虚拟路径  /xxx/xxxx.html

        简化部署：将要部署的项目打包成一个war包，在tomcat下的webpacks会自动解压


    方式二：在conf目录下，将要配置的内容写入server.xml文件中，重启服务。缺点：每次修改都需要重启服务
```java
// 部署项目内容  docBase：文件存放的路径。path为虚拟目录
<Context docBase="D:\hello" path="/hehe">
```
![image](/img/java/tomcat/配置之方式二.png)


    方式三：在conf---Catalina--localhost下新建一个xxx.xml文件。里面编写如下内容：
```java
// 部署项目内容  docBase：文件存放的路径。此时虚拟目录是xml文件名
<Context docBase="D:\hello">
```

### 静态项目和动态项目

    区别，在webapps\ROOT下，存在有WEB-INF目录的，这个项目称为动态项目

    java动态项目结构
```js
---WEB-INF目录
------web.html：web项目的核心配置文件
------classes目录：放置字节码文件的目录
------lib目录：放置依赖的jar包
```
### 将tomcat集成到idea中
    1、run(运行)---Edit Configurations...(编辑配置...)

![image](/img/java/tomcat/idea集成tomcat（1）.png)


    2、点击编辑配置模板，找到Tomcat服务器，选择本地

![image](/img/java/tomcat/idea集成tomcat（2）.png)

    3、选择tomcat安装的目录，然后点击确认
![image](/img/java/tomcat/idea集成tomcat（3）.png)

    4、重复以上1和2步骤，检查是否配置成功

### 创建一个项目

    1、项目---新建

        理论上
![image](/img/java/tomcat/用集成tomcat后的idea创建项目（按理）.png)
        实际上
![image](/img/java/tomcat/用集成tomcat后的idea创建项目（实际1）.png)
![image](/img/java/tomcat/用集成tomcat后的idea创建项目（实际2）.png)

        猜测出现的原因是因为idea版本的问题


    2、目录结构
![image](/img/java/tomcat/集成tomcat后的项目结构（按理）.png)

附一个创建javaweb项目的帖子 https://www.likecs.com/show-1021162.html






