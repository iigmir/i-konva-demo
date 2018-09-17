<template>
    <div>
        <v-stage v-bind:config="{ width: 1200, height: 400 }">
            <v-layer ref="yane">
                <!-- <v-shape v-bind:config="dhouse_conf"/> -->
                <v-shape v-bind:config="yane_conf"/>
            </v-layer>
            <v-layer ref="kabe">
                <v-rect v-bind:config="kabe_conf"/>
            </v-layer>
            <v-layer ref="tsuchi"></v-layer>
        </v-stage>
        <!-- https://www.html5rocks.com/zh/tutorials/canvas/performance/ -->
    </div>
</template>

<script>
export default {
    name: "proto3",
    data()
    {
        return {
            dhouse_conf: {
                sceneFunc: function(context) {
                    context.beginPath();
                    context.moveTo(150, 50);
                    context.lineTo(300, 50);
                    context.quadraticCurveTo(220, 100, 300, 170);
                    context.lineTo(150, 170);
                    context.quadraticCurveTo(220, 100, 150, 50);
                    // 320, 170
                    context.closePath();

                    // special Konva.js method
                    context.fillStrokeShape(this);
                },
                fill: '#FF23AA',
                stroke: 'black',
                strokeWidth: 1
            },
            yane_conf: {
                sceneFunc: function(context) {
                    context.beginPath();
                    context.moveTo(500, 50);
                    context.lineTo(600, 50);
                    context.lineTo(700, 100);
                    context.lineTo(400, 100);
                    context.closePath();

                    // special Konva.js method
                    context.fillStrokeShape(this);
                },
                fill: '#AAD200',
            },
            kabe_conf: {
                x: 400,
                y: 100,
                width: 300,
                height: 100,
                fill: "#AA0012",
            }
        };
    },
    computed: {
    },
    mounted()
    {
    }
}
</script>
