<template>
<div id="app">
    <Waterfall />
</div>
</template>

  
<script>
import Waterfall from "@/components/waterfall";

export default {
    name: "App",
    components: {
        Waterfall
    }
};
</script>

  
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
</style>
