<!-- 
  VideoEmbed.vue
  Embeds a YouTube video using a dynamic source URL
-->

<template>
  <div class="video-wrapper">
    <!-- Embedded video iframe -->
    <iframe
      :src="details.data.src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
/* Accepts video details as props */
const details = defineProps({
  data: Object,
});
</script>

<style scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin: 10px 0;
}
.video-wrapper iframe {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
