<template>
    <div class="c-container">
        <v-stage ref="stageref" class="red-circle" v-bind:config="kinit">
            <v-layer ref="rect1reflayer">
                <v-rect ref="rect1ref" v-bind:config="rect1"></v-rect>
            </v-layer>
            <v-layer ref="circle1reflayer">
                <v-circle ref="circle1ref" v-bind:config="circle1" v-on:dragend="c1detect"></v-circle>
            </v-layer>
        </v-stage>
        <p v-show="connected"> Connected </p>
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
                radius: 70,
                fill: "red",
                draggable: true
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
            let stage_layer = kshape.stageref.getStage();
            // let rect1_pos = { x:kshape.rect1ref.getStage().x(), y:kshape.rect1ref.getStage().y() };
            // let stage = this.$refs.stageref.getStage();
            console.log( stage_layer.getPointerPosition() );
            console.log( rech1_layer.getIntersection( stage_layer.getPointerPosition() ) );
            this.connected = rech1_layer.getIntersection( stage_layer.getPointerPosition() ) !== null;
            // rech1_layer.getIntersection( stage_layer.getPointerPosition() )
            // stage.getPointerPosition()
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
