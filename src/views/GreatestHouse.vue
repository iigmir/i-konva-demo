<template>
    <div>
        <v-stage v-bind:config="$store.state.canvas_measure">
            <v-layer ref="yane">
                <v-text-path v-bind:config="tp_conf" />
                <!-- <v-shape v-bind:config="dhouse_conf"/> -->
                <v-shape v-bind:config="yane_conf"/>
            </v-layer>
            <v-layer ref="kabe">
                <v-rect v-bind:config="kabe_conf"/>
                <v-circle v-for="(e,i) in windows_conf" v-bind:key="i" v-bind:config="e"/>
                <v-wedge v-bind:config="door_window_conf" />
                <v-rect v-bind:config="door_conf"/>
            </v-layer>
            <v-layer ref="tsuchi"></v-layer>
        </v-stage>
        <!-- https://www.html5rocks.com/zh/tutorials/canvas/performance/ -->
    </div>
</template>

<script>
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
                fill: '#AAD200',
            },
            kabe_conf: {
                x: 400,
                y: 100,
                width: 300,
                height: 100,
                fill: "#AA0012",
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
            arc_conf:{
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
            tp_conf:{
                x: 0,
                y: 50,
                fill: '#333',
                fontSize: 16,
                fontFamily: 'Arial',
                text: 'All the world\'s a stage, and all the men and women merely players.',
                data: 'M10,10 C0,0 10,150 100,100 S300,150 400,50'
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
