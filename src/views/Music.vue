<template>
<div id="app">
    <h1><span style="color:pink;font-size: 40px;">{ <span style="color:black;font-size: 30px;">MUSIC</span> }</span></h1>
    <hr style="margin-left: 20px;margin-right: 20px;">
    <keep-alive>
        <musicBo/>
    </keep-alive>
</div>
</template>

<script>
import musicBo from '@/components/musicBo.vue';
export default {
    name: 'ComMusic',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },

    components: {
        musicBo,
    }
};
</script>

<style lang="css" scoped>
hr {
    border: 1px solid;
}
</style>
