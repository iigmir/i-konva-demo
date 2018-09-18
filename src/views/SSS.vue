<template>
    <div>
        <v-stage class="cc" v-bind:config="$store.state.canvas_measure">
            <v-layer ref="layer">
                <v-wedge
                    v-for="(e,i) in wedges"
                    v-bind:key="i"
                    v-bind:config="e"
                    v-on:click="chose_text(e.data_ref)"
                />
                <v-text ref="helptext_ref" v-bind:config="helptext" />
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
export default {
    name:"SSS",
    data()
    {
        return {
            wedges:[{
                x: 120,
                y: 120,
                radius: 80,
                angle: 80,
                fill: 'rgba(255,0,0,1)',
                stroke: 'black',
                strokeWidth: 1,
                rotation: -120,
                data_ref:"red"
            },{
                x: 240,
                y: 120,
                radius: 80,
                angle: 80,
                fill: 'rgba(0,255,0,1)',
                stroke: 'black',
                strokeWidth: 1,
                rotation: -120,
                data_ref:"green"
            },{
                x: 360,
                y: 120,
                radius: 80,
                angle: 80,
                fill: 'rgba(0,0,255,1)',
                stroke: 'black',
                strokeWidth: 1,
                rotation: -120,
                data_ref:"blue"
            },{
                x: 480,
                y: 120,
                radius: 80,
                angle: 80,
                fill: 'rgba(255,255,0,1)',
                stroke: 'black',
                strokeWidth: 1,
                rotation: -120,
                data_ref:"yellow"
            }],
            choosen_text: "You choosed: ",
            helptext: {
                x: 90,
                y: 200,
                text: "You choosed: ",
                fontSize: 30,
                fontFamily: 'Calibri',
                fill: "black"
            }
        }
    },
    methods:
    {
        chose_text( input )
        {
            let new_text = this.choosen_text + input + ", ";
            this.choosen_text = new_text;
            this.$refs.helptext_ref.getStage().setText( this.choosen_text );
            this.$refs.layer.getStage().draw();
        }
    }
}
</script>
