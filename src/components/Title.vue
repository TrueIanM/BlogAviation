<template>
  <h2 class="title">
    {{ details.data.text }}
  </h2>
</template>

<script setup>
const details = defineProps({
  data: Object
});
</script>

<style scoped>
.title {
  margin: 20px 0;
}
</style>
