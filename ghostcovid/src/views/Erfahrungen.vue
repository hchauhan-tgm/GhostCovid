<template>
  <div class="erfahrungen">
    <Header />

    <!-- Titel Abschnitt mit Themensatz und Auswahl-Buttons -->
    <div id="obentr">
      <Titel msg="Erfahrungen" />
      <Zitat
        msg="... Mit Ärzten, die Sie nicht ernst nehmen, Kollegen und Nachbarn, die Sie belächeln und tuscheln, 
          Arbeitgebern, die Druck machen. Dass eine Corona-Infektion langfristige Folgen haben kann, habe 
          sich offenbar immer noch nicht herumgesprochen..."
        msg2="Frankfurter Neue Presse"
      /><br /><br />
      <router-link to="/erfahrungen/podcast" class="trainingbutton btn"
        >Podcast</router-link
      >
      <router-link to="/erfahrungen/videos" class="trainingbutton btn"
        >Videos</router-link
      >
      <router-link to="/erfahrungen/forum" class="trainingbutton btn"
        >Forum</router-link
      ><br />
    </div>

    <!-- roter Balken unter Buttons -->
    <div id="contenttr"></div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Erfahrungen",
  components: {},
};
</script>
