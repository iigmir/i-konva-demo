<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <v-stage class="red-circle" v-bind:config="$store.state.canvas_measure">
                <v-layer>
                    <v-circle v-bind:config="configCircle" />
                    <v-text ref="ktext" :config="{
                        x: 60, y: 50, fontSize: 108,
                        text: 'K',
                        fill: 'white'
                    }" />
                    <v-rect v-for="(e,i) in rect_conf" v-bind:key="i" v-bind:config="e" />
                    <v-star v-bind:config="{
                        x: 600,
                        y: 150,
                        numPoints: 3,
                        innerRadius: 70,
                        outerRadius: 70,
                        fill: 'red',
                        stroke: 'black',
                        strokeWidth: 4
                    }" />
                    <v-star v-bind:config="{
                        x: 600,
                        y: 150,
                        numPoints: 3,
                        innerRadius: 50,
                        outerRadius: 50,
                        fill: 'red',
                        stroke: 'white',
                        strokeWidth: 4
                    }" />
                    <v-star v-bind:config="{
                        x: 600,
                        y: 150,
                        numPoints: 3,
                        innerRadius: 48,
                        outerRadius: 48,
                        fill: 'white',
                        stroke: 'red',
                        strokeWidth: 4
                    }" />
                    <v-text ref="ktext" :config="{
                        x: 564, y: 116, fontSize: 72,
                        text: '萬',
                        fill: 'red'
                    }" />
                    <!-- <v-image v-bind:config="img_conf" /> -->
                </v-layer>
                <!-- <v-layer rel="samsung">
                    <v-ellipse v-bind:config="samsung.c" />
                    <v-text v-bind:config="samsung.t" />
                </v-layer> -->
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
            configKonva: {
                width: 200,
                height: 200,
            },
            configCircle: {
                x: 100,
                y: 100,
                radius: 70,
                fill: "green",
                stroke: "black",
                strokeWidth: 2
            },
            rect_conf: [{
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
            samsung: {
                c: {
                    x: 800,
                    y: 130,
                    radius: {
                        x: 180,
                        y: 60
                    },
                    fill: "#034EA2",
                },
                t: {
                    x: 625,
                    y: 97,
                    text: "SAMSUNG",
                    fontSize: 70,
                    fill: "white"
                }
            },
            star_conf: {
                x: 600,
                y: 150,
                numPoints: 3,
                innerRadius: 70,
                outerRadius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4
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
