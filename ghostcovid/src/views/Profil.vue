<template>
  <div class="profil" ref="startprofill">
    <Header />
    <Titel msg="Profil" />
    <div class="obentr">
      <!--NO USER-->

      <router-link to="/login"
        ><button
          class="waves-effect waves-light profbutton"
          type="submit"
          name="action"
        >
          Schon einen Account? - Hier einloggen
        </button></router-link
      >
      <br /><br />
      <router-link to="/registrieren"
        ><button class="waves-effect waves-light profbutton">
          Noch keinen Account? - Hier registrieren
        </button></router-link
      >

      <!--USER-->
      <!--
        <h2>Hallo Vorname</h2>
        <router-link to="/login"><button class="waves-effect waves-light profbutton" type="submit" name="action">ausloggen<i class="material-icons right">exit_to_app</i></button></router-link>
        -->
    </div>

    <!-- roter Balken unter Buttons -->
    <div id="contenttr"></div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Profil",
  components: {},
  mounted: function () {
    var element = this.$refs["startprofill"];
    var top = element.offsetTop;
    window.scrollTo(0, top - 100);
  },
};
</script>
