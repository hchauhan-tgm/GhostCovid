<template>
    <div class="podcast">
      <Header />
      
      <section id="begruessung">
        <Titel msg="Podcast" />
        <Zitat msg="Personen berichten von ihren Problemen und Ängsten während der Lockdowns. Erzählen von ihren Krankheitsverläufen und Hoffnungen für die Zukunft.
        Offene und beeindruckende Geschichten hautnah mitbekommen." msg2="GhostCovid Podcast"/><br><br>
        <a href="#erfahrungen/podcast" class="startbutton">Let's <b style="font-family:Chalkduster; letter-spacing:1px;">hear</b> together!</a>
      </section>
      <section id="erafhrungen/podcast" class="contenthome">
        <p class="lets">Folge 1</p>
          <button class="startbutton" @click.prevent="playSound()">Anhören</button>
        <p class="hometext">
          gscheiter audio player muss eingebaut werden <br>
          In diesem Video werden fünf Personen zum Thema Long Covid bzw. Corona und dessen Auswirkungen befragt.</p>
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
      const audio = new Audio(require('../assets/folge1.mp3'));
      audio.play();
    }
  },
};
</script>
