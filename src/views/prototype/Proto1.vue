<template>
    <div>
        <p>PPPP</p>
        <v-stage ref="currentstage" v-bind:config="$store.state.canvas_measure">
            <v-layer>
                <v-rect
                    v-for="(item, index) in rects"
                    v-bind:key="index"
                    v-bind:config="item"
                    v-on="rect_events" />
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
export default {
    name: "proto1",
    data()
    {
        return {
        };
    },
    computed: {
        rects()
        {
            let foo = [];
            let colours = ["red", "orange", "yellow", "green", "blue", "purple"];
            for(var i = 0; i < 6; i++)
            {
                foo.push({
                    x: i * 30 + 50,
                    y: i * 18 + 40,
                    fill: colours[i],
                    stroke: "black",
                    strokeWidth: 4,
                    draggable: true,
                    width: 100,
                    height: 50
                });
            }
            return foo;
        },
        rect_events()
        {
            return {
                mouseover: () => document.body.style.cursor = "pointer",
                mouseout: () => document.body.style.cursor = "default",
            };
        }
    },
    created()
    {
    }
}
</script>
