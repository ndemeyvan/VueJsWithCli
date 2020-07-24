import Vue from 'vue'
import App from './App.vue'

Vue.directive('highLight',{
    bind(el,bindind,vnode){
      el.style.backgroundColor = 'green';
    }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
