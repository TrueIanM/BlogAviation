<template>
  <!-- Render a list of blog items -->
  <ul class="blog-list">
    <li item in details.data.listItems>
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
// Props: expects an object
const details = defineProps({
  data: Object,
});
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
