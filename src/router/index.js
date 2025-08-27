import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/ContactView.vue")
    },
    {
      path: "/blog",
      name: "blog",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BlogView.vue")
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ShopView.vue")
    },
    {
      path: "/product/:position/:product_name",
      name: "product",
      props: true,
      component: () => import("../views/ShopDetailsView.vue")
    },
    {
      path: "/blogdetail/:position/:title",
      name: "blogdetail",
      props: true,
      component: () => import("../views/BlogDetailView.vue")
    },
    {
      path: "/Cart",
      name: "Cart",
      component: () => import("../views/CartView.vue")
    }
  ]
});

export default router;
