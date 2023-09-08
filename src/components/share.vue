<template>
<div>
    <p style="text-align: center;word-spacing: 20px;"> <a href="tencent://message/?uin=2896311434" class="fa fa-qq" target="_blank" style="color: #088de7"></a> <a href="https://github.com/Fog-Forest/" class="fa fa-github-alt" target="_blank" style="color: #333"></a> <a onclick="mail_me()" class="fa fa-envelope" style="color: #ffbf00"></a></p>
</div>
</template>

<script>
export default {
    name: 'CxShare',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>

img {
    width: 60px;
}

.img {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2),
        -18px -18px 30px rgba(255, 255, 255, 1);
    transition: all 0.2s ease-in-out;
}

.img:hover {
    cursor: pointer;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2),
        0 0 0 rgba(255, 255, 255, 0.8),
        inset 18px 18px 30px rgba(0, 0, 0, 0.1),
        inset -18px -18px 30px rgba(255, 255, 255, 1);
}

.img:hover img {
    width: 58px;
}
</style>
