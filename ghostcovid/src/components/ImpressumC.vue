<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>

    <h2>Kontakt</h2>
    Ghost Covid AG <br>
    Wexstraße 19-23, 1200 Wien <br>
    Tel: +43 (0) 12364599 <br>
    Mail: <a href="mailto:ghostcovid@tgm.ac.at">ghostcovid@tgm.ac.at</a> <br>
    <br>

    <h2> GhostCovid Team</h2>
    <div class="row">
      <div class="col s2"></div>
      <div class="col s3" style="text-align:right; margin-top:1%">
        <div style="font-size:130%; margin-bottom:-5%; font-variant: small-caps;">Jasmin Wagner</div> <br> Web Developer <br> (Projektleiter)
      </div>
      <div class="col s1">
        <img src="../assets/jasmin.jpg" style="border-radius:50%; width:100%"/>
      </div>
      <div class="col s1">
        <img src="../assets/sarah.jpg" style="border-radius:50%; width:100%"/>
      </div>
      <div class="col s3" style="text-align:left; margin-top:1%">
        <div style="font-size:130%; margin-bottom:-5%; font-variant: small-caps;">Sarah Frick</div> <br> Content Creator <br> (Teammitglied)
      </div>
      <div class="col s2"></div>
    </div>

    <div class="row">
      <div class="col s2"></div>
      <div class="col s3" style="text-align:right; margin-top:1%">
        <div style="font-size:130%; margin-bottom:-5%; font-variant: small-caps;">Nimy Abraham</div> <br> Full Stack Developer <br> (Teammitglied)
      </div>
      <div class="col s1">
        <img src="../assets/nimy.jpg" style="border-radius:50%; width:100%"/>
      </div>
      <div class="col s1">
        <img src="../assets/harman.jpg" style="border-radius:50%; width:100%"/>
      </div>
      <div class="col s3" style="text-align:left; margin-top:1%">
        <div style="font-size:130%; margin-bottom:-5%; font-variant: small-caps;">Harmanpreet Chauhan</div> <br> Full Stack Developer <br> (Teammitglied)
      </div>
      <div class="col s2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImpressumC",
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
  text-align:center; 
  font-family: 'Candara', serif;
}
h1 {
  margin: 40px 0 0;
  font-family: 'Candara', serif;
  font-variant: small-caps;
}
h2 {
  margin: 20px;
  font-size: 200%;
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
  color: #a35152;
}
</style>
