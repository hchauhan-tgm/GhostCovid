<template>
    <div class="nav">
        <img class="logo" alt="['goostcohvit'] logo" src="../assets/GhostCovidLogo.png" />
        <div class="nav22">
            <b class="text2">{{msghs}}</b>
            <b class="text2">||</b>
            <router-link to="/training/spiele" class="text">Zurück</router-link>
            <b class="text2">|</b>
            <router-link to=link class="text">Neustart</router-link>
            <b class="text2">|</b>
            <b class="text2">Anleitung</b>
        </div>
    </div>
</template>

<script>
export default {
    name:'Headerspiele',
    props: {
    msghs: String,
    link: String,
  },
}
</script>