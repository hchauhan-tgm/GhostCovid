<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "EntspannungC",
  props: {
    msg: String,
    index: Number,
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
  width: 95%;
  padding-top: 1%;
  font-size: 110%;
  font-family: 'Candara', serif;
}
img {
  width: 10%;
  min-width: 100px;
  margin: 0.1%;
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
