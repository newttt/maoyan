import Vue from "vue";
import VueRouter from "vue-router"
import movie from "./movie";
import cinema from "./cinema"
import mine from "./mine"
import city from "./city"
import search from "./search"
import detail from "./detail";
//  vue 使用插件
Vue.use(VueRouter);

//  路由配置
const router = new VueRouter({
    //  hash 前端路由
    mode: "hash",
    routes: [{
            path: '/',
            //  重定向
            redirect: "/movie",
        },
        movie,
        cinema,
        mine,
        city,
        search,
        detail
    ]
})


export default router;



















