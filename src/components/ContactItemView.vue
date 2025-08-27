<template>
  <div class="contact">
    <!-- Title of the contact section -->
    <h2 class="title">{{ props.title }}</h2>

    <!-- Contact image (dynamic source from props) -->
    <img :src="props.image_src" alt="Contact Image" class="contact_image" />

    <!-- Supporting statement/description text -->
    <p class="statement">{{ props.statement }}</p>

    <!-- Call-to-action button -->
    <button class="contact-btn">Contact Us</button>
  </div>
</template>

<script setup>
// Props definition: dynamic data passed to the contact component
const props = defineProps({
  title: String,
  image_src: String,
  statement: String,
});
</script>

<style scoped>
.contact {
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 30px 40px 30px;
}
.title {
  text-transform: uppercase;
  font-weight: 700;
}
.contact_image {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
.contact-btn {
  padding: 10px 40px;
  border: 1px solid black;
  font-weight: 600;
  cursor: pointer;
}
</style>
