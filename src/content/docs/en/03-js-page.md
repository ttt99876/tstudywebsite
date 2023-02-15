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
