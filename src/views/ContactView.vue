<template>
  <div class="about">
    <ContactView
      :title="arr[0].title"
      :image_src="arr[0].image_src"
      :statement="arr[0].statement"
    />
    <ContactView
      :title="arr[1].title"
      :image_src="arr[1].image_src"
      :statement="arr[1].statement"
    />
    <ContactView
      :title="arr[2].title"
      :image_src="arr[2].image_src"
      :statement="arr[2].statement"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import ContactView from "../components/ContactItemView.vue";
const arr = ref([
  {
    title: "technical Support",
    image_src: "src/assets/dante.jpg",
    statement:
      " Lorem ipsum dolor sit amet consectetur, " +
      " adipisicing elit.Doloribus, obcaecati! Animi, " +
      " iste porro.Eum quasi placeat similique sit nisi"
  },
  {
    title: "Help and Support",
    image_src: "src/assets/dante.jpg",
    statement:
      " Lorem ipsum dolor sit amet consectetur, " +
      " adipisicing elit.Doloribus, obcaecati! Animi, " +
      " iste porro.Eum quasi placeat similique sit nisi"
  },
  {
    title: "Sales",
    image_src: "src/assets/dante.jpg",
    statement:
      " Lorem ipsum dolor sit amet consectetur, " +
      " adipisicing elit.Doloribus, obcaecati! Animi, " +
      " iste porro.Eum quasi placeat similique sit nisi"
  }
]);
</script>
<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 70px auto 0 auto;
    flex-direction: row;
    gap: 10px;
  }
}
</style>
