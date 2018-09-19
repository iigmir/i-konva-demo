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
                    v-on:click="clear_choosen_text()"
                    v-on:mouseover="cursor_change('pointer')"
                    v-on:mouseout="cursor_change('default')"
                />
                <v-text
                    ref="btntxt_ref"
                    v-bind:config="btntxt_conf"
                    v-on:click="clear_choosen_text()"
                    v-on:mouseover="cursor_change('pointer')"
                    v-on:mouseout="cursor_change('default')"
                />
                <v-text ref="questiontext_ref" v-bind:config="questiontext_conf" />
                <v-text ref="helptext_ref" v-bind:config="helptext" />
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
            questiontext_conf: {
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
            questiontext_array:[],
            questiontext_correct_count:0
        }
    },
    mounted()
    {
        this.add_question_ingame();
    },
    methods:
    {
        chose_text( input )
        {
            this.render_helptext( input );
        },
        render_helptext( input )
        {
            let new_text = this.choosen_text + input + ", ";
            this.choosen_text = new_text;
            this.render_text({ refered_element: "helptext_ref" , input_text: this.choosen_text });
        },
        clear_text()
        {
            this.clear_choosen_text();
        },
        clear_choosen_text()
        {
            this.choosen_text = "You choosed: ";
            this.render_text({ refered_element: "helptext_ref" , input_text: "You choosed: " });
        },
        render_text({ refered_element, input_text })
        {
            let refes = this.$refs[refered_element];
            refes.getStage().setText( input_text );
            this.$refs.layer.getStage().draw();
        },
        cursor_change( input )
        {
            document.body.style.cursor = input;
        },
        add_question_ingame()
        {
            let colour_array_rand = ( max ) => Math.floor( Math.random() * Math.floor( max ) );
            let colour_array = [];
            let random_txt = "";
            this.wedges.map( x => colour_array.push( x.data_ref ) );
            random_txt = colour_array[ colour_array_rand( colour_array.length ) ];
            this.questiontext_array.push( random_txt );
            this.render_questiontext();
        },
        render_questiontext()
        {
            let display_text = "Let's choose: ";
            this.questiontext_array.map( x => display_text += x );
            this.$refs.questiontext_ref.getStage().setText( display_text );
            this.$refs.layer.getStage().draw();
        }
    }
}
</script>
