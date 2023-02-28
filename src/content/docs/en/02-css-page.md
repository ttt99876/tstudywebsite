---
title: "css样式"
description: "Lorem ipsum dolor sit amet - 3"
---

层叠样式表其实就是对静态页面进行装饰，但是，特别要注意的点是：通常建议表现形式与页面内容分离（例如：人就是内容，穿着打扮就是表现形式）

## 样式的引入方式

### 行内样式
行内样式（将样式直接写在标签上），需要使用style属性
```html
 <!-- 行内样式 -->
 <div style="color: green; border: 1px solid red;">每天叫醒我的不是闹钟，是梦想！！！</div>
 <div style="color: green; border: 1px solid red;">每天叫醒我的不是闹钟，是梦想！！！</div>
 <div style="color: green; border: 1px solid red;">每天叫醒我的不是闹钟，是梦想！！！</div>
```

### 内联样式
页面内容和表现形式进行分离，但是还是写在一份文件里面，方便对样式进行统一管理
```html
 <head>
      <!-- 我现在写css样式，是html标签吗？ 不是标签，样式在html基础书写 -->
        <style>
            /* 选择器 */
            div{
                color: brown;
                border: 1px solid red;
            }
            
            p{
                color: pink;
            }
        </style>
        
    </head>
    <body>
        
        <div>每天叫醒我的不是闹钟，是梦想！！！</div>
        <div>每天叫醒我的不是闹钟，是梦想！！！</div>
        <div>每天叫醒我的不是闹钟，是梦想！！！</div>
        
        <p>小面包</p>
        <p>小cookie</p>
        <p>小饼干</p>
        
    </body>

```

### 外联样式
对内联样式进行进一步的抽离，方便多个页面共用同一个样式，创建一个css文件，然后对css文件进行引用
```html
<head>
        <meta charset="utf-8" />
        <title></title>
        
        <!-- 引入css样式： link -->
        <link rel="stylesheet" type="text/css" href="css/01.css" />
        
        <!-- 引入css样式：@import  -->
        <!-- 
         <style>
            @import url("css/01.css");
        </style> -->
    </head>
    <body>
        
        <div>每天叫醒我的不是闹钟，是梦想！！！</div>
        <div>每天叫醒我的不是闹钟，是梦想！！！</div>
        <div>每天叫醒我的不是闹钟，是梦想！！！</div>
        
        <p>小面包</p>
        <p>小cookie</p>
        <p>小饼干</p>
        
    </body>
```
### 样式方法的优先级

**就近原则：** 行内样式>内联样式>外联样式

### 方式的选择

1. 通用样式，就选择外联样式

2. 当样式内容过多时，将样式单独抽离成一个css文件，方便管理

3. 当某个标签有特殊样式实现，且在页面中时不重复的，出现次数唯一的，就使用行内样式

4. 除了上面的集中情况，通常使用的都是内联样式

## 选择器

选择题可以快速、方便的选择所需要使用的页面元素

### 基本选择题

1. 标签选择器

根据标签的名字进行元素的选择，标签名{}

```html
 <head>
    <style>
        /* 标签选择器 */
        div{
            color: #00BFFF;
        }
        p{
            color: #483D8B;
        }
        h4{
            color: #1E90FF;
        }
    </style> 
</head>
<body>
    <div class="div-cls">昨日头条：国家公祭日</div>
    <div class="p-cls" id="p-id">昨日头条：国家公祭日</div>
    <div class="div-cls">昨日头条：国家公祭日</div>
    <p class="p-cls">抗疫头条：郑州二七万达参与检测的都是阴性，无大碍</p>
    <h4 class="h4-cls">学习头条：谢小飞分享进步了，再接再厉</h4>
</body>
```

2. 类选择器
通过class属性进行元素的获取，可用于对多个元素进行相同的样式设置，.类名{}
```css
.div-cls{
    color: red;
}
.p-cls{
    color: green;
}
.h4-cls{
    color: blue;
}
```

3. id选择器

通过id属性给元素一个唯一标识符（多个相同的id不会报错，但是不建议这样干，建议id唯一），#id{}
```css
/*id选择器：在标签上添加了一个id属性，作为唯一标识，通常不允许重复*/
#p-id{
    color: #483D8B;
}
```

4. 属性选择器

根据元素上已有的属性标识进行选择，[属性名='']{}

```html
 <head>
    <style>
       /*具有title属性的元素*/
        [title]{
        font-size: 18px;
        }
        /* 以...开始 */
        [href^="http"]{
        color: #008B8B;
        }
        /* 以...结束 */
        [href$="cn"]{
        color: #483D8B;
        }
        /*href中包含有i*/
        [href*='i']{
        color: #808080;
        }
    </style> 
</head>
<body>
    <button title="普通按钮">普通按钮</button>
    <a href="http://www.baidu.com">百度链接</a>
    <a href="www.sina.cn">新浪博客</a>
    <a href="http://www.yunhe.cn">云和数据</a>
</body>
```

5. 后代选择器
根据元素在页面中的相对（嵌套）位置进行按区域选择元素
```html
 <style>
            
            /* 层级选择器 */
            
            /* 祖宗后代 */
            div span{
                color: #008000;
            }
            /* 父子选择器 */
            div > span{
                color: red;
            }
            /* 兄弟选择器 */
            div ~ p{
                background-color: #FFC0CB;
            }
            /* 跟班选择器 */
            p + span {
                background-color: #008000;
            }
        </style>
    </head>
    <body>
        
        <!-- 在包裹关系中，样式有继承关系 -->
        <div>
            div中的不带标签的内容
            <p>
                <a href="">百度一下
                    <span>你就知道  </span>
                 </a>
            </p>
            <a href="">一燕一下</a>
            <span>后代选择器，注意很常用</span>
        </div>
        <!-- 所有的选择器默认是从body标签中进行查找元素的 -->
        <p>
            <span>p标签中的span标签</span>
        </p>
        
    </body>
```

6. 组合选择器
根据元素在页面中的同级关系进行选择
```html
    <style>
        /* 逗号就代表前后的元素是同等级的 */
        div span,p span{
            color: #00BFFF;
        }
    </style>
    </head>
    <body>
        <div>
            div中的不带标签的内容
            <span>组合选择器，注意很常用</span>
        </div>
        <p>
            <span>p标签中的span标签</span>
        </p>
        <h4>
            <span>h4标签中的span标签</span>
        </h4>
    </body>
```

7. 伪类选择器
css3中提供的用于快速查找元素的便捷选择器

选择器|例子|例子描述
-|:-:|-:
:active|a:active|匹配被点击的链接
:checked|input:checked|匹配处于选中状态的 input 元素
:disabled	   |input:disabled	|           匹配每个被禁用的 input 元素
:empty	       |  p:empty	    |               匹配任何没有子元素的 p 元素
:enabled	   |  input:enabled	|           匹配每个已启用的input元素
:first-child	|p:first-child	|匹配父元素中的第一个子元素 p，p必须是父元素中的第一个子元素
:first-of-type|	p:first-of-type	|        匹配父元素中的第一个p元素
:focus	       |   input:focus	|       匹配获得焦点的input元素
:hover	       |   a:hover	    |     匹配鼠标悬停其上的元素
:in-range	   |   input:in-range|	  匹配具有指定取值范围的input元素
:invalid	   |   input:invalid	|       匹配所有具有无效值的input元素
:lang(language)|p:lang(it)	|匹配每个 lang 属性值以 "it" 开头的 p 元素
:last-child	  |p:last-child|匹配父元素中的最后一个子元素p，p必须是父元素中的最后一个子元素
:last-of-type	      |p:last-of-type	     |匹配父元素中的最后一个 p 元素
:link	              |a:link	             |匹配所有未被访问的链接
:not(selector)	      |:not(p)	             |匹配每个非 p元素的元素
:nth-child(n)	      |p:nth-child(2)	     |匹配父元素中的第二个子元素 p
:nth-last-child(n)	  |p:nth-last-child(2)	 |匹配父元素的倒数第二个子元素 p
:nth-last-of-type(n)  |p:nth-last-of-type(2)	 |匹配父元素的倒数第二个子元素 p
:nth-of-type(n)	      |p:nth-of-type(2)	     |匹配父元素的第二个子元素 p
:only-of-type	      |p:only-of-type	     |匹配父元素中唯一的 p 元素
:only-child	          |p:only-child	         |匹配父元素中唯一的子元素 p
:optional	          |input:optional	     |匹配不带 "required" 属性的 input 元素
:out-of-range	      |input:out-of-range	 |匹配值在指定范围之外的 input 元素
:read-only	          |input:read-only	     |匹配指定了 "readonly" 属性的 input 元素
:read-write	          |input:read-write	     |匹配不带 "readonly" 属性的 input 元素
:required	          |input:required	     |匹配指定了 "required" 属性的 input>元素
:root	              |root	                 |匹配元素的根元素，在 HTML 中，根元素永远是 HTML
:target	              |#news:target 	    |匹配当前活动的 #news 元素（单击包含该锚名称的 URL）
:valid	              |input:valid	         |匹配所有具有有效值的 input 元素
:visited              |a:visited	         |匹配所有已经访问过的链接

8. 通配符
*标识通配符，作用在页面的所有标签上
```css
*{
  color:red;
  font-size:20px;
}
```

### 选择器的优先级

!important>行内样式>id选择器>类选择器>标签选择器

               1000     100        10         1
## css定位

###  静态定位

静态定位的盒子是标准流状态，用于取消定位，静态定位的盒子处于网页的最底层，并且top、left、botton、right属性都不起作用

设置方式：position:static

### 相对定位

盒子没有脱离标准流，在页面中占据位置，盒子的层级高于标准流和浮动的盒子，四个方位属性都起作用

设置方式：
```css
position:relative;
top:0;
left:0;
botton:0;
right:0;
```

设置了top、left、bottom、right属性后，相对定位的盒子是相对自己在标准流中的位置进行偏移，但是盒子在页面中占据的位置是不会改变的。

两个相对定位的盒子，默认的情况下第二个盒子层级比第一个盒子层级高，即第二个盒子可以覆盖第一个盒子，如果想让第一个盒子覆盖第二个盒子，可以通过设置z-index属性实现。

### 绝对定位

盒子脱离标准流，在页面中不占位置，盒子的层级高于标准流和浮动的盒子
设置方式：
```css
position:absolute;
top:0;
left:0;
botton:0;
right:0;
```

设置了top、left、bottom、right属性后，绝对定位的盒子是相对设置了定位属性（静态定位不算）的最近的父级盒子的位置进行偏移，如果没有设置了定位的父级盒子，则是相对于body标签进行偏移。

绝对定位的盒子可以通过设置z-index属性改变层级。

**子绝父相**：意思就是儿子设置绝对定位，而父亲设置为相对定位；作用，儿子相对父亲的位置来选择自己的位置

### 固定定位

盒子脱离了标准流，在页面中不占位置，盒子的层级高于标准流和浮动的盒子

设置方式：
```css
position:fixed;
top:0;
left:0;
botton:0;
right:0;
```
设置了top、left、bottom、right属性后，固定定位的盒子是相对浏览器串口进行偏移。不管浏览器滚动条如何滚动，固定定位的盒子永远显示在浏览器窗口，不会出现滚动条往下滚动后就看不到固定定位的盒子的情况。因此固定定位的盒子常用于做底部导航栏和顶部导航栏。

固定定位的盒子可以通过设置z-index属性改变层级。

固定定位的盒子默认的宽高由其内容决定。

## 框模型

盒子是由 元素+内边距+边框+外边距 组成

![盒子模型](/img/css/box.png)

**术语**：

element : 元素。

padding : 内边距，也有资料将其翻译为填充。

border : 边框。

margin : 外边距，也有资料将其翻译为空白或空白边。

### 内边距 padding

在边框和内容之间

1. 属性

定义元素的内边距，接受长度值或百分百，但不允许负值
```css
/*  h1 元素的各边都有 10 像素的内边距 */
h1{padding:10px;}
/* 按照上、右、下、左的顺序分别设置各边的内边距，各边均可以使用不同的单位或百分比值 */
h1 {padding: 10px 0.25em 2ex 20%;}
/* 单边内边距属性 */
h1 {
  padding-top: 10px;
  padding-right: 0.25em;
  padding-bottom: 2ex;
  padding-left: 20%;
}
```

### 外边距 margin

边框外面的内容

1. 属性

定义元素的外边距，接受长度值或百分百，但不允许负值

```css
/*  h1 元素的各边都有 10 像素的内边距 */
h1{margin:10px;}
/* 按照上、右、下、左的顺序分别设置各边的内边距，各边均可以使用不同的单位或百分比值 */
h1 {margin: 10px 0.25em 2ex 20%;}
/* 单边内边距属性 */
h1 {
  margin-top: 10px;
  margin-right: 0.25em;
  margin-bottom: 2ex;
  margin-left: 20%;
}
```
### 边框 border
元素外边距内就是元素的的边框 (border)。元素的边框就是围绕元素内容和内边据的一条或多条线。

每个边框有 3 个方面：宽度、样式，以及颜色

```css
/* 一般写法 */
p{
    border(1px solid 颜色);
}
```

## 浮动

脱离标准流

浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样

设置浮动：
```css
/* 左和右 */
div{
    float:right;
}
```

清除浮动：
```css
/* clear 属性的值 left、right、both 或 none */
div{
    clear:both
}
```

## 文本
可以定义文本的外观，改变文本的颜色、字符间距、对其文本、装饰文本、文本缩进等

### 缩进文本

将段落第一行缩进，使用text-index完成

```css
p {text-indent: 5em;}
/* 悬挂缩进：使用负值 */
p {text-indent: -5em;}
```

使用于块级元素，若像给行内元素缩进，可以通过内外边距来实现

### 水平对齐

1. text-align

设置文本行之间的对齐方式，通过text-align设置，值 left、right 和 center 会导致元素中的文本分别左对齐、右对齐和居中

```css
/* 剧中 */
p {text-align: center;}
```

2. justify

在两端对齐文本中，文本行的左右两端都放在父元素的内边界上。然后，调整单词和字母间的间隔，使各行的长度恰好相等

### 字间隔

改变字（单词）之间的标准间隔。其默认值 normal 与设置值为 0 是一样的，通过word-spacing 实现，属性接受一个正长度值或负长度值。如果提供一个正长度值，那么字之间的间隔就会增加。为 word-spacing 设置一个负值，会把它拉近。

```css
p{
    word-spacing: 30px;
}
```

### 字母间隔

通过letter-spacing设置。与 word-spacing 的区别在于，字母间隔修改的是字符或字母之间的间隔。

与 word-spacing 属性一样，letter-spacing 属性的可取值包括所有长度。默认关键字是 normal（这与 letter-spacing:0 相同）。输入的长度值会使字母之间的间隔增加或减少指定的量：

```css
p{
    letter-spacing: -0.5em
}
```

### 字符转换

通过设置，处理文本的大小写。这个属性有 4 个值：

**none**：（默认值） 对文本不做任何改动，将使用源文档中的原有大小写。

**uppercase**： 将文本转换为全大写字符

**lowercase**： 将文本转换为全小写字符

**capitalize**： 只对每个单词的首字母大写

```css
h1 {text-transform: uppercase}
```

### 文本修饰
text-decoration 有 5 个值：

**none**：会关闭原本应用到一个元素上的所有装饰。通常，无装饰的文本是默认外观，但也不总是这样。

**underline**： 会对元素加下划线，就像 HTML 中的 U 元素一样。

**overline**： 的作用恰好相反，会在文本的顶端画一个上划线。

**line-through**： 则在文本中间画一个贯穿线，等价于 HTML 中的 S 和 strike 元素。

**blink**： 会让文本闪烁，类似于 Netscape 支持的颇招非议的 blink 标记。

```css
/* 去掉链接下划线 */
a {text-decoration: none;}
```

### 处理空白字符

通过white-space设置。通过使用该属性，可以影响浏览器处理字之间和文本行之间的空白符的方式。从某种程度上讲，默认的 XHTML 处理已经完成了空白符处理：它会把所有空白符合并为一个空格。所以给定以下标记，它在 Web 浏览器中显示时，各个字之间只会显示一个空格，同时忽略元素中的换行：

```css
p {white-space: normal;}
/*  如果 white-space 属性的值为 pre，浏览器将会注意额外的空格，甚至回车。在这个方面，而且仅在这个方面，任何元素都可以相当于一个 pre 元素。*/
p {white-space: pre;}
/* 会防止元素中的文本换行，除非使用了一个 br 元素。在 CSS 中使用 nowrap 非常类似于 HTML 4 中用 <td nowrap> 将一个表单元格设置为不能换行，不过 white-space 值可以应用到任何元素。 */
p {white-space: nowrap;}
```
CSS2.1 引入了值 pre-wrap 和 pre-line，这在以前版本的 CSS 中是没有的。这些值的作用是允许创作人员更好地控制空白符处理。

设置为 pre-wrap，那么该元素中的文本会保留空白符序列，但是文本行会正常地换行。如果设置为这个值，源文本中的行分隔符以及生成的行分隔符也会保留。pre-line 与 pre-wrap 相反，会像正常文本中一样合并空白符序列，但保留换行符。

值|空白符|换行符|自动换行
-|:-:|:-:|-:
pre-line|合并|保留|允许
normal	|合并|忽略|允许
nowrap	|合并|忽略|不允许
pre	    |保留|保留|不允许
pre-wrap|保留|保留|允许

### 文本方向

direction 属性影响块级元素中文本的书写方向、表中列布局的方向、内容水平填充其元素框的方向、以及两端对齐元素中最后一行的位置

对于行内元素，只有当 unicode-bidi 属性设置为 embed 或 bidi-override 时才会应用 direction 属性。

direction 属性有两个值：ltr 和 rtl。大多数情况下，默认值是 ltr，显示从左到右的文本。如果显示从右到左的文本，应使用值 rtl。

### 文本属性总结
属性|描述
-|-:
color	        |设置文本颜色
direction	    |设置文本方向。
line-height	    |设置行高。
letter-spacing	|设置字符间距。
text-align	    |对齐元素中的文本。
text-decoration	|向文本添加修饰。
text-indent	    |缩进元素中文本的首行。
text-shadow	    |设置文本阴影。CSS2 包含该属性，但是 CSS2.1 没有保留该属性。
text-transform	|控制元素中的字母。
unicode-bidi	|设置文本方向。
white-space	    |设置元素中空白的处理方式。
word-spacing	|设置字间距。

## 字体

定义文本得字体系列、大小、加粗、分格（斜体）和变形（小型大写字母）

1. 字体系列

使用font-family设置。除了各种特定的字体系列外，CSS 定义了 5 种通用字体系列：

Serif 字体

Sans-serif 字体

Monospace 字体

Cursive 字体

Fantasy 字体

```css
body {font-family: sans-serif;}
```

2. 字体风格
使用font-style设置，常用于规定斜体文本。

该属性有三个值：

normal - 文本正常显示

italic - 文本斜体显示

oblique - 文本倾斜显示

```css
p.normal {font-style:normal;}
p.italic {font-style:italic;}
p.oblique {font-style:oblique;}
```
3. 字体变形
通过font-variant设置，可以设定小型大写字母。

小型大写字母不是一般的大写字母，也不是小写字母，这种字母采用不同大小的大写字母。

```css
p {font-variant:small-caps;}
```
4. 字体加粗

通过font-weight设置，可以设置文本得粗细。100 ~ 900 为字体指定了 9 级加粗度。如果一个字体内置了这些加粗级别，那么这些数字就直接映射到预定义的级别，100 对应最细的字体变形，900 对应最粗的字体变形。数字 400 等价于 normal，而 700 等价于 bold。

```css
p.normal {font-weight:normal;}
p.thick {font-weight:bold;}
p.thicker {font-weight:900;}
```
5. 字体大小

通过font-size设置,单位可以是px，也可以是rem和em
```css
h1 {font-size:60px;}
h2 {font-size:40px;}
p {font-size:14px;}
```

6. 总结

属性|描述
-|-:
font	          |简写属性。作用是把所有针对字体的属性设置在一个声明中。
font-family	      |设置字体系列。
font-size	      |设置字体的尺寸。
font-size-adjust  |当首选字体不可用时，对替换字体进行智能缩放。（CSS2.1 已删除该属性。）
font-stretch	  |对字体进行水平拉伸。（CSS2.1 已删除该属性。）
font-style	      |设置字体风格。
font-variant	  |以小型大写字体或者正常字体显示文本。
font-weight	      |设置字体的粗细。

## 列表
从某种意义上讲，不是描述性的文本的任何内容都可以认为是列表。人口普查、太阳系、家谱、参观菜单，甚至你的所有朋友都可以表示为一个列表或者是列表的列表。

由于列表如此多样，这使得列表相当重要，所以说，CSS 中列表样式不太丰富确实是一大憾事。

### 列表类型
要修改用于列表项的标志类型
```css
/* 列表项标志设置为方块 */
ul {list-style-type : square}
```

### 列表项图像
对各标志使用一个图像
```css
/* 使用图像作为标志 */
ul li {list-style-image : url(xxx.gif)}
```
### 列表标志位置
CSS2.1 可以确定标志出现在列表项内容之外还是内容内部。这是利用 list-style-position 完成的。
### 简写列表样式
将以上三个属性合并为一个
```css
li {list-style : url(example.gif) square inside}
```
### 总结
属性|描述
-|-:
list-style	         |简写属性。用于把所有用于列表的属性设置于一个声明中。
list-style-image	 |将图象设置为列表项标志。
list-style-position  |设置列表中列表项标志的位置。
list-style-type	     |设置列表项标志的类型。
marker-offset	     |


 

	
 


