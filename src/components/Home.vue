<template>

<!--===============
동영상
=================-->
<div class="home-video">
  <video autoplay
  :src="video"
  playsinline
  muted
  ></video>
</div>

<Theme/>
<Slide/>
<Works/>

</template>


<script setup>
import video from '@/assets/img/video.mp4'
import Theme from '@/components/home/Theme.vue'
import Slide from '@/components/home/Homeslide.vue'
import Works from '@/components/home/Works.vue'
</script>