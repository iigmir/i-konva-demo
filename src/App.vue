<template>
    <div id="app">
        <navbar />
        <router-view />
        <p>未解決問題</p>
        <ol>
            <li> 重新繪製不成功：會同時出現兩個圖 </li>
        </ol>
    </div>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
    components: { navbar }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
