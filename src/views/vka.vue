<template>
    <div class="vka">
        <h1> Vue-Konva </h1>
        <ul>
            <li> 前面說過 Vue + Konva == vue-konva  </li>
            <li>
                你可以使用 HTML 的語法，來撰寫 Konva 的元件：
                <pre>
&lt;v-rect v-bind:config="{
    //
}" /&gt;
                </pre>
            </li>
            <li>
                上例的成果如下：
                <v-stage v-bind:config="{ width:100, height:100 }">
                    <v-layer>
                        <v-rect v-bind:config="{
                            width: 100,
                            height: 100,
                            fill: 'black',
                        }" />
                        <v-circle v-bind:config="{
                            x:50,
                            y:50,
                            radius: 40,
                            fill: 'navy',
                            stroke: 'white',
                            strokeWidth: 4
                        }" />
                        <v-star v-bind:config="{
                            x: 50,
                            y: 50,
                            numPoints: 5,
                            innerRadius: 10,
                            outerRadius: 30,
                            fill: 'red',
                        }" />
                    </v-layer>
                </v-stage>
            </li>
            <li> 形狀支援還不夠完整，但也足夠撰寫一些基本形狀：
                <ul>
                    <li>v-rect: 四方形</li>
                    <li>v-circle: 圓形</li>
                    <li>v-ellipse: 扇形</li>
                    <li>v-line: 線</li>
                    <li>v-image: 圖片</li>
                    <li>v-text: 文字</li>
                    <li>v-text-path: 裝飾文字</li>
                    <li>v-star: 星形</li>
                    <li>v-regular-polygon: 多邊形</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "vuekonva"
};
</script>

<style lang="scss" scoped>
.vka li
{
    text-align: left;
}
</style>
