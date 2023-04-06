---
title: "docker"
description: "docker中的相关知识"
---
## 一、docker
### (一)为什么学习？
        每学一个东西，我们肯定是基于某个需求去学习的，众所周知，软件开发最麻烦的是环境配置，开发好好的，部署出问题就很难受，所以为了确保开发、测试、部署环境一致，且高效的部署所以选择了容器技术而非 VM ，而 Docker 是基于 Linux 容器技术的开源项目，它的口头禅就是：“一次构建，处处运行”，具有轻量，速度，社区活跃，且拓展性高。处处运行，从帮家到搬楼

        作用：解决了运行环境和配置问题，方便做持续集成并有助于整体发布容器虚幻技术

        **具体场景**：

                更快速的应用交付和部署

                更快捷的升级和扩缩容

                更简单的系统运维

                更高的计算资源利用

### (二)docker组成
        镜像：image，一个只读模板。镜像可以用来创建Docker容器，一个镜像可以创建很多容器，docker镜像文件类似于java类模板，而docker容器实例类似于java中new出来的实例对象

        容器：container,是用镜像创建的运行实例，为镜像提供了一个标准的隔离运行环境，可以被启动、开始、停止、删除。类似于java中的类和实例对象一样，镜像是静态的定义，容器是镜像运行时的实体。

        仓库：repository，是集中存放镜像文件的场所。类似于gihub仓库，存放各种git项目的地方。仓库分为公开仓库和私有仓库，最大的公开仓库Docker Hub,存放了数量庞大的镜像供用户下载，国内公开的仓库有阿里云和网易云等

## 二、安装
下载路径，选择对应的操作系统，https://www.docker.com/get-started/ ，我选择的是window10系统

双击下载的exe文件，首次启动会创建虚拟机，稍等几分钟即可。

检测是否安装成功：可以在终端cmd输入docker -v来进行检查docker版本。

![image](/img/docker/docker检查版本.png)

如果在docker desktop安装过程中出现了安装失败，那么重新进行第二步运行相应的步骤和开启hyper-v的操作，然后要重新启动电脑，再进行docker desktop安装。

## 三、上手
拉取nginx镜像
```js
docker pull nginx
```
## 四、遇到的问题
此时会遇到的问题可能有：
![image](/img/docker/问题1.png)

这个问题主要原因是docker desktop没有启动
![image](/img/docker/docker启动界面.png)

回想一下，双击启动时，确实有弹出
![image](/img/docker/报错提示1.png)

点击重启的时候老是失败，因为需要更新一下WLS 2   

推荐https://blog.csdn.net/sdujava2011/article/details/123813570学习，

也可以根据https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#step-3%E2%80%94enable-virtual-machine-feature 步骤执行

```js
#pollshell管理员身份允许输入这条命令
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart


#重新启动计算机，以完成 WSL 安装并更新到 WSL 2。
wsl --set-default-version 2
```
下载wsl_update_x64.msi，双击安装
![image](/img/docker/安装wsl.png)


操作完这步之后，点击Restart，等待一下就能启动docker了
![image](/img/docker/docker启动成功界面.png)

再次输入docker pull nginx并可成功拉取nginx镜像

## 五、镜像 image
        镜像是一个二进制文件，里面具有应用程序以及依赖，只有通过它，Docker 才能够生成容器，相当于模具一样，同一个镜像文件可以生成多个容器实例
        对于如何制作镜像，一般来说我们都是通过加工别人基础镜像来生成我们自己的镜像，而不是从零开始，而且我们也可以在这里共享我们的镜像，这也是我们选择它的理由之一，我们可以享受社区的贡献
```js
#列出本机的所有 image 文件。
$ docker image ls
#拉取镜像 省略版本号会自动下载最新的
$ docker pull [镜像名]:[版本号]
#删除 image 文件
$ docker image rm [imageName]
#查某个镜像
$ docker search [imageName]
虚悬镜像：仓库名、标签都是<none>的镜像，俗称虚悬镜像
```
## 六 nginx镜像
### （一）拉取nginx镜像
```js
docker pull nginx
```
### （二）创建一个nginx容器
```js
#启动镜像
docker run -d --name test-nginx -p 3000:80 nginx
```
然后打开 localhost:3000 即可访问到熟悉的 nginx 页面了

**初学者肯定会疑问nginx是什么？**

        Nginx(发音为“engine-x”)是一个用于HTTP、HTTPS、SMTP、POP3和IMAP协议的开源反向代理服务器，以及负载平衡器、HTTP缓存和web服务器(源服务器)。nginx项目从高度关注高并发性、高性能和低内存使用开始。它是在类似于BSD的第二条款许可下获得许可的，并且它运行在Linux、BSD变体、Mac OS X、Solaris、AIX、HP-UX以及其他*nix版本上。它还为Microsoft Windows提供了概念端口的证明。以下可以按兴趣了解学习

### （三）托管一些静态的内容
```js
$ docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx
```
或者，一个简单的Dockerfile可以用来生成一个包含必要内容的新图像(这是一个比上面绑定挂载干净得多的解决方案):
```js
FROM nginx
COPY static-html-directory /usr/share/nginx/html
```
将此文件放在与内容目录相同的目录中(“static-html-directory”)，运行docker build -t some-content-nginx .，然后启动容器（注意build语句最后面有一个点）:
```js
$ docker run --name some-nginx -d some-content-nginx
```


## 七、容器
### （一）容器常用的命令
```js
# 查看正在运行的容器
docker ps
# 查看所有创建过的容器(运行或者关闭)
docker ps -a
# 停止容器
docker stop [container]
# 启动容器
docker start [container]
# 删除容器
docker rm -f [containerid]
# 查看后台运行的日志
docker logs [containe]
```
可以先用这些容器命令操作一下我们之前创建的容器，尝试一下

那么在上一节我们自己构建了一个镜像代替了 nginx 的默认页面，那如果我们还想改怎么办？除了新构建一个镜像之外，我们还可以直接进入容器里进行修改
```js
docker container exec -it [containe] /bin/bash
```
这样就进去了容器的 shell ，可以随意进行操作，当然就算你误操作比如运行了经典的了，也没有关系
在这里我们是使用了 -it 这个参数 它和 -d 区别就在于
        -d => 使用 pm2  start index.js
        -it => 使用 node.js

### （二）用 Dockerfile 构建一个镜像
        1、案例一：输出一个hello Docker
在桌面新建一个docker-test文件夹，里面放置一个 Dockerfile 文件， Dockerfile 文件里面的内容为：
```js
#指定基础的镜像为nginx。
FROM nginx:latest　

#指定镜像创建者GraceSkyer和联系方式。
MAINTAINER TTT 2064220997@qq.com

#容器内部执行的命令（在index.html中输出‘hello, Docker!’）。
RUN echo '<h1>hello, Docker!</h1>' > /usr/share/nginx/html/index.html

```
docker-test文件夹中输入cmd
```js
# 生成一个名为 nginx 标签为0.0.1 的镜像 ，注意最后还有一个 .
docker image build -t nginx:0.0.1 .
```
![image](/img/docker/nginx标签为0.0.1的镜像.png)

这时候可以查看镜像，多了一个
![image](/img/docker/查看镜像.png)

继续输入命令，启动容器
```js
# 根据刚生成的镜像 启动容器
docker run -d --name test-nginx1 -p 3001:80 nginx:0.0.1
```

                -p 参数是指容器的 80 端口映射到本机的 3001 端口

                -d 守护式运行(适合运行应用程序和服务)

                --name  容器名称 如果不指定则是一个随机的名称

这时候再次访问 locahost:3001 已经不是默认的 nginx 的访问页面了
![image](/img/docker/案例1部署成功.png)

        2、案例二，输出一个index.html
在docker-test文件夹里面新建一个index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

然后修改 Dockerfile 文件，重点是：COPY index.html /usr/share/nginx/html/index.html
```js
# 声明基于 nginx 最新的镜像 这里说一下镜像名:后面的是标签 默认是latest
FROM nginx:latest
# 把刚才 index.html 复制到 nginx 的 html 路径去
COPY index.html /usr/share/nginx/html/index.html
# 声明暴露80端口,要是运行不成功就把这句去掉
EXPOSE 80

```

运行命令
```js
#  生成一个名为 nginx 标签为0.0.1 的镜像 ，注意最后还有一个 .
docker image build -t nginx:0.0.1 .
# 根据刚生成的镜像 启动容器
docker run -d --name test-nginx1 -p 3001:80 nginx:0.0.1
```

这时候再次访问 locahost:3001 已经不是默认的 nginx 的访问页面了
![image](/img/docker/案例2部署成功.png)

当然，真正开发的时候，肯定不可能是这样去修改了，好比之前的端口映射，也可以将容器的内部的目录也映射出来实现共共享，这就是接下来要说的 Volume

## 八、数据卷 Volume
回到我们 docker-test 文件夹，然后重新启动一个nginx容器（这里使用的端口和容器名与快速开始的创建的容器相同，请同学们复习一下容器命令先自行删除再创建）
```js
docker run -d --name test-nginx -v $PWD/index.html:/usr/share/nginx/html/index.html -p 3000:80  nginx
```

我们打开 locahost:3000 修改一下 index.html 的内容为 Hello Volume ，刷新一下网页即可看到我们修改的内容
在这里

很容易发现我们和之前的区别就是使用了 -v参数  本地路径:容器路径 通过这样进行映射，这样当我们修改本地的文件的时候就等于修改了容器内的文件

那么就当在一个项目中，nginx部署好了前端，那么我们需要一个服务提供数据，在 docker-test 的文件夹下面
创建一个 mysql 文件夹 在mysql文件夹中创建一个data存储数据，创建一个my.cnf用作配置

```js
[mysqld]
user=mysql
character-set-server=utf8
default_authentication_plugin=mysql_native_password
secure_file_priv=/var/lib/mysql
expire_logs_days=7
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
max_connections=1000
 
[client]
default-character-set=utf8
 
[mysql]
default-character-set=utf8
```

启动容器
```js
docker run --name test-mysql -it -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -v $PWD/mysql/my.cnf:/etc/mysql/my.cnf -v $PWD/mysql/data:/var/lib/mysql -d mysql
```

然后我们通过上一节学会的命令进入 test-mysql 容器中创建数据库以及创建表 加插入一条数据
```js
docker container exec -it test-mysql /bin/bash
# 下面是 test-mysql 容器中的 shell
# 登陆 输入密码
mysql -u root -p 
# 创建数据库 test
create databse test;
# 进入 test 数据库
use test;
# 进入 PEOPLE 数据表 字段为 name  age
Create Table PEOPLE (name VARCHAR(20), age CHAR(20));
# 插入一行数据到 PEOPLE
Insert into PEOPLE Values('kdq', '24')
```

然后我们退出容器，再 docker-test 下创建一个文件夹 node ，并创建一个 index.js 文件
```js
const http = require("http");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "test-mysql",
  user: "root",
  password: "root",
  database: "test"
});
connection.connect();

const server = http.createServer().listen(3001);

server.on("request", (req, res) => {
  if (/testapi/.test(req.url)) {
    try {
      var sqlstr = "Select * From PEOPLE";
      connection.query(sqlstr, function(err, result) {
        if (err) {
          console.log("SELECT ", err.message);
          return;
        }
        res.end(JSON.stringify(result));
      });
    } catch (error) {
      res.end("404 not found");
    }
  } else {
    res.end("404 not found");
  }
});
```


然后启动容器
```js
docker run -it --name test-node -v $PWD/node:/var/www/node  -v $PWD/mysql/data:/var/lib/mysql -p 3001:3001 node /bin/bash
# 下面是 test-node 容器中的 shell
cd /var/www/node
node index.js
```

我们发现 mysql 的操作报错了 connect ECONNREFUSED 127.0.0.1:3306 ，原来是因为我们的 mysql 和 node 是两个容器，而容器是相互隔离的，无法 ping 通

那么难道我们得把 mysql 和 node 都得部署在一个容器里？其实 Docker 更建议一个容器做一件事情，而这种理念其实在我们的开发中也是随处可见的，所以 Docker 可以使用 Networking 进行通信

## 九、网络 Networking
首先创建一个网络
```js
docker network create test-net
```

然后把上一节启动 test-mysql 和 test-node 的容器的命令改成
```js
# test-mysql
docker run --name test-mysql -it -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -v $PWD/mysql:/etc/mysql --network test-net -d mysql
# test-node
docker run -it --name test-node -v $PWD/node:/var/www/node --network test-net -p 3001:3001 node /bin/bash
```

这时候我们在 node 的 index.js 中修改一下连接 mysql 的 host
```js
const connection = mysql.createConnection({
  host: "test-mysql",
  user: "root",
  password: "root",
  database: "test" 
});
```
然后我们启动一下 node 服务 访问 localhost:3001/testapi 就能看到我们查询到的数据了

那么我们也可以将 nginx 加入 test-net 网络中互相通信，具体就留给你们自己去做了
