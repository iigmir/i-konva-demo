<template>
    <div>
        <v-stage v-bind:config="$store.state.canvas_measure">
            <v-layer ref="larry_layer">
                <v-image
                    ref="larry"
                    v-bind:config="larry_conf"
                    v-on:mouseover="cursor_change('pointer')"
                    v-on:mouseout="cursor_change('default')"
                    v-on:click="yougotme()"
                />
            </v-layer>
            <v-layer ref="yane">
                <v-text-path v-bind:config="tp_conf" />
                <v-rect v-bind:config="entou_conf"/>
                <!-- <v-shape v-bind:config="dhouse_conf"/> -->
                <v-shape v-bind:config="yane_conf"/>
            </v-layer>
            <v-layer ref="kabe">
                <v-rect v-bind:config="kabe_conf"/>
                <v-circle v-for="(e,i) in windows_conf" v-bind:key="i" v-bind:config="e"/>
                <v-wedge v-bind:config="door_window_conf" />
                <v-rect v-bind:config="door_conf"/>
            </v-layer>
        </v-stage>
        <p> Reference of <code>v-text-path</code>: <a target="_blank" href="https://hellopoetry.com/poem/2609113/house-of-broken-dreams/"> House of Broken Dreams </a> </p>
        <p> Source of Bob the yellow guy: <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Bob2002.svg"> Wikimedia Commons </a> </p>
        <!-- https://www.html5rocks.com/zh/tutorials/canvas/performance/ -->
    </div>
</template>

<script>
import Konva from "konva";

export default {
    name: "ghouse",
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
                fill: '#AA0012',
            },
            entou_conf: {
                x: 500, y: 10,
                width: 30, height: 100,
                fill: "grey",
            },
            kabe_conf: {
                x: 400,
                y: 100,
                width: 300,
                height: 100,
                fill: "#AACA82",
            },
            windows_conf:[{
                x:500,
                y:130,
                radius: 10,
                fill: 'aqua',
            },{
                x:600,
                y:130,
                radius: 10,
                fill: 'aqua',
            }],
            door_window_conf:{
                x: 550,
                y: 150,
                radius: 12,
                angle: 180,
                fill: 'white',
                rotation: 180,
                data_ref:"red"
            },
            door_conf: {
                x: 538,
                y: 150,
                width: 24,
                height: 50,
                fill: "white",
            },
            arc_conf: {
                x:200,
                y:100,
                innerRadius: 40,
                outerRadius: 80,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 5,
                angle: 60,
                rotationDeg: -120
            },
            tp_conf: {
                x: 10, y: 30,
                fill: '#333',
                fontSize: 16,
                fontFamily: 'Arial',
                text: "This two-story building made out of bricks is a place that shouldn't...",
                data: 'M5,12 C0,0 10,150 120,100 S350,120 390,50'
            },
            larry_animate: null,
            got_larry: false
        };
    },
    computed:
    {
        larry_conf()
        {
            let img = new Image();
            img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bob2002.svg/320px-Bob2002.svg.png";
            return {
                x: 500,
                y: 100,
                width: 128,
                height: 96,
                image: img
            };
        }
    },
    mounted()
    {
        this.start_hiding();
    },
    methods:
    {
        start_hiding()
        {
            const amplitude = 200;
            const period = 10000;
            const centerX = 500;
            // this.larry_animate
            this.larry_animate = new Konva.Animation( (frame) => {
                this.$refs.larry.getStage().setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);
            }, this.$refs.larry_layer.getStage());
            this.larry_animate.start();
        },
        cursor_change( input )
        {
            if( !this.got_larry )
            {
                document.body.style.cursor = input;
            }
        },
        yougotme()
        {
            if( !this.got_larry )
            {
                this.got_larry = true;
                alert("Bob 被抓到了");
                this.larry_animate.stop();
                document.body.style.cursor = "default";
            }
        }
    }
}
</script>
