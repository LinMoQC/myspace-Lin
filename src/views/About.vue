<template>
<div id="app">
    <chat/>
</div>
</template>

<script>
import chat from '@/components/chat.vue';
export default {
    components: {
        chat
    }
};
</script>

<style lang="css" scoped>
#app {
    width: 100%;
    height: 100%;
    background-color: pink;
    overflow: auto;
}
</style>
