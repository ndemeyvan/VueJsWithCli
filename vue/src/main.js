import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';

//ceci est une importation globale du component
Vue.component('app-server',Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
