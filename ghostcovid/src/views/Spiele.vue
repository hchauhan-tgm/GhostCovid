<template>
    <div class="spiele">
      <Header />
      <Titel msg="Spiele" />

      <div class="row spielbox">
        <div class="col s6">
          <img class="spielpic" src="../assets/spielew.png" />
        </div>
        <div class="col s6" style="margin-top: 1%;">
          <h2 class="spieltitel">Memory</h2>
          <p class="spielerkl">Finde zwei gleiche Symbole, je schneller, desto besser</p>
          <router-link to="/spiele"><button class="waves-effect waves-light btn spielenbutton">spielen</button></router-link>
        </div>
      </div>
      <div class="row spielbox">
        <div class="col s6">
          <img class="spielpic" src="../assets/spielew.png" />
        </div>
        <div class="col s6" style="margin-top: 1%;">
          <h2 class="spieltitel">Schiebepuzzle</h2>
          <p class="spielerkl">erklärung</p>
          <router-link to="/schiebepuzzle"><button class="waves-effect waves-light btn spielenbutton">spielen</button></router-link>
        </div>
      </div>
      <div class="row spielbox">
        <div class="col s6">
          <img class="spielpic" src="../assets/spielew.png" />
        </div>
        <div class="col s6" style="margin-top: 1%;">
          <h2 class="spieltitel">Merks dir</h2>
          <p class="spielerkl">erklärung</p>
          <router-link to="/spiele"><button class="waves-effect waves-light btn spielenbutton">spielen</button></router-link>
        </div>
      </div>
      <div class="row spielbox">
        <div class="col s6">
          <img class="spielpic" src="../assets/spielew.png" />
        </div>
        <div class="col s6" style="margin-top: 1%;">
          <h2 class="spieltitel">Farbendurcheinander</h2>
          <p class="spielerkl">erklärung</p>
          <router-link to="/spiele"><button class="waves-effect waves-light btn spielenbutton">spielen</button></router-link>
        </div>
      </div>

      <Footer />
    </div>
  
</template>

<script>
export default {
  name: "Spiele",
  components: {
  },
};
</script>
