<template>
    <div class="containerEnde" style="margin-top: -8%">
        <h1> {{anl}}</h1>
        <router-link to="/training/spiele"><button class="buttonEnd" style="justify-content: center">zurück</button></router-link><br>
    </div>
</template>

<script>
export default {
    name:'Anleitung',
    props: {
    anl: String
  },
}
</script>
<style scoped>
    .containerEnde {
        width: 90%;
        height: 80%;
        margin-left: 5%;
        background-color: rgba(148,62,52,0.95);
        vertical-align: middle;
        text-align: center;
        position: absolute;
        margin-top: -5%;
        font-weight: 1200;
        z-index: 999;
    }
</style>