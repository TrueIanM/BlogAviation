<template>
  <div>
    <!-- Page/section title -->
    <h1 class="title">{{ props.title }}</h1>

    <!-- Comment input area with avatar -->
    <div class="comment-container">
      <div class="avatar">
        <!-- Placeholder avatar with static letter -->
        <div class="avatar-letter">P</div>
      </div>
      <div class="column">
        <!-- Comment text input -->
        <input
          class="comment-input"
          type="text"
          placeholder="Add Your Comment here"
          v-model="commment_details"
          :onFocus="(comment_active = true)"
        />
        <!-- Comment control buttons (shown only when input is active) -->
        <div v-show="comment_active" class="comment-control">
          <button @click="closeComment" class="control">Cancel</button>
          <button @click="addComment" class="control">Submit</button>
        </div>
      </div>
    </div>

    <!-- Comments list section -->
    <div v-if="store.comments.length > 0" class="comments-list">
      <!-- Render each comment with CommentsView component -->
      <CommentsView v-for="comment in store.comments" :CommentOBJ="comment" />
    </div>

    <!-- Placeholder when no comments are available -->
    <div v-else class="placeholder">
      <p class="placeholder-text">There are no comments to view</p>
    </div>
  </div>
</template>

<script setup>
import { commentsStore } from "../stores/comments";
import CommentsView from "./CommentsView.vue";
import { ref } from "vue";

// Props for dynamic title
const props = defineProps({
  title: String,
});

// Access global comments store
const store = commentsStore();

// Local state for comment input and visibility
const commment_details = ref("");
const comment_active = ref(false);

// Add a new comment to the store
function addComment() {
  store.comments.unshift({
    img: "/src/assets/dante.jpg",
    username: "@Current User",
    details: commment_details.value,
    time: Date.now(),
    replys: [],
  });

  commment_details.value = "";
}

// Close comment input and reset state
function closeComment() {
  commment_details.value = "";
  comment_active.value = false;
}
</script>

<style scoped>
.title {
  color: #000;
  margin-bottom: 40px;
}
.comment-container {
  display: flex;
  margin: 40px 0;
}
.avatar-letter {
  width: 50px;
  height: 50px;
  background: gold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: aliceblue;
  font-weight: 600;
}
.avatar {
  margin-right: 15px;
}
.comment-input {
  min-width: 400px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: var(--vt-c-indigo) 2px solid;
  font-size: 16px;
  padding: 3px 0;
}
.comment-input:focus {
  outline: none;
  border-bottom: #000 2px solid;
}
.control {
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
  border-radius: 10px;
  font-weight: 600;
}
.comment-control {
  display: flex;
  justify-content: end;
  margin-top: 10px;
  gap: 20px;
}
.control:hover {
  background: #d5dcf9;
}
.placeholder {
  margin: 20px 0;
}
</style>
