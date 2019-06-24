---
layout: post
title: 地图API的http转换https
date: 2019-06-24
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

百度高德地图api，http转换https


# 百度地图

由原先的
```
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=密钥"></script>
```

改成
```
<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=密钥&s=1"></script>
```



***



# 高德地图

由原先的
```
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=密钥&plugin=AMap.Geocoder"></script>
```

改成
```
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.3&key=密钥&plugin=AMap.Geocoder"></script>
```

