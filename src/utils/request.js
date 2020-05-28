import axios from 'axios'
import {baseUrl} from '@/api/url'
import {getStore, setStore, removeStore} from './store'
// import {generateUUID} from './index'
import {Toast, Dialog} from 'vant';
// import Router from '@/modules/index/router'

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 60000
axios.defaults.headers = {
  "Content-Type": "application/json"
}

const logOut = () => {
  Toast.clear()
  Dialog.alert({
    title: '提示',
    message: '您的账号登录超时,请重新登录!'
  }).then(() => {
    // const path = Router.currentRoute.path
    removeStore('authToken')
    removeStore('refreshToken')
    removeStore('loginUserInfo')
    // if (path === '/home') {
    //   Router.replace({
    //     path: '/login'
    //   })
    // } else {
    // //   setStore('redirectUrl', Router.currentRoute.path)
    //   setStore('goLogin', 1)
    //   Router.replace({
    //     path: '/home'
    //   })
    // }
  })
}

// 刷新token的请求方法
const getRefreshToken = data => {
  axios.post('/userGateway/user/refreshToken', {
    refreshToken: getStore('refreshToken')
  }).then(res => {
    if (res.data.code === 1000) {
      let {authToken, refreshToken} = res.data.data
      setStore('authToken', authToken)
      setStore('refreshToken', refreshToken)
      // 修改原请求的token
      data.config.headers.JWTToken = authToken
      /*
      * 这边不需要baseURL是因为会重新请求url
      * url中已经包含baseURL的部分了
      * 如果不修改成空字符串，会变成'api/api/xxxx'的情况
      * */
      data.config.baseURL = ''
      // 重新请求
      axios(data)
    } else {
      logOut()
    }
  }).catch(() => {
    logOut()
  })
}

// 请求拦截器
axios.interceptors.request.use(config => {
//   config.headers.cType = 'PC' // APP
//   config.headers.appName = 'ghodr'
//   config.headers.lang = 'zh_CN'
//   config.headers.deviceId = getStore('deviceId') || generateUUID()
  config.headers.JWTToken = getStore('authToken') || ''
  return config
}, error => {
  Toast(error.toString())
  return Promise.reject()
})

// 返回拦截器
axios.interceptors.response.use(res => {
  if (res.status === 200) {
    const {code} = res.data
    if (code === 1000) {
      return Promise.resolve(res.data.data)
    } else if (code === 1001) {
      logOut()
    } else if (code === 1002) {
      getRefreshToken(res)
    } else {
      const message = res.data.message || '请求错误'
      Toast(message)
      return Promise.reject()
    }
  } else {
    Toast.fail(res.status)
    return Promise.reject()
  }
}, err => {
  if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
    Toast.fail('请求超时')
  } else {
    Toast.fail('请求失败')
  }  
  return Promise.reject()
})

export default axios