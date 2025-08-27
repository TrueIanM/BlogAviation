<template>
  <div class="local">
    <!-- Blog cover image -->
    <img class="img-large" src="../assets/academy.jpg" alt="pilots corkpit" />

    <!-- Blog details section -->
    <div class="details">
      <!-- Author and date -->
      <ul class="created">
        <li class="blogger_name">Stano Karuri</li>
        <li>August 23 2023</li>
      </ul>

      <!-- Blog title -->
      <h1 class="blog-title">PILOT TRAINING IN KENYA</h1>

      <!-- Blog short description -->
      <div class="sample-p">
        Are you looking into becoming a Pilot in Kenya and have no idea what its
        all about?
      </div>

      <!-- Read more button -->
      <button class="read-button">
        Read More
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.read-button {
  background: transparent;
  padding: 10px 0;
  outline: none;
  border: 2.5px white solid;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.5s ease;
}
.read-button:hover {
  background: white;
  color: black;
}
.read-button svg {
  margin-left: 10px;
}
.created {
  display: flex;
  list-style: none;
  align-items: center;
  gap: 30px;
  padding: 0;
}
.created,
.blog-title,
.sample-p,
.read-button {
  color: var(--vt-c-white-soft);
}
.created li {
  font-weight: 700;
  font-size: 16px;
}
.blog-title {
  font-size: 25px;
  color: var(--vt-c-white-soft);
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
  height: calc(var(--section-height) + 62px);
}
.img-large {
  width: 100vw;
  height: calc(var(--section-height) + 62px);
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
