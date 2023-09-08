<template>
<div id="app">
    <div class="logofont" style="text-align:center; font-size: 50px; margin-bottom: 20px; margin-right:-20px;">[LinMoの川]</div>
    <div class="popcontainer" id="fogforest" style="min-height:300px; padding:2px 6px 4px 6px; background-color: rgba(242, 242, 242,0.5); border-radius: 10px; 2px solid">
        <p></p>
        <center><strong>与 LinMo 对话中...</strong></center>
        <bot-ui>
            <center>
                <div style=" background-image: url(https://cdn.jsdelivr.net/gh/Fog-Forest/cdn@1.7/botui/loading.svg);background-repeat: no-repeat;background-size: 10em;background-position: center;height: 10em;"></div>
                <p>Loading</p>
            </center>
        </bot-ui>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import BotUI from 'botui/build/botui';
import Vue from 'vue/dist/vue.js';
export default {
    name: 'ChatBox',
    mounted() {
        this.init()
    },
    methods: {
        init: function () {
            const botui = new BotUI('fogforest', {
                vue: Vue
            });
            botui.message.bot({
                delay: 200,
                content: "你好，这里是 LinMo の 川👋"
            }).then(function () {
                return botui.message.bot({
                    delay: 1000,
                    content: "我是 林陌青川，你也可以叫我青川😄"
                })
            }).then(function () {
                return botui.message.bot({
                    delay: 1000,
                    content: "一个找不到对象的大学牲..."
                })
            }).then(function () {
                return botui.action.button({
                    delay: 1500,
                    action: [{
                            text: "然后呢？😃",
                            value: "and"
                        },
                        {
                            text: "少废话！😆",
                            value: "gg"
                        }
                    ]
                })
            }).then(function (res) {
                if (res.value == "and") {
                    other()
                }
                if (res.value == "gg") {
                    return botui.message.bot({
                        delay: 1500,
                        content: "![](https://view.amogu.cn/images/2020/08/30/sanlian.jpg)"
                    })
                }
            })

            var other = function () {
                botui.message.bot({
                    delay: 1500,
                    content: "😘"
                }).then(function () {
                    return botui.message.bot({
                        delay: 1500,
                        content: "是一个正在学习的全栈，虽然专业是通信，但并不影响我自学Web开发"
                    })
                }).then(function () {
                    return botui.message.bot({
                        delay: 1500,
                        content: "略懂前端和后端，勉强可以自己写出前后端交互项目，偶尔也练练算法(根本菜鸡一个)"
                    })
                }).then(function () {
                    return botui.message.bot({
                        delay: 1500,
                        content: "最擅长...编程???o(*ï¿£ï¸¶ï¿£*)o"
                    })
                }).then(function () {
                    return botui.message.bot({
                        delay: 1500,
                        content: "喜欢编程，热爱编程，目前正在计算机领域一路狂奔"
                    })
                }).then(function () {
                    return botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "为什么叫 林陌青川 呢？🤔",
                            value: "next"
                        }]
                    })
                }).then(function (res) {
                    return botui.message.bot({
                        delay: 1500,
                        content: "上大学时候决定改变自己，从新开始，意外想到了这个称号，外加朋友也喜欢叫我川子，所以一直沿用至今。"
                    })
                }).then(function () {
                    return botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "你有什么兴趣爱好？",
                            value: "next"
                        }]
                    })
                }).then(function (res) {
                    return botui.message.bot({
                        delay: 1500,
                        content: "编程，健身，足球~"
                    })
                }).then(function (res) {
                    return botui.message.bot({
                        delay: 1500,
                        content: "这就是我😊朝着自己的梦想一直努力吧！"
                    })
                }).then(function (res) {
                    return botui.message.bot({
                        delay: 1500,
                        content: "再见啦，祝你开心呦 ^_^"
                    })
                });
            }
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/botui.min.css';
@import '@/assets/css/botui-theme-default.css';

/* 这里可以添加其他组件特定的样式 */
#app{
    padding: 50px;
    box-sizing: border-box;
}

.botui-container {
    font-size: 14px;
    background-color: transparent;
    border-radius: 10px;
    font-family: "Open Sans",sans-serif;
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
