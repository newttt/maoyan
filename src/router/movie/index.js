export default {
    path:"/movie",
    name:"movie",
    // 按需加载引入 路由懒加载; 解决首页白屏,加载慢问题,除此之外的方法还有 服务端渲染, 骨架屏
    component:()=>import("@pages/movie"),
    //  二级路由配置
    children:[
        {
            path:"/movie",
            //  重定向
            redirect:"/movie/movieNow"
        },
        {
            //  二级路由配置时路径可以不加 /
            path:"movieNow",
            name:"movieNow",
            component:()=>import("@components/movieNow"),
            //  元信息,携带信息, 这里控制页面是否显示tabBar
            meta:{
                flag:true
            }
        },
        {
            path:"movieComming",
            name:"movieComming",
            meta:{
                flag:true
            },
            component:()=>import("@components/movieComming")
        }










    ]

}