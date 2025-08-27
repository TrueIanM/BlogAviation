<template>
  <div class="blog-card">
    <!-- Blog Image (clickable to open blog details) -->
    <img @click="openBlog" class="blog-image" :src="image" alt="Blog Image" />

    <div class="column">
      <div class="top">
        <!-- Category + time info -->
        <ul class="blog-list">
          <li>Aviation</li>
          <li><div class="dash"></div></li>
          <!-- Relative time since blog creation -->
          <li>{{ timeWhen }}</li>
        </ul>

        <!-- Blog Title (clickable to open blog details) -->
        <div @click="openBlog" class="title">{{ props.Blog.title }}</div>

        <!-- Comments + Likes engagement bar -->
        <div class="engagement-container">
          <div>
            <FontAwesomeIcon icon="fa-regular fa-comments" />
            {{ props.Blog.comments }}
          </div>

          <button class="en-btn">
            <font-awesome-icon icon="fa-solid fa-heart" />
            {{ props.Blog.likes }}
          </button>
        </div>

        <!-- Blog Short Description -->
        <p class="desc">
          {{ props.Blog.description }}
        </p>
      </div>

      <!-- Footer section: comments + share buttons -->
      <div class="bottom">
        <button class="btn">
          <FontAwesomeIcon icon="fa-regular fa-comments" />
        </button>
        <button class="btn">
          <FontAwesomeIcon icon="fa-solid fa-share" />
        </button>
        <h4>0 shares</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs"; // Date library
import relativeTime from "dayjs/plugin/relativeTime"; // For "x time ago"
import { computed } from "vue";
import router from "../router";

dayjs.extend(relativeTime);

const props = defineProps({
  Blog: Object,
  pos: Number,
});

// Computed: relative time since blog creation
const timeWhen = computed(() => dayjs(props.Blog.created).fromNow());

// Computed: choose first image from blog post content
const image = computed(() => {
  let img;
  props.Blog.post.forEach((element) => {
    if (element.type == "image") {
      img = element.url;
      return;
    }
  });
  // If no image, fallback to placeholder
  if (img == null) img = "/src/assets/placeholder.png";
  return img;
});

// Navigate to blog detail page with router
function openBlog() {
  let position = props.pos;
  let title = props.Blog.title;
  router.push({
    name: "blogdetail",
    params: {
      position,
      title,
    },
  });
}
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
}
.bottom {
  display: flex;
  gap: 10px;
  align-items: center;
}
.btn {
  border-radius: 0;
  border: 1px #313715 solid;
  padding: 8px;
}
.dash {
  height: 1px;
  width: 30px;
  background: black;
}
.blog-card {
  display: flex;
  width: 80%;
  color: var(--vt-c-black);
  gap: 10px;
  margin-bottom: 60px;
  color: #000;
}

.blog-image {
  width: 150%;
  height: 75%;
  cursor: pointer;
}

.title {
  font-weight: 600;
  font-size: 16px;
  margin: 15px 0;
  cursor: pointer;
}

.blog-list {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 30px;
  align-items: center;
}

.blog-list li {
  font-weight: 600;
  font-size: 13px;
}

.en-btn {
  border: none;
  background: transparent;
  cursor: pointer;
}

.engagement-container {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
</style>
