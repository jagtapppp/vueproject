<template>
<HeaderPage />
<main>
    <router-view />
</main>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
// import HomeBoard from './components/HomeBoard.vue'

export default {
    name: 'App',
    components: {
        HeaderPage,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
