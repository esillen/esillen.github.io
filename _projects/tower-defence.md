---
layout: game
thumbnail: /assets/images/tower-defence/thumbnail_thumbnail.jpg
title: Multi Tablet Tower Defence
description: Tower defence which you play on multiple tablets!
year: 2019
highlight: false
---

{% assign image_path = site.baseurl | append: "/assets/images/tower-defence" %}
{% assign html_assets_path = site.baseurl | append: "/assets/html" %}
{% assign video_assets_path = site.baseurl | append: "/assets/videos" %}

# Multi Tablet Tower Defence

<div class="small-horizontal-space"></div>

<a class="portfolio-image-link" href="{{image_path}}/thumbnail.jpg"><img src="{{image_path}}/thumbnail_thumbnail.jpg" height="300px" width="300px"></a>

### Collaborative tower defence where each player controls a tower against the hordes of enemies runnig across the screens! You build the playing field out of tablets which you place next to each other. That means that the game requires lots of tablets! We tested it with 11 tablets and it was pretty cool!

### The game is made in Unity3d by Fredrik Carlsson (Programming, Netcode) and I (Programming).

## Video of the game

<video class="project-local-video" controls preload="metadata" poster="{{image_path}}/thumbnail_thumbnail.jpg">
  <source src="{{video_assets_path}}/tower-defence/tower-defence.mp4" type="video/mp4">
  <a href="{{video_assets_path}}/tower-defence/tower-defence.mp4">Watch the tower defence video</a>.
</video>

<div class="project-gallery">
  <figure>
    <a href="{{image_path}}/game1.jpg"><img src="{{image_path}}/game1_thumbnail.jpg" alt="Players interacting with a tower defence game across several tablets" loading="lazy"></a>
    <figcaption>Players controlling towers on connected tablets.</figcaption>
  </figure>
  <figure>
    <a href="{{image_path}}/game2.jpg"><img src="{{image_path}}/game2_thumbnail.jpg" alt="Tablet arrangement forming the tower defence playing field" loading="lazy"></a>
    <figcaption>The tablets arranged as one playing field.</figcaption>
  </figure>
</div>

### Thanks to Hello World! for letting us borrow the tablets!
