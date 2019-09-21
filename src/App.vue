<template>
  <div id="app">
    <keep-alive>
    <!-- keepAlive 进行优化, 减少组件切换 的开销 -->
      <router-view/>
    </keep-alive>
      <TabBar v-if="$route.meta.flag">
      
      </TabBar>
  </div>
</template>

<script>
import TabBar from "@components/tabBar"
import axios from "axios"
export default {
  name:"App",
  components:{
    [TabBar.name]:TabBar
  }
}
</script>









<style lang="scss">
#app{
  height: 100%;
}
</style>
