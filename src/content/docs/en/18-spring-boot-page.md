---
title: "spring-boot"
description: "spring-boot中的相关知识"
---

## 一、概念
是一套框架，可以帮助我们非常快速的构建应用程序、简化开发、提高效率。官网 https://spring.io/projects/spring-boot

## 二、快速入门
### 搭建一个项目
    1、选择spring initializr
![image](/img/java/springBoot/01-项目搭建1.png)


    2、选择依赖和对应的版本

![image](/img/java/springBoot/02-项目搭建2.png)

    3、等待项目构建，删除不必要的文件

### 测试项目
    1、定义一个类，添加方法
```java
package com.ttt.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//处理请求
@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String hello(){
        System.out.println("Hello spring~");
        return "Hello spring~";
    }
}
```

    2、测试---运行启动类---在浏览器访问http://localhost:8080/hello
，浏览器可以看到内容，并且控制台也能看到内容
![image](/img/java/springBoot/03-简单的入门项目.png)

## 三、http协议

### 概述
    超文本传输协议（Hyper Text Transfer Protocol），规定了浏览器和服务器之间数据传输的规则

    特点：

        基于TCP协议：面向连接，安全

        基于请求-响应模型的：一次请求对应一次响应

        HTTP协议是无状态的协议：对于事务处理没有记忆能力。每次请求-响应都是独立的

                缺点：多次请求间不能共享数据

                优点：速度快

### 请求协议
    请求数据图

![image](/img/java/springBoot/04-请求数据图.png)

    get和post的区别

        get请求参数在请求行汇总，没有请求体，会通过?携带在url中，多个用&连接请求大小是限制的

        post请求参数式在请求体中，请求大小是没有限制的

    请求数据格式

Host|请求的主机名
-|:-:
User-Agent	    | 浏览器版本。 例如Chrome浏览器的标识类似Mozilla/5.0  ,用于浏览器兼容处理      
Accept	        | 表示浏览器能接收的资源类型   如text/*,image/* ， */*表示所有     
Accept-Language	| 表示浏览器偏好的语言，服务器可以据此返回不同语言的网页        
Accept-Encoding | 表示浏览器可以支持的压缩类型。 例如gzip,deflate等      
Content-Type	| 请求主体的数据类型
Content-Length	| 请求主体的大小（单位：字节） 



### 响应协议
    响应数据图

![image](/img/java/springBoot/05-响应数据图.png)

    响应状态码

状态码|含义
-|:-:
1xx	 | 响应中---临时状态码，表示请求已经接收，告诉客户端应该继续请求或者如果它已经完成则忽略它   
2xx	 | 成功---表示请求已经被成功接收，处理已完成   
3xx	 | 重定向---重定向到其他地方；让客户端再发起一次请求以完成整个处理       
4xx  | 客户端错误---处理发生错误，责任在客户端。如：请求了不存在的资源、客户端未被授权、禁止访问等      
5xx	 | 服务器错误---处理发生错误，责任在服务端。如：程序抛出异常等

    响应数据格式

格式|格式的含义
-|:-:
Content-Type	 | 表示该响应内容的类型，例如text/html,application/json
Content-Length	 | 表示该响应内容的长度（字节数）   
Content-Encoding | 表示响应压缩算法，例如gzip      
Cache-Control    | 指示客户端应如何缓存，例如max-age=300表示可以最多缓存300秒   
Set-Cookie	     | 告诉浏览器为单前页面所在的域设施cookie


### 请求响应

    1、请求（HttpServletRequest）：获取请求数据

    2、响应(HttpServletResponse)：设置响应数据

## 四、请求参数

### 简单参数
```java

// 使用HttpServletRequest获取请求数据
package com.ttt.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
@RestController
public class RequestController {
    @RequestMapping("/simpleParam")
    public String simpleParam(HttpServletRequest request) {
       String name = request.getParameter("name");
       String ageStr = request.getParameter("age");
       int age = Integer.parseInt(ageStr);
       System.out.println(name+":"+age);
       return "200";
    }
}

```
```java
// 通过spring boot 来获取请求
package com.ttt.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
@RestController
public class RequestController {
    @RequestMapping("/simpleParam")
    public String simpleParam(String name,Integer age) {
        System.out.println(name+":"+age);
        return "200";
    }
}
```
              使用Postman测试，get请求直接拼接，post参数写在body里面。参数和传参可以不一样，但是需要@RequestParam来指定参数对应的传参名字

              @RequestParam中的required属性默认为true，代表该请求参数必须传递，如果不传递将报错。如果该参数式可选的，可以将requeired属性设置为false
```java
@RestController
public class RequestController {

    @RequestMapping("/simpleParam")
    //@RequestParam(name = "name（请求参数名）")String username之间没有空格
    //@RequestParam中的required属性默认为true，代表该请求参数必须传递，如果不传递将报错。如果该参数式可选的，可以将requeired属性设置为false
    public String simpleParam(@RequestParam(name = "name")String username, Integer age) {
        System.out.println(username+":"+age);
        return "200";
    }
}
```

    3、总结
![image](/img/java/springBoot/06-请求学习总结.png)

### 实体参数
    1、简单实体对象：请求参数名与形参对象属性名相同，定义POJO接收即可
```java
// 实体
package com.ttt.pojo;

public class User {
    private String name;
    private Integer age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}


//    实体参数
//    注意：请求的参数和传参要对应一致
    @RequestMapping("simplePojo")
    public String simplePojo(User user){
        System.out.println(user);//User{name='t', age=10}
        return "ok";
    }
```
    2、复杂实体参数，嵌套的继续创建实体
```java
// 实体

// User
package com.ttt.pojo;

public class User {
    private String name;
    private Integer age;
    private  Address address;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", address=" + address +
                '}';
    }
}

// Address
package com.ttt.pojo;

public class Address {
    private String provice;
    private  String city;

    public String getProvice() {
        return provice;
    }

    public void setProvice(String provice) {
        this.provice = provice;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Address{" +
                "provice='" + provice + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}



// 复杂的实体参数
    //    复杂实体参数
//    注意：请求的参数和传参要对应一致
    @RequestMapping("complexPojo")
    public String complexPojo(User user){
        System.out.println(user);//User{name='tt', age=20, address=Address{provice='广东', city='深圳'}}
        return "ok";
    }
```

### 数组集合参数
    1、数组参数：请求参数名与形参数组名称相同其请求参数为多个，定义数组类型形参即可接受参数
```java
   //  数组参数
   //  注意：请求的参数和传参要对应一致
    @RequestMapping("/arrayParam")
    public String arrayParam(String[] hobby) {
        System.out.println(Arrays.toString(hobby));//[跑步, 吃饭, 睡觉]
        return "ok";
    }
```

    2、集合参数：请求参数名与形参集合名称相同且请求参数为多个，@RequestParam绑定参数关系
```java
//  集合参数
    //  注意：请求的参数和传参要对应一致;@RequestParam
    @RequestMapping("/listParam")
    public String listParam(@RequestParam List<String> hobby) {
        System.out.println(hobby);//[跑步, 吃饭, 睡觉]
        return "ok";
    }
```
### 日期参数
    请求的参数和传参要对应一致;@DateTimeFormat:pattern(指定日期格式)
```java
    //  日期参数
    //  注意：请求的参数和传参要对应一致;@DateTimeFormat:pattern(指定日期格式)
    @RequestMapping("/dateParam")
    public String dateParam(@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime localDateTime) {
        System.out.println(localDateTime);//2023-03-29T11:54:23
        return "ok";
    }
```
### json参数
    json数据键名与形参对象属性名相同，定义POJO类型形参即可接受参数，需要使用@RequestBody标识
```java
//  json参数
    //  注意：@RequestBody
    @RequestMapping("/jsonParam")
    public String jsonParam(@RequestBody User user) {
        System.out.println(user);//User{name='tt', age=20, address=Address{provice='广东', city='深圳'}}
        return "ok";
    }
```
```js
// 在postman中的body中的row(选择json)输入要传的json参数
{
    "name":"tt",
    "age":20,
    "address":{
        "provice":"广东",
        "city":"深圳"
    }
}
```
### 路径参数
    通过请求url直接传递参数，使用{...}来标识该路径参数，需要使用@PathVariable获取路径参数

    1、单个路径参数
```java
 //  路径参数
    //  注意：请求的参数和传参要对应一致;@PathVariable
    @RequestMapping("/path/{id}")
    public String path(@PathVariable Integer id) {
        System.out.println(id);//输入几就是几
        return "ok";
    }
```
    2、多个路径参数
```java
//  路径参数
    //  注意：请求的参数和传参要对应一致;@PathVariable
    @RequestMapping("/paths/{id}/{name}")
    public String paths(@PathVariable Integer id,@PathVariable String name) {
        System.out.println(id+" "+name);
        return "ok";
    }
```

### 总结
![image](/img/java/springBoot/08-参数使用的总结.png)


## 五、响应数据
    1、即浏览器接受到服务器发送的数据给服务器作出的一种反应，让服务器知道浏览器已经接受到了。主要通过@ResponseBody注解来实现

            (1)、类型：方法注解、类注解

            (2)、位置：Controller方法上/类上

            (3)、作用：将方法返回值直接响应，如果返回值类型是 实体对象/集合，将会转为json格式响应

            (4)、说明：@RestController = @Controller + @ResponseBody
```java
//响应回字符串
    @RequestMapping("/hello")
    public String hello(){
        return "hello";
    }
    //响应数组
    @RequestMapping("/addStr")
    public Address addStr(){
        Address address = new Address();
        address.setProvice("广东");
        address.setCity("深圳");
        return address;
    }
    //响应回json
    @RequestMapping("/listAddr")
    public List<Address> listAddr(){
        List<Address> objects = new ArrayList<>();

        Address address = new Address();
        address.setProvice("广东");
        address.setCity("深圳");

        Address address1 = new Address();
        address1.setProvice("湖南");
        address1.setCity("长沙");
        objects.add(address);
        objects.add(address1);
        return objects;
    }
```
```js
// 对应的响应结果
hello


{
    "provice": "广东",
    "city": "深圳"
}


[
    {
        "provice": "广东",
        "city": "深圳"
    },
    {
        "provice": "湖南",
        "city": "长沙"
    }
]
```

### 统一响应结果
![image](/img/java/springBoot/09-统一响应结果返回给前端.png)
1、封装统一响应结果
```java
package com.ttt.pojo;

/**
 * 统一响应结果封装
 */
public class Result {
    private Integer code;//1、成功  0、失败
    private String msg;//提示信息
    private Object data;//数据data
    public Result(){

    }
    public Result(Integer code ,String msg,Object data){
        this.code=code;
        this.msg=msg;
        this.data=data;
    }
    public Integer getCode(){
        return code;
    }
    public void setCode(Integer code){
        this.code=code;
    }
    public String getMsg(){
        return msg;
    }
    public void setMsg(String msg){
        this.msg=msg;
    }
    public Object getData(){
        return data;
    }
    public void setData(Object data){
        this.data=data;
    }
    public static Result success(Object data){
        return new Result(1,"success",data);
    }
    public static Result success(){
        return new Result(1,"success",null);
    }
    public static Result error(String msg){
        return new Result(0,msg,null);
    }

    @Override
    public String toString() {
        return "Result{" +
                "code=" + code +
                ", msg='" + msg + '\'' +
                ", data=" + data +
                '}';
    }
}

```

2、改造请求返回值
```java
//响应回字符串
    @RequestMapping("/hello")
    public Result hello(){
        //return "hello";
        //return new Result(1,"success","hello");
        return Result.success("hello");
    }
    //响应数组
    @RequestMapping("/addStr")
    public Result addStr(){
        Address address = new Address();
        address.setProvice("广东");
        address.setCity("深圳");
        //return address;
        //return new Result(1,"success",address);
        return Result.success(address);

    }
    //响应回json
    @RequestMapping("/listAddr")
    public Result listAddr(){
        List<Address> objects = new ArrayList<>();

        Address address = new Address();
        address.setProvice("广东");
        address.setCity("深圳");

        Address address1 = new Address();
        address1.setProvice("湖南");
        address1.setCity("长沙");
        objects.add(address);
        objects.add(address1);
        //return objects;
        //return new Result(1,"success",objects);
        return Result.success(objects);
    }
```

3、响应结果展示
```js
{
    "code": 1,
    "msg": "success",
    "data": "hello"
}

{
    "code": 1,
    "msg": "success",
    "data": {
        "provice": "广东",
        "city": "深圳"
    }
}

{
    "code": 1,
    "msg": "success",
    "data": [
        {
            "provice": "广东",
            "city": "深圳"
        },
        {
            "provice": "湖南",
            "city": "长沙"
        }
    ]
}
```
### 总结
![image](/img/java/springBoot/10-统一响应结果总结.png)

## 六、postman
    是一款功能强大的网页调试与发送网页HTTP请求的Chrome插件

    作用：常用于进行接口测试

![image](/img/java/springBoot/07-postman的使用图解.png)

## 七、实践
    需求:获取员工数据，返回统一响应结果，在页面渲染展示

    加载并解析emp.xml文件中的数据，完成数据处理，并在页面展示

        1、在pom.xml文件中引入dom4j的依赖，用于解析XML文件

        2、引入资料中提供的解析XML的工具类XMLParserUtils、对应的实体类Emp、XML文件emp.xml

        3、引入资料中提供的静态页面文件，放在resources下的static目录下

        4、编写Controller程序，处理请求，响应数据

```java
// 用于解析xml文件的工具----
package com.ttt.utils;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import java.io.File;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.List;

public class XmlParserUtils {
    public static <T> List<T> parse(String file,Class<T> targetClass){
        //封装解析出来的数据
        ArrayList<T> list = new ArrayList<T>();
        try {
            //1、获取一个解析器对象
            SAXReader saxReader = new SAXReader();
            //2、利用解析器把xml文件加载到内存中，并返回一个文档对象
            Document document  = saxReader.read(new File(file));
            //3、获取到根标签
            Element rootElement = document.getRootElement();
            //4、通过根标签来获取user标签
            List<Element> elements = rootElement.elements("emp");
            //5、遍历集合，得到每一个user标签
            for(Element element:elements){
                //获取name属性
                String name = element.element("name").getText();
                //获取age属性
                String age = element.element("age").getText();
                //获取image属性
                String image = element.element("image").getText();
                //获取gender属性
                String gender = element.element("gender").getText();
                //获取job属性
                String job = element.element("job").getText();
                Constructor<T> constructor = targetClass.getDeclaredConstructor(String.class,Integer.class,String.class,String.class,String.class);
                constructor.setAccessible(true);
                T object = constructor.newInstance(name,Integer.parseInt(age),image,gender,job);

                list.add(object);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}


```
```js
// emp.xml文件
<?xml version="1.0" encoding="UTF-8"?>
<!--<beans xmlns="http://www.springframework.org/schema/beans"-->
<!--       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"-->
<!--       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">-->

<!--</beans>-->
<emps>
    <emp>
        <name>金茂</name>
        <age>55</age>
        <image>https://web-framework.oss-cn-hangzhou.aliyuncs.com/web/1.jpg</image>
        <gender>1</gender>
        <!--1:讲师 2：班主任  3：就业导师        -->
        <job>1</job>
    </emp>
    <emp>
        <name>福旺</name>
        <age>30</age>
        <image>https://web-framework.oss-cn-hangzhou.aliyuncs.com/web/2.jpg</image>
        <gender>1</gender>
        <!--1:讲师 2：班主任  3：就业导师        -->
        <job>2</job>
    </emp>
    <emp>
        <name>许晴</name>
        <age>33</age>
        <image>https://web-framework.oss-cn-hangzhou.aliyuncs.com/web/3.jpg</image>
        <gender>2</gender>
        <!--1:讲师 2：班主任  3：就业导师        -->
        <job>3</job>
    </emp>
    <emp>
        <name>花花</name>
        <age>50</age>
        <image>https://web-framework.oss-cn-hangzhou.aliyuncs.com/web/4.jpg</image>
        <gender>2</gender>
        <!--1:讲师 2：班主任  3：就业导师        -->
        <job>2</job>
    </emp>
</emps>

```
```java
// Controller程序，处理请求，响应数据
package com.ttt.controller;

import com.ttt.pojo.Emp;
import com.ttt.pojo.Result;
import com.ttt.utils.XmlParserUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmpController {
    @RequestMapping("/listEmp")
    public Result list(){
        //1、解析xml文件---工具
        //动态加载路径资源emp.xml
        String file = this.getClass().getClassLoader().getResource("emp.xml").getFile();
        List<Emp> empList = XmlParserUtils.parse(file, Emp.class);

        //2、转换数据，男女性别，职位等
        //用stream流来处理
        empList.stream().forEach(emp -> {
            //处理性别
            String gender = emp.getGender();
            if("1".equals(gender)){
                emp.setGender("男");
            }else if("2".equals(gender)){
                emp.setGender("女");
            }
            //处理工作1:讲师 2：班主任  3：就业导师
            String job = emp.getJob();
            if("1".equals(job)){
                emp.setJob("讲师");
            }else if("2".equals(job)){
                emp.setJob("班主任");
            }else if("3".equals(job)){
                emp.setJob("就业导师 ");
            }
        });



        //3、将解析的内容作为结果返回给浏览器

        return Result.success(empList);
    }
}

```
前端代码略
![image](/img/java/springBoot/11-实践结果.png)

    （可自行了解）出现的知识点解析xml文件的依赖dom4j，stream()：可以把Stream流看作是遍历数据集合的一个高级迭代器

## 八、三层架构
### 三层是什么
![image](/img/java/springBoot/13-分层原理和职责.png)

    1、三层 

        （1）controller:控制层,接受前端发送的请求，对请求进行处理，并响应数据

        （2）service:业务逻辑层，处理具体的业务逻辑

        （3）dao:数据访问层（Data Access Object）/持久层，负责数据访问操作，包括数据的增删改查

                接口：因为数据来源可能是文件的解析、数据库里面的数据 或者 第三方提供的接口，因此数据层的操作用接口才能达到多方数据来源不同的灵活性

                实现类：后期维护的时候如果要修改功能只需要修改实现类里面的那个代码，而不需要修改其他包的代码

        **思考**：为什么数据层和业务层需要接口和实现类，将接口和实现类写在一起不可以吗？

    2、优势：

        （1）结构清晰，耦合度低

        （2）可维护性高，可扩展性高

        （3）利于开发任务同步进行，容易适应需求变化

    3、将第七点中的代码进行分层

        （1）数据访问层
```java
// 接口
package com.ttt.dao;

import com.ttt.pojo.Emp;

import java.util.List;

/**
 * 因为数据来源可能是文件的解析、数据库里面的数据 或者 第三方提供的接口，因此数据层的操作用接口才能达到多方数据来源不同的灵活性
 */
public interface EmpDao {
    //获取员工列表数据
    public List<Emp> listEmp();
}



// 实现类
package com.ttt.dao.impl;

import com.ttt.dao.EmpDao;
import com.ttt.pojo.Emp;
import com.ttt.utils.XmlParserUtils;

import java.util.List;

public class EmpDaoA implements EmpDao {
    @Override
    public List<Emp> listEmp() {
        //1、解析xml文件---工具
        //动态加载路径资源emp.xml
        String file = this.getClass().getClassLoader().getResource("emp.xml").getFile();
        List<Emp> empList = XmlParserUtils.parse(file, Emp.class);
        return empList;
    }
}

```

        （2）业务层
```java
// 接口
package com.ttt.service;

import com.ttt.pojo.Emp;

import java.util.List;

public interface EmpService {
    //获取员工列表
    public List<Emp> listEmp();
}



// 实现类
package com.ttt.service.impl;

import com.ttt.dao.impl.EmpDaoA;
import com.ttt.pojo.Emp;
import com.ttt.service.EmpService;

import java.util.List;

public class EmpServiceA implements EmpService {
    private EmpDaoA empDaoA = new EmpDaoA();
    @Override
    public List<Emp> listEmp() {
        //1、调用dao,获取数据
        List<Emp> empList = empDaoA.listEmp();
        //2、转换数据，男女性别，职位等
        //用stream流来处理
        empList.stream().forEach(emp -> {
            //处理性别
            String gender = emp.getGender();
            if("1".equals(gender)){
                emp.setGender("男");
            }else if("2".equals(gender)){
                emp.setGender("女");
            }
            //处理工作1:讲师 2：班主任  3：就业导师
            String job = emp.getJob();
            if("1".equals(job)){
                emp.setJob("讲师");
            }else if("2".equals(job)){
                emp.setJob("班主任");
            }else if("3".equals(job)){
                emp.setJob("就业导师 ");
            }
        });

        return empList;
    }
}

```

        （1）控制层
```java
package com.ttt.controller;

import com.ttt.pojo.Emp;
import com.ttt.pojo.Result;
import com.ttt.service.EmpService;
import com.ttt.service.impl.EmpServiceA;
import com.ttt.utils.XmlParserUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmpController {
    private EmpService empService = new EmpServiceA();
    @RequestMapping("/listEmp")
    public Result list(){
        //1、调用service获取数据
        List<Emp> empList = empService.listEmp();

        //3、将解析的内容作为结果返回给浏览器
        return Result.success(empList);
    }
  
}
```

### 分层解耦
    1、内聚：软件中各个功能模块内部的功能联系

    2、耦合：衡量软件中各个层/模块之间的依赖、关联的程度   依赖程度越高，耦合度越高

    3、软件设计模式：高内聚，低耦合

    4、若想做到高内聚低耦合，就需要借助一个容器来存储实现类，控制层通过去容器中查找想要的实现类，因此就出现了控制反转（IOC）和依赖注入(DI)

        （1）控制反转

                Inversion Of Control，简称IOC。对象的创建控制权由程序自身转移到外部（容器），这种思想称为控制反转

注解|说明|位置
-|:-:|:-:
@Component	 | 声明bean的基础注解    | 不属于一下三类时，用此注解
@Controller	 | @Component的衍生注解  | 标注在控制器类上
@Service	 | @Component的衍生注解  | 标注在业务类上
@Repository  | @Component的衍生注解  | 标注在数据访问类上（由于与mybatis整合，用的少）  

                注意：

                        声明bean的时候，可以通过value属性指定bean的名字，如果没有指定，默认为类名首字母小写

                        使用以上四个注解都可以声明bean，但是在springboot集成web开发中，声明控制器bean只能用@Controller

        （2）依赖注入

                Dependency Injection，简称DI。容器为应用程序提供运行时，所依赖的资源，称之为依赖注入。

                @Autowired注解，默认是按照类型进行，如果存在多个相同类型的bean，将会报错。解决方式如下：

                        @Primary 配合控制反转使用。如出现两个实现类，此时可以用这个注解来确定使用那个实现类

                        @Qualifier  配合@Autowired使用。 @Qualifier("首字母小写的实现类的类名")

                        @Resource 和@Autowired注解一样的位置，单独使用，通过name指定实现类的类名（首字母小写）@Resource(name="empServiceB")

                @Autowired和@Resource的区别

                        @Autowired是spring框架提供的注解，而@Resource是JDK提供的注解

                        @Autowired默认是按照类型注入，而@Resource默认是按照名称注入

        （3）Bean对象

                IOC容器中创建、管理的对象，称之为bean


        （4）Bean组件扫描

                前面声明bean的四大注解，要想生效，还需要被组件扫描注解@ComponentScan扫描

                @ComponentScan注解虽然没有显示配置，但是实际上已经包含在启动类声明注解@SpringBootApplication中，默认扫描的范围是启动类所在包及其子包

![image](/img/java/springBoot/14-Bean组件扫描.png)



    5、在三层模式的案例中进行解耦实践

        （1）service和dao层的实现类，交给IOC容器管理，使用注解@Component
```java
@Component  //将单前类交给IOC容器管理，成为IOC容器中的bean
public class EmpServiceA implements EmpService {...}

```
```java
@Component  //将单前类交给IOC容器管理，成为IOC容器中的bean
public class EmpDaoA implements EmpDao {...}
```

        （2）为controller及service注入运行时，依赖的对象.使用注解@Autowired
```java
@Component  //将单前类交给IOC容器管理，成为IOC容器中的bean
public class EmpServiceA implements EmpService {
    @Autowired //运行时，IOC容器会提供该类型的bean对象，并赋值给该变量——依赖注入
    private EmpDaoA empDaoA ;
    ...
}
```
```java
@RestController
public class EmpController {
    @Autowired //运行时，IOC容器会提供该类型的bean对象，并赋值给该变量——依赖注入
    private EmpService empService;
    @RequestMapping("/listEmp")
    ...
}

```

        （3）运行测试

                如果后期中用到的是EmpServiceD，而不是EmpServiceA实现类，只需要将EmpServiceA里面的注解@Component注释，给EmpServiceD加上就可以了，而这就实现了解耦（脱离联系，又能很快的建立联系）
