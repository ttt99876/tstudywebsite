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
// 创建表
CREATE table user(
  id INT PRIMARY KEY PRIMARY KEY,
	name VARCHAR(100),
	age int,
	gender int, 
	phone VARCHAR(11)
)
// 插入数据
INSERT into user VALUES(1,'ttt',18,1,18888888888),(2,'ttt1',20,1,18799999999),(3,'ttt2',22,1,18977777777);
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


###

###

###

## 增删改查


## 动态sql