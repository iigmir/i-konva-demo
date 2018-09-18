<template>
    <div>
        <v-stage ref="currentstage" v-bind:config="$store.state.canvas_measure" v-on:keyup="moves">
            <v-layer ref="imgs">
                <v-image v-bind:config="lion_conf"/>
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
export default {
    name: "proto5",
    data()
    {
        return {
            lion_image: new Image(100, 100)
        };
    },
    computed: {
        lion_conf()
        {
            return {
                x: 200,
                y: 40,
                image: this.lion_image,
                width: 200,
                height: 200,
            };
        },
    },
    created()
    {
        this.lion_image.src = "https://konvajs.github.io/assets/lion.png";
    },
    methods:
    {
        moves(event)
        {
            console.log(event);
        }
    }
}
</script>

<style lang="scss" scoped>
//
</style>
