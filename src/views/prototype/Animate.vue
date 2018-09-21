<template>
    <div>
        <v-stage ref="stage" :config="{ width: 400, height: 200 }">
            <v-layer ref="layer">
                <v-regular-polygon ref="hexagon" :config="{
                    x: 200,
                    y: 100,
                    sides: 6,
                    radius: 20,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 4
                }" />
            </v-layer>
        </v-stage>
        <v-stage ref="stage2" :config="{ width: 300, height: 200 }">
            <v-layer ref="layer2">
                <v-regular-polygon
                    @mousemove="handleMouseMove"
                    @mouseout="handleMouseOut"
                    :config="{
                        x: 80,
                        y: 120,
                        sides: 3,
                        radius: 80,
                        fill: '#00D2FF',
                        stroke: 'black',
                        strokeWidth: 4
                    }"
                />
                <v-text ref="text" :config="{
                    x: 10,
                    y: 10,
                    fontFamily: 'Calibri',
                    fontSize: 24,
                    text: '',
                    fill: 'black'
                }" />
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
import Konva from "konva";

export default {
    name: "proto4",
    mounted()
    {
        const vm = this;
        const amplitude = 100;
        const period = 5000;
        // in ms
        const centerX = vm.$refs.stage.getStage().getWidth() / 2;
        const anim = new Konva.Animation(function (frame) {
            vm.$refs.hexagon.getStage().setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);
        }, vm.$refs.layer.getStage());
        anim.start();
    },
    methods: {
        writeMessage(message) {
            this.$refs.text.getStage().setText(message);
            this.$refs.layer2.getStage().draw();
        },
        handleMouseOut() {
            this.writeMessage('Mouseout triangle');
        },
        handleMouseMove() {
            const mousePos = this.$refs.stage2.getStage().getPointerPosition();
            const x = mousePos.x - 190;
            const y = mousePos.y - 40;
            this.writeMessage('x: ' + x + ', y: ' + y);
        }
    }
}
</script>
