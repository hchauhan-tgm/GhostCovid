<template>
  <div class="podcast" ref="startpodcastt">
    <Header />

    <!-- Titel Abschnitt mit Themensatz und Start Button -->
    <div id="begruessung">
      <Titel msg="Podcast" />
      <Zitat
        msg="Personen berichten von ihren Problemen und Ängsten während der Lockdowns. Erzählen von ihren Krankheitsverläufen und Hoffnungen für die Zukunft.
        Offene und beeindruckende Geschichten hautnah mitbekommen."
        msg2="GhostCovid Podcast"
      /><br /><br />
      <a @click="sc()" class="startbutton"
        >Let's
        <b style="font-family: Chalkduster; letter-spacing: 1px">hear</b>
        together!</a
      >
    </div>

    <!-- Inhalt - Folgen mit Audioplayer und Beschreibung -->
    <div ref="inhaltpodcastt" class="contenthome">
      <p class="lets">Folge 1 - Leben mit Long-Covid</p>
      <p class="hometext">
        Die Schülerin Jasmin redet über ihr Leben mit Long-Covid
      </p>
      <audio
        id="audio_with_controls"
        class="audiobalken"
        controls
        src="../assets/Podcast_Folge1_angepasst.mp3"
        type="audio/mp3"
      ></audio>
      <p class="lets">Folge 2 - Erfahrungen im Lockdown</p>
      <p class="hometext">
        Die Pensionistin Aloisia redet über ihre Erfahrungen im Lockdown
      </p>
      <audio
        id="audio_with_controls"
        class="audiobalken"
        controls
        src="../assets/Podcast_Folge2.mp3"
        type="audio/mp3"
      ></audio>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Podcast",
  data() {
    return {};
  },
  mounted: function () {
    var element = this.$refs["startpodcastt"];
    var top = element.offsetTop;
    window.scrollTo(0, top - 100);
  },
  methods: {
    sc() {
      var element = this.$refs["inhaltpodcastt"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    playSound() {
      const audio = new Audio(
        require("../assets/Podcast_Folge1_angepasst.mp3")
      );
      audio.play();
      const audio2 = new Audio(require("../assets/Podcast_Folge2.mp3"));
      audio2.play();
    },
  },
};
</script>
