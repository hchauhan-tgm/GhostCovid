<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
    <br>
    <div class="row" style=" width: 90%;">
      <div class="col s3">
        <div class="row">
          <div class="col s12"><router-link to="/spiele"><a class="waves-effect waves-light btn button"><i class="material-icons left">extension</i>Spiele</a></router-link></div>
        </div>
        <div class="row">
          <div class="col s12"><router-link to="/podcast"><a class="waves-effect waves-light btn-small button"><i class="material-icons left">mic</i>Podcast</a></router-link></div>
        </div>
        <div class="row">
          <div class="col s12"><router-link to="/forum"><a class="waves-effect waves-light btn-small button"><i class="material-icons left">forum</i>Forum</a></router-link></div>
        </div>
        <div class="row">
          <div class="col s12"><router-link to="/statistik"><a class="waves-effect waves-light btn-small button"><i class="material-icons left">info</i>Infos</a></router-link></div>
        </div>
      </div>
      
      <div class="col s9 content">
        <p style="font-size:200%;font-family: 'Candara', serif;margin-left: 33px;color:#a35152">Let's 𝑮𝒉𝒐𝒔𝒕 𝑪𝒐𝒗𝒊𝒅 together!</p>
        <p style="font-size:120%;margin-left: 33px;margin-right: 33px">
          Dies ist eine Seite für Long-Covid, Post Covid Syndrom und alle anderen Betroffenen! <br><br>
          Egal ob du an Long-Covid leidest oder jemanden kennst, hier sind alle Willkommen und eingeladen, sich zu Informieren zu holen und bei Bedarf gerne auch die Spiele auszuprobieren.
          Für die kreativen Personen gibt es eine krative Ecke mit Mandalas und ähnlichen Übungen. Wir bieten außerdem eine Vielzahl an Entspannungsübungen mit Bildern und Erklärung an.
          <br><br>
          In unserem Podcast erzählen Betroffene, wie es ihnen mit der Situation geht und was ihnen besonders geholfen hat.
          Außerdem könnt ihr euch selbst in unserem Forum mit Gleichgesinnten austauschen und Erfahrungen sammeln bzw. weitergeben.
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeC",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  margin-top: 100px;
  margin-bottom: 60px;
  font-family: 'Candara', serif;
}
.row {
  font-size: 110%;
  font-family: 'Candara', serif;
}
img {
  height: 100%;
  width: 100%;
  border: 5px solid #c3c3fa;
  color: #a35152;
}
.content {
  text-align: left;
  height: 450px;
}
.button{
  width: 100%;
  height: 20%;
  padding-top: 10%;
  padding-bottom: 10%;
  text-align: left;
  font-size: 175%;
  color: #fff;
  font-family: 'Candara', serif; 
  text-transform: capitalize;
  background-color:#a35152;
}
.button:hover{
  font-size: 225%;
  box-shadow: 0 0 18px 0 #000;
}
h1 {
  margin: 40px 0 0;
  font-family: 'Candara', serif;
  font-variant: small-caps;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
}
i {
  font-size: 175%;
}
</style>
