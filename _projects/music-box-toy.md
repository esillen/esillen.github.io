---
title: Music box toy
year: 2022
description: A music box toy I designed, 3D printed, programmed, and assembled.
thumbnail: /assets/images/projects/music-box-toy/on_thumbnail.jpg
---

{% assign image_path = site.baseurl | append: "/assets/images/projects/music-box-toy" %}

# Music box toy

I designed, 3D printed, programmed, and assembled this music box toy that plays songs based on which toy is placed on top. It uses Arduino and NFC technology to detect which toy is placed.

<div class="project-gallery">
   <figure>
    <a href="{{ image_path }}/off.jpg" aria-label="Open full-size photo of the music box enclosure"><img src="{{ image_path }}/off_thumbnail.jpg" alt="The 3D printed music box enclosure and control knob" loading="lazy"></a>
    <figcaption>The music box.</figcaption>
  </figure>
  <figure>
    <a href="{{ image_path }}/on.jpg" aria-label="Open full-size photo of the music box with a figure"><img src="{{ image_path }}/on_thumbnail.jpg" alt="Music box toy with a figure on top and its indicator lit" loading="lazy"></a>
    <figcaption>The music box in use.</figcaption>
  </figure>
  <figure>
    <a href="{{ image_path }}/charging.jpg" aria-label="Open full-size photo of the charging port"><img src="{{ image_path }}/charging_thumbnail.jpg" alt="Charging cable plugged into the underside of the music box toy" loading="lazy"></a>
    <figcaption>Charging the music box toy with charge indicator</figcaption>
  </figure>
  <figure>
    <a href="{{ image_path }}/collection.jpg" aria-label="Open full-size photo of the figures"><img src="{{ image_path }}/collection_thumbnail.jpg" alt="Collection of small figures for the music box toy" loading="lazy"></a>
    <figcaption>A collection of figures for the toy.</figcaption>
  </figure>
</div>

## Watch it in action

<video class="project-local-video" controls preload="metadata" poster="{{ image_path }}/on_thumbnail.jpg">
  <source src="{{ site.baseurl }}/assets/videos/music-box-toy/music-box-toy.mp4" type="video/mp4">
  <a href="{{ site.baseurl }}/assets/videos/music-box-toy/music-box-toy.mp4">Watch the music box toy video</a>.
</video>
