<template>
  <div class="entspannung" ref="startentspannungg">
    <Header />

    <!-- Titel Abschnitt mit Themensatz und Start Button -->
    <div id="begruessung">
      <Titel msg="Entspannung" />
      <Zitat
        msg="... Nur so wird es gelingen, eigene Grenzen besser zu spüren und gewohnte Routinen so zu verändern, um auch an schlechten Tagen gut über 
        den Tag zu kommen und sich an guten Tagen nicht völlig zu verausgaben. Und mit der richtigen Balance zwischen Ruhe und Aktivität geht es  ..."
        msg2="Stern"
      /><br /><br />
      <a @click="sc()" class="startbutton"
        >Let's
        <b style="font-family: Chalkduster; letter-spacing: 1px">relax</b>
        together!</a
      >
    </div>

    <!-- Inhalt - verschiedene Übungen als Bilder mit Text -->
    <div ref="inhaltentspannungg" class="contenthome">
      <p class="lets">Tadasana</p>
      <div class="row picbox">
        <div class="col s1"></div>
        <div class="col s7">
          <img class="bigpic" src="../assets/entspannungsU/st.jpg" />
          <img class="bigpic" src="../assets/entspannungsU/str.jpg" />
        </div>
        <div class="col s3">
          Stelle dich gerade hin und strecke beide Arme in Richtung Himmel, als
          würden sie ein 'V' bilden. Schließe wenn möglich die Augen. Strecke
          dich so weit es geht und halte in der Position inne.<br /><br />
          30 Sekunden Übung <br />
          10 Sekunden Pause<br />
          10 Wiederholungen
        </div>
        <div class="col s1"></div>
      </div>
      <p class="lets">-</p>
      <p class="lets">Vrksasana</p>
      <div class="row picbox">
        <div class="col s1"></div>
        <div class="col s7">
          <img class="bigpic" src="../assets/entspannungsU/ke.jpg" />
          <img class="bigpic" src="../assets/entspannungsU/ker.jpg" />
        </div>
        <div class="col s3">
          Stelle dich gerade hin und führe deine Fußsohle zu deinem Knie. Je
          höher du deine Fußsohle ansetzt, desto besser. Anschließend führe
          deine Hände zusammen und strecke die Arme in Richtung Himmel. Halte
          diese Position.<br /><br />
          30 Sekunden Übung <br />
          10 Sekunden Pause<br />
          5 Wiederholungen links <br />
          5 Wiederholungen rechts
        </div>
        <div class="col s1"></div>
      </div>
      <p class="lets">-</p>
      <p class="lets">Utthita Ashwa Sanchalanasana</p>
      <div class="row picbox">
        <div class="col s1"></div>
        <div class="col s7">
          <img class="bigpic" src="../assets/entspannungsU/sta.jpg" />
          <img class="bigpic" src="../assets/entspannungsU/star.jpg" />
        </div>
        <div class="col s3">
          Mache mit einem Fuß einen großen Schritt nach vorne. Beuge das vordere
          Knie, halte dein Hinterbein gerade und die Ferse am Boden. Lehne dich
          mit deiner Hüfte nach vorne und ziehe deine Arme zum Himmel. Halte
          diese Position. <br /><br />
          30 Sekunden Übung <br />
          10 Sekunden Pause<br />
          5 Wiederholungen links <br />
          5 Wiederholungen rechts
        </div>
        <div class="col s1"></div>
      </div>
      <p class="lets">-</p>
      <p class="lets">Shavasana</p>
      <div class="row picbox">
        <div class="col s1"></div>
        <div class="col s7">
          <img class="bigpic" src="../assets/entspannungsU/bsr.jpg" />
          <img class="bigpic" src="../assets/entspannungsU/bs.jpg" />
        </div>
        <div class="col s3">
          Lege dich auf den Boden und strecke die Arme und Beine aus. Achte
          darauf, dass dein Rücken am Boden liegt und kein Hohlkreuz
          entsteht.<br /><br />
          60 Sekunden Übung <br />
          10 Sekunden Pause<br />
          5 Wiederholungen
        </div>
        <div class="col s1"></div>
      </div>
      <p class="lets">-</p>
      <p class="lets">Padmasana</p>
      <div class="row picbox">
        <div class="col s1"></div>
        <div class="col s7">
          <img class="bigpic" src="../assets/entspannungsU/sir.jpg" />
          <img class="bigpic" src="../assets/entspannungsU/si.jpg" />
        </div>
        <div class="col s3">
          Setze dich auf deine Matte oder einen anderen bequemen Untergrund.
          Lege deine Hände auf den Oberschenkeln ab und drehe die Handflächen
          nach oben. Schließe deine Augen und versuche, dich zu entspannen und
          auf deinen Körper zu hören.<br /><br />
          5 Minuten Übung
        </div>
        <div class="col s1"></div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Entspannung",
  components: {},
  mounted: function () {
    var element = this.$refs["startentspannungg"];
    var top = element.offsetTop;
    window.scrollTo(0, top - 100);
  },
  methods: {
    sc() {
      var element = this.$refs["inhaltentspannungg"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
