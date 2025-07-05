---
layout: novel
category: black guild
title: "Black Guild Company Employee Carelessly Broadcasts Nationwide Video of Fighting Against S-Class Monsters on Company Line ~Corporate Slave Kensei Becomes a Streamer"
name: "Black Guild Company Employee Carelessly Broadcasts Nationwide Video of Fighting Against S-Class Monsters on Company Line ~Corporate Slave Kensei Becomes a Streamer"
author: "Kumano Genkotsu"
password: false
---

Makoto Tanaka, an office worker belonging to the Black Guild.

Despite being one of the world's top-class explorers, he was overworked by the guild for a low monthly salary and spent his days with dead eyes.

One day, Tanaka mistakenly distributes a video for recording to the company nationwide.
Viewers who saw Tanaka's unconventional power went wild, and the distribution eventually attracted 100 million people.

Tanaka suddenly becomes a person of the moment.
The president of the guild he belongs to gets angry at him and yells at him.

Hearing this, Tanaka is blown away and leaves the guild saying, "Then I'll quit."

Tanaka, who has become unemployed, is active as a free dungeon broadcaster and becomes more and more famous.
On the other hand, the guild that banished Tanaka was on the verge of collapse.



<h3>Posts</h3>

<div class="posts noList">
{%- comment -%} Filter posts by the category specified in the front matter {%- endcomment -%}
{%- assign filtered_posts = site.posts | where: 'category', page.category -%}
{%- comment -%} 
  Group posts by volume number extracted from the filename.
  This approach splits the filename by 'V' and takes the last part.
  Then, it uses 'to_integer' to extract the leading digits from that string.
  This is robust because 'to_integer' will stop parsing at the first non-digit character,
  effectively ignoring any text (like "Extra", "Characters", etc.) that follows the number.
{%- endcomment -%}
{%- assign posts_by_volume = filtered_posts | group_by_exp: "post", "post.name | split: 'V' | last | to_integer" -%}

{%- comment -%} Sort the volumes numerically {%- endcomment -%}
{%- assign sorted_volumes = posts_by_volume | sort_natural: "name" -%}

{%- for volume in sorted_volumes -%}
    {%- comment -%} Make sure the volume name (number) exists {%- endcomment -%}
    {%- if volume.name != "" and volume.name != nil -%}

        {%- comment -%} Sort chapters within the volume numerically to find the first one {%- endcomment -%}
        {%- assign chapters_sorted_by_number = volume.items | sort_exp: "post", "post.name | split: 'C' | last | split: '.' | first | to_integer" | reverse -%}
         
        {%- comment -%} 
          Get the volume title from the 'volume_title' variable  
          in the front matter of the first chapter's post. 
          Make sure to add 'volume_title: "Your Title"' to the front matter of each volume's first chapter. 
        {%- endcomment -%}
        {%- assign volume_title = first_chapter.volume_title -%}

        <h4>Volume {{ volume.name }}: {{ volume_title | default: " " }}</h4>
        <ul>
            {%- for post in chapters_sorted_by_number -%}
                <li>
                    <h5>
                        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h5>
                </li>
            {%- endfor -%}
        </ul>
    {%- endif -%}
{%- endfor -%}
</div>