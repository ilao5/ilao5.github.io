---
layout: post
title: Github+Jekyll添加评论支持
date: 2017-08-17
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

Github,Jekyll博客添加Intensedebate评论

# 步骤

1.先去IntenseDebate注册一个账号 https://www.intensedebate.com

2.会得到一串javascript代码
```
<script>
var idcomments_acct = '你的acct_id';
var idcomments_post_id;
var idcomments_post_url;
</script>
```

3.在Jekyll站点的_includes目录下创建intensedebate-comments.html文件.
```
{% if page.comments != false %}
    <script>
    var idcomments_acct = '你的acct_id';
    var idcomments_post_id = '{{ page.url }}';
    var idcomments_post_url;
    </script>
    <span id="IDCommentsPostTitle" style="display:none"></span>
    <script type='text/javascript' src='https://www.intensedebate.com/js/genericCommentWrapperV2.js'></script>
{% endif %}
```

4.在站点配置文件_config.yml中添加评论配置参数，方便灵活的enable/disable评论功能
```
#enable intensedebate_comments or not
intensedebate_comments: true
```

5.在post.html文件末尾后面添加代码引用intensedebate-comments.html来显示评论框
```
{% if site.intensedebate_comments %}
  {% include intensedebate-comments.html %}
{% endif %}
```

6.测试完成。
