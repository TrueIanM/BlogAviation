<template>
  <!-- Render blog image from provided data -->
  <img class="comp" :src="details.data.url" alt="Blog Image" />
</template>

<script setup>
// Props: expects an object with a "data" property containing image details
const details = defineProps({
  data: Object,
});
</script>

<style scoped>
.comp {
  margin: 10px 0;
  width: 100%;
}
</style>
