<template>
  <div class="cart">
    <div class="list">
      <CartItem
        v-for="item in store.cartItems"
        :image_src="item.imgs[0]"
        :item_name="item.name"
        :quantity="item.quantity"
      />
      <div class="summary">
        <h2 class="head">Order Summery</h2>
        <div class="shiping-container">
          <h4>Shipping</h4>
          <h4>free</h4>
        </div>
        <div class="subtotal">
          <h2>SubTotal</h2>
          <div class="total">Kshs {{ subtotal }}</div>
        </div>
        <button class="check">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from "../components/CartItem.vue";
import { useProductsStore } from "../stores/products";
import { computed } from "vue";

const store = useProductsStore();
const subtotal = computed(() => {
  let total = 0;
  store.cartItems.forEach((element) => {
    total = total + element.price * element.quantity;
  });
  return total;
});
</script>

<style scoped>
.cart {
  position: relative;
  width: 80%;
  margin: 90px auto 0 auto;
  color: black;
}
.list {
  width: 60%;
}
.summary {
  position: absolute;
  left: 60%;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 40px 20px;
  width: 40%;
}
.shiping-container,
.subtotal {
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
}
.check {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  background-color: #2e86ab;
  color: white;
  cursor: pointer;
}
.head {
  font-size: 30px;
}
.total {
  font-weight: 600;
  font-size: 18px;
}
h4 {
  font-size: 15px;
}
</style>
