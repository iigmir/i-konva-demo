<template>
    <div>
        <v-stage ref="currentstage" v-bind:config="{ width: 1200, height: 400 }">
            <v-layer ref="ajaxtable">
                <v-shape v-bind:config="tableset"/>
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
export default {
    name: "proto3",
    data()
    {
        return {
            tableset: {
                sceneFunc: function(context) {
                    context.beginPath();
                    context.moveTo(500, 50);
                    context.lineTo(800, 50);
                    context.lineTo(1000, 200);
                    context.lineTo(300, 200);
                    context.closePath();

                    // special Konva.js method
                    context.fillStrokeShape(this);
                },
                fillPatternImage: "@/assets/apple.jpg"
            },
        };
    },
    methods:
    {
    }
}
</script>
