<template>
  <div class="spiele" ref="startspielee">
    <Header />

    <!-- Titel Abschnitt mit Themensatz und Start Button -->
    <div id="begruessung">
      <Titel msg="Spiele" />
      <Zitat
        msg="... Gedächtnisprobleme stiegen nach sechs bis 18 Monaten nach der akuten Erkrankung an. 
        Nach einem halben Jahr war das Risiko für Gedächtnisprobleme noch um 11,5 Prozent erhöht, bei Frauen waren es 18,7 Prozent.  ..."
        msg2="Kurier"
      /><br /><br />
      <a @click="sc()" class="startbutton"
        >Let's
        <b style="font-family: Chalkduster; letter-spacing: 1px">play</b>
        together!</a
      >
    </div>

    <!-- Inhalt - verschiedene Spiele mit Anleitung -->
    <div ref="inhaltspielee" class="contenthome">
      <p class="lets">Memory</p>
      <div class="row infos">
        <div class="col s6">
          <img class="infogr" src="../assets/memory.png" />
        </div>
        <div class="col s6 infotext">
          Ziel ist es, möglichst schnell alle Paarungen zu finden.<br /><br />
          Dabei müssen nacheinander immer zwei Karten umgedreht werden - durch
          einen einfachen Klick auf die Rückseite der Karte, die man ansehen
          möchte. Haben die zwei gewählten Karten die selbe Farbe, bleiben sie
          aufgedeckt und man hat ein Paar "gefunden". Haben die zwei gewählten
          Karten nicht die selbe Farbe, werden sie wieder verdeckt - man muss
          sich also merken unter welcher Karte sich welche Farbe versteckt.
          <br />
          <router-link to="/training/spiele/memory"
            ><button class="waves-effect waves-light buttoninf">
              Spiel starten
            </button></router-link
          >
        </div>
      </div>
      <p class="lets">-</p>
      <p class="lets">Schiebepuzzle</p>
      <div class="row infos">
        <div class="col s6">
          <img class="infogr" src="../assets/schiebepuzzle.png" />
        </div>
        <div class="col s6 infotext">
          Ziel ist es, die Zahlen möglichst schnell in die richtige Reihenfolge
          zu bringen. <br /><br />
          Dabei kann man durch Anklicken eine Zahl verschieben - dies
          funktioniert jedoch nur, wenn ein Nebenfeld dieser Zahl frei ist. Die
          Zahlen müssen so angeordnet werden, dass in der obersten Reihe die
          Ziffern 1 bis 4 stehen und in der untersten 13 bis 15. Das Feld rechts
          unten in der Ecke muss am Ende frei sein, damit man gewonnen hat.
          <br />
          <router-link to="/training/spiele/schiebepuzzle"
            ><button class="waves-effect waves-light buttoninf">
              Spiel starten
            </button></router-link
          >
        </div>
      </div>
      <p class="lets">-</p>
      <p class="lets">Merk's dir</p>
      <div class="row infos">
        <div class="col s6">
          <img class="infogr" src="../assets/merksdir.png" />
        </div>
        <div class="col s6 infotext">
          Ziel ist es, die nacheinander leuchtenden Felder in der richtigen
          Reihenfolge anzuklicken.<br /><br />
          Das Spiel startet indem man den runden grünen Knopf in der Mitte
          drückt. Anschließend leuchtet eines der vier Felder auf. Dieses Signal
          musst man durch Drücken auf das entsprechende Feld wiederholen. Wenn
          man das Leuchten richtig wiedergegeben hat, erhöht sich die Anzahl der
          leuchtenden Felder in der nächsten Runde um eins, ansonsten bekommt
          man die Reihenfolge nochmal angezeigt. Wenn man 10 Runden geschafft
          hat, hat man gewonnen. <br />
          <router-link to="/training/spiele/merksdir"
            ><button class="waves-effect waves-light buttoninf">
              Spiel starten
            </button></router-link
          >
        </div>
      </div>
      <p class="lets">-</p>
      <p class="lets">Farbendurcheinander</p>
      <div class="row infos">
        <div class="col s6">
          <img class="infogr" src="../assets/farbenspiel.png" />
        </div>
        <div class="col s6 infotext">
          Ziel ist es, das richtige Feld anzuklicken. <br /><br />
          Dabei muss man die Farbe zu finden, bei der die Schrift schwarz ist
          und die Hintergrundfarbe mit dem Farbnamen übereinstimmt. Dabei muss
          die richtige Farbe mittels Klick aus den 16 Optionen ausgewählt
          werden.<br />
          Wenn man 20 richtige Felder gefunden hat, hat man gewonnen. <br />
          <router-link to="/training/spiele/farben"
            ><button class="waves-effect waves-light buttoninf">
              Spiel starten
            </button></router-link
          >
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Spiele",
  components: {},
  mounted: function () {
    var element = this.$refs["startspielee"];
    var top = element.offsetTop;
    window.scrollTo(0, top - 100);
  },
  methods: {
    sc() {
      var element = this.$refs["inhaltspielee"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
