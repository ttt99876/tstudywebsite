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




## 增删改查


## 动态sql