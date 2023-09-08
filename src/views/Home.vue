<template>
<div id="app">
    <div class="me">
        <el-avatar :size="150" class="avator">
            <img src="../assets/logo.png" />
        </el-avatar>
        <share/>
    </div>

    <div class="show">
        <h1>技术栈</h1>
        <transition name="init">
            <ul>
                <li>
                    <span style="color:skyblue;font-size: 20px;float:left;margin-top: -2px;">{ <span style="color:black;font-size: 20px;">Vue</span> }</span><el-progress :text-inside="true" :stroke-width="26" :percentage="progress" class="init"></el-progress>
                </li>
                <li>
                    <span style="color:skyblue;font-size: 20px;float:left;margin-top: -2px;">{ <span style="color:black;font-size: 20px;">Express</span> }</span><el-progress :text-inside="true" :stroke-width="24" :percentage="progress" status="success" class="init"></el-progress>
                </li>
                <li>
                    <span style="color:skyblue;font-size: 20px;float:left;margin-top: -2px;">{ <span style="color:black;font-size: 20px;">NodeJS</span> }</span><el-progress :text-inside="true" :stroke-width="22" :percentage="progress" status="warning" class="init"></el-progress>
                </li>
                <li>
                    <span style="color:skyblue;font-size: 20px;float:left;margin-top: -2px;">{ <span style="color:black;font-size: 20px;">React</span> }</span><el-progress :text-inside="true" :stroke-width="20" :percentage="progress" status="exception" class="init"></el-progress>
                </li>
            </ul>
        </transition>
    </div>

    <poe/>
</div>
</template>


<script>
import poe from '@/components/poe.vue'
import share from '@/components/share.vue';
export default {
    name: 'ComHome',

    data() {
        return {
            progress: 0,
        };
    },

    mounted() {
        this.startProgress();
    },

    methods: {
        startProgress() {
            const interval = 100; 
            const totalDuration = 2000; 

            const timer = setInterval(() => {
                if (this.progress >= 50) {
                    clearInterval(timer);
                } else {
                    this.progress += interval / (totalDuration / interval);
                }
            }, interval);
        },
    },

    components:{
        poe,
        share
    }
};
</script>

<style lang="css" scoped>
#app{
    padding: 20px;
}

@keyframes initWith {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

.init-enter-active,
.init-leave-active {
    animation: initWith 0.5s linear;
}

.init-enter,
.init-leave-to {
    animation: initWith 0.5s linear;
}

ul{
    list-style: none;
}

.init{
    width: 300px;
    margin-top: 22px;
    margin-left: 100px;
}

.show{
    float: left;
    text-align: center;
}

.show h1{
    font-size: 30px;
    margin: 0;
}
.me{
    float: left;
}

.avator{
    border: 1px solid #000;
    margin-left: 80px;
    margin-top: 31px;
    margin-right: 60px;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(200deg);
    }

    100%{
        transform: rotate(0deg);
    }
}

.avator:hover{
    animation: rotate 0.6s linear reverse;
}

</style>
