---
title: "xml"
description: "xml的全部内容"
---

## 概念
xml（Extensible Markup Language）：可扩展标记语言，用来传输和存储数据。

和html很像，但是html是用来显示数据

需要自己自定义标签（可以自己发明标签），具有自我描述性

## 语法
    必须包含根元素，是所有其他元素的父元素（父元素不是固定的，可能是root，也可能是node），但一定是最外层的那个标签

    要声明。声明文件的可选部分，放在文档的第一行
```xml
<?xml version="1.0" encoding="utf-8"?>
```

    所有的xml元素都必须有一个关闭标签，即不能存在单标签

    xml对大小写铭感。

    xml必须正确嵌套

    xml属性值必须加引号
```xml
<!-- 是错误的 -->
<note date=12/11/2007>
...
</note>

<!-- 是正确的 -->
<note date="12/11/2007">
...
</note>
```

    实体引用，如为了避免出现<>认识错误，可以用&lt;和&gt;表示
```xml
<message>if salary &lt; 1000 then</message>
```

    空格会被保留，不会被删减，而html出现多个空格会被删减为一个空格

    以LF存储换行


## 解析