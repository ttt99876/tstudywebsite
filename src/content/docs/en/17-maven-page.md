---
title: "maven"
description: "maven中的相关知识"
---

## 一、概念
    maven是apache旗下的一个开源项目，是一款用于管理和构建java项目的工具

    模型

![image](/img/java/maven/maven模型.png)

## 二、作用
    1、依赖管理

        方便快捷管理项目依赖的资源包（jar包），避免版本冲突。不用手动导入jar包

    2、统一项目结构

        提供标准、统一的项目结构。因为提供了一套标准的结构
![image](/img/java/maven/maven标准结构.png)


    3、项目构建

        标准跨平台（linux、windows、macos）的自动化项目构建方式
![image](/img/java/maven/maven运行流程.png)


## 三、安装

    1、解压下载的压缩包

    2、配置本地仓库：修改cong/settings.xml中的<localRepository>为一个指定目录

```js
<localRepository>D:\softWare\maven\maven-repository</localRepository>
```

    3、配置阿里云私服：修改cong/settings.xml中<mirrors>标签，为其添加如下标签：
```js
<!-- 阿里云仓库 -->
<mirror>    
    <id>alimaven</id>    
    <mirrorOf>central</mirrorOf>    
    <name>aliyun maven</name>    
    <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
</mirror>
```

    4、配置环境变量MANVEN_HOME为maven的解压目录，并将其bin目录加入PATH环境变量(此处不截图记录了)

    5、测试----cmd---输入mvn -v

## 四、idea集成maven

    1、选择ieda中的file---settings---build,execution,deployment---build tools---maven

    2、设置idea使用本地安装的maven,并修改配置文件及本地仓库路径

![image](/img/java/maven/idea集成maven（1）.png)

## 五、搭建maven工程

    1、左上角 File------->new ------- project -------> 在New Project窗口中选择Maven

    2、右键text-----新建------目录------使用推荐的，就自动生成resources目录了

    3、测试：右键Java,新建类，输入com.ttt.类名
```java
package com.ttt;

public class HelloMaven {
    public static void main(String[] args) {
        System.out.println("hello maven");
    }
}

```

### 坐标

    maven中的坐标是资源的唯一标识，通过该坐标可以唯一定位资源位置

    使用坐标来定义项目或引入项目中需要的依赖

    maven坐标的组成：

        groupId:定义当前maven项目隶属组织名称（通常是域名反写，例如：com.ttt）

        artifactId:定义当前maven项目名称（通常是模块名称，例如order-service）

        version:定义当前项目版本号

## 六、项目的导入
    方式一

        选择右侧maven面板，点击“+”好，选中对应项目的pom.xml文件，双击即可

![image](/img/java/maven/maven导入项目.png)

    方式二

        选则file(文件)-----Project Structure...（项目构建...）----选择modules----点击+号-----import Module------选择pom.xml

![image](/img/java/maven/maven导入项目2.png)

## 七、依赖管理
### 依赖
    指当前项目运行所需要的jar包，一个项目中可以引入多个依赖
### 依赖配置
    1、在pom.xml中编写<dependencies>标签

    2、在<dependencies>标签中使用<dependency>引入坐标

    3、定义坐标的groupId,artifactId,wersion

    4、点击刷新按钮，引入最新加入的坐标

    如果使用过一次，会有自动的提示；如果没有提示可以去官网搜索 https://mvnrepository.com/artifact/mysql/mysql-connector-java 

![image](/img/java/maven/手动配置.png)

### 依赖传递
    直接依赖：在当前项目中通过依赖配置建议的依赖关系

    间接依赖：被依赖的资源如果依赖其他资源，当前项目间接依赖其他资源、

![image](/img/java/maven/依赖传递.png)

### 排除依赖
通过exclusions来排除依赖
```java
<!--排除依赖-->
<exclusions>
    <exclusion>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
    </exclusion>
</exclusions>
```
### 依赖范围
默认情况下，可以在任何地方使用，通过scope标签包裹，限制其作用范围

    作用范围：

        主程序范围有效   ---- main文件夹范围内

        测试程序范围有效 ---- test文件夹范围内

        是否参与打包运行 ---- package指令范围内

    scope值：

        compile:默认，三个范围都可以使用，如log4j

        test:在测试程序中有效，如junit

        provided:在主程序和测试程序中有效，如servlet-api

        runtime:在测试程需和打包中有效，如jdbc驱动

### 声明周期
    分类：三套相互独立的生命周期：

        clean:清理工作

        default:核心工作，如编译，测试，打包，安装，部署等

        site:生成报告、发布站点等

    具体学习：

在上面三套生命周期中，同一套中运行后面的，前面的会自动触发运行

        clean:移除上一次构建生成的文件

        compile:编译项目源代码

        test:使用合适的单元测试框架运行测试（junit）

        package:将编译后的文件打包，如jar,war等

        install:安装项目到本地仓库

    执行声明周期的方式：

        方式一

            在idea中，右侧的maven工具栏，选中对应的生命周期，双击执行

        方式二

            在命令行中，通过命令执行
```js
mvn 生命周期
```






