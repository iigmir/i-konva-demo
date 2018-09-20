<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <v-stage class="red-circle" v-bind:config="$store.state.canvas_measure">
                <v-layer>
                    <v-group ref="konvalogo">
                        <v-circle v-bind:config="configCircle" />
                        <v-text ref="ktext" v-bind:config="{
                            x: 900, y: 50, fontSize: 108,
                            text: 'K',
                            fill: 'white'
                        }" />
                    </v-group>
                    <v-rect v-for="(e,i) in rect_conf" v-bind:key="i" v-bind:config="e" />
                    <v-group ref="kikkumanlogo">
                        <v-star v-for="(e,i) in kiuuman_kado" v-bind:key="i" v-bind:config="e" />
                        <v-text ref="ktext" v-bind:config="kiuuman_text" />
                    </v-group>
                    <v-group ref="vuelogo">
                        <v-regular-polygon
                            v-for="(t,i) in vue_triangle"
                            v-bind:key="i"
                            v-bind:config="t"
                        />
                    </v-group>
                    <!-- <v-line v-bind:config="{
                        x: 100,
                        y: 50,
                        points: [
                            73, 70,
                            340, 23,
                            450, 60,
                            500, 20,
                            690, 120
                        ],
                        stroke: 'red',
                        tension: 1
                    }" /> -->
                </v-layer>
            </v-stage>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            configCircle: {
                x: 940,
                y: 100,
                radius: 70,
                fill: "green",
                stroke: "black",
                strokeWidth: 2
            },
            rect_conf:
            [{
                x: 300,
                y: 50,
                width: 100,
                height: 100,
                fill: "blue",
                rotation: 45,
                opacity: 0.9
            },{
                x: 350,
                y: 50,
                width: 100,
                height: 100,
                fill: "red",
                rotation: 45,
                opacity: 0.8
            }],
            vue_triangle:
            [{
                x: 780,
                y: 120,
                sides: 3,
                radius: 80,
                rotation: 60,
                fill: 'green',
            },{
                x: 780,
                y: 105,
                sides: 3,
                radius: 50,
                rotation: 60,
                fill: 'black',
            },{
                x: 780,
                y: 90,
                sides: 3,
                radius: 20,
                rotation: 60,
                fill: 'white',
            }],
            kiuuman_kado:
            [{
                x: 600,
                y: 150,
                numPoints: 3,
                innerRadius: 70,
                outerRadius: 70,
                fill: 'red',
            },{
                x: 600,
                y: 150,
                numPoints: 3,
                innerRadius: 50,
                outerRadius: 50,
                fill: 'red',
                stroke: 'white',
                strokeWidth: 4
            },{
                x: 600,
                y: 150,
                numPoints: 3,
                innerRadius: 48,
                outerRadius: 48,
                fill: 'white',
                stroke: 'red',
                strokeWidth: 4
            }],
            kiuuman_text:{
                x: 564,
                y: 116,
                fontSize: 72,
                text: '萬',
                fill: 'red'
            }
        };
    },
    computed:
    {
        img_conf()
        {
            let img = new Image();
            img.src = "../assets/logo.png";
            console.log(img);
            return { x: 600, y: 120, image: img };
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.red-circle
{
    margin: 0 auto;
}
</style>
