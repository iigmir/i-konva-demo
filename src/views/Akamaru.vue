<template>
    <div class="c-container">
        <v-stage class="red-circle" v-bind:config="kinit">
            <v-layer> <v-circle v-bind:config="circle1"></v-circle> </v-layer>
            <v-layer> <v-rect v-bind:config="rect1"></v-rect> </v-layer>
        </v-stage>
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
                y: 150,
                width: 400,
                height: 200,
                stroke: 'black',
                strokeWidth: 2
            }
        };
    },
    mounted()
    {
        let canvas_width = document.querySelector(".c-container").clientWidth;
        this.kinit = {
            width: canvas_width,
            height: canvas_width / 3
        };
    }
}
</script>

<style lang="scss" scoped>
.c-container
{
    border: 1px black solid;
}
</style>
