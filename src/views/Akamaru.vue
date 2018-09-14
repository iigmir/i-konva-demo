<template>
    <div class="c-container">
        <div>
            <v-stage ref="stageref" class="red-circle" v-bind:config="kinit">
                <v-layer ref="rect1reflayer">
                    <v-rect ref="rect1ref" v-bind:config="rect1"></v-rect>
                </v-layer>
                <v-layer ref="circle1reflayer">
                    <v-circle ref="circle1ref" v-bind:config="circle2"></v-circle>
                    <v-circle ref="circle1ref" v-bind:config="circle1" v-on:dragend="c1detect"></v-circle>
                </v-layer>
            </v-stage>
            <p v-show="connected"> Connected </p>
        </div>
        <div>
            <p> To get shape, you need to <a href="https://vuejs.org/v2/api/#ref">assgin reference instance</a>,
            then use <a href="http://rafaelescala.com/vue-konva-doc/#api">getStage()</a> function.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "proto1",
    data() {
        return {
            kinit: {
                width: 100,
                height: 100,
            },
            circle1: {
                x: 100,
                y: 100,
                radius: 40,
                fill: "red",
                draggable: true
            },
            circle2: {
                x: 100,
                y: 100,
                radius: 60,
                fill: "yellow",
            },
            rect1: {
                x: 500,
                y: 100,
                width: 400,
                height: 250,
                stroke: 'black',
                strokeWidth: 2
            },
            connected: false
        };
    },
    mounted()
    {
        this.init_canvas();
    },
    methods: {
        init_canvas()
        {
            let canvas_width = document.querySelector(".c-container").clientWidth;
            this.kinit = {
                width: canvas_width,
                height: canvas_width / 3
            };
        },
        c1detect()
        {
            let kshape = this.$refs;
            let rech1_layer = kshape.rect1reflayer.getStage();
            // let stage_layer = kshape.stageref.getStage();
            let stage_layer_pos = kshape.stageref.getStage().getPointerPosition();
            let circ1_refer = kshape.circle1ref.getStage();
            let height_instage = stage_layer_pos.y > 0 && stage_layer_pos.y < document.querySelector(".c-container").clientWidth / 3;
            let width_instage = stage_layer_pos.x > 0 && stage_layer_pos.y < document.querySelector(".c-container").clientWidth;
            this.connected = rech1_layer.getIntersection( stage_layer_pos ) !== null;
            console.log( circ1_refer );
            if( !width_instage || !height_instage )
            {
                circ1_refer.x(100);
                circ1_refer.y(100);
                circ1_refer.draw();
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.c-container
{
    border: 1px black solid;
}
</style>
