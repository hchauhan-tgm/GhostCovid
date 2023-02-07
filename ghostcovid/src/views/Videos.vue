<template>
  <div class="videos" ref="startvideoss">
    <Header />

    <!-- Titel Abschnitt mit Themensatz und Start Button -->
    <div id="begruessung">
      <Titel msg="Videos" />
      <Zitat
        msg="Was für Beschwerden haben andere Personen? Welche Erfahrungen haben diese Personen gemacht? Kennen sie gute Ärzte bzw. neue Theraphieansätze?
        Wann werde ich wieder gesund? Wie komme ich in den Alltag zurück? Was hilft?"
        msg2="GhostCovid Videos"
      /><br /><br />
      <a @click="sc()" class="startbutton"
        >Let's
        <b style="font-family: Chalkduster; letter-spacing: 1px">watch</b>
        together!</a
      >
    </div>

    <!-- Inhalt - Video mit Beschreibung -->
    <div ref="inhaltvideoss" class="contenthome">
      <p class="lets">Videotitel</p>
      <!--<video ref="videoRef" src="" id="video-container" width="80%" controls></video>-->
      <div class="video-block">
        <iframe
          max-width="100%"
          height="auto"
          src="https://www.youtube.com/embed/bp0w2KrlE7c?ecver=1"
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
        >
        </iframe>
      </div>
      <p class="hometext">
        In diesem Video werden fünf Personen zum Thema Long Covid bzw. Corona
        und dessen Auswirkungen befragt.
      </p>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Videos",
  mounted: function () {
    this.$refs.videoRef.src = "../assets/00025.mp4";
    this.$refs.videoRef.play();

    var element = this.$refs["startvideoss"];
    var top = element.offsetTop;
    window.scrollTo(0, top - 100);
  },
  components: {},
  methods: {
    sc() {
      var element = this.$refs["inhaltvideoss"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
