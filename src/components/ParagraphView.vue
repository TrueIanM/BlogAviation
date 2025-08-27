<!-- 
  BlogParagraph.vue 
  Renders a paragraph of blog text from provided props 
-->

<template>
  <!-- Display blog paragraph -->
  <p class="blog-paragraph">
    {{ details.data.text }}
  </p>
</template>

<script setup>
/* Define component props */
const details = defineProps({
  data: Object,
});
</script>

<style scoped>
.blog-paragraph {
  margin: 10px 0;
}
</style>
