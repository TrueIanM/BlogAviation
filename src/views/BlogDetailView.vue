<template>
  <div class="blog-page">
    <ul class="blog-list">
      <li>Aviation</li>
      <li><div class="dash"></div></li>

      <li>{{ timeWhen }}</li>
    </ul>
    <div class="title">{{ props.title }}</div>

    <div class="container">
      <div class="share-column">
        <button class="share-btn">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </button>
        <button class="share-btn">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </button>
        <button class="share-btn">
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </button>
        <button class="share-btn">
          <FontAwesomeIcon icon="fa-brands fa-tiktok" />
        </button>
      </div>
      <div class="blog-column">
        <div class="engagement-container">
          <div>
            <FontAwesomeIcon icon="fa-regular fa-comments" />
            {{ blog.comments }}
          </div>

          <button class="en-btn">
            <font-awesome-icon icon="fa-solid fa-heart" />
            {{ blog.likes }}
          </button>
        </div>
        <component
          v-for="pst in blog.post"
          :is="selectComponent(pst.type)"
          :data="pst"
        />
      </div>
    </div>
    <CommentsList title="Commments" />
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useBlogStore } from "../stores/blogs";
import { computed } from "vue";
import ImageView from "../components/ImageView.vue";
import ListView from "../components/ListView.vue";
import ParagraphView from "../components/ParagraphView.vue";
import TitleView from "../components/Title.vue";
import VideoView from "../components/VideoView.vue";
import CommentsList from "../components/CommentsList.vue";

dayjs.extend(relativeTime);

const props = defineProps({
  position: String,
  title: String
});

const blog = useBlogStore().blogs[Number(props.position)];
const timeWhen = computed(() => dayjs(blog.created).fromNow());

function selectComponent(type) {
  switch (type) {
    case "image":
      return ImageView;
    case "list":
      return ListView;
    case "title":
      return TitleView;
    case "video":
      return VideoView;
    case "paragraph":
    default:
      return ParagraphView;
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
.share-column,
.blog-column {
  display: flex;
  flex-direction: column;
  max-width: 700px;
}
.share-column {
  gap: 10px;
  margin-right: 40px;
}
.share-btn {
  font-size: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: solid black 1px;
  background: transparent;
  transition: background 0.3s ease-in;
  cursor: pointer;
}
.share-btn:hover {
  background: #000;
  color: #fff;
}
.blog-page {
  width: 80%;
  margin: 80px auto 0 auto;
}
.dash {
  height: 1px;
  width: 30px;
  background: black;
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
.engagement-container {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.en-btn {
  border: none;
  background: transparent;
  cursor: pointer;
}
.title {
  font-weight: 600;
  font-size: 30px;
  margin: 15px 0;
  cursor: pointer;
}
</style>
