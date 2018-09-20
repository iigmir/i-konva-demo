<template>
    <div class="about">
        <h1> About Canvas </h1>
        <dl class="gross">
            <dt> <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Canvas">Canvas</a> </dt>
            <dd>
                <!-- 一張畫布，畫布圖像可以使用 JavaScript 產生。 -->
                <v-stage ref="whatiscanvas" v-bind:config="{ width:1000, height:60 }">
                    <v-layer ref="imgs">
                        <v-text ref="text" :config="{
                            x: 10, y: 10, fontSize: 24,
                            text: '一張畫布，畫布圖像可以使用 JavaScript 產生。',
                            fill: 'black'
                        }" />
                    </v-layer>
                </v-stage>
                <ul>
                    <li> HTML5 的東西，但<a target="_blank" href="https://caniuse.com/#feat=canvas">主流瀏覽器都有支援</a>。 </li>
                    <li> <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">MDN</a> </li>
                </ul>
            </dd>
            <dt> <a target="_blank" href="https://konvajs.github.io">Konva</a> </dt>
            <dd>
                函式庫：Konva 之於 Canvas，等於 jQuery 之於 JavaScript.
                <ul>
                    <li>
                        通常需要一個 Stage，裡面包著一個 Layer。接著才能包覆形狀元件。 <br />
                        Layer 是圖層，用來組織一組形狀；而 Stage 則是用來組織數個 Layer。
                    </li>
                    <li>
                        函式庫本身<a target="_blank" href="https://konvajs.github.io/api/Konva.html">內建各種形狀、圖片、文字</a>等元件，
                        元件還有各種檢測公式。
                    </li>
                </ul>
            </dd>
            <dt> <a target="_blank" href="https://github.com/konvajs/vue-konva">vue-konva</a> </dt>
            <dd> Vue + Konva == vue-konva </dd>
        </dl>
    </div>
</template>

<style lang="scss" scoped>
.about
{
    text-align: left;
    .gross
    {
        margin-left: 1rem;
    }
}
</style>