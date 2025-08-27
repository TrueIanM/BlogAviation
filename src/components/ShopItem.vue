<template>
  <div class="shop-item">
    <div class="img-container">
      <!-- Top container: Add to cart button -->
      <div @click="addCart" class="top-container">
        <h4>ADD TO CART</h4>
        <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
      </div>

      <!-- Bottom container: View product details button -->
      <div @click="viewDetails" class="bottom-container">
        <h4>VIEW DETAILS</h4>
      </div>

      <!-- Product image -->
      <img :src="props.Product.imgs[0]" alt="Shop Item Name" class="img" />
    </div>

    <!-- Product name and price -->
    <div class="item-description">
      <h3 class="item-name">{{ props.Product.name }}</h3>
      <h2 class="item-price">{{ price }}</h2>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
import router from "../router";
import { useProductsStore } from "../stores/products";

// Props: product object and its position/index in a list
const props = defineProps({
  Product: Object,
  pos: Number,
});

// Computed: formatted product price
const price = computed(() => "Kshs " + props.Product.price);

// Navigate to product details page
function viewDetails() {
  let product_name = props.Product.name;
  let position = props.pos;
  router.push({
    name: "product",
    params: {
      product_name,
      position,
    },
  });
}

const store = useProductsStore();

// Add product to cart
function addCart() {
  store.addToCart(props.Product);
}
</script>

<style scoped>
.top-container,
.bottom-container {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  gap: 10px;
  transition: transform 0.3s ease-in-out;
}
.top-container {
  transform: translateY(-100%);
}
.bottom-container {
  transform: translateY(100%);
}
.top-container h4,
.bottom-container h4 {
  color: black;
  font-weight: 600;
  margin: 10px 0;
}
.bottom-container {
  bottom: 0;
}
.shop-item {
  width: 30%;
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: auto;
}
.img-container {
  position: relative;
  overflow: hidden;
}
.img-container:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.img-container:hover .top-container {
  transform: translateY(0);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.img-container:hover .bottom-container {
  transform: translateY(0);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px 20px;
}
.item-description {
  margin: 10px 0 0 0;
}
.item-name,
.item-price {
  font-weight: 700;
  font-size: 16px;
  color: black;
}
</style>
