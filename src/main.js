import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/router.js';
import './assets/font/iconfont.css';
import './assets/font/iconfont'
import waterfall from 'vue-waterfall2'
import Vuex from 'vuex';
import VueAudio from 'vue-audio';

// 在Vue中使用vue-audio
Vue.use(VueAudio);


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      isPlay: false, // 初始播放状态为 fals
    },
        
    mutations: {
        change(state,isPlaying){
            this.state.isPlay = isPlaying;
        }
    },
});
Vue.use(waterfall)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
