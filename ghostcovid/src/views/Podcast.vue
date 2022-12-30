<template>
    <div class="podcast">
      <Header />
      
      <section id="begruessung">
        <Titel msg="Podcast" />
        <Zitat msg="Personen berichten von ihren Problemen und Ängsten während der Lockdowns. Erzählen von ihren Krankheitsverläufen und Hoffnungen für die Zukunft.
        Offene und beeindruckende Geschichten hautnah mitbekommen." msg2="GhostCovid Podcast"/><br><br>
        <a href="#erfahrungen/podcast" class="startbutton">Let's <b style="font-family:Chalkduster; letter-spacing:1px;">hear</b> together!</a>
      </section>
      <section id="erfahrungen/podcast" class="contenthome">
        <p class="lets">Folge 1 - Leben mit Long-Covid</p>
        <p class="hometext"> Die Schülerin Jasmin redet über ihr Leben mit Long-Covid</p>
          <!--<button class="startbutton" @click.prevent="playSound()">Anhören</button>-->
          <audio id="audio_with_controls" controls src="../assets/Podcast_Folge1_angepasst.mp3" type="audio/mp3" > </audio>
          <p class="lets">Folge 2 - Erfahrungen im Lockdown</p>
          <p class="hometext"> Die Pensionistin Aloisia redet über ihre Erfahrungen im Lockdown</p>
          <audio id="audio_with_controls" controls src="../assets/Podcast_Folge2.mp3" type="audio/mp3" > </audio>
        <!--<p class="hometext">
          gscheiter audio player muss eingebaut werden <br>
          In diesem Video werden fünf Personen zum Thema Long Covid bzw. Corona und dessen Auswirkungen befragt.</p>-->
      </section>

      <Footer />
    </div>
</template>

<script>
export default {
  name: "Podcast",
  data() {
    return {

    }
  },
  methods: {
    playSound () {
      const audio = new Audio(require('../assets/Podcast_Folge1_angepasst.mp3'));
      audio.play();
      const audio2 = new Audio(require('../assets/Podcast_Folge2.mp3'));
      audio2.play();
    }
  },
};
</script>
