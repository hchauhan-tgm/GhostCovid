<template>
    <div class="profil">
      <Header />
      <Titel msg="Profil" />
      
      <!--NO USER-->
      <!--
      <router-link to="/login" class="text"><button class="btn waves-effect waves-light btn-large profbutton" type="submit" name="action">Schon einen Account? - Hier einloggen</button></router-link>
      <router-link to="/registrieren" class="text"><button class="waves-effect waves-light btn btn-large profbutton">Noch keinen Account? - Hier registrieren</button></router-link>
      -->

      <!--USER-->
      <h2>Hallo Vorname</h2>
      <router-link to="/login" class="text"><button class="btn waves-effect waves-light profbutton" type="submit" name="action">ausloggen<i class="material-icons right">exit_to_app</i></button></router-link>
      
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
