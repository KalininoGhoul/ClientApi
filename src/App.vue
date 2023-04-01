<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    components: {

    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.error {
    margin-top: 15px;
    background-color: #fff0f0;
    color: red;
    display: inline-block;
    padding: .5em;
    border-radius: 10px;
    border: 1px solid #c07c7c;
}
</style>
