<template>
    <div class="nav" @scroll="handleScroll()">
        <a href="/"><img class="logo" alt="GhostCovid logo" src="../assets/GhostCovidLogo.png" /></a>
        <div class="nav2">
            <a href="/" class="text">Home</a>
            <router-link to="/training" class="text">Training</router-link>
            <router-link to="/erfahrungen" class="text">Erfahrungen</router-link>
            <router-link to="/statistik" class="text">Informationen</router-link>
            <router-link to="/" class="text">|</router-link>
            <router-link to="/profil"><i class="medium material-icons profilicon" style="color:#000">face</i></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    data() {
    return {
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0,
    };
  },
  methods: {
    handleScroll() {
        console.log("HHHHHHHHHHHHHHHHH")
    }
  }
}
</script>