<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <v-stage class="red-circle" v-bind:config="configKonva">
                <v-layer>
                    <v-circle v-bind:config="configCircle"></v-circle>
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
                fill: "red",
                stroke: "black",
                strokeWidth: 4
            }
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
