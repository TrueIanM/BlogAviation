<script setup>
import BlogPreviewLarge from "../components/BlogPreviewLarge.vue";
import ShopPreviewLarge from "../components/ShopPreviewLarge.vue";
import ShopGallery from "../components/ShopGallery.vue";
</script>

<template>
  <main>
    <BlogPreviewLarge />
    <ShopPreviewLarge />
    <ShopGallery />
    <ShopGallery />
  </main>
</template>
<style>
main {
  display: flex;
  flex-direction: column;
}
</style>
