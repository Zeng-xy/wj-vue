// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

// 设置反向代理，前端请求默认发送到http://localhost:8443/api

//  全局注册，之后可在其他组件中通过this.$axios发送数据

/* eslint-disable no-new */
/* el 属性提供一个在页面上已存在的 DOM 元素作为 Vue 对象的挂载目标
  router 代表该对象包含 Vue Router，并使用项目中定义的路由
  components 表示该对象包含的 Vue 组件
  template 是用一个字符串模板作为 Vue 实例的标识使用，类似于定义一个 html 标签
 */
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

// 首先判断访问的路径是否需要登录，如果需要，
// 判断 store 里有没有存储 user 的信息，如果存在，则放行，
// 否则跳转到登录页面，并存储访问的页面路径（以便在登录后跳转到访问页）。
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
}
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
