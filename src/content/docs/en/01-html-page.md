---
title: "html"
description: "html的全部内容"
---

此文章记录了html的知识点，学完这章内容，你可以搭建一个静态结构

## 一、web概念的概述
    javaWeb:使用java语言开发基于互联网的项目

    架构：

        C/S架构：Client/server 客户端/服务器端。在用户本地有一个客户端程序，在远程有一个服务器程序。如qq，迅雷

                优点：用户体验好

                缺点：开发、安装、部署、维护  太麻烦

        B/S架构：Browser/server  浏览器端/服务器端 只需要一个浏览器，用户通过不同的url访问不同的服务端程序。如网页

                优点：开发简单，不需要安装，部署到服务器就可以了，维护方便，只需要在浏览器端修改就好了

                缺点：应用过大，用户体验会受到影响；对硬件要求过高

### B/S访问数据

    资源分类

        1、静态资源：使用静态网页开发技术发布的资源

                （1）所有用户访问，得到的结果是一样的。如文本、图片、音频、视频、HTML 、CSS 、JS

                （2）如果用户请求的是静态资源，那么服务器会直接将静态资源发送给浏览器。浏览器中内置了静态资源的解析引擎，可以展示静态资源

        2、动态资源：使用动态网页技术发布

                （1）所有用户访问，得到的结果可能是不一样的。如jsp/servlet,php,sqp....

                （2）如果用户请求时动态资源，那么服务会执行动态资源，转换为静态资源，再发送给浏览器

## 二、html是什么

    HTML的英文全称是 Hyper Text Markup Language，即超文本标记语言。 它包括一系列标签，通过这些标签，可以统一网络上的文档格式，将分散的互联网资源连接成一个逻辑整体。HTML文本是由HTML命令组成的描述性文本，可以解释文字、图形、动画、声音、表格、链接等。超文本是一种组织信息的方式，它通过超链接的方法将文本中的字符和图表与其他信息媒体联系起来。


## 三、标签

    有双标签、单标签，双标签内可以嵌套标签，嵌套的标签要一一对应,标签会被解析。标签中可以定义属性。标签不区分大小写，但是建议用小写

### 根标签
`<html></html>`最大的标签，所有标签都被嵌在html里面


### 块级标签

    1. 特点

          一行展示，超出内容自动换行

          p标签不能嵌套其他块级标签

需要补充

    2. 标签列举

          **h1系列**：标题标签，数字越小，标题越大

          **p标签**：段落标签

          **div**：盒子标签

          **ul,ol,li,dl,dt,dd**：列表标签,含无序列表，有序列表

          **from**：表格，其中表格里面的子标签也是块级标签



### 行内标签

    1. 特点

          需要补充


    2. 标签列举
          span（盒子标签） ， img（图片标签） ，a（超链接标签）



### 单标签
    1. 特点

          用</>包裹

    2. 典型代表

          br(换行标签) ,hr（水平线标签）


### 双标签

    1. 特点

          以<></>包裹

    2. 标签列举

          所有的块级标签和行内标签



## 四、标签详解

### 文件标签：
构成html文档的标签

    **html**：html文档的根标签

    **head**:头标签。用于指定html文档的一些属性，引入外部的资源

    **title**:标题标签。浏览器网页的标题

    **body**:体标签。浏览器显示的区域的内容，都写在体标签中

    **meta**：可以在里面指定字符，避免乱码

以上标签可以自动生成，是html文档的骨架

### 文本标签：
    **h1~h6**:标题标签,数字越小，标题越大

    **p**：段落标签,被段落标签修饰的内容间隔更大，会有层次段落感

    **br**：换行标签,用了这个标签会自动换行

    **hr**：水平线，出现一条水平线，一般用于新闻。其属性有

            color:颜色

            width:宽度

            size:高度

            align:对其方式  center居中  right居右  left居左

    **b**：字体加粗

    **i**：字体斜体

    **font**：字体标签（已过时/弃用），可以控制字体的大小，字体的样式

### 图片标签：
img,是图片标签，其属性有src表示图片的路径，其余属性还有宽高等

### 列表标签：
列表分为有序列表，无序列表

有序列表：ul>ol
无需列表：ul>li

### 链接标签：

### 表格标签：



### 标签内部的注释：
不会再浏览器展示，用来解释标签的含义，是开发人员使用的
```html
<!--  -->
```


### 新特性标签

好处是可以在审查元素的时候能一眼看出来是头部标签

   1. Header

         头部标签

         使用此标签可以直接省略很多的标签组合成头部标签


   2. Nav

         导航标签

         使用此标签可以直接省略很多的标签组合成导航标签，

   3. Footer

         底部标签

         使用此标签可以直接省略很多的标签组合成底部标签



