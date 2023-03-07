---
title: "数据库"
description: "数据库中的相关知识"
---

## 一、概念

用于存储和管理数据的仓库（DataBase,简称DB），是一个文件系统，具有：**持久化（存储在文件里）**、**方便存储和管理数据**和**使用了统一方式操作数据**的特点

常见的数据库：

        **关系型数据库**：oracle(大型数据库，要收费)，mysql数据库（中小型数据库），DB2数据库（银行用的多），sql serve

        **非关系型数据库**：redis,HBase,mongDB,neo4j

## 二、MySql数据库软件

### （一）安装
在官网中下载，然后安装（若安装不成功，需要严格卸载，否则下次安装不成功，每个版本的安装步骤大同小异）

个人喜欢下载docker,在docker中下载镜像mysql。因为mysql卸载特别不友好，会卸载不干净

    1、安装docker

            下载路径：https://www.docker.com/get-started/ 
我选择的是window10系统，双击下载的exe文件，首次启动会创建虚拟机，稍等几分钟即可

     2、拉取镜像
```js
docker pull mysql
``` 
    3、启动镜像,也可以通过图形界面化来启动
```js
docker run -d --name test-mysql -p 3000:80 mysql
```
    4、这时候可以在命令提示符中操作

（详细的docker学习和操作见）




## 三、SQL