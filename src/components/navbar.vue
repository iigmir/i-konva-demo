<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/proto1">Prototype 1</router-link> |
        <router-link to="/proto2">Prototype 2</router-link> |
        <router-link to="/proto3">Prototype 3</router-link> |
        <router-link to="/proto4">Prototype 4</router-link> |
        <router-link to="/ghouse">Greatest house</router-link> |
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
