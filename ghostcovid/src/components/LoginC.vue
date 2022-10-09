<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
    <div class="box">
      <div class="row">
        <div class="col s4"></div>
          <div class="input-field col s4">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" class="validate">
            <label for="icon_prefix">Benutzername</label>
          </div>
          <div class="col s4"></div>
      </div>
      <div class="row">
        <div class="col s4"></div>
          <div class="input-field col s4">
            <i class="material-icons prefix">https</i>
            <input id="icon_prefix2" type="password" class="validate">
            <label for="icon_prefix2">Passwort</label>
          </div>
        <div class="col s4"></div>
      </div>
      <div class="row">
        <div class="col s4"></div>
          <div class="input-field col s2">
            <router-link to="/registrieren" class="text">
            <button class="waves-effect waves-light btn">registrieren
              <i class="material-icons right">border_color</i>
            </button>
            </router-link>
          </div>
          <div class="input-field col s2">
            <router-link to="/" class="text">
            <button class="btn waves-effect waves-light" type="submit" name="action">einloggen
              <i class="material-icons right">forward</i>
            </button>
            </router-link>
          </div>
        <div class="col s4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginC",
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
}
.box {
  margin-top: 5%;
  font-family: 'Alegreya SC', serif; 
  text-transform: capitalize;
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
  color: #fff;
}
.btn{
  color: #fff;
  background-color: #a35152;
  width: 75%;
  font-family: 'Alegreya SC', serif; 
  text-transform: small-caps;
}

.input-field label {
    color: #000;
    font-size: 110%;
   }
/* label focus color */
.input-field input[type=text]:focus + label {
  color: #943e34;
}
/* label underline focus color */
.input-field input[type=text]:focus {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* valid color */
.input-field input[type=text].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input[type=text].invalid {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* label focus color */
.input-field input[type=password]:focus + label {
  color: #943e34;
}
/* label underline focus color */
.input-field input[type=password]:focus {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* valid color */
.input-field input[type=password].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input[type=password].invalid {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* icon prefix focus color */
.input-field .prefix.active {
  color: #000;
}
</style>
