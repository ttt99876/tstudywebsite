---
title: "myBatis"
description: "myBatis中的相关知识"
---

## 前导
    MyBatis是一款优秀的持久层（也是数据层dao）框架，用于简化JDBC的开发

    官网：https://mybatis.org/mybatis-3/zh/index.html

    与数据库图形化语句相似

## 入门
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


## 配置mysql方言

    选中sql语句，右键，选择make 'list()' default ------ 选择第三个-----搜索mysql-----选中它

![image](/img/java/mybatis/02-配置mysql方言.png)

## 配置数据库的连接

![image](/img/java/mybatis/03-配置数据库.png)

## mybatis和jdbc的区别

![image](/img/java/mybatis/04-mybatis和jdbc的区别.png)

## 数据库连接池
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


## lombok
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



## 增删改查


## 动态sql