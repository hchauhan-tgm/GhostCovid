<template>
  <div class="atmen" ref="startatmenn">
    <Header />

    <!-- Titel Abschnitt mit Themensatz und Start Button -->
    <div id="begruessung">
      <Titel msg="Atemtraining" />
      <Zitat
        msg="... Das Coronavirus hinterlässt teilweise dauerhafte Spuren. Auch zuvor gesunde, sportliche Menschen leiden durch Long Covid an Atemnot – 
        oft Monate nachdem die Krankheit abgeklungen ist. Was dagegen hilft: Atemtraining.  ..."
        msg2="ORF NÖ"
      /><br /><br />
      <a @click="sc()" class="startbutton"
        >Let's
        <b style="font-family: Chalkduster; letter-spacing: 1px">breath</b>
        together!</a
      >
    </div>

    <!-- Inhalt - verschiedene Übungen als Text -->
    <div ref="inhaltatmenn" class="contenthome">
      <p class="lets">Brustatmung</p>
      <p class="hometext">
        Setze dich aufrecht hin und lege eine Handfläche auf deine obere
        Brusthälfte.<br />
        Schließe deine Augen und versuche, gezielt in die Brust zu atmen, also
        nur in den oberen Bereich deiner Lunge.<br />
        Deine Brust sollte sich beim Einatmen heben und beim Ausatmen senken.
        <br />
        Atme durch die Nase ein und durch den Mund langsam aus, so als würdest
        du viele Kerzen ausblasen müssen.<br /><br />
        5 Widerholungen - kurze Pause - 5 Wiederholungen<br />
      </p>
      <p class="lets">-</p>
      <p class="lets">Bauchatmung</p>
      <p class="hometext">
        Setze dich aufrecht hin und lege eine Handfläche auf deinen Bauch.<br />
        Schließe deine Augen und versuche, gezielt in den Bauch zu atmen, also
        nur in den unteren Bereich deiner Lunge.<br />
        Dein Bauch sollte sich beim Einatmen heben und beim Ausatmen senken.
        <br />
        Atme durch die Nase ein und durch den Mund langsam aus, so als würdest
        du viele Kerzen ausblasen müssen.<br /><br />
        5 Widerholungen - kurze Pause - 5 Wiederholungen<br />
      </p>
      <p class="lets">-</p>
      <p class="lets">Rückenatmung</p>
      <p class="hometext">
        Setze dich aufrecht hin und stütze dich mit deinen Ellenbogen auf deinen
        Knien ab. Krümme deinen Rücken wie einen Katzenbuckel.<br />
        Schließe deine Augen und versuche, gezielt in den Rücken zu atmen,
        sodass ein Buckel entsteht.<br />
        Dein Rücken sollte sich beim Einatmen krümmen wie ein Katzenbuckel und
        beim Ausatmen nach Innen durchstrecken. <br />
        Atme durch die Nase ein und durch den Mund langsam aus, so als würdest
        du viele Kerzen ausblasen müssen.<br /><br />
        5 Widerholungen - kurze Pause - 5 Wiederholungen<br />
      </p>
      <p class="lets">-</p>
      <p class="lets">Flankenatmung</p>
      <p class="hometext">
        Setze dich aufrecht hin und lege deine Handflächen an deine Flanken also
        seitlich am Körper auf Brusthöhe.<br />
        Schließe deine Augen und versuche, gezielt in die Flanken zu atmen, also
        nur in die seitlichen Bereiche deiner Lunge.<br />
        Deine Seiten sollten sich beim Einatmen ausdehnen und beim Ausatmen
        zusammenziehen. <br />
        Atme durch die Nase ein und durch den Mund langsam aus, so als würdest
        du viele Kerzen ausblasen müssen.<br /><br />
        5 Widerholungen - kurze Pause - 5 Wiederholungen<br />
      </p>
      <p class="lets">-</p>
      <p class="lets">Zwerchfellübung Buchstaben</p>
      <p class="hometext">
        Setze dich aufrecht hin und lege deine Handflächen auf deine
        Oberschenkel.<br />
        Schließe deine Augen und atme durch die Nase tief ein.<br />
        Beim Ausatmen sprich schnell die Buchstaben "p", "t" und "k" mit ihrem
        Wortlaut aus (nicht "pe", "te" und "ka").<br /><br />
        10 Widerholungen - kurze Pause - 10 Wiederholungen<br />
      </p>
      <p class="lets">-</p>
      <p class="lets">Zwerchfellübung Nase</p>
      <p class="hometext">
        Setze dich aufrecht hin und lege deine Handflächen auf deine
        Oberschenkel.<br />
        Schließe deine Augen und atme dreimal kurz und schnell durch die Nase
        ein, so als würdest du kein Taschentuch dabei haben.<br />
        Atme anschließend langsam durch den Mund aus, so als würdest du viele
        Kerzen ausblasen müssen.<br /><br />
        10 Widerholungen - kurze Pause - 10 Wiederholungen<br />
      </p>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Atmen",
  components: {},
  mounted: function () {
    var element = this.$refs["startatmenn"];
    var top = element.offsetTop;
    window.scrollTo(0, top - 100);
  },
  methods: {
    sc() {
      var element = this.$refs["inhaltatmenn"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
