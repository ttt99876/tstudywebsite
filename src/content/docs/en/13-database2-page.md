---
title: "数据库（二）"
description: "数据库中的相关知识"
---
此文章用来深化对sql语法的操作，熟练掌握多表之间的操作、以及学习DCL的相关知识

## 一、多表查询

    从多张表中进行查询，语法上没有什么区别

        1、建立1对n关系表（部门、员工表）
```js
-- 创建部门表
create table dept(
	id int PRIMARY KEY auto_increment,
	name VARCHAR(20)
);

-- 插入数据
insert into dept (name) VALUES ("开发部"),("市场部"),("财务部");

-- 创建员工表
create table emp(
	id int PRIMARY KEY auto_increment,
	name VARCHAR(10),
	gender CHAR(1),
	salary DOUBLE,
	join_date date,
	dept_id int,
	 constraint dept_emp_fav foreign key (dept_id) references dept(id)
);

-- 插入数据
insert into emp (name,gender,salary,join_date,dept_id) VALUES 
("zs","女",2000,"2023-02-24",1),
("ls","男",4000,"2023-01-24",1),
("ww","女",1000,"2023-03-13",1),
("zl","男",6000,"2023-02-24",2),
("mq","女",4500,"2023-02-24",2),
("lb","女",2000,"2023-02-24",3),
("jm","女",2000,"2023-02-24",3);
```
        2、查询表中的数据
```js
-- 笛卡尔积，会将两张表组合后的数据显示出来
select * from emp,dept;
```
会出现很多的无用数据，消除无用数据的方式
![image](/img/java/DB/笛卡尔积.png)


                内连查询

                        隐式内连查询：使用where条件来消除无用信息
```js
// 通过where来限定条件
select * from emp,dept where emp.dept_id = dept.id;

// 限定类名
select emp.name ,emp.gender, dept.name from emp,dept where emp.dept_id = dept.id;
```
![image](/img/java/DB/隐式内连查询.png)

                        显式内联查询：通过jion
```js
// Select 表1.* , 表2.* ... From 表1 [Inner] Join 表2 on 表与表之间的关联
select emp.name ,emp.gender ,dept.name from emp inner join dept on emp.dept_id = dept.id;
```
                        注意

                            确定表：查什么表

                            查询条件是什么

                            查询哪些字段

                外连查询（两种用一种就可）

                        左外连（用的多）：查询的是左表所有数据以及其交集部分
```js
// 语法
// Select 表1.* , 表2.* ... From 表1 left join 表2 on 表与表之间的关联

// 和显式内连很像，多了个left
select emp.name ,emp.gender ,dept.name from emp left join dept on emp.dept_id = dept.id;
```

                        右外连：查询的是右表所有数据以及其交集部分
```js
// 语法
// Select 表1.* , 表2.* ... From 表1 right join 表2 on 表与表之间的关联

// 和显式内连很像，多了个right
select emp.name ,emp.gender ,dept.name from emp right join dept on emp.dept_id = dept.id;
```

                子查询
```js
// 语法   select  * from 表1,表2,... where 条件（条件为一条查询语句）;
// 查询工资最高员工的信息
select  * from emp,dept where emp.dept_id = dept.id and salary = (select max(salary) from emp);
```
                        子查询的结果是单行单列的：可以作为查询条件，当做运算符
```js
// 查询工资大于平均工资的员工的信息
select  * from emp,dept where emp.dept_id = dept.id and salary > (select avg(salary) from emp);
```

                        子查询的结果是多行单列的：子查询可以作为条件，使用运算符in来判断
```js
// 查询财务部和市场部所有员工的信息
select  * from emp where dept_id in (select id from dept where name = '财务部' or name = '市场部');
```

                        子查询的结果是多行多列：子查询可以作为一张虚拟表参与查询
```js
// 查询员工日期是2023-02-21之后的员工信息和部门信息
select * from dept t1,(select  * from emp where join_date > '2023-02-21') t2 where  t1.id =t2.dept_id;
// or
SELECT * FROM emp LEFT JOIN dept ON emp.dept_id=dept.id where emp.join_date>'2023-02-21';
```
        3、练习
```js
-- 部门表
CREATE TABLE dept (
		id INT PRIMARY KEY PRIMARY KEY, -- 部门id
		dname VARCHAR(50), -- 部门名称
		loc VARCHAR(50) -- 部门所在地
);
				
-- 添加4个部门
INSERT INTO dept(id,dname,loc) VALUES 
		(10,'教研部','北京'),
		(20,'学工部','上海'),
		(30,'销售部','广州'),
		(40,'财务部','深圳');
				
				
				
-- 职务表，职务名称，职务描述
CREATE TABLE job (
		id INT PRIMARY KEY,
		jname VARCHAR(20),
		description VARCHAR(50)
);
				
-- 添加4个职务
INSERT INTO job (id, jname, description) VALUES
		(1, '董事长', '管理整个公司，接单'),
		(2, '经理', '管理部门员工'),
		(3, '销售员', '向客人推销产品'),
		(4, '文员', '使用办公软件');
-- 员工表
create table emp(
	id int PRIMARY KEY,
	ename VARCHAR(50),
	job_id INT,
	mgr INT,
	joindate date,
	salary DECIMAL(7,2),
	bonus DECIMAL(7,2),
	dept_id INT,
	FOREIGN KEY(job_id) REFERENCES job(id),
	FOREIGN KEY(dept_id) REFERENCES dept(id)
);
 
insert into emp VALUES
	(1001,'张一',  4, 1004,'2000-12-17',8000  ,null ,20),
	(1002,'张二',  3, 1006,'2001-12-20',16000 ,3000 ,30),
	(1003,'张三',  3, 1006,'2001-02-17',12500 ,5000 ,30),
	(1004,'张四',  2, 1009,'2001-02-20',28500 ,null ,20) ,
	(1005,'张五',  4, 1006,'2001-04-20',24500 ,14000,30),
	(1006,'张六',  2, 1009,'2001-09-01',30000 ,null ,30),
	(1007,'张七',  2, 1004,'2007-12-17',50000 ,null ,10),
	(1008,'张八',  4, 1004,'2007-12-17',15000 ,0    ,20),
	(1009,'张九',  1, 1006,'2001-12-17',11000 ,null ,10),
	(1010,'张十',  3, 1006,'2009-12-17',9500  ,null ,30),
	(1011,'张十一',4, 1004,'2010-12-17',8000  ,null ,20),
	(1012,'张十二',4, 1006,'2011-12-17',30000 ,null ,10),
	(1013,'张十三',4, 1004,'2008-12-17',13000 ,null ,30),
	(1014,'张十四',4, 1007,'2006-12-17',7000  ,null ,20);
-- 工资表
CREATE TABLE salarygrade(
	grade int primary key,
	losalary int,
	hisalary int
);

insert into salarygrade VALUES
	(1,7000,12000),
	(2,12000,14000),
	(3,14000,20010),
	(4,20010,30010),
	(5,30010,99990);

	

// -- 1、查询所有员工信息。查询员工编号，姓名、工资、职务名称、职务描述
select emp.id,emp.ename,emp.salary,job.jname,job.description from emp left join job on  emp.job_id = job.id;


// -- 2、查询员工编号，员工姓名，工资，职务名称，职务描述，部门名称，部门位置
SELECT 
	emp.id 员工编号,
    emp.ename 姓名,
	emp.salary 工资,
	job.jname 职务名称,
 	job.description 职务描述  ,
	dept.dname 部门名称,
 	dept.loc 部门位置
FROM emp LEFT JOIN job ON emp.job_id=job.id
LEFT JOIN dept ON emp.dept_id=dept.id;

// -- 3、查询员工姓名、工资、工资等级
select emp.ename 姓名,emp.salary 工资,salarygrade.grade 工资等级 from salarygrade,emp where emp.salary BETWEEN salarygrade.losalary and salarygrade.hisalary;

select emp.ename 姓名,emp.salary 工资,salarygrade.grade 工资等级 from emp left JOIN salarygrade on emp.salary BETWEEN salarygrade.losalary and salarygrade.hisalary;

// -- 4、查询员工姓名、工资、职务名称、职务描述、部门名称、部门位置、工资等级
select 
	emp.ename 姓名,
	emp.salary 工资,
	job.jname 职务名称,
	job.description 职务描述,
	dept.dname 部门名称,
	dept.loc 部门位置,
	salarygrade.grade 工资等级 
from emp left JOIN salarygrade on emp.salary BETWEEN salarygrade.losalary and salarygrade.hisalary
LEFT JOIN job on job.id = emp.job_id
LEFT JOIN dept on dept.id = emp.dept_id;


// -- 5、查询出部门编号、部门名称、部门位置、部门人数
SELECT dept.id 部门编号,dept.dname,dept.loc,t1.部门人数 from (SELECT emp.dept_id,count(*) '部门人数'  FROM emp GROUP BY emp.dept_id) t1 LEFT JOIN dept on dept.id=t1.dept_id

// -- 6、查询所有员工的姓名及其直接上级的姓名，没有领导的员工也需要查询
// -- 姓名ename  直接上级mgr    条件id=mgr
select t1.ename 姓名,t2.ename 直接上级 from emp t1 left join emp t2 on t1.mgr =t2.id;
```
        4、总结

                常用左连来完成多表之间的查询

                连表时需分清主次表

                表可以自连（自己连自己，不过要取别名，用以区分）

## 二、事务

在数据库的操作中，已经默认开启了一个事务，下面试手动开启事务的操作

### 事务的基本介绍
        1、事务的概念

                一个包含多个步骤的业务操作，被事务管理，那么这些操作要么同时成功，要么同时失败

        2、事务的概念

                开启事务

                提交事务

                回滚事务

```js
// 开启事务
start transaction;
// 没有问题：提交事务
commit;
// 出问题：回滚事务
rollback;

// 设定回跳点
savepoint abc
// 回滚到设定的回跳点
rollback to abc
```
具体案例：假设有一个账户表，里面有三个人的账户，张三的爸爸5000元，张三没有钱，李四有1000元。张三爸爸给了张三1000元，张三换了李四500元
![image](/img/java/DB/事务之元数据.png)

+ 默认自动开启了事务，操作之后的结果
```js
// 给张三1000元
UPDATE account set menoy = menoy - 1000 WHERE name = 'zsf';
// 张三账户到账1000元
UPDATE account set menoy = menoy +1000 WHERE name = 'zs';
// 还给李四500元
UPDATE account set menoy = menoy -500 WHERE name = 'zs';
// 这里不存在ml这个用户
UPDATE account set menoy = menoy -500 WHERE name = 'ml';
// 李四账户到账500元，一共1500元
UPDATE account set menoy = menoy +500 WHERE name = 'ls';

```
![image](/img/java/DB/事务之默认自动开启事务.png)

+ 手动开启事务-回滚并添加回滚预设点
```js
// 开启事务
start transaction;
// 给张三1000元
UPDATE account set menoy = menoy - 1000 WHERE name = 'zsf';
// 张三账户到账1000元
UPDATE account set menoy = menoy +1000 WHERE name = 'zs';
// 还给李四500元
UPDATE account set menoy = menoy -500 WHERE name = 'zs';
-- 以上sql语句没有问题
savepoint abc;

// 这里不存在ml这个用户
UPDATE account set menoy = menoy -500 WHERE name = 'ml';
// 李四账户到账500元，一共1500元
UPDATE account set menoy = menoy +500 WHERE name = 'ls';
rollback to abc;
```
![image](/img/java/DB/事务之手动添加事务（回滚+回滚到预设点）.png)

+ 手动开启事务-回滚并执行以下内容
```js
// 开启事务
start transaction;
// 给张三1000元
UPDATE account set menoy = menoy - 1000 WHERE name = 'zsf';
// 张三账户到账1000元
UPDATE account set menoy = menoy +1000 WHERE name = 'zs';
// 还给李四500元
UPDATE account set menoy = menoy -500 WHERE name = 'zs';
-- 以上sql语句没有问题
rollback;
// 这里不存在ml这个用户
UPDATE account set menoy = menoy -500 WHERE name = 'ml';
// 李四账户到账500元，一共1500元
UPDATE account set menoy = menoy +500 WHERE name = 'ls';
```
会发现出现问题后，会从回滚并执行以下的代码
![image](/img/java/DB/手动开启事务-回滚（回滚并执行以下内容）.png)

+ 手动开启事务-提交
```js
// 开启事务
start transaction;
// 给张三1000元
UPDATE account set menoy = menoy - 1000 WHERE name = 'zsf';
// 张三账户到账1000元
UPDATE account set menoy = menoy +1000 WHERE name = 'zs';
// 还给李四500元
UPDATE account set menoy = menoy -500 WHERE name = 'zs';
// 这里不存在ml这个用户
UPDATE account set menoy = menoy -500 WHERE name = 'ml';
// 李四账户到账500元，一共1500元
UPDATE account set menoy = menoy +500 WHERE name = 'ls';
commit;
```
提交设定处即为结束，不影响下面代码执行，但是手动设置的事务已经结束了，以上语句和默认自动开启一样

        3、注意：

                建议手动开启事务, 用一次 就开启一次

                开启事务之后, 要么commit, 要么rollback

                一旦commit或者rollback, 当前的事务就结束了

                回滚到指定的回滚点, 但是这个时候事务没有结束的

        4、修改默认提交
```js
// 查看MYSQL中事务是否自动提交
show variables like '%commit%';
 
// 设置自动提交的参数为OFF
set autocommit = 0;  -- 0:OFF  1:ON
```
不演示了，若验证不成功，记得将数据库或图形化界面重启一下

### 事务的四大特征

        1、原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败

        2、一致性：事务操作前后，数据总量不变

        3、隔离性：多个事务之间，相互独立

        4、持久性：当事务提交或回滚后，数据库会持久化的保存数据

### 事务的隔离级别（了解）

    多个事务之间隔离的，相互独立的。但是多个事务操作同一批数据，则会引发一些数据，设置不同的隔离级别就可以解决这些问题。

        存在的问题：

                脏读：一个事务，读取到另一个事务中没有提交的数据

                不可重复读（虚读）：在同一个事务中，两次 读取到的数据不一样

                幻读：一个事务操作（DML）数据表中所有记录，另一个事务添加了一条数据，则第一个事务查询不到自己的修改

        隔离级别字符串：

                read uncommitted：读未提交     ----三个问题都会产生

                read committed：读已提交       ----不可重复读、幻读 oracle默认

                repeatable read：可重复读      ----幻读   mysql默认

                serializab：串行化             ----不会出现任何问题

隔离级别从小到大，安全性越来越高，但是效率越来越低

```js
// 数据库查询隔离级别
select @@tx_isolation; //高版本已经弃用了
select @@transaction_isolation;//8.x及以上版本使用的
// 数据库设置隔离级别
// 要重新连接mysql服务才能生效
set global transaction isolation level 级别字符串;
```

## 三、DCL 管理用户、授权
    DBA：数据库管理员，专门管理公司数据库

### 管理用户
        1、切换到mysql数据库
```js
//1、切换到mysql数据库
use mysql;
```
        2、查询user数据表
```js
//2、 查询user数据表
select * from user;
```
        3、创建用户
```js
// 3、创建用户 CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';    
// 主机名为%时：表示可以在任意主机使用用户登录数据库（包括远程访问数据库）

create user 'ttt'@'localhost' IDENTIFIED by '123';
create user 'ttt1'@'%' IDENTIFIED by '123';
```

        4、删除用户
```js
// 4、 删除用户：DROP USER '用户名'@'主机名';
drop user 'ttt1'@'%';
```
        5、修改用户名密码
```js
// 5、修改用户名密码
// -- ALTER USER 'test'@'localhost' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '新密码';
ALTER USER 'ttt1'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '123456';
// 或者
// set password for '用户名'@'localhost' = '新密码';
set password for 'ttt1'@'%' = '123456';
```
        6、修改用户名----不起效果
```js
// 6、修改用户名----不起效果
// alter user '旧用户名'@'localhost' identified by '新用户名';
```

### 忘记密码操作
```js
// 百度教程，最好不要忘记！！！！
```

### 授权













