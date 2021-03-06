import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "@/views/layout/Layout.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/post",
        name: "post",
        component: () =>
            import ("@/views/post/Post.vue"),
        meta: {
            title: '闲云旅游社'
        }
      },
      {
        path: "/hotel",
        name: "hotel",
        component: () =>
            import ("@/views/hotel/Hotel.vue"),
        meta: {
            title: '闲云旅游社'
        }
      },
      {
        path: "/air",
        name: "air",
        component: () =>
            import ("@/views/air/Air.vue"),
        meta: {
            title: '闲云旅游社'
        }
      },
    ]
  },
  {
    path: "/about",
    name: "About",
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
