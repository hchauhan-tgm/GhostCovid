<template>
    <div class="erfahrungen">
      <Header />
      <section id="obentr">
        <Titel msg="Erfahrungen" />
        <Zitat msg="... Mit Ärzten, die sie nicht ernst nehmen, Kollegen und Nachbarn, die Sie belächeln und tuscheln, 
          Arbeitgebern, die Druck machen. Dass eine Corona-Infektion langfristige Folgen haben kann, habe 
          sich offenbar immer noch nicht herumgesprochen..." msg2="Frankfurter Neue Presse"/><br><br>
        <router-link to="/podcast" class="trainingbutton">𝑷𝒐𝒅𝒄𝒂𝒔𝒕</router-link>
        <router-link to="/videos" class="trainingbutton">𝑽𝒊𝒅𝒆𝒐𝒔</router-link>
        <router-link to="/forum" class="trainingbutton">𝑭𝒐𝒓𝒖𝒎</router-link><br>
      </section>
      <section id="contenttr">

      </section>

      <!--<div class="row auswahlbtn">
        <div class="col s6"><router-link to="/podcast"><a class="waves-effect waves-light btn-large buttonerf btn">Podcast</a></router-link></div>
        <div class="col s6"><router-link to="/videos"><a class="waves-effect waves-light btn-large buttonerf btn">Videos</a></router-link></div>
        <div class="col s6"><router-link to="/forum"><a class="waves-effect waves-light btn-large buttonerf buttonmitte btn">Forum</a></router-link></div>
      </div>-->

      <Footer />
    </div>
</template>

<script>
export default {
  name: "Erfahrungen",
  components: {
  },
};
</script>
