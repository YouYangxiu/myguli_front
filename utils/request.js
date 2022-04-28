import axios from 'axios'
import cookie from "js-cookie";
import {MessageBox, Message} from "element-ui";
axios.defaults.timeout = 10000
//创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001',//请求地址
  timeout: 20000
})
//配置拦截器
service.interceptors.request.use(
  config => {
    if (cookie.get('guli_token')) {
      config.headers['token'] = cookie.get('guli_token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)
export default service
