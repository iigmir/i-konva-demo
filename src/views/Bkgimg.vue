<template>
    <div>
        <v-stage ref="currentstage" v-bind:config="{ width: 1200, height: 400 }">
            <!-- <v-layer ref="shapes">
                <v-shape v-bind:config="tableset"/>
            </v-layer> -->
            <v-layer ref="imgs">
                <v-image v-bind:config="configImg"/>
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
            },
            background_image: new Image(100, 100),
        };
    },
    computed: {
        configImg: function()
        {
            return {
                x: 20,
                y: 20,
                image: this.background_image,
                width: 200,
                height: 200,
            };
        }
    },
    mounted()
    {
        this.background_image.src = "https://konvajs.github.io/assets/lion.png";
        // this.tableset.fillPatternImage = new Image(100, 100);
        // this.tableset.fillPatternImage.src = "@/assets/apple.jpg";
    }
}
</script>
