---
layout: post
title: Flex布局语法篇
date: 2017-09-07
categories:
- 一业
tags: [css3]
status: publish
type: post
published: true
author:
  login: lao5
  email: i3town@163.com
  display_name: lao5
---

## 前言
---

　　网页布局（layout）是 CSS 的一个重点应用。

![img1](/images/flexlayout/bg2015071001.gif)

　　布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

　　2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

　　Flex 布局将成为未来布局的首选方案。本文介绍它的语法，下一篇文章给出常见布局的 Flex 写法。网友 [JailBreak](http://vgee.cn/) 为本文的所有示例制作了[Demo](http://static.vgee.cn/static/index.html)，也可以参考。

　　以下内容主要参考了下面两篇文章：[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 和 [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)。

## 一、Flex 布局是什么？
---
　　Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

* 任何一个容器都可以指定为 Flex 布局。
```
.box{
  display: flex;
}
```

* 行内元素也可以使用 Flex 布局。
```
.box{
  display: inline-flex;
}
```

* Webkit 内核的浏览器，必须加上-webkit前缀。
```
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

>注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。


## 二、基本概念
---
　　采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![img2](/images/flexlayout/bg2015071004.png)

　　容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

　　项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。


## 三、容器的属性
---

以下6个属性设置在容器上。

```
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content
```

#### 3.1 flex-direction属性

flex-direction属性决定主轴的方向（即项目的排列方向）。

```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![img3](/images/flexlayout/bg2015071005.png)

它可能有4个值。

```
* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。
```
















