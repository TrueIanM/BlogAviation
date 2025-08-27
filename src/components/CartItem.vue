<template>
  <div class="cart_item">
    <!-- Product image -->
    <img :src="image_src" alt="Cart Item" />

    <!-- Item details -->
    <div class="column">
      <!-- Item name -->
      <h3 class="item_name">
        {{ item_name }}
      </h3>

      <!-- Quantity and remove action -->
      <div class="row">
        <h4>Quantity :{{ quantity }}</h4>
        <button>Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Props for CartItem component
 * - image_src: URL of the product image
 * - item_name: Name of the product
 * - quantity: Number of items in the cart
 */
const props = defineProps({
  image_src: String,
  item_name: String,
  quantity: Number,
});
</script>

<style scoped>
.cart_item {
  display: flex;
  height: 150px;
  gap: 20px;
}
.row {
  display: flex;
  gap: 10px;
}
.item_name {
  font-weight: 600;
}
.row button {
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
