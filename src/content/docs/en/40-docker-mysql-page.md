---
title: "docker安装mysql和使用"
description: "docker安装mysql和使用中的相关知识"
---
## 一、安装MySql
前提是docker已经安装好了，我是在windows上操作
### （一）拉取mysql镜像
```js
//最新版本
docker pull mysql
//指定版本
docker pull mysql:5.7
```
## 二、启动MySql
```js
#启动镜像
docker run -d --name mysql-test -p 3306:80 mysql
```
启动一次后，图形界面软件会保留，以后直接点击开启就可以启动了：
![image](/img/docker/docker启动mysql.png)
## 三、操作MySql
### （一）进入mysql容器
```js

docker exec -it   mysql名称   bash
```
### （二）登录
```js
mysql -u root -p
```
### （三）使用mysql
```js
use mysql
```
## 四、关闭docker中的mysql容器
```js
docker stop mysqlserver
```
## 五、退出容器
```js
exit
```
## 六、开启远程访问权限
这是属于其他，需要用到的时候可以参考，不是必须的步骤
```js
命令：use mysql;

命令：select host,user from user;

命令：ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';

命令：flush privileges;


把root用户的密码改成 mysql_native_password 模式，即可远程连接



        #创建一个账号-admin，用来进行远程访问；
        CREATE USER 'admin'@'%' IDENTIFIED BY '123456';
         
         
         赋予所有权限给之前创建的账号:admin
        GRANT ALL ON *.* TO 'admin'@'%';
         
         
         确认使用密码{123456}登录此账号{admin}
         密码尽量复杂，安全性更高。
        ALTER USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
         
         
         刷新权限
        FLUSH PRIVILEGES;
```





