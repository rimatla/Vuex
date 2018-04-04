import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

new Vue({
  el: '#app',
  //es6
  store,
  render: h => h(App)
})
