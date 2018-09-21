<template>
    <div>
        <p> <a target="_blank" href="http://onepiece.wikia.com/wiki/Enies_Lobby">エニエスロビー</a> </p>
        <v-stage ref="currentstage" v-bind:config="{ width:960, height:540 }">
            <v-layer ref="flag">
            </v-layer>
            <v-layer ref="upper">
            </v-layer>
            <v-layer ref="lower">
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
export default {
    name:"enies"
};
</script>
