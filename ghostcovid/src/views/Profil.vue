<template>
    <div class="profil">
      <Header />
      <Titel msg="Profil" />
      <div class="profbox">
        <!--NO USER-->
        <!--
        <router-link to="/login"><button class="waves-effect waves-light profbutton" type="submit" name="action">Schon einen Account? - Hier einloggen</button></router-link>
        <router-link to="/registrieren"><button class="waves-effect waves-light profbutton">Noch keinen Account? - Hier registrieren</button></router-link>
        -->

        <!--USER-->
        <h2>Hallo Vorname</h2>
        <router-link to="/login"><button class="waves-effect waves-light profbutton" type="submit" name="action">ausloggen<i class="material-icons right">exit_to_app</i></button></router-link>
      </div>
      <Footer />
    </div>
  
</template>

<script>
export default {
  name: "Profil",
  components: {
  },
};
</script>
