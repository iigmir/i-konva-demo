<template>
    <div id="app">
        <navbar />
        <router-view />
        <div class="issue" hidden>
            <p>未解決問題</p>
            <ol>
                <li> 重新繪製不成功：會同時出現兩個圖 </li>
                <li> 無法針對形狀使用本地圖像如：<code>@/assets/image.jpg</code> </li>
                <li> <del>How to draw half circle?</del> Use <code>v-wedge</code>, with <code>rotation: 180</code> </li>
                <li> Konva 無法監聽鍵盤事件 </li>
            </ol>
        </div>
    </div>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
    components: { navbar }
}
</script>


<style lang="scss">
#app
{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .issue * { text-align: left; }
}
</style>
