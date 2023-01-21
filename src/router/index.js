import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/main/Index.vue";
import ClubList from "../views/main/club/Index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/area/:id",
    name: "area",
    component: ClubList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
