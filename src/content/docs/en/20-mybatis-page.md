---
title: "myBatis"
description: "myBatis中的相关知识"
---

## 一、前导
    MyBatis是一款优秀的持久层（也是数据层dao）框架，用于简化JDBC的开发

    官网：https://mybatis.org/mybatis-3/zh/index.html

    与数据库图形化语句相似

## 二、入门
    需求：使用mybatis查询所有用户数据

        1、创建springboot工程，配置mybatis（数据库连接信息）

                新建---模块---spring---填写信息----配置（需要勾选mybatis F...  和 mysql Driver）

        2、引入mybatis的相关依赖，配置mybatis

                配置数据库连接信息

```java
#配置数据库连接信息----四要素
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql:///mybatis
spring.datasource.username=root
spring.datasource.password=123456
```

        3、创建数据库，数据表
```js
create table user(
    id int unsigned primary key auto_increment comment 'ID',
    name varchar(100) comment '姓名',
    age tinyint unsigned comment '年龄',
    gender tinyint unsigned comment '性别, 1:男, 2:女',
    phone varchar(11) comment '手机号'
) comment '用户表';

insert into user(id, name, age, gender, phone) VALUES (null,'白眉鹰王',55,'1','18800000000');
insert into user(id, name, age, gender, phone) VALUES (null,'金毛狮王',45,'1','18800000001');
insert into user(id, name, age, gender, phone) VALUES (null,'青翼蝠王',38,'1','18800000002');
insert into user(id, name, age, gender, phone) VALUES (null,'紫衫龙王',42,'2','18800000003');
insert into user(id, name, age, gender, phone) VALUES (null,'光明左使',37,'1','18800000004');
insert into user(id, name, age, gender, phone) VALUES (null,'光明右使',48,'1','18800000005');

```
        4、编写实体类

```java
package com.ttt.pojo;

public class User {
    private Integer id;
    private String name;
    private Short age;
    private Short gender;
    private String phone;

    public User() {
    }

    public User(Integer id, String name, Short age, Short gender, String phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Short getAge() {
        return age;
    }

    public void setAge(Short age) {
        this.age = age;
    }

    public Short getGender() {
        return gender;
    }

    public void setGender(Short gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gender=" + gender +
                ", phone='" + phone + '\'' +
                '}';
    }
}
```

        5、编写sql语句（注解/xml）
```java
package com.ttt.mapper;

import com.ttt.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper //在运行时，会自动生成该接口的实现类对象（代理对象），并且将该对象交给IOC容器管理
public interface UserMapper {
    @Select("select * from user")
    public List<User> list();
}

```

        6、测试
```java
package com.ttt;

import com.ttt.mapper.UserMapper;
import com.ttt.pojo.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest //springboot整合单元测试的注解
class MybatisDemoApplicationTests {
    @Autowired
    private UserMapper userMapper;//添加了Mapper注解，将接口生成了代理对象

    @Test
    public void testListUser() {
        List<User> list = userMapper.list();
        //利用stream()遍历输出
        list.stream().forEach(user->{
            System.out.println(user);
        });

    }

}

```

![image](/img/java/mybatis/01-mybatis入门测试结果.png)


## 三、配置mysql方言

    选中sql语句，右键，选择make 'list()' default ------ 选择第三个-----搜索mysql-----选中它

![image](/img/java/mybatis/02-配置mysql方言.png)

## 四、配置数据库的连接

![image](/img/java/mybatis/03-配置数据库.png)

## 五、mybatis和jdbc的区别

![image](/img/java/mybatis/04-mybatis和jdbc的区别.png)

## 六、数据库连接池
在jdbc章节中已经介绍过了

    1、概述

            数据库连接池是个容器，负责分配、管理数据库连接（Connection）

            它允许应用程序重复使用一个现有的数据库连接，而不是再重新建议一个

            释放空闲时间超过最大空闲时间的连接，来避免因为没有释放连接而引起的数据库连接遗漏

            标准接口：DataSource

                官方提供的数据库连接池接口，由第三方组织实现此接口

                功能：获取连接 Connection getConnection() throws SQLException;

    2、优势

            资源重用

            提升系统响应速度

            避免数据库连接遗漏

    3、不想使用默认的，想用durid，可以找到durid的配置，在xml文件中添加配置就可以了


## 其、lombok
    是一个实用的java类库，能通过注解的形式自动生成构造器、getter/setter、equals、hashcode、toString等方法，并可以自动化生成日志变量，简化java开发、提高效率

注解|作用
-|:-:
@Getter/@Setter	     | 为所有的属性提供get/set方法  
@ToString            | 会给类自动生成易阅读的toString方法 
@EqualsAndHashCode	 | 根据类所拥有的非静态字段自动重写equals方法和hashCode方法 
@Data                | 提供了更综合的生成代码功能（@Getter + @Setter + @ToString + @EqualsAndHashCode） 
@NoArgsConstructor   | 为实体类生成无参的构造器方法
@AllArgsConstructor  | 为实体类生成除了static修饰的字段之外带有各参数的构造器方法

    目的
![image](/img/java/mybatis/05-lombok.png)

    使用
```java
<!-- 添加lombok，减少实体类的臃肿-->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```
    实体类
```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String name;
    private Short age;
    private Short gender;
    private String phone;
}
```



## 八、实践--掌握mybatis
### 准备环境
    1、创建数据库
```js
-- 部门管理
create table dept(
    id int unsigned primary key auto_increment comment '主键ID',
    name varchar(10) not null unique comment '部门名称',
    create_time datetime not null comment '创建时间',
    update_time datetime not null comment '修改时间'
) comment '部门表';

insert into dept (id, name, create_time, update_time) values(1,'学工部',now(),now()),(2,'教研部',now(),now()),(3,'咨询部',now(),now()), (4,'就业部',now(),now()),(5,'人事部',now(),now());



-- 员工管理
create table emp (
  id int unsigned primary key auto_increment comment 'ID',
  username varchar(20) not null unique comment '用户名',
  password varchar(32) default '123456' comment '密码',
  name varchar(10) not null comment '姓名',
  gender tinyint unsigned not null comment '性别, 说明: 1 男, 2 女',
  image varchar(300) comment '图像',
  job tinyint unsigned comment '职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师',
  entrydate date comment '入职时间',
  dept_id int unsigned comment '部门ID',
  create_time datetime not null comment '创建时间',
  update_time datetime not null comment '修改时间'
) comment '员工表';

INSERT INTO emp
	(id, username, password, name, gender, image, job, entrydate,dept_id, create_time, update_time) VALUES
	(1,'jinyong','123456','金庸',1,'1.jpg',4,'2000-01-01',2,now(),now()),
	(2,'zhangwuji','123456','张无忌',1,'2.jpg',2,'2015-01-01',2,now(),now()),
	(3,'yangxiao','123456','杨逍',1,'3.jpg',2,'2008-05-01',2,now(),now()),
	(4,'weiyixiao','123456','韦一笑',1,'4.jpg',2,'2007-01-01',2,now(),now()),
	(5,'changyuchun','123456','常遇春',1,'5.jpg',2,'2012-12-05',2,now(),now()),
	(6,'xiaozhao','123456','小昭',2,'6.jpg',3,'2013-09-05',1,now(),now()),
	(7,'jixiaofu','123456','纪晓芙',2,'7.jpg',1,'2005-08-01',1,now(),now()),
	(8,'zhouzhiruo','123456','周芷若',2,'8.jpg',1,'2014-11-09',1,now(),now()),
	(9,'dingminjun','123456','丁敏君',2,'9.jpg',1,'2011-03-11',1,now(),now()),
	(10,'zhaomin','123456','赵敏',2,'10.jpg',1,'2013-09-05',1,now(),now()),
	(11,'luzhangke','123456','鹿杖客',1,'11.jpg',5,'2007-02-01',3,now(),now()),
	(12,'hebiweng','123456','鹤笔翁',1,'12.jpg',5,'2008-08-18',3,now(),now()),
	(13,'fangdongbai','123456','方东白',1,'13.jpg',5,'2012-11-01',3,now(),now()),
	(14,'zhangsanfeng','123456','张三丰',1,'14.jpg',2,'2002-08-01',2,now(),now()),
	(15,'yulianzhou','123456','俞莲舟',1,'15.jpg',2,'2011-05-01',2,now(),now()),
	(16,'songyuanqiao','123456','宋远桥',1,'16.jpg',2,'2010-01-01',2,now(),now()),
	(17,'chenyouliang','123456','陈友谅',1,'17.jpg',NULL,'2015-03-21',NULL,now(),now());
```

    2、创建springboot工程，引入对应的起步依赖（mybatis、mysql驱动、lombok）

![image](/img/java/mybatis/06-实战创建项目.png)

    3、配置数据库连接信息
```java
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql:///mybatis
spring.datasource.username=root
spring.datasource.password=xxxxx
```

    4、创建对应的实体类Emp
```java
package com.ttt.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Emp {
    private Integer id;
    private String username;
    private String password;
    private String name;
    private Short gender;
    private String image;
    private Short job;
    private LocalDate entrydate;
    private Integer deptId;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
```

    5、准备Mapper接口EmpMapper
```java
package com.ttt.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper  //会自动创建代理对象
public interface EmpMapper {

}

```

### 执行删除操作
    1、在EmpMapper接口中操作

    2、在mybatis中，动态的可以通过#{动态的内容}来书写sql语句。动态的内容是方法中传递的参数

            `#{}`:执行sql时，会将#{}替换为？，生成预编译sql，会自动设置参数值。使用时机：参数传递，都使用#{}

            `${}`：拼接sql。直接将参数拼接在sql语句中，存在sql注入问题。使用时机：如果对表名、列名进行动态设置时使用，不常使用

```java
//更据id删除一条数据
    @Delete("delete from emp where id = #{id}")
    public void deleteFn(Integer id);
```
    3、日志输出,在application.properties中配置
```java
#指定mybatis输出日志的位置，输出控制台
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```
![image](/img/java/mybatis/07-实战预编译sql.png)
    4、预编译性能更高、更安全（防止SQL注入）

### 新增

    1、普通新增 

            （1）在mapper接口中添加方法，多个参数可以使用实体类来装起来
```java
//新增
    @Update("insert into emp(id,username,password,name,gender,image,job,entrydate,dept_id,create_time,update_time) values (#{id},#{username},#{password},#{name},#{gender},#{image},#{job},#{entrydate},#{deptId},#{createTime},#{updateTime})")
    public void insert(Emp emp);
```
             （2）测试,注意写入日期的写法
```java
  @Test
    public void testLogin(){
       Emp emp = new Emp();
        emp.setId(18);
        emp.setUsername("ttt");
        emp.setPassword("123456");
        emp.setName("tt");
        emp.setGender((short)1);
        emp.setImage("18.png");
        emp.setJob((short)2);
        emp.setEntrydate(LocalDate.of(2022,1,1));
        emp.setDeptId(1);
        emp.setCreateTime(LocalDateTime.now());
        emp.setUpdateTime(LocalDateTime.now());
        empMapper.insert(emp);
    }
```

    2、主键返回

            添加一个注解@Options
```java
//新增
@Options(keyProperty = "id",useGeneratedKeys = true)
@Update("insert into emp(username,password,name,gender,image,job,entrydate,dept_id,create_time,update_time) values (#{username},#{password},#{name},#{gender},#{image},#{job},#{entrydate},#{deptId},#{createTime},#{updateTime})")
public void insert(Emp emp);
```
```java
@Test
public void testLogin(){
    Emp emp = new Emp();
    //emp.setId(18);
    emp.setUsername("ttt2");
    emp.setPassword("123456");
    emp.setName("tt");
    emp.setGender((short)1);
    emp.setImage("18.png");
    emp.setJob((short)2);
    emp.setEntrydate(LocalDate.of(2022,1,1));
    emp.setDeptId(1);
    emp.setCreateTime(LocalDateTime.now());
    emp.setUpdateTime(LocalDateTime.now());

    empMapper.insert(emp);
    //System.out.println(res);
    System.out.println(emp.getId());
}
```


### 更新操作
    确定使用的sql语句，通过占位符来传递要求改的内容
```java
//更新
    @Update("update emp set username=#{username},password=#{password},name=#{name},gender=#{gender},image=#{image},job=#{job},entrydate=#{entrydate},dept_id=#{deptId},create_time=#{createTime},update_time=#{updateTime} where id = #{id}")
    public void update(Emp emp);
```
```java
 @Test
    public void testUpdate(){
        Emp emp = new Emp();
        emp.setId(21);
        emp.setUsername("ljy");
        emp.setPassword("123");
        emp.setName("jy");
        emp.setGender((short)1);
        emp.setImage("21.png");
        emp.setJob((short)2);
        emp.setEntrydate(LocalDate.of(2023,1,20));
        emp.setDeptId(1);
        emp.setCreateTime(LocalDateTime.now());
        emp.setUpdateTime(LocalDateTime.now());
        empMapper.update(emp);
    }
```

### 查询
    1、根据id查询
```java
//查询
    @Select("select * from emp where id = #{id}")
    public Emp getById(Integer id);
```
```java
  @Test
    public void testGetById(){
        Emp emp = empMapper.getById(21);
        System.out.println(emp);//Emp(id=21, username=ljy, password=123, name=jy, gender=1, image=21.png, job=2, entrydate=2023-01-20, deptId=null, createTime=null, updateTime=null)
    }
```
        输出的封装结果deptId=null, createTime=null, updateTime=null，出现这个的原因：

            实体类属性名和数据库表查询返回的字段名不一致，mybatis不能自动封装。

        解决方案

            给字段起别名
```java
 //查询
    @Select("select id,username,password,name,gender,image,job,entrydate,dept_id as deptId ,create_time createTime,update_time updateTime from emp where id = #{id}")
    public Emp getById(Integer id);
```

            @Result注解手动映射封装
```java
   @Results({
            @Result(column = "dept_id",property = "deptId"),
            @Result(column = "create_time",property = "createTime"),
            @Result(column = "update_time",property = "updateTime")
    })
    @Select("select * from emp where id = #{id}")
    public Emp getById(Integer id);
```
            开启mybatis的驼峰命名自动映射开关，在application.properties配置,前提是要严格遵守这两种命名格式
```java
// 开启mybatis的驼峰命名自动映射开关
mybatis.configuration.map-underscore-to-camel-case=true
```


    2、条件查询（精确查询和模糊查询）
```java
 @Select("select * from emp where name like concat('%',#{name},'%')  and gender = #{gender} and entrydate between #{begin} and #{end} order by update_time desc")
    public List<Emp> getByIf(@Param("name")String name ,@Param("gender")Short gender,@Param("begin")LocalDate begin, @Param("end")LocalDate end);
```
```java
 @Test
    public void testGetByIf(){
        //time.setTime(2014-2-12);
        List<Emp> empList = empMapper.getByIf("张",(short)1, LocalDate.of(2010, 2, 2), LocalDate.of(2020, 2, 2));
        System.out.println(empList);
    }
```

        模糊查询可以使用%

        使用concat(str1,str2)，将多个字符连接为一个字符串，如concat('%',#{name},'%')

        @Param注解，可以解决：没有指定具体参数名称并一一对应的问题

                2.x版本内置插件

                1.x版本没有内置插件，需要加Param

![image](/img/java/mybatis/08-spring版本问题.png)


## 九、XML映射文件
    规范

        XML映射文件的名称与Mapper接口名称不一致，并且将xml映射文件和Mapper接口放置在相同的包下（同包同名）

![image](/img/java/mybatis/09-同包同名.png)

        XML映射文件的namespace属性为Mapper接口全限定名一致

![image](/img/java/mybatis/10-XML映射文件.png)

        XML映射文件中sql语句的id与Mapper接口中的方法名一致，并保持返回类型一致

![image](/img/java/mybatis/11-Mapper接口.png)

    操作

        在resources下----新建目录（输入与Mapper接口名称的同包名com/ttt/mapper）----新建文件（与Mapper接口同名）

        去mybatis官网中获取xml的配置
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.mybatis.example.BlogMapper">
    <select id="selectBlog" resultType="Blog">
        select * from Blog where id = #{id}
    </select>
</mapper>
```

        修改namespace属性为Mapper接口全限定名一致（namespace="com.ttt.mapper.EmpMapper"）

        修改id="selectBlog"为Mapper接口定义的方法名（id="getByIf"）

        返回类型（resultType="com.ttt.pojo.Emp"）
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.ttt.mapper.EmpMapper">
    <!--resultType:单条记录所封装的类型 （返回的类型）   -->
    <select id="getByIf" resultType="com.ttt.pojo.Emp">
        select * from emp where name like concat('%',#{name},'%')  and gender = #{gender} and entrydate between #{begin} and #{end} order by update_time desc
    </select>
</mapper>
```
```java
// mapper接口
public List<Emp> getByIf(@Param("name")String name ,@Param("gender")Short gender,@Param("begin")LocalDate begin, @Param("end")LocalDate end);
```
### tips:
MybatisX是一款基于IDEA的快速开发Mybatis的插件，为效率而生

    说明

        使用注解还是xml形式，取决于团队，简单的sql使用注解，复杂的建议用xml

## 十、动态sql
### if····where
 通过if标签，判断条件是否成立。test属性限定条件，如果条件为true，则拼接sql

    1、if····where
```xml
    <select id="getByIf" resultType="com.ttt.pojo.Emp">
        select * from emp where
        <if test="name != null">
            name like concat('%',#{name},'%')
        </if>
        <if test="gender != null">
            and gender = #{gender}
        </if>
        <if test="begin != null and end!=null">
            and entrydate between #{begin} and #{end} order by update_time desc
        </if>

    </select>
```
        此时测试，但是name为null的时候，后面条件成立会拼接一个and，若都不成立，多余where报语法错误

            通过where标签来替代where

                相当于where的作用

                会自动去除多余的and或者or

                若所有条件不成立，则不会生成where
```xml
<select id="getByIf" resultType="com.ttt.pojo.Emp">
    select * from emp
    <where>
        <if test="name != null">
            name like concat('%',#{name},'%')
        </if>
        <if test="gender != null">
            and gender = #{gender}
        </if>
        <if test="begin != null and end!=null">
            and entrydate between #{begin} and #{end} order by update_time desc
        </if>
    </where>
</select>
```
![image](/img/java/mybatis/12-动态sql--where.png)

    2、if····set
```xml
 <update id="update">
        update emp  set
            <if test="username!=null">username=#{username},</if>
            <if test="password!=null">password=#{password},</if>
            <if test="name!=null">name=#{name},</if>
            <if test="gender!=null">gender=#{gender},</if>
            <if test="image!=null">image=#{image},</if>
            <if test="job!=null">job=#{job}</if>
            <if test="entrydate!=null">entrydate=#{entrydate},</if>
            <if test="deptId!=null">dept_id=#{deptId},</if>
            <if test="createTime!=null">create_time=#{createTime},</if>
            <if test="updateTime!=null">update_time=#{updateTime}</if>
            where id = #{id}
    </update>
```

        此时测试，会出现最后一个条件多余一个逗号，报语法错误

            通过set标签来替代set

                相当于set的作用

                会自动去除多余的逗号
```xml
 <update id="update">
        update emp
        <set>
            <if test="username!=null">username=#{username},</if>
            <if test="password!=null">password=#{password},</if>
            <if test="name!=null">name=#{name},</if>
            <if test="gender!=null">gender=#{gender},</if>
            <if test="image!=null">image=#{image},</if>
            <if test="job!=null">job=#{job}</if>
            <if test="entrydate!=null">entrydate=#{entrydate},</if>
            <if test="deptId!=null">dept_id=#{deptId},</if>
            <if test="createTime!=null">create_time=#{createTime},</if>
            <if test="updateTime!=null">update_time=#{updateTime}</if>
            where id = #{id}
        </set>
    </update>
```

### foreach
    用于多个相同条件循环遍历

        collection:遍历的集合

        item:遍历出来的元素

        separator:分隔符

        open:遍历开始前拼接的sql片段

        close:遍历结束后拼接的sql片段
      
```java
// 接口
 // 批量删除数据
    public void deleteByIds(List<Integer> list);
```
```xml
<delete id="deleteByIds">
    delete from emp where id in
    <foreach collection="list" item="id" separator="," open="(" close=")">
        #{id}
    </foreach>
</delete>

```
```java
// 测试
@Test
public void testDeleteByIds(){
    List<Integer> ids = Arrays.asList(21,23);
    empMapper.deleteByIds(ids);
}
```
    注意：使用ids会报错

        在mybatis 中，当 Mapper传入的是 List 参数时,会自动将参数封装成 Map 参数,而 map中的 key 会自动用 list , value 就是你传入的 List 参数。

    解决

        第一种: 将 List 参数封装为 Map 然后再传入,在 XML 配置页面写上相应 key 值

        第二种: 将 collection 的值修改为 list

### sql和include
    为解决sql代码重复冗余的问题，sql负责抽取sql代码，include负责插入抽取的代码
```xml

 <!--抽取sql片段-->
    <sql id="commonSelect">
        select id,username, password, name ,gender ,image ,job ,entrydate, dept_id ,create_time, update_time
        from emp
    </sql>

<select id="getByIf" resultType="com.ttt.pojo.Emp">
<!-- 使用抽取的sql语句 -->
        <include refid="commonSelect" />
        <where>
            <if test="name != null">
                name like concat('%',#{name},'%')
            </if>
            <if test="gender != null">
                and gender = #{gender}
            </if>
            <if test="begin != null and end!=null">
                and entrydate between #{begin} and #{end} order by update_time desc
            </if>
        </where>
    </select>
```

## 十一、案例
### 环境准备
    一、数据库准备:新建数据库tlias，新建部门和员工表
```js
-- 部门管理
create table dept(
    id int unsigned primary key auto_increment comment '主键ID',
    name varchar(10) not null unique comment '部门名称',
    create_time datetime not null comment '创建时间',
    update_time datetime not null comment '修改时间'
) comment '部门表';

insert into dept (id, name, create_time, update_time) values(1,'学工部',now(),now()),(2,'教研部',now(),now()),(3,'咨询部',now(),now()), (4,'就业部',now(),now()),(5,'人事部',now(),now());



-- 员工管理(带约束)
create table emp (
  id int unsigned primary key auto_increment comment 'ID',
  username varchar(20) not null unique comment '用户名',
  password varchar(32) default '123456' comment '密码',
  name varchar(10) not null comment '姓名',
  gender tinyint unsigned not null comment '性别, 说明: 1 男, 2 女',
  image varchar(300) comment '图像',
  job tinyint unsigned comment '职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师',
  entrydate date comment '入职时间',
  dept_id int unsigned comment '部门ID',
  create_time datetime not null comment '创建时间',
  update_time datetime not null comment '修改时间'
) comment '员工表';

INSERT INTO emp
	(id, username, password, name, gender, image, job, entrydate,dept_id, create_time, update_time) VALUES
	(1,'jinyong','123456','金庸',1,'1.jpg',4,'2000-01-01',2,now(),now()),
	(2,'zhangwuji','123456','张无忌',1,'2.jpg',2,'2015-01-01',2,now(),now()),
	(3,'yangxiao','123456','杨逍',1,'3.jpg',2,'2008-05-01',2,now(),now()),
	(4,'weiyixiao','123456','韦一笑',1,'4.jpg',2,'2007-01-01',2,now(),now()),
	(5,'changyuchun','123456','常遇春',1,'5.jpg',2,'2012-12-05',2,now(),now()),
	(6,'xiaozhao','123456','小昭',2,'6.jpg',3,'2013-09-05',1,now(),now()),
	(7,'jixiaofu','123456','纪晓芙',2,'7.jpg',1,'2005-08-01',1,now(),now()),
	(8,'zhouzhiruo','123456','周芷若',2,'8.jpg',1,'2014-11-09',1,now(),now()),
	(9,'dingminjun','123456','丁敏君',2,'9.jpg',1,'2011-03-11',1,now(),now()),
	(10,'zhaomin','123456','赵敏',2,'10.jpg',1,'2013-09-05',1,now(),now()),
	(11,'luzhangke','123456','鹿杖客',1,'11.jpg',5,'2007-02-01',3,now(),now()),
	(12,'hebiweng','123456','鹤笔翁',1,'12.jpg',5,'2008-08-18',3,now(),now()),
	(13,'fangdongbai','123456','方东白',1,'13.jpg',5,'2012-11-01',3,now(),now()),
	(14,'zhangsanfeng','123456','张三丰',1,'14.jpg',2,'2002-08-01',2,now(),now()),
	(15,'yulianzhou','123456','俞莲舟',1,'15.jpg',2,'2011-05-01',2,now(),now()),
	(16,'songyuanqiao','123456','宋远桥',1,'16.jpg',2,'2007-01-01',2,now(),now()),
	(17,'chenyouliang','123456','陈友谅',1,'17.jpg',NULL,'2015-03-21',NULL,now(),now());
```

    二、创建springboot工程，引入对应的依赖（web、mybatis、mysql驱动、lombok）

    三、配置applicatin.properties中引入mybatis配置信息
```java
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql:///tlias
spring.datasource.username=root
spring.datasource.password=123456
#??mybatis?????????????
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl

#??mybatis???????????
mybatis.configuration.map-underscore-to-camel-case=true
```

    四、准备对应的实体类
```java
//员工实体类
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Emp {
    private Integer id;
    private String username;
    private String password;
    private String name;
    private Short gender;
    private String image;
    private Short job;
    private LocalDate entrydate;
    private Integer deptId;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}

//部门实体类
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dept {
    private Integer id;
    private  String name;
    private LocalDate createTime;
    private LocalDate updateTime;
}

```

    五、准备对应的Mapper、Service（接口实体类）、Controller基础结构

![image](/img/java/mybatis/13-案例结构目录.png)

### 开发规范-Restful
    一、REST(REpresentational State Transfer)表述性状态转换，是一种软件架构风格

![image](/img/java/mybatis/14-传统风格和REST风格.png)

    二、好处：简介、规范、优雅

    三、注意：

        REST是风格，是约定方式，约定不是规定，可以打破

        描述模块的功能通常使用复数，即加s的格式来描述，表示此类资源，而非单个资源。如：users、emps....

### 开发规范-统一响应结果
```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    private Integer code;//响应码，1 代表成功; 0 代表失败
    private String msg;  //响应信息 描述字符串
    private Object data; //返回的数据

    //增删改 成功响应
    public static Result success(){
        return new Result(1,"success",null);
    }
    //查询 成功响应
    public static Result success(Object data){
        return new Result(1,"success",data);
    }
    //失败响应
    public static Result error(String msg){
        return new Result(0,msg,null);
    }
}
```


### 日志输出
```java
// slf4j下的Logger
private  static Logger log = LoggerFactory.getLogger(DeptController.class);

// 上面的代码可以使用注解来代替@Slf4j

```

### 部门管理
    一、查询部门

        （一）思路
![image](/img/java/mybatis/15-部门查询流程.png)

        （二）实现

            1、在DeptController.java中向DeptService请求，快捷键生成对应的DeptService.java的接口
```java
@Slf4j
@RestController
public class DeptController {
    @Autowired  //代理
    private DeptService deptService;
    //private  static Logger log = LoggerFactory.getLogger(DeptController.class);
    //@RequestMapping(value = "/depts",method = RequestMethod.GET)
    //衍生注解
    @GetMapping("/depts")
    public Result list(){
        //输出日志消息
        log.info("查询成功");
        //调用service查询部门
        List<Dept> deptList = deptService.list();
        //响应
        return Result.success(deptList);
    }
}
```
```java
public interface DeptService {

    List<Dept> list();
}
```

            2、在DeptServiceImpl.java实现类中调用mapper接口查询
```java
@Service
public class DeptServiceImpl implements DeptService {
    @Autowired
    private DeptMapper deptMapper;
    @Override
    public List<Dept> list() {
        return deptMapper.list();
    }
}
```

            3、在DeptMapper.java中向数据库查询数据，最后一步一步的返回
```java
@Mapper
public interface DeptMapper {
    @Select("select * from dept")
    List<Dept> list();
}

```
            4、postman测试

            5、和前端联调


    二、删除部门

       （一）思路
![image](/img/java/mybatis/16-部门删除流程.png)

       （二）实现

            1、在DeptController.java中向DeptService请求，快捷键生成对应的DeptService.java的接口
```java
@DeleteMapping("/depts/{id}")
    public Result delete(@PathVariable Integer id){
        log.info("删除成功,id为："+id);
        deptService.delete(id);
        return Result.success();
    }
```
```java
void delete(Integer id);
```

            2、在DeptServiceImpl.java实现类中调用mapper接口查询
```java
 @Override
    public void delete(Integer id) {
        deptMapper.delete(id);
    }
```

            3、在DeptMapper.java中向数据库查询数据，最后一步一步的返回
```java
@Delete("delete from dept where id = #{id}")
    void delete(Integer id);
```
            4、postman测试

            5、和前端联调


    三、
1、

2、

3、

4、
