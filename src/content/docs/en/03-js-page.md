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
