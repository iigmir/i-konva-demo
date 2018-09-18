<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <v-stage class="red-circle" v-bind:config="$store.state.canvas_measure">
                <v-layer>
                    <v-circle v-bind:config="configCircle"></v-circle>
                    <v-rect v-for="(e,i) in rect_conf" v-bind:key="i" v-bind:config="e" />
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
            configKonva: {
                width: 200,
                height: 200,
            },
            configCircle: {
                x: 100,
                y: 100,
                radius: 70,
                fill: "aqua",
                stroke: "black",
                strokeWidth: 4
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
            }]
        };
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
