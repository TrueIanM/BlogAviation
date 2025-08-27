<template>
  <div class="item">
    <!-- Item image (computed path from props) -->
    <img :src="img_name" :alt="item_name" class="img" />

    <!-- Item details: name and shop button -->
    <div class="item-detail-container">
      <h2 class="item-name">{{ item_name }}</h2>
      <button class="shop-button direct-button-white">Shop Now</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Props: data passed into the component
const props = defineProps({
  img: String,
  item_name: String,
});

// Computed: builds full path to image from provided filename
const img_name = computed(() => "/src/assets/" + props.img);
</script>

<style scoped>
.item {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: var(--vt-c-white);
  margin: 10px;
}
.img {
  width: 80%;
  height: 20vw;
  object-fit: contain;
}
.item-name {
  font-size: var(--title-text-size);
  color: var(--vt-c-black-soft);
}
.shop-button {
  margin-top: 20px;
  padding: 10px 20px;
}
.item-detail-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
