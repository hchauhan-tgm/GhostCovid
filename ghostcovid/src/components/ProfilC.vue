<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
    <p>Hallo Vorname</p>


    <router-link to="/login" class="text">
    <button class="btn waves-effect waves-light" type="submit" name="action">ausloggen
      <i class="material-icons right">exit_to_app</i>
    </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProfilC",
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
.btn{
  color: #fff;
  background-color: #a35152;
  width: 50%;
  font-family: 'Candara', serif; 
  text-transform: small-caps;
  margin: 0.5%;
}
p {
  font-family: 'Candara', serif;
  font-variant: small-caps;
  font-size: 250%;
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
</style>
