import Vue from 'vue'
import App from './App.vue'
import VueTextTransition from "vue-text-transition";

Vue.config.productionTip = false

Vue.component("vue-text-transition", VueTextTransition);

new Vue({
  render: h => h(App),
}).$mount('#app')
