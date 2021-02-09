import Vue from 'vue'
//如果之后使用固定的url就要使用config中的地址前缀
// import {BASE_URL} from '@/config'
// console.log(BASE_URL);
//导入axios
import axios from 'axios'
// Vue.prototype.axios = axios

//给Vue混入成员
Vue.mixin({
  methods:{
    //http:192.12.12.123:82/one/two
    //get请求的方法
    $get(url,params){
      return axios.get(url,{params})
    },
    //post请求的方法
    $post(url,data){
      return axios.post(url,data)
    }
  }
})