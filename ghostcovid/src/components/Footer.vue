<template>
    <div class="foo">
        © Jasmin Wagner | <router-link to="/impressum" style="color: #a35152">Impressum</router-link>
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
.foo{
    background-color: rgb(255, 200, 130);
    background-color: #c3c3fa;
    color: #000;
    bottom: 0px;
    position: fixed;
    text-align: center;
    padding: 0.25%;
    width: 100%;
    font-size: 100%;
    font-family: 'Candara', serif;
    font-variant: small-caps;
    z-index: 99;
}
</style>