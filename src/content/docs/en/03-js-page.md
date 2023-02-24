---
title: "js"
description: "有关Js的相关知识点"
---

html是骨架，css是外表，而js是行为，赋予一些动作，实现某些事情。如小T穿着一件红色的衣服，干着打你的事情。

## js的三种引入方式

1. **内嵌式**：通过script标签来引入

2. **外链式**：引入一个js文件
```js
// 此方式里面不能写Js代码
<script src='js文件的路径'></script>
```
3. **行内式**：在标签上面注入代码

## 四个常用的Js输出方法

1. **alert** :在浏览器弹出一个弹窗

2. **prompt** ：弹出一个输入框

3. **console.log**：在控制台输入内容

4. **document.write**：在浏览器的页面body中显示内容，可解析标签

## 变量

1. 作用

存储数据，方便操作，用var关键字定义变量

2. 语法

```js
// 声明一个变量 var 变量名
var a;
// 给变量赋值 变量名=值
a = 1;
// 设置多个变量 var 变量名 = 值，变量名 = 值，变量名 = 值；
var a1 = 1，a2 = 2, a3 = 3;
// 变量的覆盖 变量名相同，后者会取代前者
var a4 ;
a4 = 4;
a4 = 5;
console.log(a4)//5
```

3. 变量命名规范

+ 能够使用的字符：数字、字母、下划线、$

+ 不能使用数字开头

+ 不能使用js里面具有特殊功能的单词/关键字，也不建议使用保留字

+ 区分大小写

+ 建议命名有意义

+ 建议使用驼峰命名

4. 案例——变量之间的交换

+ 建立一个中间变量，用于临时存储和交换
```js
var a = 5;
var b = 10;
var tem ;
tem= b; //tem = 10
b = a; 
a = tem;
console.log(a,b);

```

+ 数学的方法：相加法，另一个等于综合减去一个数字（仅限于数字的使用）
```js
var a = 5;
var b = 10;
var sum = a+b;
a = sum-a;
b = sum-b;
console.log(a,b);
```

## 数据类型
1. 简单的数据类型（基本数据类型）

**数字**:整数、小数、NaN

**字符串**：可双引号，也可以单引号成对出现

**布尔类型**：只有真和假

**undefined**

**null**
```js
0.1+0.2=0.30000000004.溢出的情况,出现这个情况,可以先放大十倍相加,结果再除以10
```

2. 复杂数据类型（引用类型）

object、函数、数组

## typeof判断数据类型

特殊的是null 
```js
console.log(typeof(null));//object
```

## 数据类型的转换
1. 把其他转为数字

**Number()**:整数就是整数；小数就是小数；带字符串的数字也会转为对应的数字；字符串有非数字就会转失败,得到NaN
```js
console.log(Number(5));//5
console.log(Number(5.5));//5.5
console.log(Number('1'));//1
console.log(Number('haha'));//NaN
```

**parseInt()**:整数小数，都会转为一个整型的数字（从左到右识别，一个失败了就会灰白了，只识别小数点前面的，还有字母前面的数字）
```js
console.log(parseInt(5));//5
console.log(parseInt(5.5));//5
console.log(parseInt('12哈哈哈'));//12
console.log(parseInt('haha12'));//NaN
```

**parseFloat()**:和 parseInt()一样,区别是有小数的会把小数也转出来
```js
console.log(parseFloat(5));//5
console.log(parseFloat(5.5));//5.5
console.log(parseFloat('12哈哈哈'));//12
console.log(parseFloat('12.33哈哈哈'));//12.33
console.log(parseFloat('haha12.33'));//NaN
```

2. 转成字符串类型的数据

**String()**：和直接加上""一样
```js
console.log(String(5));//5
console.log(String(5.5));//5.5
console.log(String('12哈哈哈'));//12
console.log(String('12.33哈哈哈'));//12.33
console.log(String('haha12.33'));//NaN
```
**toString()**：小数、null、undefined使用的时候要小心

```js
console.log(parseFloat(5));//"5"
console.log(parseFloat(5.5));//"5.5"
console.log(parseFloat('12哈哈哈'));//"12哈哈哈"
console.log(parseFloat('12.33哈哈哈'));//"12.33哈哈哈"
console.log(parseFloat('haha12.33'));//"haha12.33"
```

3. 转成一个布尔类型

**Boolean()**
```js
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(''));//false
console.log(Boolean(false));//false
console.log(Boolean(NaN));//false
```
## 隐式转换
1. “+”

如果其中一个试字符串，那么就会转成拼接的效果
```js
console.log(123+'234');//123234
```
如果在数字字符串的前面写一个+，就会隐式转换数字类型
```js
console.log(+'234');//234
```
2. 其他的会自动进行隐式转换

## 模板字符串
**``**：是es6中的模板字符串，里面的单引号和双引号都可以使用和解析；里面要是需要引用变量：${变量名}；能解析换行

## 运算符
运算符是用来告诉js引擎执行某种操作的符号，例如加号、减号等

### 算术运算符

用来执行常见的数学运算：加减乘除
运算符|描述|示例
-|:-:|-:
'+'	|加法运算符         |x + y 表示计算 x 加 y 的和
'-'	|减法运算符         |x - y 表示计算 x 减 y 的差
'*'	|乘法运算符         |x * y 表示计算 x 乘 y 的积
/   |除法运算符         |x / y 表示计算 x 除以 y 的商
%	|取模（取余）运算符  |x % y 表示计算 x 除以 y 的余数

```js
var x = 10,
    y = 4;
console.log("x + y =", x + y);  // 输出：x + y = 14
console.log("x - y =", x - y);  // 输出：x - y = 6
console.log("x * y =", x * y);  // 输出：x * y = 40
console.log("x / y =", x / y);  // 输出：x / y = 2.5
console.log("x % y =", x % y);  // 输出：x % y = 2

```
### 赋值运算符
给变量赋值

运算符|描述|示例
-|:-:|-:
=	  |最简单的赋值运算符，将运算符右侧的值赋值给运算符左侧的变量   |x = 10 表示将变量 x 赋值为 10
'+='  |先进行加法运算，再将结果赋值给运算符左侧的变量              |x += y 等同于 x = x + y
'-+'  |先进行减法运算，再将结果赋值给运算符左侧的变量              |x -= y 等同于 x = x - y
'*='  |先进行乘法运算，再将结果赋值给运算符左侧的变量              |x *= y 等同于 x = x * y
/=    |先进行除法运算，再将结果赋值给运算符左侧的变量              |x /= y 等同于 x = x / y
%=	  |先进行取模运算，再将结果赋值给运算符左侧的变量              |x %= y 等同于 x = x % y

```js
var x = 10;
x += 20;
console.log(x);  // 输出：30
var x = 12,
    y = 7;
x -= y;
console.log(x);  // 输出：5
x = 5;
x *= 25;
console.log(x);  // 输出：125
x = 50;
x /= 10;
console.log(x);  // 输出：5
x = 100;
x %= 15;
console.log(x);  // 输出：10
```

### 字符串运算符
JavaScript 中的+和+=运算符除了可以进行数学运算外，还可以用来拼接字符串，其中：

+运算符表示将运算符左右两侧的字符串拼接到一起；

+=运算符表示先将字符串进行拼接，然后再将结果赋值给运算符左侧的变量。
```js
var x = "Hello ";
var y = "World!";
var z = x + y;
console.log(z);  // 输出：Hello World!
x += y;
console.log(x);  // 输出：Hello World!
```

## 自增/自减运算符
自增、自减运算符用来对变量的值进行自增（+1）、自减（-1）操作

运算符|名称|影响
-|:-:|-:
++x	 |自增运算符    |将x加1，然后返回x的值（先加后赋值）
x++  |自增运算符    |返回x的值，然后再将x加1（先赋值后加1）
--X  |自减运算符    |将x减1，然后返回x的值（先减后赋值）
x--  |自减运算符    |返回x的值，然后再将x减1（先赋值后减1）

```js
var x =10;
console.log(++x);//11
console.log(x);//11

var y =10;
console.log(y++);//10
console.log(y);//11

var z =10;
console.log(--z);//9
console.log(z);//9
var w =10;
console.log(w--);//10
console.log(w);//9
```
### 比较运算符
用来比较运算符左右两侧的表达式，比较运算符的运算结果是一个布尔值，结果只有两种，不是true就是false.
运算符|名称|示例
-|:-:|-:
==	 |等于       |x == y 表示如果 x 等于 y，则为真
===  |全等       |x === y 表示如果 x 等于 y，并且 x 和 y 的类型也相同，则为真
!=   |不相等     |x != y 表示如果 x 不等于 y，则为真
!==  |不全等     |x !== y 表示如果 x 不等于 y，并且 x 和 y 的类型也不同，则为真
<    |小于       |x < y 表示如果 x 小于 y，则为真
`>   |大于       |x > y 表示如果 x 大于 y，则为真
<=   |大于或等于  |x >= y 表示如果 x 大于或等于 y，则为真
`>=  |小于或等于  |x <= y 表示如果 x 小于或等于 y，则为真
```js
var x = 25;
var y = 35;
var z = "25";
console.log(x == z);  // 输出： true
console.log(x === z); // 输出： false
console.log(x != y);  // 输出： true
console.log(x !== z); // 输出： true
console.log(x < y);   // 输出： true
console.log(x > y);   // 输出： false
console.log(x <= y);  // 输出： true
console.log(x >= y);  // 输出： false
```

### 逻辑运算符
通常用来组合多个表达式，结果是布尔值,解释：11表示||
运算符|名称|示例
-|:-:|-:
&&	|等于       |全真为真，一假为假
11  |全等       |一真为真，全假为假
!   |不相等     |真亦假，假亦真
```js
var year = 2021;
// 闰年可以被 400 整除，也可以被 4 整除，但不能被 100 整除
if((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))){
    console.log(year + " 年是闰年。");
} else{
    console.log(year + " 年是平年。");
}
```
### 三元运算符
也成为条件运算符，由一个问号和一个冒号组成，语法如下：

条件表达式?表达式1:表达式2;

条件表达式为真，则执行表达式1，否则执行表达式2

```js
var x =11,y=20;
x>y?console.log(x):console.log(y)
```
### 位运算符
对二进制位进行操作，解释：1表示|
运算符|名称|示例
-|:-:|-:
&	   |按位与 ：如果对应二进制位都为1，则该二进制位都为1               |5 & 1 等同于 0101 & 0001 结果为 0001，十进制结果为 1
1      |按位或 ：如果对应的二进制位有一个为1，则该二进制位为1            |5 或 1 等同于 0101 | 0001 结果为 0101，十进制结果为 5
^      |按位异或：如果对应的二进制位只有一个为1，则该二进制位为1         |5 ^ 1 等同于 0101 ^ 0001 结果为 0100，十进制结果为 4
~      |按位非：反转所有二进制位，即 1 转换为 0，0 转换为 1             |~5 等同于 ~0101 结果为 1010，十进制结果为 -6
<<     |按位左移：将所有二进制位统一向左移动指定的位数，并在最右侧补 0   |5 << 1 等同于 0101 << 1 结果为 1010，十进制结果为 10
'>>'   |按位右移（有符号右移）：将所有二进制位统一向右移动指定的位数，并拷贝最左侧的位来填充左侧     |5 >> 1 等同于 0101 >> 1 结果为 0010，十进制结果为 2
'>>>'  |按位右移零（无符号右移）：将所有二进制位统一向右移动指定的位数，并在最左侧补 0     |5 >>> 1 等同于 0101 >>> 1 结果为 0010，十进制结果为 2

```js
var a = 5 & 1,
    b = 5 | 1,
    c = 5 ^ 1,
    d = ~ 5,
    e = 5 << 1,
    f = 5 >> 1,
    g = 5 >>> 1;
console.log(a);  // 输出：1
console.log(b);  // 输出：5
console.log(c);  // 输出：4
console.log(d);  // 输出：-6
console.log(e);  // 输出：10
console.log(f);  // 输出：2
console.log(g);  // 输出：2
```
## 循环语句
### for
适合用在已知循环次数的时候使用，语法如下：
```js
for(initialization; condition; increment) {
    // 要执行的代码
}
```
+ initialization：为一个表达式或者变量声明，我们通常将该步骤称为“初始化计数器变量”，在循环过程中只会执行一次；
+ condition：为一个条件表达式，与 while 循环中的条件表达式功能相同，通常用来与计数器的值进行比较，以确定是否进行循环，通过该表达式可以设置循环的次数；
+ increment：为一个表达式，用来在每次循环结束后更新（递增或递减）计数器的值。
+ 以上三个是可以省略的，分号不能省略
+ 可以嵌套循环，如九九乘法表

**案例**
```js
for(var i=1; i<=10>; i++) {
    console.log(i);//1 2 3 4 5 6 7 8 9 10
}
```

### while
不知道循环次数的时候使用while,语法如下：
```js
while(条件表达式){
    // 要执行的代码
}
```
while循环在每次循环之前，会先对条件表达式进行求值，如果条件表达式结果为true，则执行{}中的代码，如果条件表达式的结果为false，则退出while循环，执行while循环之后的代码
![image](/img/while.png)
```js
// 球1-100之间所有和
var i =1;
var sum=0;
while(i<=100){
    sum+=i;
    i++
     
}
console.log(sum);//5050
```
要是条件一直为true，则会进入死循环

### do while
与 while循环非常相似，不同在于。会先执行循环中的代码，再对条件表达式进行判断。因此无论条件是否真假，至少会执行一遍.语法如下
```js
do{
    // 需要执行的代码
}while(条件表达式)
```
![image](/img/do-while.png)
```js
// 计算1-100之间的和
var i = 1;
var sum = 0;
do{
    sum+=i;
    i++;
}while(i<=100)
console.log(sum);//5050
```
### for in
主要用来遍历对象，可以将对象中的属性依次循环出来，语法格式：
```js
for(vari in obj){
    // 要执行的代码
}
```
vari 是变量，每次循环时这个变量都会赋予不同的值

obj 是要遍历的对象，在每次循环中，会将obj对象中的一个属性的键赋值给变量vari，直到对象中的所有属性都遍历完
```js
var person = {
    name:"tt",
    sex:"女",
    age:18
}
for(var prop in person){
    console.log(prop);//name sex age
    console.log(person[prop]);//tt 女 18
}
```
### for of
是es6中新添的一个循环方式，可以轻松遍历数组或者对象，语法如下：
```js
for(vari of iterable){
    // 要执行的代码
}
```
vari 为一个变量，每次循环时这个变量都会被赋予不同的值，我们可以在后面的{ }中使用这个变量来进行一系列操作；

iterable 为要遍历的内容，在每次循环中，会将 iterable 中的一个值赋值给变量 vari iterable 中的所有值都遍历完。

```js
//1、 定义一个数组
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
for (let [index, val] of arr.entries()) {
  console.log(index, val);
}
/*
输出结果为：
0 'a'
1 'b'
2 'c'
3 'd'
4 'e'
5 'f'
6 'g'
7 'h'
8 'i'
9 'j'
*/
// 2、定义一个字符
var str = "Hello World!";
for (let value of str) {
    console.log(value)
}
/*
H
e
l
o
 
W
o
r
l
d
!
*/
```
### 跳出循环
js提供了break和continue两个语句来实现退出循环和退出当前循环
```js
for(var i =0;i<10;i++){
    if(i==5){
        break;//遇到5退出循环
    }
      console.log(i)//0 1 2 3 4
}
```
```js
for(var i =0;i<10;i++){
    if(i==5){
        continue;//退出当前循环，后面的会继续
    }
      console.log(i)//0 1 2 3 4 6 7 8 9
}
```

## 条件判断
### if else
程序根据不同的条件来执行不同的操作，if-else可以根据情况增加。语法如下：
```js
if(条件表达式){
    // 当表达式成立时要执行的代码
}else{
   // 当表达式不成立时要执行的代码
}
```
### switch case
比if-else要简介和紧凑，执行效率高，其语法如下：
```js
switch (表达式){
    case value1:
        statements1  // 当表达式的结果等于 value1 时，则执行该代码
        break;
    case value2:
        statements2  // 当表达式的结果等于 value2 时，则执行该代码
        break;
    ......
    case valueN:
        statementsN  // 当表达式的结果等于 valueN 时，则执行该代码
        break;
    default :
        statements  // 如果没有与表达式相同的值，则执行该代码
}
```
switch 语句根据表达式的值，依次与 case 子句中的值进行比较：

+ 如果两者相等，则执行其后的语句段，当遇到 break 关键字时则跳出整个 switch 语句。

+ 如果不相等，则继续匹配下一个 case。

+ switch 语句包含一个可选的 default 关键字，如果在前面的 case 中没有找到相等的条件，则执行 default 后面的语句段。

## 函数
函数是一组执行特定任务（具有特定功能）的，可以重复使用的代码块。函数包含自定义函数（自己创建的）和内置函数（系统约定给出的）。

自定义函数需要function关键字创建，语法格式如下：
```js
function 函数名字(参数){
    //函数中的代码
    //return返回值
}
//调用
函数名字()
```
参数：可以没有，可以多个，用逗号隔开

return：通常在函数的末尾定义，当函数运行到 return 语句时会立即停止运行，并返回到调用函数的地方继续执行。

## 对象
1. 自定义对象

对象指一个物体，这个物体有属性和行为，如
```js
var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function() {
        document.write(this.name);
    }
};
```
创建了一个名为 person 的对象，该对象中包含三个属性 name、age、gender 和一个方法 displayName()。displayName() 方法中的 this.name 表示访问当前对象中的 name 属性，会被 JavaScript 解析为 person.name。

获取值：对象名.属性名  或者 对象名["属性名"]

2. 内置对象

（1）Number对象

通过new来创建一个实例对象，语法：
```js
var 实例对象 = new Number()
var myNum = new Number()

```

当 Number() 函数和 new 运算符一起使用时，会创建一个新的 Number 对象。

如果不用 new 运算符，把 Number() 当作一个函数来调用，则会将其中的参数转换为一个数值，并且返回这个值（如果转换失败，则返回 NaN）。
```js
var myNum = new Number('12')
console.log(myNum)//对象  Number {12}

var myNum1 = Number('12')
console.log(myNum1)//12

```
+ Number对象提供的属性：

属性|描述
-|-:
Number.MAX_VALUE	     |JavaScript 中所能表示的最大值
Number.MIN_VALUE	     |JavaScript 中所能表示的最小值
Number.NaN	             |非数字
Number.NEGATIVE_INFINITY |负无穷，在溢出时返回
Number.POSITIVE_INFINITY |正无穷，在溢出时返回
Number.EPSILON	         |表示 1 与 Number 所能表示的大于 1 的最小浮点数之间的差
Number.MIN_SAFE_INTEGER	 |最小安全整数，即 -9007199254740991
Number.MAX_SAFE_INTEGER	 |最大安全整数，即 9007199254740991

+ Number对象提供的方法：

方法|描述
-|-:
Number.parseFloat()	     |将字符串转换成浮点数，和全局方法 parseFloat() 作用相同
Number.parseInt()	     |将字符串转换成整型数字，和全局方法 parseInt() 作用相同
Number.isFinite()	     |判断 Number 对象是否为有穷数
Number.isInteger()	     |判断 Number 对象是否为整数
Number.isNaN()	         |判断 Number 对象是否为 NaN 类型
Number.isSafeInteger()	 |判断 Number 对象是否为安全整数，即范围为 -(2⁵³ - 1)到 2⁵³ - 1 之间的整数
Number.toString()	     |把 Number 对象转换为字符串，使用指定的基数
Number.toLocaleString()	 |把 Number 对象转换为字符串，使用本地数字格式顺序
Number.toFixed()	     |把 Number 对象转换为字符串，结果的小数点后有指定位数的数字
Number.toExponential()	 |把 Number 对象的值转换为指数计数法
Number.toPrecision()	 |把 Number 对象格式化为指定的长度
Number.valueOf()	     |返回一个 Number 对象的基本数字值

（2）String对象

用于处理字符串，其中提供了大量操作字符串的方法，以及一些属性。创建 String 对象的语法格式如下：
```js
var val = new String(value);
var val = String(value);
```
字符串和字符串对象之间能够自由转换，因此不论是创建字符串对象还是直接声明字符串类型的变量，都可以直接使用字符串对象中提供的方法和属性。

+ String对象提供的属性：

属性|描述
-|-:
constructor	     |获取创建此对象的 String() 函数的引用
length	   	     |获取字符串的长度
prototype	     |通过该属性您可以向对象中添加属性和方法
	
```js
var str = new String('JavaScript');
String.prototype.name = null;
str.name = "Hello World!";
document.write(str.constructor + "<br>");       // 输出：function String() { [native code] }
document.write(str.length + "<br>");            // 输出：10
document.write(str.name);                       // 输出：Hello World!
``` 

+ String对象提供的方法：

方法|描述
-|-:
anchor()	          |创建一个 HTML 锚点，即生成一个<a>标签，标签的 name 属性为 anchor() 方法中的参数
big()	              |用大号字体显示字符串
blink()	              |显示闪动的字符串
bold()	              |使用粗体显示字符串
charAt()	          |返回在指定位置的字符
charCodeAt()          |返回指定字符的 Unicode 编码
concat()	          |拼接字符串
fixed()	              |以打字机文本显示字符串
fontcolor()	          |使用指定的颜色来显示字符串
fontsize()	          |使用指定的尺寸来显示字符串
fromCharCode()	      |将字符编码转换为一个字符串
indexOf()	          |检索字符串，获取给定字符串在字符串对象中首次出现的位置
italics()	          |使用斜体显示字符串
lastIndexOf()	      |获取给定字符串在字符串对象中最后出现的位置
link()	              |将字符串显示为链接
localeCompare()	      |返回一个数字，并使用该数字来表示字符串对象是大于、小于还是等于给定字符串
match()	              |根据正则表达式匹配字符串中的字符
replace()	          |替换与正则表达式匹配的子字符串
search()	          |获取与正则表达式相匹配字符串首次出现的位置
slice()	              |截取字符串的片断，并将其返回
small()	              |使用小字号来显示字符串
split()	              |根据给定字符将字符串分割为字符串数组
strike()	          |使用删除线来显示字符串
sub()	              |把字符串显示为下标
substr()	          |从指定索引位置截取指定长度的字符串
substring()	          |截取字符串中两个指定的索引之间的字符
sup()	              |把字符串显示为上标
toLocaleLowerCase()	  |把字符串转换为小写
toLocaleUpperCase()	  |把字符串转换为大写
toLowerCase()	      |把字符串转换为小写
toUpperCase()	      |把字符串转换为大写
toString()	          |返回字符串
valueOf()	          |返回某个字符串对象的原始值

```js
var str = new String('JavaScript教程');

document.write(str.anchor("myanchor") + "<br>");     // 生成一段 HTML 代码：<a name="myanchor">JavaScript教程</a>
document.write(str.big() + "<br>");                  // 生成一段 HTML 代码：<big>JavaScript教程</big>
document.write(str.blink() + "<br>");                // 生成一段 HTML 代码：<blink>JavaScript教程</blink>
document.write(str.bold() + "<br>");                 // 生成一段 HTML 代码：<b>JavaScript教程</b>
document.write(str.charAt(10) + "<br>");             // 获取 str 中的第 11 个字符，输出：教
document.write(str.charCodeAt(10) + "<br>");         // 获取 str 中第 11 个字符的 Unicode 编码，输出：25945
document.write(str.concat(" String 对象") + "<br>"); // 将字符串“ String 对象”拼接到字符串 str 之后，输出：JavaScript教程 String 对象
document.write(str.fixed() + "<br>");                // 生成一段 HTML 代码：<tt>JavaScript教程</tt>
document.write(str.fontcolor("red") + "<br>");       // 生成一段 HTML 代码：<font color="red">JavaScript教程</font>
document.write(str.fontsize(2) + "<br>");            // 生成一段 HTML 代码：<font size="2">JavaScript教程</font>
document.write(String.fromCharCode(72,69,76,76,79) + "<br>");             // 将 Unicode 编码转换为具体的字符，输出：HELLO
document.write(str.indexOf("Script") + "<br>");             // 获取字符串“Script”在 str 中首次出现的为，输出：4
document.write(str.italics() + "<br>");                     // 生成一段 HTML 代码：<i>JavaScript教程</i>
document.write(str.lastIndexOf("a") + "<br>");              // 获取字符串“a”在 str 中最后一次出现的位置，输出 3
document.write(str.link("http://c.biancheng.net/") + "<br>");  // 生成一段 HTML 代码：<a href="http://c.biancheng.net/">JavaScript教程</a>
document.write(str.localeCompare("JavaScript") + "<br>");       // 比较字符串对象与给定字符串，返回：1
document.write(str.match(/[abc]/g) + "<br>");                   // 根据正则 /[abc]/g 检索 str，返回：a,a,c
document.write(str.replace(/[abc]/g, "Y") + "<br>");            // 使用字符串“Y”替换正则 /[abc]/g 匹配的字符，返回：JYvYSYript教程
document.write(str.search(/[Script]/g) + "<br>");               // 获取与正则匹配的字符串首次出现的位置，返回：4
document.write(str.slice(6,11) + "<br>");           // 截取字符串（获取 str 中第 7 到第 11 个字符），返回：ript教
document.write(str.small() + "<br>");               // 生成一段 HTML 代码：<small>JavaScript教程</small>
document.write(str.split("a") + "<br>");            // 根据“a”将字符串 str 拆分为数组，返回：J,v,Script教程
document.write(str.strike() + "<br>");              // 生成一段 HTML 代码：<strike>JavaScript教程</strike>
document.write(str.sub() + "<br>");                 // 生成一段 HTML 代码：<sub>JavaScript教程</sub>
document.write(str.substr(3, 7) + "<br>");          // 从第 4 个字符开始，向后截取 7 个字符，返回：aScript
document.write(str.substring(3, 7) + "<br>");       // 截取字符串（获取 str 中第 4 到第 7 个字符），返回：aScr
document.write(str.sup() + "<br>");                 // 生成一段 HTML 代码：<sup>JavaScript教程</sup>
document.write(str.toLocaleLowerCase() + "<br>");   // 返回：javascript教程
document.write(str.toLocaleUpperCase() + "<br>");   // 返回：JAVASCRIPT教程
document.write(str.toLowerCase() + "<br>");         // 返回：javascript教程
document.write(str.toUpperCase() + "<br>");         // 返回：JAVASCRIPT教程
document.write(str.toString() + "<br>");            // 返回：JavaScript教程
document.write(str.valueOf() + "<br>");             // 返回：JavaScript教程
```

（3）Array对象

数组是值的有序集合，数组中的每个值成为一个元素，每个元素在数组中都有一个数字位置，称为索引，从0开始，依次递增，语法如下：
```js
// values为数组中各个元素组成的列表，多个元素之间使用逗号隔开
var arr = new Array(values);
var arr = Array(values);
```
**注意**：在使用 new Array() 来定义数组时，如果只提供一个数值参数，那么这个数值将用来表示数组的初始长度，例如new Array(5)表示定义一个长度为 5 的数组。JavaScript 中，数组允许的最大长度为 2³²-1，即 4294967295
```js
var fruits = new Array( "apple", "orange", "mango" );
console.log(fruits);  // 输出：["apple", "orange", "mango"]

var fruits = new Array( 5 );//长度为5的一个数组
```

+ Array对象提供的属性：

属性|描述
-|-:
constructor	     |返回创建数组对象的原型函数
length	   	     |设置或返回数组中元素的个数
prototype	     |通过该属性您可以向对象中添加属性和方法

+ Array对象提供的方法：

方法|描述
-|-:
copyWithin()	     |从数组的指定位置拷贝元素到数组的另一个指定位置中
entries()	   	     |返回数组的可迭代对象
every()	     	     |检测数值元素的每个元素是否都符合条件
fill()	     	     |使用一个固定值来填充数组
filter()	 	     |检测数值元素，并返回符合条件所有元素的数组
find()	     	     |返回符合传入函数条件的数组元素
findIndex()	 	     |返回符合传入函数条件的数组元素索引
forEach()	 	     |数组每个元素都执行一次回调函数
from()	     	     |通过给定的对象中创建一个数组
includes()	 	     |判断一个数组是否包含一个指定的值
indexOf()	 	     |搜索数组中的元素，并返回它所在的位置
isArray()	 	     |判断对象是否为数组
join()	     	     |把数组的所有元素放入一个字符串
keys()	     	     |返回数组的可迭代对象，包含原始数组的键（key）
lastIndexOf()	     |搜索数组中的元素，并返回它最后出现的位置
map()	     	     |通过指定函数处理数组的每个元素，并返回处理后的数组
pop()	     	     |删除数组的最后一个元素并返回删除的元素
push()	     	     |向数组的末尾添加一个或更多元素，并返回数组的长度
reduce()	 	     |累加（从左到右）数组中的所有元素，并返回结果
reduceRight()	     |累加（从右到左）数组中的所有元素，并返回结果
reverse()	 	     |反转数组中元素的顺序
shift()	     	     |删除并返回数组的第一个元素
slice()	     	     |截取数组的一部分，并返回这个新的数组
some()	     	     |检测数组元素中是否有元素符合指定条件
sort()	     	     |对数组的元素进行排序
splice()	 	     |从数组中添加或删除元素
toString()	 	     |把数组转换为字符串，并返回结果
unshift()	 	     |向数组的开头添加一个或多个元素，并返回新数组的长度
valueOf()	 	     |返回数组对象的原始值                                       	            	                           

（4）Date对象

可以访问计算机系统时间，提供了很多方法用于管理、操作和格式化时间/日期的方法，只能通过new，语法如下：
```js
var time = new Date();
var time = new Date(milliseconds);
var time = new Date(datestring);
var time = new Date(year, month, date[, hour, minute, second, millisecond]);
```
**参数说明如下**：

+ 不提供参数：若调用 Date() 函数时不提供参数，则创建一个包含当前时间和日期的 Date 对象；

+ milliseconds（毫秒）：若提供一个数值作为参数，则会将这个参数视为一个以毫秒为单位的时间值，并返回自 1970-01-01 00:00:00 起，经过指定毫秒数的时间，例如 new Date(5000) 会返回一个 1970-01-01 00:00:00 经过 5000 毫秒之后的时间；

+ datestring（日期字符串）：若提供一个字符串形式的日期作为参数，则会将其转换为具体的时间，日期的字符串形式有两种，如下所示：

```
YYYY/MM/dd HH:mm:ss（推荐）：若省略时间部分，则返回的 Date 对象的时间为 00:00:00；
YYYY-MM-dd HH:mm:ss：若省略时间部分，则返回的 Date 对象的时间为 08:00:00（加上本地时区），若不省略，在 IE 浏览器中会转换失败。
```

**将具体的年月日、时分秒转换为 Date 对象，其中：**

+ year：表示年，为了避免错误的产生，推荐使用四位的数字来表示年份；

+ month：表示月，0 代表 1 月，1 代表 2 月，以此类推；

+ date：表示月份中的某一天，1 代表 1 号，2 代表 2 号，以此类推；

+ hour：表示时，以 24 小时制表示，取值范围为 0 ~ 23；

+ minute：表示分，取值范围为 0 ~ 59；

+ second：表示秒，取值范围为 0 ~ 59；

+ millisecond：表示毫秒，取值范围为 0 ~ 999。


+ Date对象提供的属性：

属性|描述
-|-:
constructor	     |返回创建Date对象的原型函数
prototype	     |通过该属性您可以向对象中添加属性和方法

+ Date对象提供的方法：

方法|描述
-|-:
getDate()	            |从 Date 对象返回一个月中的某一天 (1 ~ 31)
getDay()	            |从 Date 对象返回一周中的某一天 (0 ~ 6)
getMonth()	            |从 Date 对象返回月份 (0 ~ 11)
getFullYear()	        |从 Date 对象返回四位数字的年份
getYear()	            |已废弃，请使用 getFullYear() 方法代替
getHours()	            |返回 Date 对象的小时 (0 ~ 23)
getMinutes()	        |返回 Date 对象的分钟 (0 ~ 59)
getSeconds()	        |返回 Date 对象的秒数 (0 ~ 59)
getMilliseconds()	    |返回 Date 对象的毫秒(0 ~ 999)
getTime()	            |返回 1970 年 1 月 1 日至今的毫秒数
getTimezoneOffset()	    |返回本地时间与格林威治标准时间 (GMT) 的分钟差
getUTCDate()	        |根据通用时间从 Date 对象返回月中的一天 (1 ~ 31)
getUTCDay()	            |根据通用时间从 Date 对象返回周中的一天 (0 ~ 6)
getUTCMonth()	        |根据通用时间从 Date 对象返回月份 (0 ~ 11)
getUTCFullYear()	    |根据通用时间从 Date 对象返回四位数的年份
getUTCHours()	        |根据通用时间返回 Date 对象的小时 (0 ~ 23)
getUTCMinutes()	        |根据通用时间返回 Date 对象的分钟 (0 ~ 59)
getUTCSeconds()	        |根据通用时间返回 Date 对象的秒钟 (0 ~ 59)
getUTCMilliseconds()    |根据通用时间返回 Date 对象的毫秒(0 ~ 999)
parse()	                |返回1970年1月1日午夜到指定日期（字符串）的毫秒数
setDate()	            |设置 Date 对象中月的某一天 (1 ~ 31)
setMonth()	            |设置 Date 对象中月份 (0 ~ 11)
setFullYear()	        |设置 Date 对象中的年份（四位数字）
setYear()	            |已废弃，请使用 setFullYear() 方法代替
setHours()	            |设置 Date 对象中的小时 (0 ~ 23)
setMinutes()	        |设置 Date 对象中的分钟 (0 ~ 59)
setSeconds()	        |设置 Date 对象中的秒钟 (0 ~ 59)
setMilliseconds()	    |设置 Date 对象中的毫秒 (0 ~ 999)
setTime()	            |以毫秒设置 Date 对象
setUTCDate()	        |根据通用时间设置 Date 对象中月份的一天 (1 ~ 31)
setUTCMonth()	        |根据通用时间设置 Date 对象中的月份 (0 ~ 11)
setUTCFullYear()	    |根据通用时间设置 Date 对象中的年份（四位数字）
setUTCHours()	        |根据通用时间设置 Date 对象中的小时 (0 ~ 23)
setUTCMinutes()	        |根据通用时间设置 Date 对象中的分钟 (0 ~ 59)
setUTCSeconds()	        |根据通用时间设置 Date 对象中的秒钟 (0 ~ 59)
setUTCMilliseconds() |根据通用时间设置 Date 对象中的毫秒 (0 ~ 999)
toSource()	            |返回该对象的源代码
toString()	            |把 Date 对象转换为字符串
toTimeString()	        |把 Date 对象的时间部分转换为字符串
toDateString()	        |把 Date 对象的日期部分转换为字符串
toGMTString()	        |已废弃，请使用 toUTCString() 方法代替
toUTCString()	        |根据通用时间，把 Date 对象转换为字符串
toLocaleString()	    |根据本地时间格式，把 Date 对象转换为字符串
toLocaleTimeString() |根据本地时间格式，把 Date 对象的时间部分转换为字符串
toLocaleDateString() |根据本地时间格式，把 Date 对象的日期部分转换为字符串
UTC()	                |根据通用时间返回 1970 年 1 月 1 日 到指定日期的毫秒数
valueOf()	            |返回 Date 对象的原始值

（5）Math对象

提供了一些数学中常用的常量值和函数，用来实现一些数学中常见计算，如计算平均值、求绝对值、四舍五入等。调用 Math 对象中的属性和方法无需预先使用 new 运算符来创建它，直接将 Math 作为对象调用即可，例如：
```js
var pi_val = Math.PI;                 // 数学中 π 的值：3.141592653589793
var abs_val = Math.sin(-5.35);  // -5.35 的绝对值：5.35
```

+ Math对象提供的属性：

属性|描述
-|-:
E	     |返回算术常量 e，即自然对数的底数（约等于 2.718）
LN2	     |返回 2 的自然对数（约等于 0.693）
LN10	 |返回 10 的自然对数（约等于 2.302）
LOG2E	 |返回以 2 为底的 e 的对数（约等于 1.443）
LOG10E   |返回以 10 为底的 e 的对数（约等于 0.434）
PI	     |返回圆周率 π（约等于 3.14159）
SQRT1_2  |返回返回 2 的平方根的倒数（约等于 0.707）
SQRT2	 |返回 2 的平方根（约等于 1.414）
  	 	

+ Math对象提供的方法：

方法|描述
-|-:
abs(x)	                |返回 x 的绝对值
acos(x)	                |返回 x 的反余弦值
acosh(x)	            |返回 x 的反双曲余弦值
asin(x)	                |返回 x 的反正弦值
asinh(x)	            |返回 x 的反双曲正弦值
atan(x)	                |返回 x 的反正切值
atanh(x)	            |返回 x 的反双曲正切值
atan2(y,x)	            |返回 y/x 的反正切值
cbrt(x)	                |返回 x 的立方根
ceil(x)	                |对 x 进行向上取整，即返回大于 x 的最小整数
clz32(x)	            |返回将 x 转换成 32 无符号整形数字的二进制形式后，开头 0 的个数
cos(x)	                |返回 x 的余弦值
cosh(x)	                |返回 x 的双曲余弦值
exp(x)	                |返回算术常量 e 的 x 次方，即 Ex
expm1(x)	            |返回 exp(x) - 1 的值
floor(x)	            |对 x 进行向下取整，即返回小于 x 的最大整数
fround(x)	            |返回最接近 x 的单精度浮点数
hypot([x, [y, [...]]])  |返回所有参数平方和的平方根
imul(x, y)	            |将参数 x、y 分别转换位 32 位整数，并返回它们相乘后的结果
log(x)	                |返回 x 的自然对数
log1p(x)	            |返回 x 加 1 后的自然对数
log10(x)	            |返回 x 以 10 为底的对数
log2(x)	                |返回 x 以 2 为底的对数
max([x, [y, [...]]])    |返回多个参数中的最大值
min([x, [y, [...]]])    |返回多个参数中的最小值
pow(x,y)	            |返回 x 的 y 次幂
random()	            |返回一个 0 到 1 之间的随机数
round(x)	            |返回 x 四舍五入后的整数
sign(x)	                |返回 x 的符号，即一个数是正数、负数还是 0
sin(x)	                |返回 x 的正弦值
sinh(x)	                |返回 x 的双曲正弦值
sqrt(x)	                |返回 x 的平方根
tan(x)	                |返回 x 的正切值
tanh(x)	                |返回 x 的双曲正切值
toSource()	            |返回字符串"Math"
trunc(x)	            |返回 x 的整数部分
valueOf()	            |返回 Math 对象的原始值


（6）RegExp对象

是一种用于匹配字符串或特殊字符的一种逻辑公式。所谓逻辑公式就是由一些特定字符组成的，用来表示某些规则的特殊字符串，可以表达对字符串数据的过滤逻辑，创建RegExp对象有两种方法：
```js
var patt = new RegExp(pattern, modifiers);
var patt = /pattern/modifiers;
```
**参数说明如下**：

pattern：正则表达式，按照正则表达式的语法定义的正则表达式；

modifiers：修饰符，用来设置字符串的匹配模式，可选值如下表所示：

修饰符|描述
-|-:
i |执行对大小写不敏感的匹配
g |执行全局匹配（查找所有的匹配项，而非在找到第一个匹配项后停止）
m |执行多行匹配
s |允许使用.匹配换行符
u |使用 Unicode 码的模式进行匹配
y |执行“粘性”搜索，匹配从目标字符串的当前位置开始

**注意**：当使用 new 关键字创建 RegExp 对象时，需要将正则表达式中的特殊字符转义，即在特殊字符前加反斜杠\，例如\\w+。						

正则表达式由字母、数字、标点以及一些特殊特殊字符组成，例如/abc/、/(\d+)\.\d*/，建议去百度直接搜索最新的，如手机号码正则表达式

+ RegExp 对象中提供了一些列属性来执行正则表达式

属性|描述
-|-:
constructor |返回一个函数，该函数是一个创建 RegExp 对象的原型
global	    |判断是否设置了修饰符 "g"
ignoreCase  |判断是否设置了修饰符 "i"
lastIndex	|用于规定下次匹配的起始位置
multiline	|判断是否设置了修饰符 "m"
source	    |返回正则表达式的匹配模式
	 	 

+ RegExp 对象中提供了一些列方法来执行正则表达式

方法|描述
-|-:
compile()  |在 1.5 版本中已废弃，编译正则表达式
exec()	   |在字符串搜索匹配项，并返回一个数组，若没有匹配项则返回 null
test()	   |测试字符串是否与正则表达式匹配，匹配则返回 true，不匹配则返回 false
toString() |返回表示指定对象的字符串

+ String 对象中也提供了一些方法来执行正则表达式	
  
方法|描述
-|-:
search()   |在字符串中搜索匹配项，并返回第一个匹配的结果，若没有找到匹配项则返回 -1
match()	   |在字符串搜索匹配项，并返回一个数组，若没有匹配项则返回 null
matchAll() |在字符串搜索所有匹配项，并返回一个迭代器（iterator）
replace()  |替换字符串中与正则表达式相匹配的部分
split()	   |按照正则表达式将字符串拆分为一个字符串数组
	  		  
## 事件对象
事件是当用户与网页交互时发生的事情，如点击按钮，在文本框中输入文本等。事件名称都是以on开头，常用的事件如下
1. 鼠标、键盘事件

事件|描述
-|-:
onclick	    |点击鼠标时触发此事件
ondblclick  |双击鼠标时触发此事件
onmousedown |按下鼠标时触发此事件
onmouseup	|鼠标按下后又松开时触发此事件
onmouseover |当鼠标移动到某个元素上方时触发此事件
onmousemove |移动鼠标时触发此事件    
onmouseout  |当鼠标离开某个元素范围时触发此事件
onkeypress  |当按下并松开键盘上的某个键时触发此事件
onkeydown	|当按下键盘上的某个按键时触发此事件
onkeyup	    |当放开键盘上的某个按键时触发此事件

2. 窗口事件

事件|描述
-|-:
onabort	       |图片在下载过程中被用户中断时触发此事件
onbeforeunload |当前页面的内容将要被改变时触发此事件
onerror	       |出现错误时触发此事件
onload	       |页面内容加载完成时触发此事件
onmove	       |当移动浏览器的窗口时触发此事件
onresize	   |当改变浏览器的窗口大小时触发此事件
onscroll	   |当滚动浏览器的滚动条时触发此事件
onstop	       |当按下浏览器的停止按钮或者正在下载的文件被中断时触发此事件
oncontextmenu  |当弹出右键上下文菜单时触发此事件
onunload	   |改变当前页面时触发此事件

3. 表单事件

事件|描述
-|-:
onblur	 |当前元素失去焦点时触发此事件
onchange |当前元素失去焦点并且元素的内容发生改变时触发此事件
onfocus	 |当某个元素获得焦点时触发此事件
onreset	 |当点击表单中的重置按钮时触发此事件
onsubmit |当提交表单时触发此事件

3. 案例

(1) 为指定的 HTML 元素定义鼠标点击事件（即在该元素上单击鼠标左键时触发的事件）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>
<body>
    <button type="button" onclick="myBtn()">按钮</button>
    <script type="text/javascript">
        function myBtn(){
            alert("Hello World!");
        }
    </script>
</body>
</html>
``` 

(2) 使用 JavaScript 中提供的内置函数来为指定元素绑定事件处理程序
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>
<body>
    <button type="button" id="myBtn">按钮</button>
    <script>
        function sayHello() {
            alert('Hello World!');
        }
        document.getElementById("myBtn").onclick = sayHello;
    </script>
</body>
</html>
``` 
## 事件冒泡和事件捕获
**事件流**：事情发生的顺序
1. 事件冒泡

发生在父子组件嵌套中，当在子元素上触发事件的时候，会导致父元素的事件也被触发，即从最内存到最外层，直到document对象
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
    <style type="text/css">
        div, p, a {
            padding: 15px 30px;
            display: block;
            border: 2px solid #000;
            background: #fff;
        }
    </style>
</head>
<body>
    <div onclick="alert('事件冒泡: ' + this.tagName)">DIV
        <p onclick="alert('事件冒泡: ' + this.tagName)">P
            <a href="#" onclick="alert('事件冒泡: ' + this.tagName)">A</a>
        </p>
    </div>
</body>
</html>
```

2. 事件捕获

与事件冒泡相反，事件会从最外层开始发生，直到具体的元素
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
    <style type="text/css">
        div, p, a {
            padding: 15px 30px;
            display: block;
            border: 2px solid #000;
            background: #fff;
        }
    </style>
</head>
<body>
    <div id="wrap">DIV
        <p class="hint">P
            <a href="#">A</a>
        </p>
    </div>
    <script>
        function showTagName() {
            alert("事件捕获: " + this.tagName);
        }
        var elems = document.querySelectorAll("div, p, a");
        for (let elem of elems) {
            elem.addEventListener("click", showTagName, true);
        }
    </script>
</body>
</html>
```

3. 阻止事件捕获和冒泡

通过event.stopPropagation() 方法来阻止事件捕获和事件冒泡的发生。stopPropagation() 会阻止事件捕获和事件冒泡，但是无法阻止标签的默认行为，例如点击链接任然可以打开对应网页。

使用 event.stopImmediatePropagation() 方法来阻止同一节点的同一事件的其它事件处理程序，例如为某个节点定义了多个点击事件，当事件触发时，这些事件会按定义顺序依次执行，如果其中一个事件处理程序中使用了 stopImmediatePropagation() 方法，那么剩下的事件处理程序将不再执行。

4. 阻止默认操作

某些事件具有与之关联的默认操作，例如当您单击某个链接时，会自动跳转到指定的页面，当您单击提交按钮时，会将数据提交到服务器等。如果不想这样的默认操作发生，可以使用 event.preventDefault() 方法来阻止。注意：IE9 及以下的版本不支持 preventDefault() 方法，对于 IE9 及以下的浏览器您可以使用 event.returnValue = false;。


## 事件委托

## 作用域
可以在任意位置声明变量，但在不同的位置会影响变量的可用范围，这个范围称为作用域，有两种作用域：全局作用域和局部作用域

1. 全局作用域

指变量可以在当前脚本的任意位置访问，拥有全局作用域的变量也成为了“全局变量”，特征表现为：

（1）最外层的函数和在最外层函数外面定义的变量拥有全局作用域

（2）所有未定义直接复制的变量拥有全局作用域

（3）所有window对象的属性拥有全局作用域，如window.name

```js
// 所有具有全局作用域的变量都会被绑定到 window 对象中，成为 window 对象的一个属性
var str = "JavaScript";
document.write(str);                    // 输出：JavaScript
document.write(window.str);             // 输出：JavaScript
document.write(str === window.str);     // 输出：true
```

2. 局部作用域

在函数内部声明的变量具有局部作用域，拥有局部作用域的变量也称为“局部变量”，局部变量只能在其作用域中（函数内部）使用。在函数内定义的局部变量只有在函数被调用时才会生成，当函数执行完毕后会被立即销毁
```js
function myFun(){
    var str = "Hello World!";
    document.write(str);    // 输出：Hello World!
}
document.write(str);        // 报错：str is not defined
```

## DOM
文档对象模型，简称DOM，是一种与平台和语音无关的模型，用来表示HTML或XML文档。文档对象模型中定义了文档的逻辑结构，以及程序访问和操作文档的方式。当网页加载时，浏览器会自动创建当前页面的文档对象模型，如下：
![image](/img/dom.png)

+ DOM对象中提供的属性

属性|描述
-|-:
document.activeElement	     |返回当前获取焦点的元素
document.anchors	         |返回对文档中所有 Anchor 对象的引用
document.applets	         |返回对文档中所有 Applet 对象的引用。注意: HTML5 已不支持 applet 元素
document.baseURI	         |返回文档的基础 URI
document.body	             |返回文档的 body 元素
document.cookie	             |设置或返回与当前文档有关的所有 cookie
document.doctype	         |返回与文档相关的文档类型声明 (DTD)
document.documentElement	 |返回文档的根节点
document.documentMode	     |返回浏览器渲染文档的模式
document.documentURI	     |设置或返回文档的位置
document.domain	             |返回当前文档的域名
document.domConfig	         |已废弃，返回 normalizeDocument() 被调用时所使用的配置
document.embeds	             |返回文档中所有嵌入内容（embed）的集合
document.forms	             |返回文档中所有 Form 对象的引用
document.images	             |返回文档中所有 Image 对象的引用
document.implementation	     |返回处理该文档的 DOMImplementation 对象
document.inputEncoding	     |返回文档的编码方式
document.lastModified	     |返回文档的最后修改日期
document.links	             |返回对文档中所有 Area 和 Link 对象的引用
document.readyState	         |返回文档状态（载入中）
document.referrer	         |返回载入当前文档的 URL
document.scripts	         |返回页面中所有脚本的集合
document.strictErrorChecking |设置或返回是否强制进行错误检查
document.title	             |返回当前文档的标题
document.URL	             |返回文档的完整 URL
                                                                                        	        

+ DOM对象中提供的方法

方法|描述
-|-:
document.addEventListener()	      |向文档中添加事件
document.adoptNode(node)	      |从另外一个文档返回 adapded 节点到当前文档
document.close()	              |关闭使用 document.open() 方法打开的输出流，并显示选定的数据
document.createAttribute()	      |为指定标签添加一个属性节点
document.createComment()	      |创建一个注释节点
document.createDocumentFragment() |创建空的 DocumentFragment 对象，并返回此对象
document.createElement()	      |创建一个元素节点
document.createTextNode()	      |创建一个文本节点
document.getElementsByClassName() |返回文档中所有具有指定类名的元素集合
document.getElementById()	      |返回文档中具有指定 id 属性的元素
document.getElementsByName()	  |返回具有指定 name 属性的对象集合
document.getElementsByTagName()	  |返回具有指定标签名的对象集合
document.importNode()	          |把一个节点从另一个文档复制到该文档以便应用
document.normalize()	          |删除空文本节点，并合并相邻的文本节点
document.normalizeDocument()	  |删除空文本节点，并合并相邻的节点
document.open()	                  |打开一个流，以收集来自 document.write() 或 document.writeln() 方法的输出
document.querySelector()	      |返回文档中具有指定 CSS 选择器的第一个元素
document.querySelectorAll()	      |返回文档中具有指定 CSS 选择器的所有元素
document.removeEventListener()	  |移除文档中的事件句柄
document.renameNode()	          |重命名元素或者属性节点
document.write()	              |向文档中写入某些内容
document.writeln()	              |等同于 write() 方法，不同的是 writeln() 方法会在末尾输出一个换行符
               	      	                                       
### element  

使用 Document 对象中提供的方法（例如 getElementsByTagName()、getElementById()、getElementsByClassName() 等）可以得到 Element 对象，在 Element 对象中同样也提供了一系列方法和属性，来操作文档中的元素或者元素中的属性。

+ element对象中提供的属性

属性|描述
-|-:
element.accessKey	           |设置或返回一个访问单选按钮的快捷键
element.attributes	           |返回一个元素的属性数组
element.childNodes	           |返回元素的一个子节点的数组
element.children	           |返回元素中子元素的集合
element.classList	           |返回元素中类名组成的对象
element.className	           |设置或返回元素的 class 属性
element.clientHeight	       |返回内容的可视高度（不包括边框，边距或滚动条）
element.clientWidth	           |返回内容的可视宽度（不包括边框，边距或滚动条）
element.contentEditable	       |设置或返回元素的内容是否可编辑
element.dir	                   |设置或返回一个元素中的文本方向
element.firstChild	           |返回元素中的第一个子元素
element.id	                   |设置或者返回元素的 id
element.innerHTML	           |设置或者返回元素的内容
element.isContentEditable	   |返回元素内容是否可编辑，如果可编辑则返回 true，否则返回 false
element.lang	               |设置或者返回一个元素的语言
element.lastChild	           |返回元素的最后一个子元素
element.namespaceURI	       |返回命名空间的 URI
element.nextSibling	           |返回指定元素之后的兄弟元素，两个元素在 DOM 树中位于同一层级（包括文本节点、注释节点）
element.nextElementSibling	   |返回指定元素之后的兄弟元素，两个元素在 DOM 树中位于同一层级（不包括文本节点、注释节点）
element.nodeName	           |返回元素名称（大写）
element.nodeType	           |返回元素的节点类型
element.nodeValue	           |返回元素的节点值
element.offsetHeight	       |返回元素的高度，包括边框和内边距，但不包括外边距
element.offsetWidth	           |返回元素的宽度，包括边框和内边距，但不包括外边距
element.offsetLeft	           |返回元素在水平方向的偏移量
element.offsetParent	       |返回距离该元素最近的进行过定位的父元素
element.offsetTop	           |返回元素在垂直方向的偏移量
element.ownerDocument	       |返回元素的根元素（文档对象）
element.parentNode	           |返回元素的父节点
element.previousSibling	       |返回元素之前的兄弟元素，两个元素在 DOM 树中位于同一层级（包括文本节点、注释节点）
element.previousElementSibling |返回元素之前的兄弟元素，两个元素在 DOM 树中位于同一层级（不包括文本节点、注释节点）
element.scrollHeight	       |返回元素的完整高度（包括被滚动条隐蔽的部分）
element.scrollLeft	           |设置或返回元素滚动条距离元素左侧的距离
element.scrollTop	           |设置或返回元素滚动条距离元素上方的距离
element.scrollWidth	           |返回元素的完整宽度（包括被滚动条隐蔽的部分）
element.style	               |设置或返回元素的样式属性
element.tabIndex	           |设置或返回元素的标签顺序
element.tagName	               |以字符的形式返回元素的名称（大写）
element.textContent	           |设置或返回某个元素以及其中的文本内容
element.title	               |设置或返回元素的 title 属性
element.length	               |返回对象的长度
                                                            	                    
+ element对象中提供的方法

方法|描述
-|-:
element.addEventListener()	     	           |为指定元素定义事件
element.appendChild()	         	           |为元素添加一个新的子元素
element.cloneNode()	             	           |克隆某个元素
element.compareDocumentPosition()	           |比较当前元素与指定元素在文档中的位置，返回值有1,2,4,8,16,32
element.focus()	                	           |使元素获得焦点
element.getAttribute()	        	           |通过属性名称获取指定元素的属性值
element.getAttributeNode()	    	           |通过属性名称获取指定元素得属性节点
element.getElementsByTagName()		           |通过标签名获取当前元素下的所有子元素的集合
element.getElementsByClassName()	           |通过类名获取当前元素下的子元素的集合
element.hasAttribute()	        	           |判断元素是否具有指定的属性，若存在则返回 true，不存在则返回 false
element.hasAttributes()	        	           |判断元素是否存在任何属性，若存在则返回 true，不存在则返回 false
element.hasChildNodes()	        	           |判断一个元素是否具有子元素，有则返回 true，没有则返回 false
element.hasFocus()	            	           |判断元素是否获得了焦点
element.insertBefore()	        	           |在已有子元素之前插入一个新的子元素
element.isDefaultNamespace()		           |如果指定 namespaceURI 是默认的则返回 true，否则返回 false。
element.isEqualNode()	        	           |检查两个元素是否相等
element.isSameNode()	        	           |检查当前元素与指定元素是否为同一元素
element.isSupported()	        	           |判断当前元素是否支持某个特性
element.normalize()	            	           |合并相邻的文本节点，并删除空的文本节点
element.querySelector()	        	           |根据 CSS 选择器，返回第一个匹配的元素
document.querySelectorAll()	    	           |根据 CSS 选择器，返回所有匹配的元素
element.removeAttribute()	    	           |从元素中删除指定的属性
element.removeAttributeNode()		           |从元素中删除指定的属性节点
element.removeChild()	        	           |删除一个子元素
element.removeEventListener()		           |移除由 addEventListener() 方法添加的事件
element.replaceChild()	        	           |替换一个子元素
element.setAttribute()	        	           |设置或者修改指定属性的值
element.setAttributeNode()	    	           |设置或者修改指定的属性节点
element.setUserData()	        	           |在元素中为指定键值关联对象
element.toString()	            	           |将元素转换成字符串
nodelist.item()	                	           |返回某个元素基于文档树的索引

**特别解释说明**：
    
1：表示两个元素没有关系，不属于同一文档；

2：表示当前元素在指定元素之后；

4：当前元素在指定元素之前；

8：当前元素在指定元素之内；

16：指定元素在当前元素之内；

32：两个元素没有关系，或者它们是同一元素的两个属性。

### attributes 
元素属性是指在HTML元素的开始标签中用来控制标签行为或提供标签信息的特殊词语。在 HTML DOM 中，通过 attributes 对象来表示 HTML 属性，在 attributes 对象中提供了多种添加、修改和删除 HTML 属性的方法，如下表所示：

属性/方法|描述
-|-:
attributes.isId	         	|如果属性是 ID 类型，则返回 true，否则返回 false
attributes.name	            |返回属性名称
attributes.value	        |设置或者返回属性的值
attributes.specified	    |如果定义了指定属性，则返回 true，否则返回 false
nodemap.getNamedItem()	    |从节点列表中返回的指定属性节点
nodemap.item()	            |返回节点列表中处于指定索引号的节点
nodemap.length	            |返回节点列表的节点数目
nodemap.removeNamedItem()   |删除指定属性节点
nodemap.setNamedItem()	    |设置指定属性节点（通过名称）

## BOM
浏览器对象模型（Browser Object Model，简称 BOM）是 JavaScript 的组成部分之一，BOM 赋予了 JavaScript 程序与浏览器交互的能力。

window 对象是 BOM 的核心，用来表示当前浏览器窗口，其中提供了一系列用来操作或访问浏览器的方法和属性。另外，JavaScript 中的所有全局对象、函数以及变量也都属于 window 对象，甚至我们前面介绍的 document 对象也属于 window 对象。

+ window对象中的属性

属性|描述
-|-:
closed	      	         	|返回窗口是否已被关闭
defaultStatus	         	|设置或返回窗口状态栏中的默认文本
document	  	         	|对 Document 对象的只读引用
frames	      	         	|返回窗口中所有已经命名的框架集合，集合由 Window 对象组成，每个 Window 对象在窗口中含有一个 frame 或 iframe>标签
history	      	         	|对 History 对象的只读引用，该对象中包含了用户在浏览器中访问过的 URL
innerHeight	  	         	|返回浏览器窗口的高度，不包含工具栏与滚动条
innerWidth	  	         	|返回浏览器窗口的宽度，不包含工具栏与滚动条
localStorage	         	|在浏览器中以键值对的形式保存某些数据，保存的数据没有过期时间，会永久保存在浏览器中，直至手动删除
length	      	         	|返回当前窗口中 iframe>框架的数量
location	  	         	|引用窗口或框架的 Location 对象，该对象中包含当前 URL 的有关信息
name	      	         	|设置或返回窗口的名称
navigator	  	         	|对 Navigator 对象的只读引用，该对象中包含当前浏览器的有关信息
opener	      	         	|返回对创建此窗口的 window 对象的引用
outerHeight	  	         	|返回浏览器窗口的完整高度，包含工具栏与滚动条
outerWidth	  	         	|返回浏览器窗口的完整宽度，包含工具栏与滚动条
pageXOffset	  	         	|设置或返回当前页面相对于浏览器窗口左上角沿水平方向滚动的距离
pageYOffset	  	         	|设置或返回当前页面相对于浏览器窗口左上角沿垂直方向滚动的距离
parent	      	         	|返回父窗口
screen	      	         	|对 Screen 对象的只读引用，该对象中包含计算机屏幕的相关信息
screenLeft	  	         	|返回浏览器窗口相对于计算机屏幕的 X 坐标
screenTop	  	         	|返回浏览器窗口相对于计算机屏幕的 Y 坐标
screenX	      	         	|返回浏览器窗口相对于计算机屏幕的 X 坐标
sessionStorage	         	|在浏览器中以键值对的形式存储一些数据，数据会在关闭浏览器窗口或标签页之后删除
screenY	      	         	|返回浏览器窗口相对于计算机屏幕的 Y 坐标
self	      	         	|返回对 window 对象的引用
status	      	         	|设置窗口状态栏的文本
top	          	         	|返回最顶层的父窗口  	          	                            	        

+ window对象中的方法

方法|描述
-|-:
alert()	          	|在浏览器窗口中弹出一个提示框，提示框中有一个确认按钮
atob()	          	|解码一个 base-64 编码的字符串
btoa()	          	|创建一个 base-64 编码的字符串
blur()	          	|把键盘焦点从顶层窗口移开
clearInterval()	  	|取消由 setInterval() 方法设置的定时器
clearTimeout()	  	|取消由 setTimeout() 方法设置的定时器
close()	          	|关闭某个浏览器窗口
confirm()	      	|在浏览器中弹出一个对话框，对话框带有一个确认按钮和一个取消按钮
createPopup()	  	|创建一个弹出窗口，注意：只有 IE 浏览器支持该方法
focus()	          	|使一个窗口获得焦点
getSelection()	  	|返回一个 Selection 对象，对象中包含用户选中的文本或光标当前的位置
getComputedStyle()	|获取指定元素的 CSS 样式
matchMedia()	  	|返回一个 MediaQueryList 对象，表示指定的媒体查询解析后的结果
moveBy()	      	|将浏览器窗口移动指定的像素
moveTo()	      	|将浏览器窗口移动到一个指定的坐标
open()	          	|打开一个新的浏览器窗口或查找一个已命名的窗口
print()	          	|打印当前窗口的内容
prompt()	      	|显示一个可供用户输入的对话框
resizeBy()	      	|按照指定的像素调整窗口的大小，即将窗口的尺寸增加或减少指定的像素
resizeTo()	      	|将窗口的大小调整到指定的宽度和高度
scroll()	      	|已废弃。您可以使用 scrollTo() 方法来替代
scrollBy()	      	|将窗口的内容滚动指定的像素
scrollTo()	      	|将窗口的内容滚动到指定的坐标
setInterval()	  	|创建一个定时器，按照指定的时长（以毫秒计）来不断调用指定的函数或表达式
setTimeout()	  	|创建一个定时器，在经过指定的时长（以毫秒计）后调用指定函数或表达式，只执行一次
stop()	          	|停止页面载入
postMessage()	  	|安全地实现跨源通信

##  Navigator
是window对象的一个属性，通过这个属性可以获取浏览器的基本信息  

+ navigator 对象中常用的属性及其描述

属性|描述
-|-:
appCodeName	   |返回当前浏览器的内部名称（开发代号）
appName	       |返回浏览器的官方名称
appVersion	   |返回浏览器的平台和版本信息
cookieEnabled  |返回浏览器是否启用 cookie，启用返回 true，禁用返回 false
onLine	       |返回浏览器是否联网，联网则返回 true，断网则返回 false
platform	   |返回浏览器运行的操作系统平台
userAgent	   |返回浏览器的厂商和版本信息，即浏览器运行的操作系统、浏览器的版本、名称
         	         
+ navigator 对象中常用的方法及其描述 

方法|描述
-|-:
javaEnabled()  |返回浏览器是否支持运行 Java Applet 小程序，支持则返回 true，不支持则返回 false
sendBeacon()   |向浏览器异步传输少量数据

## Screen
获取屏幕信息，如分辨率、宽度等

+ screen 对象中常用的属性及其描述

属性|描述
-|-:
availTop	 |返回屏幕上方边界的第一个像素点（大多数情况下返回 0）
availLeft	 |返回屏幕左边边界的第一个像素点（大多数情况下返回 0）
availHeight	 |返回屏幕的高度（不包括 Windows 任务栏）
availWidth	 |返回屏幕的宽度（不包括 Windows 任务栏）
colorDepth	 |返回屏幕的颜色深度（color depth），根据 CSSOM（CSS 对象模型）视图，为兼容起见，该值总为 24。
height	     |返回屏幕的完整高度
pixelDepth	 |返回屏幕的位深度/色彩深度（bit depth），根据 CSSOM（CSS 对象模型）视图，为兼容起见，该值总为 24
width	     |返回屏幕的完整宽度
orientation	 |返回当前屏幕的方向

## location
获取url的信息，包含端口号等

+ location 对象中常用的属性及其描述

属性|描述
-|-:
hash	 |返回一个 URL 中锚的部分，例如：http://c.biancheng.net#js 中的 #js。
host	 |返回一个 URL 的主机名和端口号，例如 http://c.biancheng.net:8080。
hostname |返回一个 URL 的主机名，例如 http://c.biancheng.net。
href	 |返回一个完整的 URL，例如 http://c.biancheng.net/javascript/location-object.html。
pathname |返回一个 URL 中的路径部分，开头有个/。
port	 |返回一个 URL 中的端口号，如果 URL 中不包含明确的端口号，则返回一个空字符串' '。
protocol |返回一个 URL 协议，即 URL 中冒号:及其之前的部分，例如 http: 和 https:。
search	 |返回一个 URL 中的查询部分，即 URL 中?及其之后的一系列查询参数。

+ location 对象中常用的方法及其描述

方法|描述
-|-:
assign()	 |加载指定的 URL，即载入指定的文档。
reload()	 |重新加载当前 URL。
replace()	 |用指定 URL 替换当前的文档，与 assign() 方法不同的是，使用 replace() 替换的新页面不会保存在浏览历史中，用户不能使用后退来返回该页面。
toString()	 |与 href 属性的效果相同，以字符串的形式返回当前完整的 URL。
        	    	    	    
## history
获取浏览历史。包括通过浏览器浏览过的页面，以及当前页面中通过iframe加载的页面。我们可以通过 window 对象中的 history 属性来获取 history 对象，由于 window 对象是一个全局对象，因此在使用window.history时可以省略 window 前缀，例如window.history.go()可以简写为history.go()。

+ history 对象中常用的属性及其描述

属性|描述
-|-:
length	         |返回浏览历史的数目，包含当前已经加载的页面。
scrollRestoration|利用浏览器特性，使我们在返回上一页或者下一页时，将页面滚动到之前浏览的位置，该属性有两个值，分别是 auto（表示滚动）与 manual（表示不滚动）。
state |返回浏览器在当前 URL 下的状态信息，如果没有调用过 pushState() 或 replaceState() 方法，则返回默认值 null。

+ history 对象中常用的方法及其描述

方法|描述
-|-:
back()		         | 参照当前页面，返回历史记录中的上一条记录（即返回上一页），您也可以通过点击浏览器工具栏中的←按钮来实现同样的效果。
forward()|参照当前页面，前往历史记录中的下一条记录（即前进到下一页），您也可以通过点击浏览器工具栏中的→按钮来实现同样的效果。
go() |参照当前页面，根据给定参数，打开指定的历史记录，例如 -1 表示返回上一页，1 表示返回下一页。
pushState() |向浏览器的历史记录中插入一条新的历史记录。
replaceState() |使用指定的数据、名称和 URL 来替换当前历史记录。

## 定时器

定时器，也称计时器，用来在经过指定的时间后执行某些任务，如延时执行某些代码，或者以固定的时间间隔重复执行某些代码

### setTimeout
在指定的时间后（单位为毫秒），执行某些代码，代码只会执行一次，语法如下：
```js
//[]表示可选
setTimeout(function[, delay, arg1, arg2, ...]);
setTimeout(function[, delay]);
setTimeout(code[, delay]);
```
**参数说明如下**：

+ function：一个函数（通常使用匿名函数），其中定义了定时器中要执行的代码；

+ code：字符串类型的代码，这些代码会在定时器到期后被编译执行，出于安全考虑不建议使用；

+ delay：可选参数，定时器在执行的其中代码之前，要等待的时间，单位为毫秒（1秒 = 1000毫秒），如果省略此参数，则表示立即执行；

+ arg1、arg2、...、argN：要传递给函数的参数。


### setInterval
按照指定的周期（单位为毫秒）来重复执行某些代码，定时器不会自动停止，除非调用clearInterval() 函数来手动停止或者关闭浏览器窗口。语法格式如下：
```js
setInterval(function, delay, [arg1, arg2, ...]);
setInterval(code, delay);
```
**参数说明如下**：
+ function：一个函数（通常使用匿名函数），其中定义了定时器中要执行的代码；

+ code：字符串类型的代码，这些代码会在定时器到期后被编译执行，出于安全考虑不建议使用；

+ delay：可选参数，定时器在执行的其中代码之前，要等待的时间，单位为毫秒（1秒 = 1000毫秒），如果省略此参数，则表示立即执行；

+ arg1、arg2、...、argN：要传递给函数的参数。

### 取消定时器
当使用定时器的时候，两个方法都会产生一个唯一的Id,Id为一个整数值，也称为“定时器标识符”，通过这个id，可以清除id所对应的定时器

clearTimeout() 或 clearInterval() 函数来分别清除由 setTimeout() 或 setInterval() 函数创建的定时器。调用 clearTimeout() 或 clearInterval() 函数需要提供定时器的唯一 ID 作为参数

## 异常处理
在编程中，有时候代码并不会像我们预期的那样运行，会遇到各种各样的错误，如代码中使用了错误的符号、调用未定义的方法、网格错误、读取不存在的文件、没有操作权限等

根据类型的不同，js编程中的错误大致可以分为一下三种类型：

+ 语法错误：也称解析错误，一般是因为代码存在某些语法错误引起的，当发生语法错误时，代码会停止运行

+ 运行时错误：也称为异常，发生在程序运行期间，例如调用未定义的方法、读取不存在的文件等，发生运行时错误也会终止代码运行

+ 逻辑错误：是最难发现的一种错误，逻辑错误通常是因为代码存在瑕疵，导致程序输出意外的结果或终止运行

### 错误和异常的区别

**错误**：是在代码运行之前出现的，在运行js程序之前，js解释器会先对代码进行检查，如果代码有误，例如某些语法错误，浏览器就会报出相应的错误，只有将错误修正后，代码才能运行

**异常**：是在代码运行中出现的，例如调用某个未定义的方法、读取不存在的文件等。再出现异常之前，代码的运行并不受影响，当时出现异常时，会在浏览器控制台输出错误信息，并终止程序的运行

### js异常处理
目的是捕捉产生异常的代码，使整个程序不会因为异常而终止运行，语法如下：
```js
try {
    // 可能会发生异常的代码
} catch(error) {
    // 发生异常时要执行的操作
}
```
1. 将任何可能发生异常的代码放到 try 语句块中，并在 catch 语句块中定义处理异常的方法。如果 try 语句块中的代码发生错误，代码会立即从 try 语句块跳转到 catch 语句块中，如果 try 语句块中代码没有发生错误，就会忽略 catch 语句块中的代码。

2. 当 try 语句块中的代码出现异常时，会创建并抛出一个 Error 对象（例如上面代码内catch(error)中的 error），对象中包含两个属性，如下所示：

+ name：错误的类型；

+ message：对错误的描述信息。

3. 在 try catch 语句的后面，还可以添加一个finally 语句块，无论try 语句块中的代码是否发生错误，finally 语句中的代码都会执行。示例代码如下：
```js
try {
    // 可能会发生异常的代码
} catch(e) {
   // 发生异常时要执行的操作
} finally {
    // 都会走一遍的逻辑
}
```

### 抛出错误
js中不仅可以依赖解析器来自动抛出错误，还可以手动抛出错误。抛出错误需要使用throw语句，语法格式如下：
```js
throw expression;
```
其中expression就是要抛出的异常，可以是任何类型的值，例如对象、字符串、数组等，推荐使用对象类型

### 错误类型
当try语句块中的代码出现错误时，会创建并抛出一个Error对象，对象中包含错误类型和错误描述两个属性。发生不同会返回不同错误类型:

错误类型|说明
-|-:
EvalError	    |使用 eval() 函数时发出错误，会抛出该错误
InternalError   |由 JavaScript 引擎内部错误导致的异常，会抛出该错误
RangeError	    |范围错误，当使用了超出允许范围的数值时，会抛出该错误
SyntaxError	    |语法错误，当代码中存在任何语法错误时，会抛出该错误
TypeError	    |类型错误，当使用的值不是预期类型时，会抛出该错误，例如对数字调用字符串方法，对字符串调用数组方法等
URIError	    |URI 错误，当使用 URI 相关函数但传入 URI 参数时，会抛出该错误
ReferenceError  |参数错误，当尝试使用未定义的变量、函数、对象时，会抛出该错误

## 表单验证
使用js来验证提交数据（客户端验证）比将数据提交到服务器再进行验证（服务器端验证）用户体验更好，因为客户端验证发生在用户浏览器中，无需向服务器发送请求，所以速度更快，而服务器端验证，需要先将数据提交到服务器，然后服务器再将结果返回给浏览器，用户需要等待服务器响应结果才能知道哪里出了问题。

**使用js进行表单验证**

+ 必填字段验证：确保必填字段都被填写

+ 数据格式验证：确保所填内容的类型和格式都是正确的、有效的

**必填字段验证**

必填字段验证在用户注册时比较常见，通过必填字段验证，能够确保表单中的必填字段都被填写，例如用户名、密码、邮箱等。

实现必填字段验证非常简单，只需要通过程序来检查必填表单元素的值是否为空即可
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
    <style>
        .error{
            color: red;
        }
        label{
            display: inline-block;
            width: 70px;
            text-align: right;
        }
    </style>
</head>
<body>
    <form onsubmit="return validateForm()" action="" method="post">
        <fieldset>
            <legend>注册:</legend>
            <div class="row">
                <label>用户名：</label>
                <input type="text" name="name">
                <span class="error" id="nameErr"></span>
            </div>
            <div class="row">
                <label>密码：</label>
                <input type="password" name="pwd">
                <span class="error" id="pwdErr"></span>
            </div>
            <div class="row">
                <label>Email：</label>
                <input type="text" name="email">
                <span class="error" id="emailErr"></span>
            </div>
            <div class="row">
                <label>手机号：</label>
                <input type="text" name="mobile" maxlength="11">
                <span class="error" id="mobileErr"></span>
            </div>
            <div class="row">
                <label>验证码：</label>
                <input type="text" name="captcha" maxlength="4"><span id="captcha" onclick="getCaptcha()"></span>
                <span class="error" id="captchaErr"></span>
            </div>
            <div class="row">
                <input type="submit" value="注册">
            </div>
        </fieldset>
    </form>
    <script>
        var captcha = getCaptcha(); // 生成验证码
        // 清空 input 标签后的提示信息
        var tags = document.getElementsByTagName('input');
        for (var i = 0; i < tags.length; i++) {
            tags[i].onchange = function(){
                var idname = this.name + "Err";
                document.getElementById(idname).innerHTML = '';
            }
        }
        // 显示错误消息
        function printError(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
        }
        // 验证表单数据
        function validateForm() {
            // 获取表单元素的值
            var name = document.querySelector("input[name='name']").value;
            var pwd = document.querySelector("input[name='pwd']").value;
            var email = document.querySelector("input[name='email']").value;
            var mobile = document.querySelector("input[name='mobile']").value;
            var captcha = document.querySelector("input[name='captcha']").value;
                  
            if(name == "" || name == null){
                printError("nameErr", "用户名不能为空");
                return false;
            }
            if(pwd == "" || pwd == null){
                printError("pwdErr", "密码不能为空");
                return false;
            }
            if(email == "" || email == null){
                printError("emailErr", "邮箱不能为空");
                return false;
            }
            if(mobile == "" || mobile == null){
                printError("mobileErr", "手机号不能为空");
                return false;
            }
            if(captcha == "" || captcha == null){
                printError("captchaErr", "验证码不能为空");
                return false;
            }
        }
        // 获取验证码
        function getCaptcha(){
            var cap = Math.floor(Math.random()*10000).toString();
            if(cap.length != 4) cap += "0";
            captcha = cap;
            document.getElementById("captcha").innerHTML = cap;
        }
    </script>
</body>
</html>
```

**数据格式验证**

数据格式验证就是通过正则表达式来验证用户所填的数据，是否符合要求，以邮箱地址为例，正确的邮箱地址中要包含一个@和一个. ，而且@不能是邮箱地址的第一个字符， .要出现在@之后
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
    <style>
        .error{
            color: red;
        }
        label{
            display: inline-block;
            width: 70px;
            text-align: right;
        }
    </style>
</head>
<body>
    <form onsubmit="return validateForm()" action="" method="post">
        <fieldset>
            <legend>注册:</legend>
            <div class="row">
                <label>用户名：</label>
                <input type="text" name="name">
                <span class="error" id="nameErr"></span>
            </div>
            <div class="row">
                <label>密码：</label>
                <input type="password" name="pwd">
                <span class="error" id="pwdErr"></span>
            </div>
            <div class="row">
                <label>Email：</label>
                <input type="text" name="email">
                <span class="error" id="emailErr"></span>
            </div>
            <div class="row">
                <label>手机号：</label>
                <input type="text" name="mobile" maxlength="11">
                <span class="error" id="mobileErr"></span>
            </div>
            <div class="row">
                <label>验证码：</label>
                <input type="text" name="captcha" maxlength="4"><span id="captcha" onclick="getCaptcha()"></span>
                <span class="error" id="captchaErr"></span>
            </div>
            <div class="row">
                <input type="submit" value="注册">
            </div>
        </fieldset>
    </form>
    <script>
        var capCode = getCaptcha(); // 生成验证码
        console.log(capCode);
        // 清空 input 标签后的提示信息
        var tags = document.getElementsByTagName('input');
        for (var i = 0; i < tags.length; i++) {
            tags[i].onchange = function(){
                var idname = this.name + "Err";
                document.getElementById(idname).innerHTML = '';
            }
        }
        // 显示错误消息
        function printError(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
        }
        // 验证表单数据
        function validateForm() {
            // 获取表单元素的值
            var name = document.querySelector("input[name='name']").value;
            var pwd = document.querySelector("input[name='pwd']").value;
            var email = document.querySelector("input[name='email']").value;
            var mobile = document.querySelector("input[name='mobile']").value;
            var captcha = document.querySelector("input[name='captcha']").value;
                  
            if(name == "" || name == null){
                printError("nameErr", "用户名不能为空");
                return false;
            }
            if(pwd == "" || pwd == null){
                printError("pwdErr", "密码不能为空");
                return false;
            }
            if(email == "" || email == null){
                printError("emailErr", "邮箱不能为空");
                return false;
            } else {
                var regex = /^\S+@\S+\.\S+$/;
                if(regex.test(email) === false) {
                    printError("emailErr", "请输入正确的邮箱地址");
                    return false;
                }
            }
            if(mobile == "" || mobile == null){
                printError("mobileErr", "手机号不能为空");
                return false;
            } else {
                var regex = /^[1]\d{10}$/;
                if(regex.test(mobile) === false) {
                    printError("mobileErr", "您输入的手机号码有误");
                    return false;
                }
            }
            if(captcha == "" || captcha == null){
                printError("captchaErr", "验证码不能为空");
                return false;
            } else {
                console.log(capCode);
                console.log(captcha);
                if(capCode != captcha){
                    printError("captchaErr", "验证码有误");
                    return false;
                }
            }
        }
        // 获取验证码
        function getCaptcha(){
            var cap = Math.floor(Math.random()*10000).toString();
            if(cap.length != 4) cap += "0";
            document.getElementById("captcha").innerHTML = cap;
            return capCode = cap;
        }
    </script>
</body>
</html>
```

## js动画效果的实现
js动画主要是通过修改元素的样式来实现的，能够实许多css动画所不能实现的效果，例如暂停、回放等，一般常见的有轮播图的实现

与css动画相比，js动画具有以下特点：

+ js动画控制能力更强，可以在动画播放过程中对动画进行控制，例如开始、暂停、回放、终止、取消等

+ js动画的效果比css动画更丰富，比如曲线运动，冲击闪烁，视差滚动等效果，只有js动画才能完成

+ css动画有兼容性问题，而js大多时候没有兼容性问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
    <style type="text/css">
        * {
            margin: 0 auto;
            padding: 0;
        }
        ul {
            list-style: none;
        }
        #view {
            position: relative;
            width: 320px;
            height: 120px;
            border: 10px solid #bc8f8f;
            overflow: hidden;
            margin-top: 5px;
        }
        #img_list {
            position: absolute;
            width: 960px;
        }
        #img_list li {
            float: left;
            width: 320px;
            height: 120px;
        }
    </style>
</head>

<body>
    <div id="view">
        <ul id="img_list">
            <li style="background-color: #87ceeb;"></li>
            <li style="background-color: #ff69b4;"></li>
            <li style="background-color: #98fb98;"></li>
        </ul>
    </div>
    <script type="text/javascript">
        var img_list = document.getElementById('img_list');

        setInterval(function() {
            for (var i = 0; i <= 100; i++) {
                (function(pos) {
                    setTimeout(function() {
                        img_list.style.left = - (pos / 100) * 320 + 'px';
                    }, (pos + 1) * 10)
                })(i)
            }

            var current = img_list.children[0];
            setTimeout(function() {
                img_list.appendChild(current);
                img_list.style.left = '0px';
            }, 1100);
        }, 2000);
    </script>
</body>
</html>
```
## 调试
调试是程序开发中必不可少的一个环节，熟练掌握各种调试技巧，能在我们的工作中起到事半功倍的效果

### 控制台
能够显示代码中的语法错误和运行时错误，其中包括错误类型、错误描述以及错误出现的位置。快捷键f12
![image](/img/控制台.png)
需要注意，控制台提供的错误信息不一定百分之百正确，因为某些错误可能是由于另外一个错误直接或间接引起的
### 断点调试
断点是浏览器内置调试工具的重要功能之一，通过设置断点可以让程序在我们需要的地方中断，从而方便我们对该处代码进行分析和逻辑处理
![image](/img/断点调试.png)

1. 控制台中操作

+ 找到要调试的文件

+ 打断点

+ 断点调试

+ 逐语句执行

2. 代码中添加debugger操作，运行操作时会自动到断点位置

## 闭包
是js语音的一个难点，也是它的特色，很多高级应用都是依靠闭包实现的。闭包与变量的作用域以及变量的生命周期密切相关。闭包是指一个函数，当两个函数彼此嵌套时，内部的函数就是闭包

在Js中，函数属于对象，对象又属于属性的集合，而属性的值又可以是对象，所以可以在函数内部再定义函数，如函数A中定义了函数B，然后在函数外部调用函数B，这个过程就是闭包

用途：需要在函数中定义一些变量，并且希望这些变量能够一直保存在内存中，同时不影响函数外的全局变量时，就用闭包

闭包形成的条件是内部函数需要通过外部函数return给返回出来
```js
// funOne就是闭包
function funOne(){    // 外部函数
    var num = 0;      // 局部变量
    function funTwo(){   // 内部函数
        num++;                 
        return num;
    }
    return funTwo;
}
var fun = funOne();             // 返回函数 funTwo
```

在实际开发中，我们经常使用闭包与匿名函数结合起来使用,闭包函数彼此之间没有联系，都是独立的

```js
var funOne =(function (){
    var num = 0;
    return function (){
        num++;
        return num;
    }
})()
console.log(funOne());//1
console.log(funOne());//2
```

### 垃圾回收机制（GC）
如果一个对象不再被引用，这个对象就会被GC回收，否则这个对象会一直保存在内存中
```js
function funOne(){
    var num = 0;
    function funTwo(){
        num++;
        console.log(num);
    }
    return funTwo;
}
var fun = funOne();
fun();      // 输出：1
fun();      // 输出：2
fun();      // 输出：3
fun();      // 输出：4
```
在这段程序中，内部函数funTwo()定义在外部函数funOne()中，因此funTwo()依赖funOne()，而全局变量fun又引用了funTwo()，所以funOne()间接的被fun引用。因此funOne()不会被GC回收，会一直保存在内存中

num是外部函数funOne()中的一个变量，它的值在内部函数funTwo()中被修改，函数funTwo()每执行一次就会将num加1，根据闭包的特点，函数funOne()中的变量num会一直保存在内存中

## 严格模式use strict
在ES5中引入的，在严格模式下，js对语法的要求会更加严格，一些在正常模式下能够运行的代码，在严格模式下将不能运行。目前ie10及其之后的版本都已支持严格模式，js正向着更合理、更安全、更严谨的方向发展

**添加严格模式的目的如下**：

+ 消除js语法中一些不合理、不严谨的地方

+ 消除代码中一些不安全的地方，保证代码饿安全运行

+ 提高js程序的运行效率

+ 为以后新版本的js做好铺垫

**使用严格模式**：
在js脚本的开头添加"use strict"指令。只有在整个脚本第一行或者函数第一行时才能被识别，除了 IE9 以及更低的版本外，所有的浏览器都支持该指令。
```js
 <script>
        "use strict";
        x = 'http://c.binacheng.net/'; // 此处报错：Uncaught ReferenceError: x is not defined at index.html:11
        console.log(x);
    </script>
```

**严格模式中的变化**：

1. 不允许使用未声明的变量
```js
"use strict";
v = 1;        // 此处报错：Uncaught ReferenceError: v is not defined
for(i = 0; i < 2; i++) { // 此处报错：Uncaught ReferenceError: i is not defined
}
```

2. 不允许删除变量或函数
```js
"use strict";
var person = {name: "Peter", age: 28};
delete person;  // 此处报错：Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
function sum(a, b) {
    return a + b;
}
delete sum;  // 此处报错：Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
```

3. 函数中不允许有同名的参数
```js
"use strict";
function square(a, a) {     // 此处报错：Uncaught SyntaxError: Duplicate parameter name not allowed in this context
    return a * a;
}
```

4. eval语句的作用域是独立的
```js
"use strict";
// 普通模式下，eval 语句的作用域取决于它所在的位置，而在严格模式下，eval 语句本身就是一个局部作用域，通过 eval 语句生成的变量只能在 eval 语句内使用。
eval("var x = 5; console.log(x);");
console.log(x);     // 此处报错：Uncaught ReferenceError: x is not defined
```

5. 不允许使用with语句
```js
"use strict";
var radius1 = 5;
var area1 = Math.PI * radius1 * radius1;
var radius2 = 5;
with(Math) {        // 此处报错：Uncaught SyntaxError: Strict mode code may not include a with statement
    var area2 = PI * radius2 * radius2;
}
```

6. 不允许写入只读属性
```js
"use strict";
var person = {name: "Peter", age: 28};
Object.defineProperty(person, "gender", {value: "male", writable: false});
person.gender = "female"; // 此处报错：Uncaught TypeError: Cannot assign to read only property 'gender' of object '#<Object>'
```

7. 不允许使用八进制数
```js
"use strict";
var x = 010; // 此处报错：Uncaught SyntaxError: Octal literals are not allowed in strict mode.
console.log(parseInt(x));
```

8. 不能在If语句中声明函数
```js
"use strict";
//如果在if语句中声明函数，则会产生语法错误
if (true) {
    function demo() { // 此处报错：Uncaught ReferenceError: demo is not defined
        console.log("http://c.biancheng.net/");
    }
}
demo();
```

9. 禁止使用this表示全局对象
```js
"use strict";
var name = "http://c.biancheng.net/";
function demoTest() {
    console.log(this); 
}
demoTest();
```
## js解析JSON

1. 定义

用来存储和传输数据，通常服务器端与客户端在进行交互时就是使用JSON格式的数据，是基于文本的格式，文件扩展名为.json。有两种基本结构：

对象：由若干键/值对（key:value）组成的无序集合，每个对象以{}包裹，键值对之间用逗号分隔

数组：一个有序的值列表，每个数组一[]包裹，多个值之间使用逗号分隔  

2. 如何解析json数据

通过 JSON.parse() 方法来解析 JSON 数据

3. json数据中的对象和数组可以相互嵌套，一个json对象中可以包含任意类型的数据

4. 将数据转换为json

通过JSON.stringify方法来转换，方便客户端与服务器端进行数据交互

## cookie的设置、获取和删除
cookie代表一种小型的文本文件，可以让开发人员在用户计算机上存储少量的数据（大约4kb），来记录用户的某些信息，如用户身份、喜好等，当用户下次访问网站时，网站可以通过检索这些信息来为用户展示个性化页面

### 设置cookie

可以通过document.cookie属性来创建、读取、修改和删除 Cookie 信息

1. name=value形式

设置新的cookie信息，需要以name=value形式的字符串来定义新的cookie信息
```js
// 会发现 Cookie 并没有创建，这是因为 Cookie 是用来与服务器进行交互的，所以要成功创建 Cookie 需要借助服务器环境。您可以阅读《PHP开发环境》一节，来搭建一个简单的开发环境，
document.cookie = "url=http://c...";
```
2. max-age属性

cookie并不会一直存在，默认情况下，cookie的生命周期就是浏览器的会话周期，即用户关闭浏览器后，cookie就会失效。如果想要延长coolie的生命周期，可以使用max-age属性来指定cookie存在的时间（单位为秒），默认为-1，即关闭浏览器后失效。
```js
// max-age= -1            为负数,则表示该cookie为临时cookie，关闭浏览器后就会失效
// max-age= 0             为0，则表示删除该cookie
// max-age= 30*24*60*60   设置为30天
document.cookie = "url=http://c.biancheng.net/; max-age=" + 30*24*60*60;
```

3. expires

```js
// 使用expires属性来指定cookie失效的具体日期（GMT/UTC格式）
document.cookie = "url=http://c.biancheng.net/; expires=Sun, 31 Dec 2017 12:00:00 UTC;";
```
4. path属性

默认情况下，cookie可用于统一域名下的所有网页，如果为cookie设置了path属性，cookie就只能在该域名指定路径下的网页中使用
```js
// 网站的域名为c.biancheng.net，若path属性设置为/，则表示cookie可在域名下的所有网页中使用；若path属性设置为/javascript/，则cookie只可在 http://c.biancheng.net/javascript/ 下的网页中使用
document.cookie = "url=http://c.biancheng.net/; path=/";
```

5. domain 属性
```js
// 希望 Cookie 可以在指定域名下的子域名中使用，则可以通过 domain 属性来设置，默认情况下，Cookie 仅可在设置它的域名下使用
document.cookie = "url=http://c.biancheng.net/; path=/; domain=.biancheng.net";
```

6. secure属性

该属性只有一个属性名，没有属性值，如果设置了该属性，则表示cookie将仅通过https协议传输
```js
document.cookie = "url=http://c.biancheng.net/; path=/; domain=.biancheng.net; secure";
```

7. 通常将cookie的设置封装为一个函数
```js
/**
* 添加 Cookie
* @param {[string]} name       [Cookie 的名称]
* @param {[string]} value      [Cookie 的值]
* @param {[number]} daysToLive [Cookie 的过期时间]
*/
function setCookie(name, value, daysToLive) {
    // 对 cookie 值进行编码以转义其中的分号、逗号和空格
    var cookie = name + "=" + encodeURIComponent(value);
   
    if(typeof daysToLive === "number") {
        /* 设置 max-age 属性 */
        cookie += "; max-age=" + (daysToLive*24*60*60);
    }
    document.cookie = cookie;
}
```

### 获取cookie

读取cookie同样使用document.cookie即可，该属性会返回一个字符串，字符串中包含除max-age、expires、path 和 domain 等属性之外的所有 Cookie 信息，
为了获取单个 Cookie 的值，我们可以通过 split() 函数将包含 Cookie 信息的字符串拆分为数组，然后再获取某个 Cookie 的值
```js
document.cookie = "url=http://c.biancheng.net/; max-age=" + 30*24*60*60;
document.cookie = "course=JavaScript";
document.cookie = "title=cookie";       
function getCookie(name) {
    // 拆分 cookie 字符串
    var cookieArr = document.cookie.split(";");
   
    // 循环遍历数组元素
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
       
        /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
        if(name == cookiePair[0].trim()) {
            // 解码cookie值并返回
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // 如果未找到，则返回null
    return null;
}
document.write("url = " + getCookie("url") + "<br>");           // 输出：url = http://c.biancheng.net/
document.write("course = " + getCookie("course") + "<br>");     // 输出：course = JavaScript
document.write("title = " + getCookie("title"));                // 输出：title = cookie
```

### 修改或更新cookie的值
删除或修改cookie值的唯一方法就是创建一个同名额度cookie，来替换要修改的cookie，若要修改的cookie定义path属性，在修改该属性时也要定义相同的path属性，否则会创建一个新的cookie
```js
// 创建一个 Cookie
document.cookie = "url=http://c.biancheng.net/; path=/; max-age=" + 30*24*60*60;
// 修改这个 Cookie
document.cookie = "url=http://c.biancheng.net/javascript/; path=/; max-age=" + 365*24*60*60;
```

### 删除cookie
删除cookie与修改cookie类似，只需要重新将cookie的值设置为空，并将expires属性设置为一个过去的日期即可
```js
// 创建一个 Cookie
document.cookie = "url=http://c.biancheng.net/; path=/; max-age=" + 30*24*60*60;
// 删除这个 Cookie
document.cookie = "url=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

## ajax请求
通过ajax可以异步从服务器请求数据并将数据更新到网页中，整个过程不需要重载（刷新）整个网页，可以将网页的内容更快的呈现给用户

**异步**：当程序执行到ajax代码时，将ajax代码交给另外一个线程来执行，不论执行结果如何，当前线程会继续向下执行

1. 工作原理

需要使用浏览器内置的XMLHttpRequest对象向服务器发送HTTP请求，并接受服务器响应的数据。发起请求后会继续向下执行，直至结束
![image](/img/ajax工作原理图.png)
2. 发送ajax请求
```js
// 实例化一个XMLHttpRequest 对象
var request = new XMLHttpRequest();
// 使用 XMLHttpRequest 对象的 open() 方法来初始化一个请求
/*
参数说明如下：
    method：请求的类型（使用的 HTTP 方法），例如 GET、POST、PUT、HEAD、DELETE 等；
    url：请求的地址；
    async：可选参数，布尔类型，表示是否请求是否异步执行，默认值为 true；
    user：可选参数，表示用户名，主要用来认证，默认值为 null；
    password：可选参数，表示密码，同样用来认证，默认值为 null。
*/
XMLHttpRequest.open(method, url, async, user, password);
request.open('GET', 'test.php');
// 使用 XMLHttpRequest 对象的 send() 方法将请求发送到服务器
XMLHttpRequest.send(body)
```

3. 检索响应信息

请求发送成功后，可以通过检索XMLHttpRequest对象来获取服务器的响应信息，XMLHttpRequest对象中有许多与响应有关的属性

+ XMLHttpRequest.readyState：一个无符号整型数字，表示请求的状态码，取值如下所示：

```js
0：未初始化，尚未调用 open() 方法；

1：启动，已调用 open() 方法，但尚未调用 send() 方法；

2：发送，已调用 send() 方法，但尚未接收到响应；

3：接收，已接收到部分响应数据，但尚未完成；

4：完成，已接收到全部响应数据，可以在客户端使用了。
```

+ XMLHttpRequest.onreadystatechange：指定一个函数（回调函数），当 readyState  的值发生改变时，就会调用这个函数；

+ XMLHttpRequest.responseText：请求的响应信息，如果请求未成功或尚未发送请求，则为 null；

+ XMLHttpRequest.responseType：一个枚举值，用于指定响应中包含的数据类型；

+ XMLHttpRequest.responseURL：返回响应的序列化 URL（与请求的 URL 相同），如果 URL 为空则返回空字符串；

+ XMLHttpRequest.responseXML：返回一个包含 HTML 或 XML 的 Document 对象，若请求未成功、未发送或响应数据无法解析为 XML 或 HTML 则返回 null；

+ XMLHttpRequest.status：一个无符号整型数字，表示请求的响应状态码，常见的响应状态码如下所示：

```js
200：请求成功，服务器成功处理了请求；

404：请求失败，服务器未找到请求的页面；

500：服务器暂时不可用。
```

+ XMLHttpRequest.statusText：一个字符串，表示响应状态的文本信息，例如“OK”或“Not Found”；

+ XMLHttpRequest.timeout：一个无符号整型数字，表示请求的超时时间，单位为毫秒，若超过该时间，请求会自动终止，默认值为 0，表示没有超时时间；

+ XMLHttpRequest.upload：返回一个 XMLHttpRequestUpload 对象，用来表示上传的进度。




	
	
	
	


	
	
	

