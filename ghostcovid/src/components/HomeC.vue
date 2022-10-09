<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col s2"></div>
      <div class="col s8">
        Dies ist eine Seite für Long-Covid, Post Covid Syndrom und alle anderen Betroffenen!
      </div>
      <div class="col s2"></div>
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
  color: #a35152;
}
</style>
