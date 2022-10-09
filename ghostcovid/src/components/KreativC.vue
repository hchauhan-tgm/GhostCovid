<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "KreativC",
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
  font-family: 'Alegreya SC', serif;
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
