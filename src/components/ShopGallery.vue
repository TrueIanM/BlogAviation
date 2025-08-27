<!-- 
  LocalGallery.vue 
  Displays a local gallery of predefined items
-->

<template>
  <div class="local">
    <!-- Gallery items -->
    <GalleryItem img="headphones.jpg" item_name="Headphones" />
    <GalleryItem img="Flight-Computer.jpg" item_name="Flight Computer" />
  </div>
</template>

<script setup>
/* Import child component */
import GalleryItem from "./GalleryItem.vue";
</script>

<style scoped>
.local {
  position: relative;
  height: var(--section-height);
  display: flex;
  flex-direction: row;
  background: var(--vt-c-white-soft);
  justify-content: space-around;
}
</style>
