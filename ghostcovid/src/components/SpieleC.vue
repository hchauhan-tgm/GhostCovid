<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col s6">
        x
      </div>
      <div class="col s6" style="margin-top: 1%;">
        <p style="text-align:left;font-size: 150%; font-family: 'Alegreya SC', serif;">Memory</p>
        <p style="text-align:left;font-size: 110%; font-family: 'Alegreya SC', serif;">Finde zwei gleiche Symbole, je schneller, desto besser</p>
        <router-link to="/spiele"><button class="waves-effect waves-light btn">spielen</button></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        x
      </div>
      <div class="col s6" style="margin-top: 1%;">
        <p style="text-align:left;font-size: 150%; font-family: 'Alegreya SC', serif;">Schiebepuzzle</p>
        <p style="text-align:left;font-size: 110%; font-family: 'Alegreya SC', serif;">erklärung</p>
        <router-link to="/spiele"><button class="waves-effect waves-light btn">spielen</button></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        x
      </div>
      <div class="col s6" style="margin-top: 1%;">
        <p style="text-align:left;font-size: 150%; font-family: 'Alegreya SC', serif;">Merks dir</p>
        <p style="text-align:left;font-size: 110%; font-family: 'Alegreya SC', serif;">erklärung</p>
        <router-link to="/spiele"><button class="waves-effect waves-light btn">spielen</button></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        x
      </div>
      <div class="col s6" style="margin-top: 1%;">
        <p style="text-align:left;font-size: 150%; font-family: 'Alegreya SC', serif;">Farbendurcheinander</p>
        <p style="text-align:left;font-size: 110%; font-family: 'Alegreya SC', serif;">erklärung</p>
        <router-link to="/spiele"><button class="waves-effect waves-light btn">spielen</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpieleC",
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
  height: 30%;
  padding-top: 1%;
  text-align: left;
  font-size: 110%;
  font-family: 'Alegreya SC', serif;
}
img {
  height: 100%;
  width: 100%;
}
.btn{
  color: #fff;
  background-color: #a35152;
  width: 50%;
  font-family: 'Alegreya SC', serif; 
  text-transform: small-caps;
}
h1 {
  margin: 40px 0 0;
  font-family: 'Alegreya SC', serif;
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
</style>
