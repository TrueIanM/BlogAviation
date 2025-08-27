<!--
  AppNavigation.vue
  Main navigation component for the website.
  Handles menu, search bar, social links, cart, and side panel.
-->

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { useProductsStore } from "./stores/products";
import router from "./router";

// Reactive state
const open = ref(false); // Search bar open state
const opacity = ref(1); // Search button opacity
const side = ref(true); // Side panel open/close state
const search_input = ref(null); // Search input reference
const show_items = ref(false); // Future use: toggle display of items
const store = useProductsStore(); // Product store for cart management

// Toggle search bar
function searchClick() {
  open.value = !open.value;
  opacity.value = 0.0;

  setTimeout(() => {
    opacity.value = 1;
    search_input.value.focus(); // Focus input after animation
  }, 300);
}

// Navigate to cart page
function openCart() {
  router.push({
    name: "Cart",
  });
}
</script>

<template>
  <!-- Main navigation -->
  <nav>
    <div class="container">
      <div class="header">AVIATION BLOG</div>

      <!-- Menu links -->
      <div class="menu">
        <ul class="menu-items">
          <li class="menu-item">
            <RouterLink class="rounded-gradient" to="/">Home</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/blog" class="link">Blog</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/shop" class="link">Shop</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/contacts" class="link">Contact us</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Search and social icons -->
      <div class="hide-search">
        <ul class="socials" :class="{ active: open }">
          <li>
            <a href="#" target="_blank"
              ><FontAwesomeIcon icon="fa-brands fa-facebook"
            /></a>
          </li>
          <li>
            <a href="#" target="_blank"
              ><FontAwesomeIcon icon="fa-brands fa-instagram"
            /></a>
          </li>
          <li>
            <a href="#" target="_blank"
              ><FontAwesomeIcon icon="fa-brands fa-twitter"
            /></a>
          </li>
          <li>
            <a href="#" target="_blank"
              ><FontAwesomeIcon icon="fa-brands fa-tiktok"
            /></a>
          </li>
        </ul>

        <!-- Search and cart controls -->
        <div class="buts">
          <div class="search-wrapper">
            <input
              type="text"
              ref="search_input"
              class="search-input"
              :class="{ active: open }"
            />
            <button
              @click="searchClick"
              class="search-btn"
              :class="{ active: open }"
              :style="{ opacity: opacity }"
            >
              <FontAwesomeIcon v-if="open" icon="fa-solid fa-xmark" />
              <FontAwesomeIcon v-else icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>

          <!-- Cart button with item count -->
          <button @click="openCart" class="items_cart">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <div v-show="store.cartItems.length > 0" class="items_num">
              {{ store.cartItems.length }}
            </div>
          </button>

          <!-- Side menu toggle -->
          <button @click="side = !side">
            <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Side panel menu -->
  <div class="side-panel" :class="{ close_panel: side }">
    <button class="close-menu" @click="side = !side">
      <FontAwesomeIcon icon="fa-solid fa-xmark" />
    </button>
    <ul class="side-list">
      <li class="side-selected"><a href="#">Home</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  </div>

  <!-- Overlay when side panel is open -->
  <div class="overlay" :class="{ show: !side, hide: side }"></div>

  <!-- Main routed content -->
  <div class="body-footer">
    <RouterView />
  </div>
</template>

<style scoped>
.items_num {
  position: absolute;
  top: 0px;
  right: -2px;
  background: var(--genz-color-brand-1);
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 14px;
}
.items_cart {
  position: relative;
}
.body-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: relative;
}
.close_panel {
  transform: translateX(300px);
}
.side-list {
  list-style: none;
}
.side-list li::after {
  content: "";
  display: block;
  height: 1px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  background: linear-gradient(
    to right,
    var(--color-link-hover),
    var(--color-background)
  );
}
.close-menu {
  border: 0;
  font-size: 30px;
  background: transparent;
  color: var(--color-text);
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  padding: 5px;
}
.close-menu:hover {
  color: var(--genz-color-brand-1);
}

.overlay {
  width: 100%;
  height: 100%;
  background: var(--vt-c-black);
  opacity: 0.8;
  z-index: 3;
  position: fixed;
}
.side-panel {
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
  background: var(--color-background);
  height: 100%;
  padding-top: 100px;
  transition: transform 0.6s;
}
.search-wrapper {
  position: relative;
  height: var(--round-button-size);
  margin-left: 5px;
}
.search-input {
  height: var(--round-button-size);
  width: var(--round-button-size);
  color: var(--color-link-hover);
  outline: none;
  border: 0;
  background: none;
  transition: width 0.3s ease;
  border-radius: 10px;
}
.hide-search {
  display: flex;
  gap: 30px;
}
.buts button {
  border: none;
  border-radius: 50%;
  width: var(--round-button-size);
  height: var(--round-button-size);
  font-size: 18px;
  background: transparent;
  cursor: pointer;
}
.search-btn {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-out;
}
.active.search-input {
  width: 200px;
  border: 1px solid var(--genz-color-brand-1);
  margin-right: var(--round-button-size);
}
.active.search-btn {
  transform: translateX(200px);
  background: var(--close-color);
}
.active.socials {
  display: none;
}
.buts {
  gap: 10px;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: white;
}
.header {
  font-size: x-large;
  font-weight: 700;
}
.menu .menu-items,
.socials,
.buts,
.side,
.container {
  display: flex;
  flex-direction: row;
  position: relative;
}
.container {
  width: 80%;
  margin: 10px auto;
  justify-content: space-between;
  align-items: center;
}
.menu-items,
.socials {
  list-style-type: none;
}
.menu-item,
.socials li {
  margin: 5px 5px;
}
.socials a {
  color: var(--color-link-hover);
  padding: 0;
}
.socials a:hover {
  color: #fcb900;
}
</style>
