<template>
    <div class="impressum">
      <Header />
      <Titel msg="Impressum" />

      <h2>Kontakt</h2>
      Ghost Covid AG <br>
      Wexstraße 19-23, 1200 Wien <br>
      Tel: +43 (0) 12364599 <br>
      Mail: <a href="mailto:ghostcovid@tgm.ac.at">ghostcovid@tgm.ac.at</a> <br>
      <br>

      <h2> GhostCovid Team</h2>
      <div class="row teambox">
        <div class="col s2"></div>
        <div class="col s3 teamr">
          <div class="persname">Jasmin Wagner</div> <br> Web Developer <br> (Projektleiter)
        </div>
        <div class="col s1">
          <img src="../assets/jasmin.jpg" class="kopf"/>
        </div>
        <div class="col s1">
          <img src="../assets/sarah.jpg" class="kopf"/>
        </div>
        <div class="col s3 teaml">
          <div class="persname">Sarah Frick</div> <br> Content Creator <br> (Teammitglied)
        </div>
        <div class="col s2"></div>
      </div>

      <div class="row teambox">
        <div class="col s2"></div>
        <div class="col s3 teamr">
          <div class="persname">Nimy Abraham</div> <br> Full Stack Developer <br> (Teammitglied)
        </div>
        <div class="col s1">
          <img src="../assets/nimy.jpg" class="kopf"/>
        </div>
        <div class="col s1">
          <img src="../assets/harman.jpg" class="kopf"/>
        </div>
        <div class="col s3 teaml">
          <div class="persname">Harmanpreet Chauhan</div> <br> Full Stack Developer <br> (Teammitglied)
        </div>
        <div class="col s2"></div>
      </div>

      <Footer />
    </div>
  
</template>

<script>
export default {
  name: "Impressum",
  components: {
  },
};
</script>
