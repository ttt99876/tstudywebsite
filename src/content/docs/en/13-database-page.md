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
官网8.0教程  https://dev.mysql.com/doc/refman/8.0/en/tutorial.html
，下载然后安装（若安装不成功，需要严格卸载，否则下次安装不成功，每个版本的安装步骤大同小异）

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
docker run -d --name mysql-test -p 3000:80 mysql
```
这里也启动一次之后可以在docker软件中操作

    4、进入mysql容器

```js
docker exec -it   mysql名称   bash
```
    5、登录
```js
mysql -u root -p
```
![image](/img/java/DB/数据库的进入.png)
    6、使用mysql
```js
use mysql
```
    7、结束mysql的使用
```js
exit  或者  bye 或者  quit
```
    8、关闭docker中的mysql容器
```js
docker stop mysqlserver
```
    9、退出容器
```js
exit
```
（详细的docker学习和操作见 此文 docker目录）


### （二）mysql数据结构
    1、mysql安装目录

        配置文件my.ini

    2、mysql数据目录

        数据库：文件夹

        表：文件

        数据：文件里面的内容

## 三、客户端图形化工具
这里的工具很多，我使用的是navicat破解版（萝卜青菜各有所爱）。网上有很多资源，有时间我再补充这个工具的下载和安装具体步骤
### （一）安装（暂略）
![image](/img/java/DB/navicat界面图.png)

### （二）使用
#### 1、连接
连接 --- mysql ---输入连接名和密码

![image](/img/java/DB/mysql建立连接.png)

建立连接后，双击启动连接
#### 2、建立数据库

右键连接 ---- 新建数据库

![image](/img/java/DB/图形化新建数据库.png)

双击启动数据库

#### 3、建立数据表

右键数据库  ---- 新建查询

![image](/img/java/DB/图形化界面新建表1.png)

数据库下面的表 ----  右键表 ---新建表   填入字段和字段的数据类型等，最后点保存输入表名即可

![image](/img/java/DB/图形化界面新建表2.png)

#### 4、插入数据
双击表，直接填写要插入的内容

![image](/img/java/DB/图形化工具插入数据.png)


## 四、SQL

以下有使用命令提示符操作mysql的，也有通过图形界面来操作的

### （一）sql的概率
    定义了操作所有关系型数据库的规则

### （二）sql的语法约束
    1、sql语句可以单行或多行书写，以分号结尾  (不见分号不结束)

    2、可以使用空格和缩进来增强语句的可读性

    3、mysql数据库的sql语句不区分大小写，关键字建议使用大写

### （四）注释

    1、单行注释    使用 - - 或 #
 
    2、多行注释    使用/* */

### （五）sql分类
    1、DDL（Data Definition Language） 数据库定义语言

        用来定义数据库对象：数据库，表，列等。关键字create,drop,alter等

    2、DML（Data Manipulation Language） 数据操作语言

        用来对数据库中表的数据进行增删改。关键字：insert,delete,update等

    3、DQL（Data Query Language） 数据查询语言

        用来查询数据库中表的记录（数据）。关键字：select,where等

    4、DCL（Data Control Language） 数据控制语言

        用来定义数据库的访问权限和安全级别，以及创建用户。关键字：GRANT,REVOKE等

![image](/img/java/DB/数据库服务器和分类描述图.png)

DML使用的频率比DDL高

### （六）sql数据常用类型
    1、int:整数     如age int,

    2、double:小数类型  如score double,

    3、date:日期，只包含年月日 （yyyy-MM-dd）  

    4、datetime:日期，包含年月日，时分秒 （yyyy-MM-dd HH:mm:ss）

    5、timetamp:时间戳，包含年月日，时分秒 （yyyy-MM-dd HH:mm:ss）。如果将来不给时间或者为null，使用这个将会根据系统时间自动添加

    6、varchar:字符串 ，如name varchar(20),名字共有20个字符

### （七）sql常用的语法

#### 1、操作数据库：CRUD  ------DDL

        （1）C（Create）:创建

                创建数据库
```js
// 最简便的创建
create database 数据库名称;

//判断数据库是否已经存在，不存在就创建
create database if not 数据库名称;

//创建数据库时指定字符集gbk
create database 数据库名称 character set gbk;
```
![image](/img/java/DB/DDL之创建数据库.png)

        （2）R（Retrieve）:查询

                查询所有数据库
```js
show databases;
```
                查询某个数据库被创建的语句
```js
// 可以看创建时用的字符集
show create database 数据库名称;
```
![image](/img/java/DB/DDL之查询某个数据库被创建的语句.png)
        （3）U（Update）:修改

                修改数据库的字符集
```js
// 改为utf-8
alter database 数据库名称 character set utf8;
```
![image](/img/java/DB/DDL之修改db数据库的字符集.png)
        （4）D（Delete）:删除

                删除数据库
```js
// 删除数据库
drop database 数据库名称;

// 判断数据库是否存在再删除
drop database if exists 数据库名称;
```
![image](/img/java/DB/DDL之删除数据库.png)

为演示，因此在删除之前创建了db数据库

![image](/img/java/DB/DDL之判断数据库是否存在再删除.png)

        （5）使用数据库

                使用数据库
```js
use 数据库名称;
```

                查询当前正在使用的数据库名称
```js
select database();
```
![image](/img/java/DB/DDL之使用数据库的操作.png)


#### 2、操作数据表：CRUD  ------DDL

        （1）C（Create）:创建

                创建数据表
```js
// 最简便的创建
// create table 数据表名称(列名1 字段类型,列名2 字段类型,...，列名n 字段类型);
create table student(id int,name varchar(32),age int,score double(4,1),birthday date,insert_time timestamp);
```
![image](/img/java/DB/DDL之创建数据表.png)

                复制数据表
```js
// 复制表
create table student like 复制表名的名称
```

        （2）R（Retrieve）:查询

                查询数据表
```js
//查询某一数据库中的所有表
show tables;

// 查询表结构
desc 表名;
```
        （3）U（Update）:修改

                修改表名
```js
//修改表名
alter table 表名 rename to 新的表名;
```
![image](/img/java/DB/DDL之修改表名.png)


                修改表的字符集
```js
//修改表的字符集
alter table 表名 character set 字符集;

// 查看表的创建语法
show create table 表名
```
![image](/img/java/DB/DDL之修改表的字符集.png)

                添加一列
```js
//添加表的列
 alter table student1 add 列名 数据类型;
```
![image](/img/java/DB/DDL之添加表的列.png)

                修改列名称  类型
```js
 //修改列名称和类型
 alter table student1 change 原本列名 修后后的列名名称 修改后的数据类型;

 // 或者只修改数据类型
 alter table student1 modify 列名 修改后的数据类型;

 //查询表结构
 desc 表名;

```
![image](/img/java/DB/DDL之修改列名称或数据类型.png)

                删除列
```js
 //修改列名称和类型
 alter table 表名 drop 列名;
```
![image](/img/java/DB/DDL之删除列.png)

        （4）D（Delete）:删除

                删除表
```js
// 简单的删除
drop table 表名;

// 判断要删除的表是否存在，存在就删除
drop table if exists 表名;
```
![image](/img/java/DB/DDL之删除表.png)

#### 3、对表进行增删改操作  ------DML

这里是使用频率最频繁的地方，通常是。

        （1）添加数据

```js
//一一对应
insert into 表名(列名1,列名2,...,列名n) values (值1，值2,...,值n);
//默认给所有列名添加值，一一对应
insert into 表名 values (值1，值2,...,值n);
```
![image](/img/java/DB/DML之表插入数据.png)

        **注意**：

                列名和值和类型要一一对应

                可以省略列名，表示给所有列名添加，但是要一一对应（可以查询表看结构）

                除了数字，其他的字符需要用''或者""引起来

        （2）删除数据
```js
delete from 表名 [where 条件];

//删除stu表中id为2的整条数据
delete from stu where id = 2 ;

//删除stu表中所有记录
delete from stu

//删除表中记录，然后再创建一个一模一样的空表
truncate table 表名；
```
![image](/img/java/DB/DML之删除表中数据.png)

        **注意**：

                不加条件，会将表中所有数据都删除【不建议这样操作】

                使用truncate。删除表，然后再创建一个一模一样的空表

                使用delete。删除表，有多少记录就会删除多少次，【不推荐使用】，效率慢

        （3）修改数据
```js
update 表名 set 列名1 = 值1,...,列名n = 值n [where 条件];

```
![image](/img/java/DB/DML之修改数据.png)

        **注意**：

                不加条件，会将表中同一列的所有数据都改为要修改的值【不推荐这样干】

#### 4、查询表中的记录  ------DQL
        （1）查询表

```js
//*表示查询表的全部
select * from 表名;

```
![image](/img/java/DB/DQL之查询表.png)

        **语法**：

                select  字段列名

                from    表名列表

                where   条件列表

                group   分组字段

                having  分组之后的条件

                order by  排序

                limit   分页限定

        **基础查询**：

+ 创建表stu1并插入若干数据
```js
create table stu1 (
id int,  -- 编号
name varchar(20), -- 姓名
age int, -- 年龄
sex varchar(5), -- 性别
address varchar(100), -- 地址
math int, -- 数学
english int  -- 英语
);

insert into stu1 values (1,'码云',55,'男','杭州',66,78),(1,'码天',50,'男','杭州',46,28),(1,'码天',50,'男','杭州',46,28),(1,'码地',30,'女','天津',96,78),(1,'码天',50,'男','杭州',46,28),(1,'码天',50,'男','杭州',46,28),(1,'码天',50,'男','杭州',46,28);
```

+ 查询stu1表中含姓名和年龄这两列  的  数据
```js
select name,age from stu1;
```
![image](/img/java/DB/DQL按字段查询表.png)


+ 查询stu1表中地址，且重复的只出现一次
```js
select distinct address from stu1;
```
![image](/img/java/DB/distinct去除重复内容.png)

注意：如果字段中出现空格等这样情况出现，distinct无法去除

+ 求总分并处理null的情况
```js
// 在stu1表中算出每个人的总分
select name , math,english , math+english from stu1;
// 如果参与计算的数字有null，会出现结果为null的情况，通过ifnull()来解决，第一个参数表示会出现null的字段，第二个参数表示null被替换的内容
select name , math,english , math + IFNULL(english,0) from stu1;
```
![image](/img/java/DB/DQL计算并查总分.png)

+ 起别名
```js
// 起别名
select name , math 数学,english as 英语, math + IFNULL(english,0) as 总分 from stu1;
```
![image](/img/java/DB/DQL起别名.png)

        **条件查询**：

+ where子句后跟多条件
```js
// 基本运算符： <（小于） 、 >（大于）、<=（小于等于）、 >=（大于等于） 、 =（等于） 、!=或<>（不等于）
// between ... and  取区间 ，和与类似
// in               集合，和或类似
// is null          不为空
// and  或  &&      表示与
// or  或  ||       表示或
// not 或  |        表示非

// 查询年龄大于20
select * from stu1 where age >20;

// 查询年龄不等于20
select * from stu1 where age !=20;
select * from stu1 where age <>20;

// 查询年龄大于等于20。小于等于30
select * from stu1 where age >=20 && age<=30;
select * from stu1 where age >=20 and age<=30;//推荐用这个
select * from stu1 where age between 20 and 30;//更推荐用这个

// 查询年龄20。24,26的
select * from stu1 where age =20 || age=24 || age=26;
select * from stu1 where age =20 or age=24 or age=26;
select * from stu1 where  age in(20,24,26);

// 查询英语成绩为null的
select * from stu1 where  english is null;
// 查询英语成绩不为null的
select * from stu1 where  english is not null;
```
        **模糊查询**：
```js
/*
like:
    _:代表一个字符长度的任意字符 用法与%一样，只不过只代表一个字符
    %:代表任意长度的任意字符
*/
// 查询姓码的人
select * from stu1 where  name like '码%';
// 查询第二个字是化的人
select * from stu1 where  name like '_化%';
// 查询三个字的人
select * from stu1 where  name like '___';
// 查询姓名中包含码的人
select * from stu1 where  name like '%码%';
```

        **排序**：

```js
/*
order by:
    asc:升序(默认)
    desc:降序
*/
// 查询数学分数升序排列
select * from stu1 order by math;

// 查询数学成绩一样，按照英语成绩升序来排列（先满足第一个条件，后满足第二个条件）
select * from stu1 order by math asc,english asc;
```
![image](/img/java/DB/DQL排序.png)


        **聚合函数**：

```js
/*
    count：统计记录数
    sum：求和，多个记录求和
    avg：平均数
    max：最大值
    min：最小值
*/
//  查询表中记录
select count(*) 条数 from stu1 ;
//  英语不为空的记录
select count(english)  from stu1 ;
//  英语平均值
select avg(english)  from stu1 ;
//  英语平最大值
select max(english)  from stu1 ;
//  英语平最小值
select min(english)  from stu1 ;
//  英语总和
select sum(english)  from stu1 ;
```

+ 聚合函数的操作会自动排除null的记录，然而实际上，null的也要被计算到里面，可以利用  ifnull(为null,0)  或者  选用非空的列（主键）
```js
select count(ifnull(english,0))  from stu1 ;
```

        **分组**：
```js
/*
 group by:
*/
//  查询表中男，女的数学成绩平均分  即男总分/男个数  女总分/女个数
select sex ,avg(math) from stu1 GROUP BY sex ;

//  查询表中男，女的人数  
select sex ,count(ifnull(sex,0)) from stu1 GROUP BY sex ;

//  查询表中男，女的数学成绩平均分 和 人数  
select sex ,avg(math) 平均分,count(ifnull(sex,0)) 人数 from stu1 GROUP BY sex ;
```
![image](/img/java/DB/DQL分组查询.png)

        **分页**：

        **多表操作**：








