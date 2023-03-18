import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "home",
        component: () => import("../Views/Home/HomeView.vue"),
    },
    {
        path: "/vue.js",
        name: "vuejs",
        component: () => import("../Views/Vue.js/VueView.vue"),
    },
    {
        path: "/vuetify",
        name: "vuetify",
        component: () => import("../Views/Vuetify/VuetifyView.vue"),
    },
    {
        path: "/component",
        name: "component",
        component: () => import("../Views/Component/ComponentView"),
    },
    {
        path: "/code",
        name: "code",
        component: () => import("../Views/Coding/CodingView"),
    },
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "*",
        component: () => import("../Views/NotFound/NotFoundView"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
