---
title: "java入门（基本语法）"
description: "java入门（基本语法）"
---
## 一、注释
        1、单行注释：//

        2、多行注释：/*   */

        3、文档注释:/**    */



## 二、标识符
标识符是用来给变量、类、方法以及包进行命名的，有四大原则，两个规范

### （一）四大原则
        1、必须以字符、下划线_、美元符号$开头

        2、其他部分可以是字母、下划线_、美元符$和数字的任意组合

        3、大小写铭感，且长度无限制

        4、不可以是java的关键字

### （二）两个规范
        1、表示类名的标识符：每个单词的首字母大写，如Man，GoodMan

        2、表示方法和变量的标识符：第一个单词小写，从第二个单词开始首字母，称之为驼峰原则，如eat(),eatEggs()

        3、java不采用ASCII字符集，而是采用Unicode字符集，因此，这里字母的含义不仅仅是英文，还有汉字，不建议使用汉字定义标识符

## 三、变量
### （一）变量的本质
        1、可操作的存储空间，空间位置是确定的，但里面放置什么值不确定

        2、通过变量名来访问对应的存储空间，从而操作这个存储空间存储的值

        3、java是一种强类型语言，每个变量都必须声明其数据类型。变量的数据类型决定了变量占据存储空间的大小，如int a = 3,表示a变量的空间大小为4个字节

### （二）变量的声明
        格式：数据类型  变量名

        如：double salary;   int age;
### （三）变量类型
+ 成员变量：定义在类里面，方法外面，在整个类内有效，有默认初始值
+ 局部变量：定义在方法内或者程序块内，作用范围有限，使用前必须赋初值


## 四、字符集

        1、ASCII字符集：美国信息互换标准编码，主要用于显示现代英语和其他西欧语言

        2、GB2312字符集：中国国家标准的简体中文字符集

        3、Unicode字符集:支持各种不同语言的书面文本的交换、处理及显示。javac-encoding  utf-8  hello.java
        
        4、UTF-8（长度可变）
        
        5、UTF-16（16位）
        
        6、UTF-32（32位）

## 五、操作符
### （一）赋值运算符
赋值运算符左侧必须是变量，一次可以为多个变量复制。如：a=b=c=5;

### （二）算术运算符
![image](/img/java/01/01.png)

### （三）关系运算符
返回值为boolean，结果为true或false
![image](/img/java/01/02.png)

### （四）逻辑运算符
![image](/img/java/01/03.png)

### （五）位运算符
![image](/img/java/01/04.png)

### （六）三位运算符
可以代替某些if ... else语句

![image](/img/java/01/05.png)

```java
int a=10;
int b=20;
int c = a>b?1:0
```

### （七）instanceof运算符
用于判断一个对象是否为某个类的实例，返回true或者false
```java
A a=new A();
B b=new B();
boolean x = a instanceof B;
```

## 六、流程控制语句
### 分支语句
1、if-else语句

![image](/img/java/01/06.png)

2、switch语句

case语句后的值不能重复，类型只能为Int、byte、short或char类型
![image](/img/java/01/07.png)

### 循环语句
1、while
```java
while(条件){
   语句组;
}
```
2、do-while
```java
do{
   语句组;
}while(条件);
```
3、for
```java
for(变量初始值;条件;递增或递减变量的值){
  代码;
}
```

### 转移语句
1、break

在循环中立即从当前循环终止控制，遇到break语句时，将跳出当前循环

2、continue

从其调用处跳至循环的开始处，此之后语句将不在执行

3、return

通常用在方法中，以便结束一个方法：

单独一个return关键字，则不返回任何值

return关键字后面跟变量、常量或表达式

## 七、数组
### （一）语法
1、数组的声明主要是定义数组的名称及数组元素的数据类型。包含两种声明语句
```java
//type元素类型  arrayName数组名称
type arrayName[];
type[] arrayName;
```
2、分配空间

java不支持变长数组，数组的大小一旦确定，就不可以改变.

数组采用new分配空间，为数组分配空间时，如果数组元素类型为基本类型，则自动对数组元素进行初始化。其值为此种类型的默认值。如：int默认为0，double默认为0.0。语法：
```java
//type arrayName[] = new type[n];
int a[] = new int[10];
```
对于基本数据类型的数组，可以不使用new创建（动态初始化），而采用直接给数组元素初值来实现，元素初值之间用逗号分隔（静态初始化）。
```java
int a[ ]={0，1，2，3，4}；
```
### （二）应用
数组元素可以通过数组名和下标进行访问，下标基于0开始。数组具有长度length属性，通过此属性可以访问数组的长度。

Java自动检查数组下标是否越界，如果下标小于0或大于等于length，则会发生错误，产生一个名为ArrayIndexOutOfBoundsException的异常。
```java
//对一个int数组内的元素进行排序
int a[] = { 3, 4, 2, 1, 10, 9 };
int max = 0;
int pos = 0;
for (int i = 0; i < a.length; i++) {
        max = a[i];
        pos = i;
        for (int j = i; j < a.length; j++) {
                if (a[j] > max) {
                        pos = j;
                        max = a[j];
                }

        }
        if (pos != i) {
                max = a[pos];
                a[pos] = a[i];
                a[i] = max;
        }
}
System.out.println(Arrays.toString(a));

```

### （三）复制
1、可以通过循环实现数组元素的复制
```java
int a[]=new int[10];
int b[]=new int[a.length];
for(int i=0;i<a.length;i++)
{
  b[i]=a[i];
}
```

2、System类提供了arraycopy函数，可以实现数组的复制。函数原形为：
```java
void arraycopy(Object src,int srcPos,Object dest,int destPos,int length);
```
使用：
```java
 int a[]=new int[20];
 int b[]=new int[10];
 System.arraycopy(b,0,a,10,b.length);

```

### （四）遍历
使用foreach循环遍历数组和集合元素时，无需获得数组和集合长度，也无需根据索引来访问元素和集合元素。foreach循环自动遍历数组和集合的每个元素，语法：

for(数据类型 变量名:数组名)
```java
public class ForeachDemo {
        public static void main(String[] args){
	int[] a = {5,7,20}
	System.out.println(“数组a中的元素是：”);
	for(int e:a){
		 System.out.println(e);
	}
        }
}
//等价
for(int int i=0;i<a.length;i++){
        System.out.println(a[i]);
}

```

