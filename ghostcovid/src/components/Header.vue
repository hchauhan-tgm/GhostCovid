<template>
    <div class="nav">
        <a href="/"><img class="logo" alt="GhostCovid logo" src="../assets/GhostCovidLogo.png" /></a>
        <div class="nav2">
            <a href="/" class="text">Home</a>
            <router-link to="/training" class="text">Training</router-link>
            <router-link to="/erfahrungen" class="text">Erfahrungen</router-link>
            <router-link to="/statistik" class="text">Informationen</router-link>
            <router-link to="/profil"><i class="medium material-icons">portrait</i></router-link>
        </div>
    </div>
</template>

<script scoped>
export default {
    name:'Header'
}
</script>

<style>
.nav{
    background-color: rgb(255, 200, 130);
    background-color: #c3c3fa;
    position: fixed;
    text-align: left;
    padding: 0.5%;
    width: 100%;
    margin-top: -103px;
    z-index: 99
    
}

.nav2{
    background-color: rgb(255, 200, 130);
    background-color: #c3c3fa;
    text-align: right;
    width: 100%;
}

.text{
    font-size: 175%;
    font-family: 'Candara', serif;
    font-variant: small-caps;
    padding-right: 3%;
}

a{
    color:#000;
    vertical-align: middle;
    
}

.logo{
    width: 150px;
    position: fixed;
    z-index: 100;
}

i{
    vertical-align: middle;
}
</style>
