---
layout: novel
category: oracle cafe
title: "Welcome to the Oracle Cafe! !"
name: "Welcome to the Oracle Cafe! !"
author: "Yuki Hiko"
image: 'oracle.jpg'
password: false
---

    

In this world, at the age of 15, a special power called 'Heavenly Blessing' is granted by God. Since ancient times, people have used this power to celebrate life and develop the world...... it seems.

Nobody talks about such old stories nowadays. The world has progressed and Heavenly Blessings have become an outdated thing. The world has already forgotten about blessings from heaven. Now is such a time. But I didn't know. I never thought that my life would change so much because of Heavenly Blessings.
My name is Tran Magpot and on my 19th birthday, my destiny begins to change. Yes, with her.

Welcome to our shop.　This is the story of an oracle who tells of a blessing.



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
