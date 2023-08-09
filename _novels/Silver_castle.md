---
layout: novel
category: silver castle
title: "The Silver Castle Shines Twice ~The Disabled Player Who Moved Together With The Giant Floating Castle Hideout Seems To Stick To The Justice Job Build Even In Another World~"
name: "The Silver Castle Shines Twice ~The Disabled Player Who Moved Together With The Giant Floating Castle Hideout Seems To Stick To The Justice Job Build Even In Another World~"
author: "Kumano Genkotsu"
---

The super-sized MMORPG "『 The Heroic Tale of Seven Sword Knights 《 Seven Knights Online 》』.

The "Silver Knights" was one of the most powerful guilds in the game. The guild leader suddenly left the guild, and the guild members left one by one until finally the main character was left alone.

The main character, who was running the guild all by himself, became desperate and went outside the actionable area of the game with the floating giant castle "Shirogane Castle".

When he woke up, he found himself in another world with the castle. In that world, as in the world he originally lived in, various evils were spreading.

The hero's battle begins to bring peace to the world and to restore the former glory to the White Silver Knights.


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
