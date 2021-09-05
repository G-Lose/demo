import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting   
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/classify",
    name: "Classify",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Classify.vue"),
  },
  {
    path: "/component",
    name: "Component",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
    component: () =>
      import(/* webpackChunkName: "Component" */ "../views/Component.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
    component: () =>
      import(/* webpackChunkName: "Cart" */ "../views/Cart.vue"),
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
    component: () =>
      import(/* webpackChunkName: "Cart" */ "../views/List"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
