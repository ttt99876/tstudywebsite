---
title: "数据库（一）"
description: "数据库中的相关知识"
---
此文章用于理解数据库的概率和基本sql语法操作

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

+ 简单使用
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

+ where +分组
```js
/*
 where + group by: 条件写在分组前面
*/
// 在分组之前限定分组条件：如同学分数达到70分以上的才参与计算
select sex ,avg(math) 平均分,count(ifnull(sex,0)) 人数 from stu1 where math > 70 GROUP BY sex ;
```
+ where + 分组  + having
```js
/*
 where + group by  + having:
 having:和where使用类似，但是是在分组之后限定
*/
// 在分组之前限定分组条件：如同学分数达到70分以上的才参与计算，并且组里人数要大于等于2的
select sex ,avg(math) 平均分,count(id) 人数 from stu1 where math > 70 GROUP BY sex having count(id) >= 2;

select sex ,avg(math) 平均分,count(id) 人数 from stu1 where math > 70 GROUP BY sex having 人数 >= 2;
```
+ where 和 having 的区别

                where在分组之前进行限定，如果不满足条件，则不参与分组； having在分组之后进行限定，如果不满足结果，则不会被查询出来

                where不能用于聚合函数； having可以跟聚合函数进行判断

        **分页**：

+ 语法：limit 开始的索引，每页查询的条数;

+ 公式：开始的索引  =  （单前的页码 - 1） * 显示的条数

+ 注意：如果要查询的页码每页数据会展示最后一页的数据

+ 注意：每个数据库的分页方式会不一样，mysql是这样用的
```js
// -- 展示第三页的数据  
// -- 单前页码是3 ，每页显示两条数据  单前索引 = （单前页码-1） * 显示的数据 = （3-1） *2 =4
select * from stu1 limit 4,2;
```
![image](/img/java/DB/DQL分页查询数据.png)


        **约束**：

+ 概念：对表中的数据进行限定，保证数据的正确性、有效性和完整性

+ 分类：主键约束（primary key）、非空约束（not null）、唯一约束（unique）、外键约束（foreign key）

```js
/*
    主键约束：primary key

    非空约束：not null
        创建表的时候添加非空约束
        创建表的时候没有添加或者忘记添加，可以

    唯一约束：unique

    外键约束：foreign key 

*/


```
+ 非空约束：设定的行的数据不能为空（null）

                 创建表的时候添加非空约束

![image](/img/java/DB/创建表的时候添加非空.png)

                 创建表的时候添加非空约束，可以通过右键表----设计表----查看not null已经被勾选上

```js
// 语法添加非空操作   not null  
create table stu2(
    id int,
    name varchar(20) not null
);
// 如何删除非空操作：修改name的类型----删除非空约束
alter table stu2 modify name varchar(20);
```

+ 唯一约束：被设定的，不能重复出现，是唯一的,但是可以设置为空，所以一般设置主键的会设置为非空
```js
// 如每个人的手机号都不不一样 
create table stu2(
    id int,
    phone varchar(20) unique
);
// 验证：故意写重复
insert into stu2 values (1,'1837631xxxx'),(2,'1887761xxxx'),(3,'1837631xxxx');
// 验证，不写重复
insert into stu2 values (1,'1837631xxxx'),(2,'1887761xxxx'),(3,'1830669xxxx');
select * from stu2;
```
![image](/img/java/DB/DQL添加主键.png)

+ 主键约束

        含义：

                 非空且唯一（为空会补一个数？自己验证）

                 一张表只能有一个字段为主键

                 主键，为表中记录为唯一的标识，如身份证等

        使用：

                 图形化界面创建表的时候可以添加主键

                 语法创建主键,自行验证

```js
// 如每个人的手机号都不不一样 
create table stu2(
    id int primary key,  -- 给id添加主键约束
    name varchar(20) 
);
// 删除主键的方式需要注意,不是modify ，而是drop
alter table stu2 drop primary key;
```
        自动增长：

                 如果某一列是数值类型的，使用auto_increment可以来完成 根据上一条记录 自动增长

                 一般配合int的主键来使用，也可以不和主键一起

```js
// 如每个人的手机号都不不一样 
create table stu2(
    id int primary key auto_increment,  -- 给id添加主键约束
    name varchar(20) 
);
// 删除自动增长
alter table stu2 modify id int;
```

+ 外键约束

        含义：将多个表通过外键关联起来，外键一般是关联表的Id ，解决数据冗余的问题

        语法：
```js
create table 表名(
    ...
    外键列
    constraint 外键名称 foreign key (外键列名称) reference 主表名称(主表列名称)
);
```
        看似关联却没有关联的两个表，两个表随意删除，不会收到约束
```js
// 部门表
create table department(
    id int primary key auto_increment,
    dep_name VARCHAR(20),
    dep_location VARCHAR(20)
);
insert into department values(1,'研发部',	'广州'),(2,'销售部',	'深圳');
// 员工表
create table employee(
    id int primary key auto_increment,
    name VARCHAR(20),
    age int,
    dep_id int
);

insert into employee values(1	,'zs',	20,	1),(2	,'ls',	23,	1),(3	,'ww'	,32,	1),(4	,'zl',	19,	2),(5,	'mq',	30,	2),(6,	'lb',	29,	2);
```
        通过外键关联
```js
// 部门表
create table department(
    id int primary key auto_increment,
		dep_name VARCHAR(20),
		dep_location VARCHAR(20)
);
insert into department values(1,'研发部',	'广州'),(2,'销售部',	'深圳');
// 员工表
create table employee(
	id int primary key auto_increment,
	name VARCHAR(20),
	age int,
	dep_id int
);
/*
    外键列
    constraint 外键名称 foreign key (外键列名称) reference 主表名称(主表列名称)
*/
ALTER TABLE employee 
ADD CONSTRAINT emp_dept_fk FOREIGN KEY (dep_id) REFERENCES department(id);

insert into employee values(1	,'zs',	20,	1),(2	,'ls',	23,	1),(3	,'ww'	,32,	1),(4	,'zl',	19,	2),(5,	'mq',	30,	2),(6,	'lb',	29,	2);

select * from department;
select * from employee;
  
// 删除外键  alter table 表名 drop foreign key 外键名称
alter table employee drop foreign key emp_dept_fk;
```
                此时不能随意删除，也不能添加一个没有存在的部门

+ 级联，类似于批量操作一组数据
```js
/*
ALTER TABLE 表名 ADD  constraint 外键名称 foreign key (外键列名称) reference 主表名称(主表列名称) ON UPDATE CASCADE

   ON UPDATE CASCADE  是级联更新
   ON DELETE CASCADE  是级联删除
以上可以同时存在，也可以设置多个
*/
// 需求：将部门id为1的改为5

// 没有级联的时候，需要以下两步
update employee set dep_id = null where dep_id =1; //dep_id不能为空，但是可以为Null
update employee set dep_id = 5 where dep_id is null;

// 级联更新----用了级联，在设置外键的时候，添加ON UPDATE CASCADE，此时修改部门id，员工表会自动更新
ALTER TABLE employee 
ADD CONSTRAINT emp_dept_fk FOREIGN KEY (dep_id) REFERENCES department(id) ON UPDATE CASCADE;

// 级联删除----需求：将部门id为1的删除（建议删除的时候要备份）
ALTER TABLE employee 
ADD CONSTRAINT emp_dept_fk FOREIGN KEY (dep_id) REFERENCES department(id) ON DELETE CASCADE;
```

### （八）数据库的设计
1. 多表之间关系

+ 关系

        一对一

                如 人只有一张身份证

                __实现方法__：在任意一边加入外键，关联另一方的主键，并且设置外键为唯一（UNIQUE）

        一对多（多对一）

                如 一个部门有多个员工；一个工作包对应多个活动

                __实现方法__：在多的建立外键，指向一的主键

        多对多

                如 学生和课程，一个学生可以选多门课程，一门课程可以给多个学生选择

                __实现方法__：建立三张中间表（联合主键，里面的主键具有唯一性），中间表至少包括两个外键，分别关联两张表的主键


```js
// 演示多表之间的关系
//-- 分类表
create table tab_categoty(
	cid int PRIMARY KEY auto_increment,
	cname VARCHAR(100) not null UNIQUE
);

//-- 路线表
create table tab_router(
	rid int PRIMARY KEY auto_increment,
	rname VARCHAR(100) not null UNIQUE,
	rdate date,
	cid int
	
);
// 一个分类有多条路线，在多的建立外键，指向一的主键
ALTER TABLE tab_router
ADD CONSTRAINT router_category_fk FOREIGN KEY (cid) REFERENCES tab_categoty(cid);

//-- 用户表
create table tab_user(
	uid int PRIMARY KEY auto_increment,
	uname VARCHAR(100) not null UNIQUE,
	PASSWORD VARCHAR(30) not null,
	name VARCHAR(100),
	birthday date,
	sex char(1) DEFAULT '男',
	tele VARCHAR(100),
	email VARCHAR(100)
	
);

//-- 中间表  一个用户有多种路线，一种路线适合多个用户
create table tab_favorite(
	rid int ,
	date datetime,
	uid int,
	PRIMARY KEY(rid,uid),//联合组件
	FOREIGN key  (rid) references tab_router(rid),
	FOREIGN key  (uid) references tab_user(uid)
);




```

2. 数据库的约束：范式

设计关系数据库时，遵从不同的规范要求，设计出合理的关系型数据库，这些不同的规范要求被称为不同的范式，各种范式呈递次规范，越高的范式数据库冗余越小。共有6种范式：第一范式（1NF）、第二范式（2NF）、第三范式（3NF）、巴斯-科德范式（BCNF）、第四范式(4NF）和第五范式（5NF，又称完美范式）。满足最低要求的范式是第一范式（1NF）。在第一范式的基础上进一步满足更多规范要求的称为第二范式（2NF），其余范式以次类推。一般来说，数据库只需满足第三范式(3NF）就行了

+ 第一范式：每一列都是不可分割的原子项，即没有包含的关系

        存在的问题

                存在非常严重的数据冗余

                数据添加存在问题，添加时会存在不合法问题

                删除数据的时候，会连累其他数据被删除

+ 第二范式：在1NF的基础上，非码属性必须完全依赖于候选码（消除非主属性对主码的部分函数依赖）

        名词理解

                函数依赖：A-->B  通过A属性（属性组）值可以确定唯一B属性的值，则称B依赖于A。属性---如学号和姓名。属性组---两个属性确定一个属性  如学号和课程名称，确定分数

                完全函数依赖：A-->B  如果A是一个属性组，则B属性值得确定需要依赖于A属性组中所有的属性值。如学号和课程名称，确定分数

                部分函数依赖：A-->B  如果A是属性组，则B属性值得确定只需要依赖于A属性组中某一些值即可。如学号和课程名称，确定姓名

                传递函数依赖：A-->B B-->C  如果通过A属性（属性组）的值，可以确定唯一B属性的值，在通过B属性（属性组）的值可以确定唯一C属性的值，则称C传递函数依赖于A。  如学号---》院系 院系---》院系主任

                码：如果一个属性或属性组被其他属性完全依赖，则该属性或属性值为该表的码 。如姓名和课程能确定其他的所有的列，则姓名和课程就是码。  姓名和课程就是主属性，其他的就是非主属性

        存在的问题

                数据添加存在问题，添加时会存在不合法问题

                删除数据的时候，会连累其他数据被删除

+ 第三范式：在2NF基础上，任何非主属性不依赖于其他非主属性（在2NF基础上消除传递依赖）

       在第三范式这里，以上存在的问题都被解决了

       一般上面三种方式，在设计数据库的时候会自然遵循，目的在于将表细分、规划，但是很难避免数据冗余这样的事情发生，因为开发过程中数据会越来越多

3. 数据库的备份和还原

+ 备份操作
        语句：mysqldump -u用户名 -p密码 数据库名称 > 保存路径

        图形化：要备份的数据库上右键----》转储SQL文件---》选择要保存的位置

                结构和数据：字段名和数据

                仅结构：只有字段名

![image](/img/java/DB/数据库备份.png)

+ 还原操作

        语句：

                登录数据库 mysql -uroot -proot

                创建数据库 create database 数据库名

                使用数据库 use 数据库名

                还原数据库 source 文件路径

        图形化：新建一个与备份数据库设置相同的数据库，字符集和排序规则要和原数据库保持一致，----》运行sql文件----》找到之前保存的sql文件---》确认路径后，点击开始---》提示成功、关闭页面---》进入新建数据库，刷新数据

![image](/img/java/DB/数据库还原.png)









