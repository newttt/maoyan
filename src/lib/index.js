//  将封装的插件统一放在Vue下, 
import Header from "./header/index.vue";
import Bscroll from "./bscroll/index.vue";
//  将插件放在数组内便于循环遍历
const components = [
    Header,
    Bscroll
]

const install = (Vue)=>{
    if(Vue) {
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}
export default install;


/* 

Vue.use 是用来使用插件的.
    这个插件如果是一个对象的情况下必须提供一个install方法, 如果这个插件是一个函数的情况下,那么这个函数就会被当做install方式,这个install方法中会有一个参数, 这个参数就是VUE构造函数


*/








