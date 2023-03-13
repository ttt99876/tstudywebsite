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

用于配置文件，便于扩展代码

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

         1.1 获取成员变量们 

                * Field[] getFields()  返回包含一个数组 Field对象反射由此表示的类或接口的所有可访问的公共字段 类对象。

![image](/img/java/javaWeb/反射获取成员变量们演示.png)


                * Field getField(String name) 返回一个 Field对象，它反映此表示的类或接口的指定公共成员字段 类对象。 

                * Field[] getDeclaredFields() ：返回的数组 Field对象反映此表示的类或接口声明的所有字段 类对象。 

                * Field getDeclaredField(String name) ：返回一个 Field对象，它反映此表示的类或接口的指定已声明字段 类对象。

![image](/img/java/javaWeb/declaredField方法使用.png)

         1.1.1 Field：成员变量

                * 设置值 void set(Object obj, Object value) ：将指定对象参数上的此 Field对象表示的字段设置为指定的新值。

![image](/img/java/javaWeb/设置成员变量的值.png)

                * 获取值 Object get(Object obj)  ：返回该所表示的字段的值 Field ，指定的对象上。

![image](/img/java/javaWeb/获取成员变量的值.png)

                * 获取值 Object get(Object obj)  ：忽略访问权限修饰符的安全检查，也成暴力反射

         1.2 获取构造方法们 

                * Constructor<?>[] getConstructors()  ：返回包含一个数组 Constructor对象反射由此表示的类的所有公共构造 类对象。 

    通过newInstance方法来创建对象，可以传控制

                * Constructor<T>[] getConstructor(类<?>...parameterTypes)  ：返回一个 Constructor对象，该对象反映 Constructor对象表示的类的指定的公共 类函数。 

                * Constructor<T>[] getDeclaredConstructor(类<?>...parameterTypes)：
返回一个 Constructor对象，该对象反映 Constructor对象表示的类或接口的指定 类函数。 

                * Constructor<?>[] getDeclaredConstructors() ：返回一个反映 Constructor对象表示的类声明的所有 Constructor对象的数组 类 。

演示了其他一种，其他的和Field类似，也可以使用暴力反射

![image](/img/java/javaWeb/getConstructor.png)


         1.3 获取成员方法们

                * Method[] getMethods() ：返回一个 方法对象，它反映此表示的类或接口的指定公共成员方法 类对象。 

                * Method getMethods(String name,类<?>...parameterTypes)：返回包含一个数组 方法对象反射由此表示的类或接口的所有公共方法 类对象，包括那些由类或接口和那些从超类和超接口继承的声明。 

                * Method[] getDeclaredMethods() ：返回包含一个数组 方法对象反射的类或接口的所有声明的方法，通过此表示 类对象，包括公共，保护，默认（包）访问和私有方法，但不包括继承的方法。

                * Method getDeclaredMethod(String name,类<?>...parameterTypes)：返回一个 方法对象，它反映此表示的类或接口的指定声明的方法 类对象。

                * invoke()：可以执行获取的成员方法

![image](/img/java/javaWeb/获取成员方法.png)


         1.4 获取类名  

                *String getName()


## 三、注解

### 补充java、javac和javadoc三者的区别

    **java**：用来运行一个.class文件

    **javac**：用来把.java文件编译为.class文件

    **javadoc**：命令是用来生成自己API文档的。
```java
// 打开cmd
javadoc 文档.java
```

### （一）概念

    **注释**：用文字描述程序的意思或功能，方便阅读程序，给程序员看的

    **注解**：用来说明程序，给计算机看的，也叫元数据

    **格式**：在需要添加注解的方法的上方 @注解名字


### （二）注解的作用和分类

    **编写文档**：通过代码里的标识元数据生成文档，如生成doc文档

    **代码分析**：通过代码里面标识的元数据对代码进行分析，如使用反射

    **编译检查**：通过代码里面标识的元数据让编译器能够实现基本的编译检查，如Override

### （三）内置注解

    **Override**：检查被改注解标注的方法是否是继承自父类（接口）的

    **Deprecated**：将该注解标注的内容，标识已过时

![image](/img/java/javaWeb/jdk内置注解1.png)

    **SuppressWarnings**：压制警告 一般传参all标识压制所有警告，一般写在类上，压制这个类的所有警告

![image](/img/java/javaWeb/jdk内置注解2.png)


### （四）自定义注解

    **格式**：public @interface 注解名{}

    **使用**：@注解名称

    **本质**：注解本质上就是一个接口，该接口默认继承Annotation接口

    **属性**："接口中可以定义的成员（抽象）方法"，因此在注解中，这些方法就是注解的属性。其属性有一下几个要求：

        1、属性的返回值必须是基本数据类型 **整形int** **String** **枚举** **注解** 类型的 **数组**

![image](/img/java/javaWeb/自定义属性要求.png)

        2、定义了属性，在使用是需要给属性赋值

            （1）如果很平常的定义一个属性，在使用注解的时候需要给初始值

![image](/img/java/javaWeb/自定义注解属性赋初值.png)


            （2）如果在定义属性时，使用default关键字给属性默认初始化值，则使用注解时，可以不进行属性的赋值添加一个默认值。如（3）所用图中的 **String name() default "ttt";**  所示

            （3）如果只有一个属性需要赋值，并且属性的名称是value，则value可以省略

![image](/img/java/javaWeb/一个属性赋值可省略属性名.png)

            （4）数组赋值比较特殊，值使用{}包裹，如果值只有一个，可以省略大括号

![image](/img/java/javaWeb/自定义注解属性为数组时赋值.png)

            （5）枚举和注解定义属性的赋值
```java
// Person枚举
public enum Person {
    p1,p3
}

// MyAnno2注解
public @interface MyAnno2 {
}

// 定义注解
public @interface MyAnno {
    ////枚举
    Person per();
    ////注解
    MyAnno2 myno2();
}

// 使用注解
@MyAnno(per=Person.p1,myno2=@MyAnno2)
```
        3、元注解：描述注解的注解，在定义注解的时候使用。比较常用的是@Target

            （1）@Target：描述注解能过作用的位置，如在方法上使用，或者在属性上使用，若想即作用在类上，也作用在方法上，还可以作用在成员变量上，则需要将这三种都写上，用逗号隔开。其属性有：

                    TYPE:  可以作用于类上

                    METHOD:  可以作用于方法上

                    FIELD:  可以作用于成员变量上


![image](/img/java/javaWeb/元注解Target(TYPE).png)

            （2）@Retention：描述注解被保留的阶段。自己定义注解一般会用RUNTIME。其属性有：

                    SOURCE： 当前被描述的注解，不会保留到class字节码文件中，也不会被JVM读取到

                    CLASS： 当前被描述的注解，会保留到class字节码文件中，不会被JVM读取到

                    RUNTIME： 当前被描述的注解，会保留到class字节码文件中，并被JVM读取到

            （3）@Documented：描述注解是否被抽取到api文档

            （4）@Inherited：描述注解是否被子类继承

### （五）在文档中使用注解

获取注解中定义的属性值（在一个使用了自定义注解的类中再在类中获取自定义注解的属性值）

        1、获取注解定义的位置的对象（Class,Method,Field）

        2、获取指定的注解getAnnotation(Class)

        3、调用注解中的抽象方法获取配置的属性值

## web核心技术


## 旅游管理系统


