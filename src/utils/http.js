import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 8000, // request timeout
  header: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'multipart/form-data'
  }
});

// request 拦截器 ==> 对请求参数做处理
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response 拦截器 ==> 对响应做处理
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

export default service;
