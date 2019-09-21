//  axios 封装

import axios from "axios";
//  引入loading条, 在请求阶段拦截显示,提高用户体验性
import loading from "@lib/loading/index.js"

//  创建
const http = axios.create({
    // 设置超时请求
    timeout:4000,
    //  是否携带cookie
    withCredentials:true
})





//  拦截器: 其中一目的是; 无论是get方式请求还是post请求, 都可以使用data进行传递,当使用get方式时, 会将data转成get方式需要的params形式
http.interceptors.request.use(config=>{
    if(config.method=="get") {
        config.params = {...config.data};
    }else if(config.method == "post") {
        //  根据后端要求,传递什么样数据
        // config.hearders["content-type"]="application/x-www-form-urlencoded"
    }
    loading.open();
    return config;
},err=>{
    return Promise.reject(err);
})

http.interceptors.response.use(res=>{
    if(res.status == 200) {
        loading.close();
        return res.data;
    }
})

export default http;