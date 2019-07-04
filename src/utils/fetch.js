import axios from 'axios';
import qs from 'qs';


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-fotm-urlencoded'

const service = axios.create({
  timeout:15000
})
service.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err)
  }
)
service.interceptors.response.use(
  response => {
    return response
  },
  err => {
    return Promise.reject(err)
  }
)
// 封装axios的 fetch
export function fetch(url,options) {
  let opt = options || {}
  let data = Object.assign({}, opt.data)
  if (opt.type == 'get') {
    opt.params?opt.params._t = Date.parse(new Date()):opt.params = {_t: Date.parse(new Date())}
  }
  return new Promise((resolve, reject) => {
    service({
      method: opt.type || 'post',
      url: url,
      params: Object.assign({}, opt.params),
      data: (opt.headers ? data : qs.stringify(data)) || {},
      responseType: opt.dataType || 'json',
      headers:opt.headers || {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    }).then(res =>{
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}