<template>
  <div>
    <!-- Display main comment -->
    <Comment size="avatar" :CommentOB="CommentOBJ" />

    <!-- Reply button to toggle reply input -->
    <button @click="showComment = true" class="reply">Reply</button>

    <!-- Reply section -->
    <div class="replys">
      <!-- Reply input form -->
      <div v-show="showComment" class="comment-container">
        <div class="avatar">
          <!-- Static avatar placeholder -->
          <div class="avatar-letter">P</div>
        </div>
        <div class="column">
          <!-- Input field for reply text -->
          <input
            class="comment-input"
            type="text"
            placeholder="Add Your Comment here"
            v-model="comment_value"
          />
          <!-- Reply form control buttons -->
          <div class="comment-control">
            <button @click="showComment = false" class="control">Cancel</button>
            <button @click="addComment" class="control">Submit</button>
          </div>
        </div>
      </div>

      <!-- Render list of reply comments -->
      <Comment
        size="avatar_min"
        v-for="comment in CommentOBJ.replys"
        :CommentOB="comment"
      />
    </div>
  </div>
</template>

<script setup>
import Comment from "./Comment.vue";
import { ref } from "vue";

// Main comment object
const props = defineProps({
  CommentOBJ: Object,
});

// State for toggling reply input visibility
const showComment = ref(false);

// State for holding reply text input
const comment_value = ref("");

// Function to add a new reply to CommentOBJ.replys
function addComment() {
  props.CommentOBJ.replys.unshift({
    img: "/src/assets/assistant.jpg",
    username: "@Current User",
    details: comment_value.value,
    time: Date.now(),
  });

  comment_value.value = "";
  showComment.value = false;
}
</script>

<style scoped>
.replys {
  margin: 10px 0 10px 80px;
}
.reply {
  margin-left: 50px;
  border: none;
  padding: 5px 20px;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
  border: 1px #fff solid;
}
.reply:hover {
  border: 1px var(--vt-c-text-light-1) solid;
}
.comment-container {
  display: flex;
  margin: 20px 0;
}
.avatar-letter {
  width: 30px;
  height: 30px;
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
  min-width: 350px;
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
</style>
