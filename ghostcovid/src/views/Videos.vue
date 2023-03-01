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
      <p class="lets">Was weißt du über Long Covid?</p>
      <!--<video ref="videoRef" src="" id="video-container" width="80%" controls></video>-->
      <div class="video-block">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/_AIRFHxIUzg" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <p class="hometext">
        In diesem Video werden vier Personen über ihr Wissen zum Thema Long Covid befragt.
      </p>
      <br>
      <p class="lets">Wie lief deine Corona Erkrankung ab?</p>
      <!--<video ref="videoRef" src="" id="video-container" width="80%" controls></video>-->
      <div class="video-block">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/hGer6LYzf7o" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <p class="hometext">
        In diesem Video werden vier Personen über ihre Corona Erkrankung befragt. Im Vorfeld wurde bereits festgestellt, 
        <br>dass alle Befragten in dem Video bereits eine Corona Erkrankung hinter sich haben.
      </p>
      <br>
      <p class="lets">Hattest du Sorgen nach deiner Corona Erkrankung an Long Covid zu erkranken?</p>
      <!--<video ref="videoRef" src="" id="video-container" width="80%" controls></video>-->
      <div class="video-block">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/JhKGF0JgSGE" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <p class="hometext">
        In diesem Video werden vier Personen über ihre Sorgen in Bezug auf eine Long Covid Erkrankung nach Corona befragt. 
        <br>Im Vorfeld wurde bereits festgestellt, dass alle Befragten in dem Video bereits eine Corona Erkrankung hinter sich haben.
      </p>
      <br>
      <p class="lets">Was hattest du für Symptome und wie lange hat es gedauert bis alle deine Symptome wieder abgeklungen sind?</p>
      <!--<video ref="videoRef" src="" id="video-container" width="80%" controls></video>-->
      <div class="video-block">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/Dqb0IKPyMqY" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <p class="hometext">
        In diesem Video werden vier Personen über ihre Symptome bei ihrer Corona Erkrankung befragt.
        <br>Im Vorfeld wurde bereits festgestellt, dass alle Befragten in dem Video bereits eine Corona Erkrankung hinter sich haben.
      </p>
      <br>
      <p class="lets">Gibt es etwas, was du dir in Bezug auf Corona und Long Covid wünschst?</p>
      <!--<video ref="videoRef" src="" id="video-container" width="80%" controls></video>-->
      <div class="video-block">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/8T4pGTmr7n0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <p class="hometext">
        In diesem Video werden vier Personen über ihre Wünsche zum Thema Corona oder Long Covid befragt.
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
