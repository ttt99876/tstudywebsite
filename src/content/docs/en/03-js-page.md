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

· 能够使用的字符：数字、字母、下划线、$

· 不能使用数字开头

· 不能使用js里面具有特殊功能的单词/关键字，也不建议使用保留字

· 区分大小写

· 建议命名有意义

· 建议使用驼峰命名

4. 案例——变量之间的交换

·建立一个中间变量，用于临时存储和交换
```js
var a = 5;
var b = 10;
var tem ;
tem= b; //tem = 10
b = a; 
a = tem;
console.log(a,b);

```

· 数学的方法：相加法，另一个等于综合减去一个数字（仅限于数字的使用）
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