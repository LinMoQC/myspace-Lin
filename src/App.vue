<template>
<div class="box">
    <div class="container">
        <el-container>
            <el-header>
                <div class="box1"></div>
                <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" style="float: right; margin-top:20px;">
                </el-switch>
                <h1 class="title"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-mianhuatang-01"></use>
                    </svg>LinMo<svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-mianhuatang-01"></use>
                    </svg></h1>
            </el-header>
            <el-container style="height: 100%; overflow: auto;">
                <el-aside width="140px">
                    <router-link to="/" class="a"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dangao-01"></use>
                        </svg>首页</router-link>
                    <router-link to="/about" class="a"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-niunai-01"></use>
                        </svg>关于我</router-link>
                    <router-link to="/music" class="a"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fantuan-01"></use>
                        </svg>我的音乐</router-link>
                    <router-link to="/study" class="a"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-tiantianquan-01"></use>
                        </svg>瀑布图库</router-link>
                    <router-link to="/login" class="a"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-kafei-01"></use>
                        </svg>后台管理</router-link>
                </el-aside>
                <el-main style="overflow: auto;">
                    <keep-alive>
                        <router-view class="bd"></router-view>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</div>
</template>

<script>
export default {
    name: 'ComApp',

    data() {
        return {
            value: false
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
.box {
    background: linear-gradient(135deg, hsl(170deg, 80%, 70%), hsl(190deg, 80%, 70%), hsl(250deg, 80%, 70%), hsl(320deg, 80%, 70%));
    background-size: 200% 200%;
    animation: gradient-move 5s linear 1s infinite alternate;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@keyframes gradient-move {
    0% {
        background-position: 0% 0%;
    }

    100% {
        background-position: 100% 100%;
    }
}

.container {
    width: 1000px;
    height: 600px;
    background-color: transparent;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(10000px);
    box-shadow: 20px 30px 20px 30px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    overflow: hidden;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-container {
    height: 100%;
    display: flex;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
    flex: 0 0 140px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    flex: 1;
    overflow: scroll;
    padding: 0px;
}

.a {
    top: 0;
    text-decoration: none;
    color: #333;
    font-size: 20px;
    display: block;
    width: 100%;
    height: 100px;
    padding-top: 30px;
    box-sizing: border-box;
    border-radius: 10px;
}

.title {
    margin-top: 0;
}

.icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-right: 5px;
}

.router-link-exact-active {
    background-color: paleturquoise;
    transition: 0.3s
}

.centered-links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.box1 {
    position: relative;
    padding: 40px 20px 20px;
    float: left;
    margin-top: -18px;
}

.box1::before {
    content: '';
    position: absolute;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #fc625d;
    width: 12px;
    height: 12px;
    left: 12px;
    -webkit-box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    z-index: 2;
}

::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent);
}

::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
}

</style>
