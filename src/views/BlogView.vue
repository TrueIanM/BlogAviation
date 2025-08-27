<template>
  <div class="over">
    <div class="title-back">
      <h1 class="blog-page-title">BLOG</h1>
    </div>
    <div class="blogs-list">
      <BlogItem
        v-for="(blog, index) in store.blogs"
        :Blog="blog"
        :pos="index"
      />
    </div>
  </div>
</template>

<script setup>
import { useBlogStore } from "../stores/blogs";
import BlogItem from "../components/BlogItem.vue";

const store = useBlogStore();
</script>

<style scoped>
.blogs-list {
  width: 80%;
  margin: 0 auto;
}
.title-back {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color: var(--vt-c-black);
  background: var(--vt-banner-color);
  margin-bottom: 30px;
  padding: 10px 0;
}
.blog-page-title {
  margin-top: 62px;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 35px;
}
</style>
