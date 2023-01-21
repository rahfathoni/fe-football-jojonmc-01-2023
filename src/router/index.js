import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/main/Index.vue";
import ClubList from "../views/main/club/Index.vue";
import ClubDetail from "../views/main/club/Detail.vue";

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
  {
    path: "/area/:id/team/:team",
    name: "teamDetail",
    component: ClubDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
