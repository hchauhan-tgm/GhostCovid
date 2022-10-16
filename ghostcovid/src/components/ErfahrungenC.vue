<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col s1"></div>
      <div class="col s10">
        ... Mit Ärzten, die sie nicht ernst nehmen, Kollegen und Nachbarn, die Sie belächeln und tuscheln, 
        Arbeitgebern, die Druck machen. Dass eine Corona-Infektion langfristige Folgen haben kann, habe 
        sich offenbar immer noch nicht herumgesprochen...
        <p style="font-style: italic; font-size: 100%">Frankfurter Neue Presse</p>
      </div>
      <div class="col s1"></div>
    </div>
    <div class="row">
      <div class="col s6"><router-link to="/podcast"><a class="waves-effect waves-light btn-large button">Podcast</a></router-link></div>
      <div class="col s6"><router-link to="/videos"><a class="waves-effect waves-light btn-large button">Videos</a></router-link></div>
      <div class="col s6"><router-link to="/forum"><a class="waves-effect waves-light btn-large button" style="margin-left: 50%;">Forum</a></router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErfahrungenC",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  margin-top: 100px;
  margin-bottom: 50px;
}
.row {
  width: 80%;
  padding-top: 1%;
  font-size: 110%;
  font-family: 'Candara', serif;
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
  color: #42b983;
}
.button{
  margin: 1%;
  width: 100%;
  height: 20%;
  padding-top: 10%;
  padding-bottom: 10%;
  text-align: center;
  font-size: 250%;
  color: #000;
  font-family: 'Candara', serif; 
  text-transform: capitalize;
  font-variant: small-caps; 
  background-image: url("../assets/erfahrungenw.png");
  background-size: 100%;
  border-radius: 25px;
}
.button:hover{
  font-size: 300%;
  box-shadow: 0 0 20px 5px #a35152;
}
</style>
