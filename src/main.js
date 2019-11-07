import Vue from 'vue'
import App from './App'


var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly

Vue.prototype.$fly=fly
Vue.config.productionTip = false
App.mpType = 'app'





const app = new Vue(App)
app.$mount()

//挂在全局头部
Vue.prototype.$fly.interceptors.request.use((config, promise) => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    return config;
})
