<template>
<div id="app">
    <div class="poem-wrap">
        <div class="poem-border poem-left"></div>
        <div class="poem-border poem-right"></div>
        <h1>念两句诗</h1>
        <p id="poem">挑选中...</p>
        <p id="info"></p>
    </div>
</div>
</template>

<script>
export default {
    name: 'CxPoe',

    data() {
        return {

        };
    },

    mounted() {
        this.get_poem('#poem', '#info');
    },

    methods: {
        get_poem(poem_ele, info_ele) {
            var poem = document.querySelector(poem_ele);
            var info = document.querySelector(info_ele);
            var xhr = new XMLHttpRequest();
            xhr.open('get', 'https://v2.jinrishici.com/one.json');
            xhr.withCredentials = true;
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    var data = JSON.parse(xhr.responseText);
                    poem.innerHTML = data.data.content;
                    info.innerHTML = '【' + data.data.origin.dynasty + '】' + data.data.origin.author + '《' + data.data.origin.title + '》';
                }
            };
            xhr.send();
        }

    },
};
</script>

<style lang="css" scoped>
#app {
    float: left;
    margin-top: -45px;
}

/*诗*/
.poem-wrap {
    position: relative;
    width: 730px;
    max-width: 80%;
    border: 2px solid #797979;
    border-top: none;
    text-align: center;
    margin: 80px auto;
}

.poem-wrap h1 {
    position: relative;
    margin-top: -20px;
    display: inline-block;
    letter-spacing: 4px;
    color: #797979
}

.poem-wrap p {
    width: 70%;
    margin: auto;
    line-height: 30px;
    color: #797979;
}

.poem-wrap p#poem {
    font-size: 25px;
}

.poem-wrap p#info {
    font-size: 15px;
    margin: 15px auto;
}

.poem-border {
    position: absolute;
    height: 2px;
    width: 27%;
    background-color: #797979;
}

.poem-right {
    right: 0;
}

.poem-left {
    left: 0;
}

@media (max-width: 685px) {
    .poem-border {
        width: 18%;
    }
}

@media (max-width: 500px) {
    .poem-wrap {
        margin-top: 60px;
        margin-bottom: 20px;
        border-top: 2px solid #797979;
    }

    .poem-wrap h1 {
        margin: 20px 6px;
    }

    .poem-border {
        display: none;
    }
}
</style>
