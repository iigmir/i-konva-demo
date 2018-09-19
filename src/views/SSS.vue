<template>
    <div>
        <v-stage class="cc" v-bind:config="$store.state.canvas_measure">
            <v-layer ref="layer">
                <v-wedge
                    v-for="(e,i) in wedges"
                    v-bind:key="i"
                    v-bind:config="e"
                    v-on:click="chose_text(e.data_ref)"
                    v-on:mouseover="cursor_change('pointer')"
                    v-on:mouseout="cursor_change('default')"
                />
                <v-ellipse
                    v-bind:config="btn_conf"
                    v-on:click="clear_text()"
                    v-on:mouseover="cursor_change('pointer')"
                    v-on:mouseout="cursor_change('default')"
                />
                <v-text
                    ref="btntxt_ref"
                    v-bind:config="btntxt_conf"
                    v-on:click="clear_text()"
                    v-on:mouseover="cursor_change('pointer')"
                    v-on:mouseout="cursor_change('default')"
                />
                <v-text ref="helptext_ref" v-bind:config="helptext" />
                <v-text ref="gametext_ref" v-bind:config="gametext" />
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
export default {
    name: "simon",
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
                y: 240,
                text: "You choosed: ",
                fontSize: 24,
                fontFamily: 'Calibri',
                fill: "black"
            },
            gametext: {
                x: 90,
                y: 200,
                text: "Let's choose: ",
                fontSize: 24,
                fontFamily: 'Calibri',
                fill: "black"
            },
            btntxt_conf:{
                x: 610,
                y: 100,
                text: "Clear",
                fontSize: 24,
                fontFamily: 'Calibri',
                fill: "black"
            },
            btn_conf:{
                x: 640,
                y: 120,
                radius: {
                    x: 100,
                    y: 50
                },
                fill: 'aqua',
            },
            game_text:[],
            correct_count:0
        }
    },
    methods:
    {
        chose_text( input )
        {
            this.render_help( input );
        },
        render_help( input )
        {
            let new_text = this.choosen_text + input + ", ";
            this.choosen_text = new_text;
            this.$refs.helptext_ref.getStage().setText( this.choosen_text );
            this.$refs.layer.getStage().draw();
        },
        clear_text()
        {
            this.choosen_text = "You choosed: ";
            this.$refs.helptext_ref.getStage().setText( this.choosen_text );
            this.$refs.layer.getStage().draw();
        },
        cursor_change( input )
        {
            document.body.style.cursor = input;
        }
    }
}
</script>
