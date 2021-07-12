---
layout: post
title: 在 Vue 项目中安装 TailwindCSS
date: 2021-07-12
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

在 Vue 项目中安装 TailwindCSS

参考: https://tailwindchina.com/guides/installing-tailwindcss-with-vue-cli.html#%E5%88%9B%E5%BB%BA-vue-%E9%A1%B9%E7%9B%AE


#步骤
一.创建 Vue 项目

```
vue create installing-tailwindcss-with-vue-cli
```
![img1](/images/vue_tailwindcss/1.png)

发现脚手架是低版本，不能使用'vue create'命令，遂升级脚手架

先卸载
```
npm uninstall -g vue-cli
```
![img2](/images/vue_tailwindcss/2.png)


再安装
```
npm install -g @vue/cli
```
![img3](/images/vue_tailwindcss/3.png)


升级完成后，版本为4.5.13
![img4](/images/vue_tailwindcss/4.png)


高版本脚手架创建项目，选择Vue 2.x
```
vue create installing-tailwindcss-with-vue-cli
```
![img5](/images/vue_tailwindcss/5.png)



二、安装 TailwindCSS

项目目录下，安装tailwindcss
```
cnpm i tailwindcss --S
```
![img6](/images/vue_tailwindcss/6.png)


三、创建 TailwindCSS 配置文件

```
npx tailwindcss init
```
![img7](/images/vue_tailwindcss/7.png)

项目目录下自动生成 tailwind.config.js 文件
![img8](/images/vue_tailwindcss/8.png)


四、安装 PostCSS 和 autoprefixer
```
cnpm i postcss autoprefixer --D
```



五、创建 PostCSS 配置文件

在项目根目录下面手动创建 postcss.config.js(与tailwind.config.js同级)
```
module.exports = {
    plugins: [
        require('tailwindcss')(),
        require('autoprefixer')(),
    ]
}
```

![img9](/images/vue_tailwindcss/9.png)

六、引入 TailwindCSS

1.在 src/assets 目录下面创建 tailwindcss.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

![img10](/images/vue_tailwindcss/10.png)

2.然后在 src/main.js 文件中引入刚编写的tailwindcss.css
```
import './assets/tailwindcss.css'
```
![img11](/images/vue_tailwindcss/11.png)

七、启动 Vue Cli 本地服务
 
发现使用cnpm run dev 报错，是因为升级了脚手架
所以，使用
```
cnpm run serve
```
![img12](/images/vue_tailwindcss/12.png)
![img13](/images/vue_tailwindcss/13.png)

八、验证

![img14](/images/vue_tailwindcss/14.png)
![img15](/images/vue_tailwindcss/15.png)
