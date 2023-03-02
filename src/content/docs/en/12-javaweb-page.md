---
title: "javaWeb"
description: "javaWeb的一系列知识"
---
javaWeb是用Java技术来解决相关web互联网领域的技术栈，等学会后可以自己搭建类似于京东的网站
![image](/img/java/javaWeb/01.png)

## 一、Junit单元测试

软件中测测试，有两类：

         **黑盒测试**：输入后看输出的结果是否达到了预期效果，不管中间过程，不需要写代码

         **白盒测试**：输入后看输出的结果是否达到了预期效果，考虑中间过程的逻辑等内容。需要写代码。Junit单元测试属于白盒测试的一种

在平常的测试中，新建一个测试类只能测试一个方法，这样显得很单一，因此就有单元测试junit的出现
![image](/img/java/javaWeb/测试类.png)

### （一）Junit使用（属于白盒测试）

1、定义一个测试类（测试用例）。

         + 类名命名：建议被测试类名+Test；

         + 包名命名：建议xxx.xxx.xx.test

2、定义测试方法。

         + 方法名：建议test+方法名  如testAdd()

         + 返回值：void

         + 参数列表：空参

3、给方法加上注解@Test，可以独立运行

4、导入junit依赖环境，快捷键alt+enter

5、判定结果:

         红色：失败

         绿色：成功

![image](/img/java/javaWeb/单元测试类.png)

因为第5点得知，即使一个不符合预期值的内容输出也会成功，因此不用输出来判断，而用断言来判断，Assert类

![image](/img/java/javaWeb/断言.png)

自行完成对减法的测试
```java
@Test
public void testSub(){
    Calculator c = new Calculator();
    int sub = c.sub(4,1);
    Assert.assertEquals(3,sub);
}
```

### （二）测试的初始和关闭
主要是两个注解的作用@Before（修饰的方法会在测试的方法之前自动执行）和@After（修饰的方法会在测试的方法之后自动执行）

1、初始化
```java
/**
    * 初始化方法
    * 用于资源申请，所有测试方法在执行之前都会先执行该方法
    * 使用注解@Before
*/
@Before
public void init(){
    System.out.println("init...");
}
```

2、关闭
```java
/**
    * 释放资源方法
    * 所有测试方法执行完之后就会来执行这个方法
    * 使用注解@After
*/
@After
public void close(){
    System.out.println("close...");
}
```
![image](/img/java/javaWeb/初始和关闭结果.png)

## 二、反射
是框架设计的灵魂，一般自己写框架需要用到，用别人的框架可以当做了解。其中框架是半成品软件，开发人员在框架的基础上开发引用，能简化开发的代码书写

### （一）概念
将类的各个组成部分封装为其他对象，这就是反射机制
![image](/img/java/javaWeb/反射理解图.png)

### （二）好处

1、可以在程序运行过程中，操作这些对象

2、可以解耦，提高程序的可扩展性

### （三）获取class（字节码文件）对象的方式

1、Class.forName('全类名')： 将字节码文件加载进内存，返回Class对象

        多用于配置文件，将类名定义在配置文件中。读取文件，加载类

2、类名.class:   通过类名的属性class获取

        多用于参数的传递

3、对象.getClass():  getClass（）方法在object类中定义着

        多用于对象的获取字节码的方式

4、总结

同一个字节码文件（*.class）在一次程序运行过程中，只会被加载一次，不论通过哪一种方式获取的Class对象都是同一个
```java
public class ReflectDemo1 {
    /**
     * 1、Class.forName('全类名')： 将字节码文件加载进内存，返回Class对象
     * 2、类名.class:   通过类名的属性class获取
     * 3、对象.getClass():  getClass（）方法在object类中定义着
     */
    public static void main(String[] args) throws ClassNotFoundException {
        //1、Class.forName('全类名')： 将字节码文件加载进内存，返回Class对象
        Class aClass = Class.forName("cn.ttt.domain.Person");
        System.out.println(aClass); //class cn.ttt.domain.Person
        
        //2、类名.class:   通过类名的属性class获取
        Class personClass = Person.class;
        System.out.println(personClass);  //class cn.ttt.domain.Person
        
        //3、对象.getClass():  getClass（）方法在object类中定义着
        Person person = new Person();
        Class aClass1 = person.getClass();
        System.out.println(aClass1); //class cn.ttt.domain.Person

        System.out.println(personClass==aClass1); //true
        
        //添加一个student，获取
        Student student = new Student();
        Class aClass2 = student.getClass();
        System.out.println(aClass2); //class cn.ttt.domain.Student

    }
}
```
### （四）使用class（字节码文件）对象
1、获取功能

         （1）获取成员变量们 

                * Field[] getFields()

                * Field getField(String name)

                * Field[] getDeclaredFields()

                * Field getDeclaredField(String name)

         （2）获取构造方法们 

                * Constructor<?>[] getConstructors()

                * Constructor<T>[] getConstructor(类<?>...parameterTypes)

                * Constructor<T>[] getDeclaredConstructor(类<?>...parameterTypes)

                * Constructor<?>[] getDeclaredConstructors()

         （3）获取成员方法们

                * Method[] getMethods()

                * Method getMethods(String name,类<?>...parameterTypes)

                * Method[] getDeclaredMethods()

                * Method getDeclaredMethods(String name,类<?>...parameterTypes)

         （4）获取类名  

                *

2、

3、

## 三、注解

##


