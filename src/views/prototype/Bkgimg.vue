<template>
    <div>
        <v-stage ref="currentstage" v-bind:config="$store.state.canvas_measure">
            <v-layer ref="imgs">
                <v-image v-bind:config="configImg"/>
                <v-image v-bind:config="logo_ing"/>
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
                    context.fillStrokeShape(this);
                },
            },
            background_image: new Image(100, 100),
            ant_ing: new Image(100, 100)
        };
    },
    computed: {
        configImg: function()
        {
            return {
                x: 200,
                y: 40,
                image: this.background_image,
                width: 200,
                height: 200,
            };
        },
        logo_ing: function()
        {
            return {
                x: 600,
                y: 40,
                image: this.ant_ing,
                width: 200,
                height: 200,
            };
        }
    },
    created()
    {
        // https://stackoverflow.com/questions/48588800/vue-js-konva-library-to-display-a-simple-image-what-am-i-missing
        this.background_image.src = "https://konvajs.github.io/assets/lion.png";
        this.ant_ing.src = "@/assets/apple.jpg";
    }
}
</script>
