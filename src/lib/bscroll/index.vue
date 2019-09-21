<template>

    <div class="wrapper" ref="wrapper">
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<script>
// 引入better-scroll 第三方插件
import BScroll from "better-scroll";

export default {
    name:"Bscroll",
    // 在挂载后能够获取真实的DOM结构,可进行插件的实例化操作
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            // 开启下拉刷新
            pullDownRefresh:true,
            // 开启上拉加载更多
            pullUpLoad:true,
            // 因为 better-scroll 会阻止原生的 click 事件，我们可以设置 tap 为 true，它会在区域被点击的时候派发一个
            tap:true,
            // 
            click:true,
            //  开启横向滚动
            scrollX:true,
        });
    },
    //  对better-scroll进行配置
    methods:{
        // 下拉刷新,
        handlepullingDown(cb) {
            this.scroll.on("pullingDown",()=>{
                cb();
            })
        },
        // 下拉刷新后 可以做下一次请求,
        handlefinishPullDown() {
            this.scroll.finishPullDown();
            //  重新计算滚动区域的高度, 
            // 注意一定要重新计算高度, 这样才能保证滚动效果正常
            this.scroll.refresh();
        },
        handlepullingUp(cb) {
            this.scroll.on("pullingUp",()=>{
                cb();
            })
        },
        //  上拉加载, 进行下一次的请求;
        handlefinishPullUp() {
            this.scroll.finishPullUp(); 
            this.scroll.refresh();
        },
        //  滚到指定位置
        handleScrollTop(t) {
            this.scroll.scrollTo(0,-t,300)
        }
    }
}
</script>

<style>
    .wrapper{
        height:100%;
    }
</style>
















