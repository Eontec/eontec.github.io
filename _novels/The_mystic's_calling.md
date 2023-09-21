---
layout: novel
name: "The Mystic's Calling"
title: "The Mystic's Calling"
password: false
category: mystic's calling
---

My original Sory

The novel follows the story of Nick, a high school student who discovers that his late father was a practitioner of magic. Nick is given the opportunity to learn magic himself from Eden, a mysterious girl who claims to know his father. Nick begins his training, and soon learns that he has a natural talent for magic. However, he also learns that the world of magic is dangerous, and that there are those who would use it for evil. Nick must use his newfound powers to protect himself and others from those who would do harm.

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