<template>
    <div class="proto2">
        <v-stage v-bind:config="{ width: 1200, height: 400 }">
            <v-layer>
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
</template>

<script>
export default {
    name: "proto2",
    data()
    {
        return {
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
    methods:
    {
        got_pos(pivot)
        {
            return 500 + ( pivot * 130 );
        },
        reset_circle( input_ref )
        {
            let dom = this.$refs[input_ref][0].getStage();
            let dom_data = dom.VueComponent.$el.dataset;
            dom.x( this.got_pos( parseInt( dom_data.idx , 10 ) ) );
            dom.y( 100 );
            dom.draw();
        }
    }
}
</script>

<style lang="scss" scoped>
.proto2
{
    border: 1px red solid;
}
</style>

