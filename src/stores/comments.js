import { ref } from "vue";
import { defineStore } from "pinia";

export const commentsStore = defineStore("CommentsStore", () => {
  const comments = ref([
    {
      img: "/src/assets/assistant.jpg",
      username: "@Dante mulogo",
      details: "Just gratest product ever",
      time: "2023-01-01",
      replys: [
        {
          img: "/src/assets/dante.jpg",
          username: "@Mulogo Mueni",
          details: "I agree too",
          time: "2023-08-01"
        },
        {
          img: "/src/assets/dante.jpg",
          username: "@Mulogo Mueni",
          details: "Loved It. Always buy from this shop",
          time: "2023-08-01"
        }
      ]
    },
    {
      img: "/src/assets/assistant.jpg",
      username: "@Dante mulogo",
      details: "Just gratest product ever",
      time: "2023-01-01",
      replys: [
        {
          img: "/src/assets/dante.jpg",
          username: "@Mulogo Mueni",
          details: "I agree too",
          time: "2023-08-01"
        }
      ]
    },
    {
      img: "/src/assets/assistant.jpg",
      username: "@Dante mulogo",
      details: "Just gratest product ever",
      time: "2023-01-01",
      replys: []
    }
  ]);
  return { comments };
});
