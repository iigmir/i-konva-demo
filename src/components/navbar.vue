<template>
    <nav>
        <div>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/vuekonva">Vue Konva</router-link> |
            <router-link to="/ghouse">Hide and seek at Bob's house</router-link> |
            <router-link to="/simon">Simon game</router-link> |
        </div>
        <br />
        <div hidden>
            <router-link to="/proto1">Prototype1</router-link> |
        </div>
    </nav>
</template>

<script>
export default { name: "navbar" }
</script>


<style lang="scss">
nav
{
    padding: 30px;
    a
    {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active
        {
            color: #42b983;
        }
    }
}
</style>
