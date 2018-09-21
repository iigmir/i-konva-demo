<template>
    <div class="c-container">
        <div>
            <v-stage ref="stageref" class="red-circle" v-bind:config="$store.state.canvas_measure">
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
        <div class="proto2">
            <v-stage ref="currentstage" v-bind:config="{ width: 1200, height: 400 }">
                <v-layer ref="ajaxtable">
                    <v-shape v-bind:config="tableset"/>
                </v-layer>
                <v-layer>
                    <!-- Circle -->
                    <v-circle
                    v-for="(e,i) in bets"
                    v-bind:key="i"
                    v-bind:config="{
                        x: got_pos(i),
                        y: 100,
                        radius: 60,
                        fill: 'blue'
                    }" />
                </v-layer>
                <v-layer>
                    <v-circle
                    v-for="(e,i) in bets"
                    v-bind:key="i"
                    v-bind:config="{
                        x: got_pos(i),
                        y: 100,
                        radius: 40,
                        fill: e.colour,
                        draggable: true
                    }"
                    v-bind:ref="e.ref"
                    v-bind:data-money="e.money"
                    v-bind:data-idx="i"
                    v-on:dragend="reset_circle(e.ref)" />
                </v-layer>
            </v-stage>
            <p> Drag to table, then reset to original pos. </p>
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
            connected: false,
            table: {
                width: 400,
                height: 200
            },
            tableset: {
                sceneFunc: function(context) {
                    context.beginPath();
                    context.moveTo(200, 50);
                    context.lineTo(300, 50);
                    context.lineTo(400, 200);
                    context.lineTo(100, 200);
                    context.closePath();

                    // special Konva.js method
                    context.fillStrokeShape(this);
                },
                fill: '#00D2FF',
            },
            bets: [
                { money: 5,  colour:"red",    ref:"bet5ref" },
                { money: 15, colour:"green",  ref:"bet15ref" },
                { money: 25, colour:"aqua",   ref:"bet25ref" },
                { money: 35, colour:"yellow", ref:"bet35ref" },
                { money: 45, colour:"pink",   ref:"bet45ref" }
            ]
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
            if( !width_instage || !height_instage )
            {
                circ1_refer.x(100);
                circ1_refer.y(100);
                circ1_refer.draw();
            }
            
        },
        got_pos(pivot)
        {
            return 500 + ( pivot * 130 );
        },
        reset_circle( input_ref )
        {
            let dom = this.$refs[input_ref][0].getStage();
            let dom_data = dom.VueComponent.$el.dataset;
            let current_pointer_positison = this.$refs.currentstage.getStage().getPointerPosition();
            if( this.$refs.ajaxtable.getStage().getIntersection( current_pointer_positison ) !== null ) {
                alert( dom_data.money + " dollar was sent" );
            }
            dom.x( this.got_pos( parseInt( dom_data.idx , 10 ) ) );
            dom.y( 100 );
            dom.draw();
            this.$refs.rect1reflayer.getStage().draw();
        }
    }
}
</script>

<style lang="scss" scoped>
.c-container
{
    border: 1px black solid;
}

.proto2
{
    border-top: 1px black solid;
}

</style>
