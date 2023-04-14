---
title: "java之properties文件配置"
description: "java之properties文件配置中的相关知识"
---

## 数据库配置
```xml
#数据库配置
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql:///tlias
spring.datasource.username=root
spring.datasource.password=123456
```
## 输出日志的位置
```xml
#指定mybatis输出日志的位置，输出控制台
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```

## 驼峰命名自动映射
```xml
#开启mybatis的驼峰命名自动映射开关
mybatis.configuration.map-underscore-to-camel-case=true
```

## 循环依赖默认禁止
```xml
#循环依赖默认禁止。 设置为 true，来自动中断循环。
spring.main.allow-circular-references=true
```

## 设置文件上传的大小
```xml
#配置单个文件最大上传大小
spring.servlet.multipart.max-file-size=10MB

#配置单个请求最大上传大小（一次请求可以上传多个文件）
spring.servlet.multipart.max-request-size=100MB
```