export default {
  
    path:"/detail/:id",
    name:"detail",
    component:()=>import("@pages/detail")
}
  // 动态路由传值 定义路径时/:属性名; 传值时, 路径/:属性值进行传值, 接收时使用this.$route.params进行接收

    //  query传值;  传值时, 在路径用?id=1010&name=dfs 进行传递; 用this.$route.query 接收

    // 路由解耦在配置项中设置props为true 进行传递















