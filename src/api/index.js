
//  引入已封装好的axios, 在此集中进行后端请求, 模块化开发,使维护找错更快速方便
import http from "@utils/http.js";

//  导出

//  正在热映
export const movieNowApi = (id = 1)=>http({
    method:"get",
    url: "/api/movieOnInfoList",
    data:{
        cityId:id
    }
})

//  即将上映


export const movieCommingApi = (id=10) => http({
    method:"get",
    url: "/api/movieComingList",
        data: {
            cityId: id
        }
})

//  搜索

export const movieSearch = (id,value)=>http({
    url: "/api/searchList",
    data:{
        cityId:id,
        kw:value,
    }
})

//  详情页面


export const movieDetail = (movieId) =>http({
    url: "/api/detailmovie",
        data: {
            movieId: movieId
        }
})
