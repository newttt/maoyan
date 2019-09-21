import {getCity} from "@api/city";

const state = {
    //  热门城市及城市列表是基本不会变的,因此可以缓存在本地,不必每次获取都请求服务器,减少服务器请求次数,优化
    // 判断本地是否缓存热门城市的数据,如果没有进行赋值
    hotCity: JSON.parse(sessionStorage.getItem("hotCity")) || [],
    cityList:JSON.parse(sessionStorage.getItem("cityList")) || [],
    //  多页共同使用,可储存本地,
    nm:sessionStorage.getItem("nm") || "北京",
    id:sessionStorage.getItem("id") || 1
}

//  处理异步
const actions = {
    async handleGetCity({commit}) {
        let data = await getCity();
        commit("handleMutationGetCity",data.data)
    }
}

const mutations = {
    handleModifyCityInfo(state,info) {
        state.nm = info.nm;
        state.id = info.id;
        //将数据存在本地
        sessionStorage.setItem("nm",info.nm);
        sessionStorage.setItem("id",info.id);
    },
    handleMutationGetCity(state,params) {
        let city = params.cities;
        let hotCity = [],cityList = [];
        // 循环遍历, 获取热门城市列表
        for(var i = 0; i < city.length; i++) {
            if (city[i].isHot) {
                hotCity.push({
                    id: city[i].id,
                    nm: city[i].nm
                })
            }
        }

        // 将城市按拼音排序
        for(var i = 0; i <city.length; i++) {
            let first = city[i].py.slice(0,1).toUpperCase();
            
            if(isIndex(first)) {
                cityList.push({index:first,list:[{id:city[i].id,nm:city[i].nm}]})
            }else {
                for(var j = 0; j < cityList.length; j++) {
                    if(first == cityList[j].index) {
                        cityList[j].list.push({id:city[i].id,nm:city[i].nm});
                        break;
                    }
                }
            }


        }


        //  判断当前首字母是否在cityList中存在,的函数,返回一个布尔值

        function isIndex(first) {
            var bStop = true;
            for(var i = 0; i < cityList.length; i++) {
                if(cityList[i].index == first) {
                    bStop = false;
                    break;
                }
            }
            // 存在为false 不存在为true
            return bStop;
        }

        // 城市排序, 按照ASCII
        cityList.sort((a,b)=>{
            if(a.index > b.index) {
                return 1;
            }else {
                return -1;
            }
        })

        // 存储在state
        state.hotCity = hotCity;
        state.cityList = cityList;
        //  存储在本地
        sessionStorage.setItem("hotCity",JSON.stringify(hotCity))

        sessionStorage.setItem("cityList",JSON.stringify(cityList))

    }
}










export default {
    state,
    actions,
    mutations,
    //  解决分模块开发, 可能出现的命名冲突问题
    namespaced: true
}