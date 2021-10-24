import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Posts from "../views/Posts.vue"
import Seymen from "../views/Seymen.vue"
import admin from "../views/Admin.vue"
import Post from "../views/Post.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/posts/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Seymen",
    name: "Seymen",
    component: Seymen,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
