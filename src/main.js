import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 左侧工具栏图标
import './assets/font/iconfont.css'
// 右侧图形库图标
import './assets/font/libs/iconfont.css'
// Ant design
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 颜色选择器
import vcolorpicker from 'vcolorpicker'

Vue.use(Antd)
Vue.use(vcolorpicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
