---
layout: novel
category: oracle cafe
title: "Welcome to the Oracle Cafe! !"
name: "Welcome to the Oracle Cafe! !"
author: "Yuki Hiko"
image: "oracle.img"
password: false
---

    

    



<h3>Posts</h3>
<div class="posts noList">
    <ul>
        {%- assign filtered_posts = site.posts | where: 'category', page.category -%}
        {%- for post in filtered_posts -%}
            <li>
                <h5>
                    <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
                </h5>
            </li>
        {%- endfor -%}
    </ul>
</div>
