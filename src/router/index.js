import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppSearchView from "../views/AppSearchView.vue";
import AppGameView from "../views/AppGameView.vue";
import AppBoardView from "../views/AppBoardView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: AppSearchView,
  },
  {
    path: "/game",
    name: "game",
    component: AppGameView,
  },
  {
    path: "/board",
    name: "board",
    component: AppBoardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
