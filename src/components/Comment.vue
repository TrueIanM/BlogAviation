<template>
  <div class="row">
    <!-- Avatar image container with dynamic size class -->
    <div :class="[props.size]">
      <img :src="props.CommentOB.img" alt="Avatar Images" />
    </div>

    <!-- Comment content section -->
    <div class="column">
      <div class="inner-row">
        <!-- Commenter's username -->
        <h4 class="avatar-name">{{ props.CommentOB.username }}</h4>
        <!-- Relative time since comment was posted -->
        <h5 class="time-label">{{ timeWhen }}</h5>
      </div>
      <!-- Actual comment text -->
      <p class="details">{{ props.CommentOB.details }}</p>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { computed } from "vue";

dayjs.extend(relativeTime);

// Props passed into the Comment component
const props = defineProps({
  size: String,
  CommentOB: Object,
});

// Compute human-readable relative time
const timeWhen = computed(() => dayjs(props.CommentOB.time).fromNow());
</script>

<style scoped>
.avatar img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.avatar_min img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.avatar,
.avatar_min {
  margin: 0 15px 10px 0;
}
.row,
.inner-row {
  display: flex;
}
.inner-row {
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}
h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--vt-c-text-light-1);
}
h5 {
  color: var(--vt-c-text-light-1);
}
p {
  color: #000;
}
.time-label {
  font-weight: 600;
}
</style>
