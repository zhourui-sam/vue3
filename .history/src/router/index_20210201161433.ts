import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  //history 等同于之前的 mode 路由模式
  //createWebHistory: history模式路由
  //createWebHashHistory: hash模式的路由
  //首页路径必须为''空，不能为'/'
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
