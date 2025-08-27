<!-- 
  AccessoriesBanner.vue 
  Displays a promotional banner for pilot accessories with a call-to-action 
-->

<template>
  <div class="local">
    <!-- Banner image -->
    <img class="img-large" src="../assets/stripes.png" alt="pilots stripes" />

    <!-- Banner details and call-to-action -->
    <div class="details">
      <h1 class="blog-title">PILOT ACCESSORIES</h1>
      <button class="read-button direct-button-white">
        SHOP NOW
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.read-button svg {
  margin-left: 10px;
}
.blog-title {
  color: var(--vt-c-black-soft);
}
.created li {
  font-weight: 700;
  font-size: 16px;
}
.blog-title {
  font-size: 25px;
  color: var(--vt-c-black-soft);
  font-weight: 600;
  letter-spacing: 0.5;
}
.blogger_name::after {
  content: "";
  display: inline-block;
  background-color: var(--genz-color-brand-1);
  border-radius: 50%;
  margin-left: 1rem;
  height: 5px;
  vertical-align: middle;
  width: 5px;
}

.local {
  position: relative;
  height: var(--section-height);
}
.img-large {
  width: 100vw;
  height: var(--section-height);
}
.details {
  position: absolute;
  bottom: 30%;
  left: 0;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;
}
</style>
