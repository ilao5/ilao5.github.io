---
layout: post
title: Git+Jekyll架设Blog
date: 2017-08-16
categories:
- 一业
tags: [jekyll]
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

使用Github Pages和Jekyll搭建个人博客

# 步骤
1.在github上面注册 username;

2.创建仓库 username.github.io;

3.下载,安装git命令行工具,地址:https://git-scm.com/download/win;

4.下载,安装ruby(jekyll基于ruby),官方地址:http://rubyinstaller.org/downloads/;

5.ruby安装完成后，命令行输入查看ruby安装成功与否;
```
$ ruby -v
```

6.命令行安装jekyll
```
$ gem install jekyll
```

7.jekyll安装完成后，命令行输入查看jekyll安装成功与否;
```
$ jekyll -v
```

8.克隆仓库到本地指定位置;
```
$ git clone https://github.com/username/username.github.io.git /f/wamp/www/username.github.io.git
```

9.到http://jekyllthemes.org/找钟意到主题,下载;

10.解压缩,拷贝到f/wamp/www/username.github.io;

11.命令行进入/f/wamp/www/username.github.io;
```
$ cd /f/wamp/www/username.github.io
```

12.添加上传文件;
```
$ git add .
```

13.提交本地指令;
```
$ git commit -a -m "modiy somewhere"
```

14.会提示设置个人github信息，需要运行
```
$ git config --global user.email "xxx@163.com"
$ git config --global user.name "username"
```

15.提交到github；
```
$ git push origin master
```
