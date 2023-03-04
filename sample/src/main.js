import Vue from 'vue'

// 画面の切り替えはここを操作
// import App from './App.vue'
import App from './BaseDesign'


import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
