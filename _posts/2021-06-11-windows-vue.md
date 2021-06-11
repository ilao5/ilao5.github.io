---
layout: post
title: Windows搭建vue开发环境
date: 2021-06-11
categories:
- 一业
tags: [vue]
status: publish
type: post
published: true
author_copyright: true
author_footer: false
author:
  login: lao5
  email: i3town@163.com
  display_name: lao5
---

Windows环境搭建Vue开发环境

#步骤
一.安装node.js

官网:https://nodejs.org/en/download/;
历史版本:https://nodejs.org/en/download/releases/;

下载完毕后，建议不要安装在系统盘（如C：）。
![img1](/images/windows_vue/1.png)


二、设置nodejs prefix（全局）和cache（缓存）路径

1、在nodejs安装路径下，新建node_global和node_cache两个文件夹

![img2](/images/windows_vue/2.png)

2、设置 缓存文件夹 和 全局模块 存放路径

* 缓存文件夹
```
npm config set cache "F:\Program Files\nodejs\node_cache"
```

* 全局模块
```
npm config set cache "F:\Program Files\nodejs\node_global"
```

![img3](/images/windows_vue/3.png)


设置成功后，之后用命令npm install XXX -g安装以后模块就在 F:\Program Files\nodejs\node_global 里

三、基于 Node.js 安装cnpm（淘宝镜像）

* 安装cnpm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

四、设置环境变量（非常重要）

说明：设置环境变量可以使得住任意目录下都可以使用cnpm、vue等命令，而不需要输入全路径

1、鼠标右键"此电脑"，选择“属性”菜单，在弹出的“系统”对话框中左侧选择“高级系统设置”，弹出“系统属性”对话框。

2、修改系统变量PATH
![img4](/images/windows_vue/4.png)

3、新增系统变量NODE_PATH
![img5](/images/windows_vue/5.png)


五、安装Vue

```
cnpm install vue -g
```

![img6](/images/windows_vue/6.png)

六、安装vue命令行工具，即vue-cli 脚手架

```
cnpm install vue-cli -g
```

![img7](/images/windows_vue/7.png)


七、新项目的创建
 
1.新建项目文件夹

![img8](/images/windows_vue/8.png)
![img9](/images/windows_vue/9.png)

2.根据模版创建新项目

在当前目录下输入“vue init webpack-simple 项目名称（使用英文）”。

```
vue init webpack-simple test
```
![img10](/images/windows_vue/10.png)

下载模板完成后，按提示步骤选择选项

3、安装工程依赖模块

定位到test的工程目录下，安装该工程依赖的模块，这些模块将被安装在：test\node_module目录下，node_module文件夹会被新建，而且根据package.json的配置下载该项目的modules

![img11](/images/windows_vue/11.png)


4、运行该项目，测试一下该项目是否能够正常工作，这种方式是用nodejs来启动。

```
cnpm run dev
```

![img12](/images/windows_vue/12.png)

![img13](/images/windows_vue/13.png)