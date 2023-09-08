// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
    },
        isPlay: false, // 初始播放状态为 fals
    mutations: {
        change(state,isPlaying){
            this.state.isPlay = isPlaying;
        }
    },
});

export default store;
