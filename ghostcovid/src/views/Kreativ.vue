<template>
  <div class="kreativ" ref="startkreativv">
    <Header />

    <div id="begruessung">
      <Titel msg="Kreativübungen" />
      <Zitat
        msg="... Eine Batterie die leer ist, wenn sie die gleich noch einmal massiv belasten, wird sie noch leerer. Aber wenn man die Batterie nur ins Bett legt, 
        ladet sie sich nicht wieder auf. Man muss quasi gezielte Stimuli setzten, zum Beispiel Bewegung, eine Kreativtherapie oder auch ein Outdoor-Programm.   ..."
        msg2="Tips Urfahr-Umgebung"
      /><br /><br />
      <a @click="sc()" class="startbutton"
        >Let's
        <b style="font-family: Chalkduster; letter-spacing: 1px">be creative</b>
        together!</a
      >
    </div>

    <div ref="inhaltkreativv" class="contenthome">
      <p class="lets">Mandalas</p>
      <p class="hometext">Malen entspannt und hilft beim Konzentrieren.</p>
      <div class="row">
        <div class="col s6" style="text-align: right">
          <img src="../assets/Mandala1.png" class="kreativm" /><br />
        </div>
        <div class="col s6" style="text-align: left">
          <img src="../assets/Mandala2.png" class="kreativm" /><br />
        </div>
      </div>
      <div class="row">
        <div class="col s6" style="text-align: right; padding-right: 100px">
          <a
            href="../Mandala1.pdf"
            download
            style="color: white; font-size: 1.5em; text-decoration: underline"
          >
            DOWNLOAD
          </a>
        </div>
        <div class="col s6" style="text-align: left; padding-left: 100px">
          <a
            href="../Mandala2.pdf"
            download
            style="color: white; font-size: 1.5em; text-decoration: underline"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
      <p class="lets">-</p>
      <p class="lets">Kreise</p>
      <p class="hometext">Kreise ausmalen fördert deine Kreativität.</p>
      <img src="../assets/kreise1.png" class="kreativk" /><br />
      <a
        href="../Kreise1.pdf"
        download
        style="color: white; font-size: 1.5em; text-decoration: underline"
      >
        DOWNLOAD
      </a>
      <p class="lets">-</p>
      <p class="lets">Weitere</p>
      <p class="hometext">
        Knüpfen hilft deine Fingerfertigkeit zu verbessern und wirkt
        entspannend.
      </p>
      <p class="lets">Fingerknüpfen</p>
      <div class="row">
        <div class="col s1"></div>
        <div class="col s10">
          <img class="bild1" src="../assets/kreativeU/A1_Beispielbild1.jpg" />
          <img class="bild2" src="../assets/kreativeU/A1_Beispielbild2.jpg" />
        </div>
        <div class="col s1"></div>
      </div>
      <p class="schrift">Anleitung</p>
      <p class="hometext">Materialen: 2 Wollfäden in beliebigen Farben</p>
      <br />

      <div class="row">
        <div class="col s1"></div>
        <div class="col s2">
          <img class="bild" src="../assets/kreativeU/A1_Schritt1.png" />
        </div>
        <div class="col s2">
          <img class="bild" src="../assets/kreativeU/A1_Schritt2.png" />
        </div>
        <div class="col s2">
          <img class="bild" src="../assets/kreativeU/A1_Schritt3.png" />
        </div>
        <div class="col s2">
          <img class="bild" src="../assets/kreativeU/A1_Schritt4.png" />
        </div>
        <div class="col s2">
          <img class="bild" src="../assets/kreativeU/A1_Schritt5.png" />
        </div>
        <div class="col s1"></div>
      </div>
      <br />
      <div class="row picbox">
        <div class="col s4"></div>
        <div class="col s4" style="margin-left: 3%">
          1. Nimm die 2 Fäden und mache einen Knoten.<br /><br />
          2. Mache mit dem einen Faden eine Schlaufe um deinen Finger.<br /><br />
          3. Fahre mit dem zweiten Finger von innen in die Schlaufe und nehme
          den anderen Faden auf deine Fingerkuppe.<br /><br />
          4. Zieh den Faden auf deiner Fingerkuppe durch die Schlaufe, sodass
          sich eine neue Schlaufe bildet.<br /><br />
          5. Ziehe noch den alten Faden fest und wiederhole das Ganze solange
          bis dir die Länge des Bandes passt<br /><br />
        </div>
        <div class="col s4"></div>
      </div>

      <p class="lets">Armband knüpfen</p>
      <div class="row">
        <div class="col s1"></div>
        <div class="col s10">
          <img class="bild1" src="../assets/kreativeU/A2_Beispielbild1.jpg" />
          <img class="bild2" src="../assets/kreativeU/A2_Beispielbild2.jpg" />
        </div>
        <div class="col s1"></div>
      </div>

      <div class="row">
        <p class="schrift">Anleitung</p>
        <p class="hometext">
          Materialen: 9 Wollfäden in 3 unterschiedlichen Farben (1 Farbe = 3
          Fäden)
        </p>
        <br />

        <div class="row">
          <div class="col s2"></div>
          <div class="col s2">
            <img class="bild" src="../assets/kreativeU/A2_Schritt1.png" />
          </div>
          <div class="col s2">
            <img class="bild" src="../assets/kreativeU/A2_Schritt2.png" />
          </div>
          <div class="col s2">
            <img class="bild" src="../assets/kreativeU/A2_Schritt3.png" />
          </div>
          <div class="col s2">
            <img class="bild" src="../assets/kreativeU/A2_Schritt4.png" />
          </div>
          <div class="col s2"></div>
        </div>

        <div class="row">
          <div class="col s2"></div>
          <div class="col s2">
            <img class="bild" src="../assets/kreativeU/A2_Schritt5.png" />
          </div>
          <div class="col s2">
            <img class="bild" src="../assets/kreativeU/A2_Schritt6.png" />
          </div>
          <div class="col s2">
            <img class="bild" src="../assets/kreativeU/A2_Schritt7.png" />
          </div>
          <div class="col s2">
            <img class="bild" src="../assets/kreativeU/A2_Schritt8.png" />
          </div>
          <div class="col s2"></div>
        </div>

        <br />
        <div class="row picbox">
          <div class="col s4"></div>
          <div class="col s4" style="margin-left: 3%">
            1. Nimm die 9 Fäden, mache einen Knoten und befestige die Fäden
            mithilfe von Klebeband am Tisch<br /><br />
            2. Ordne die Fäden nun in der Reihenfolge an, in der du sie haben
            möchtest.<br /><br />
            3. Nimm den äußersten Faden von links in die rechte Hand und den
            Faden daneben in die linke Hand.<br /><br />
            4. Fädle nun den Faden in der rechten Hand durch die entstandene
            Schlaufe, sodass ein Knoten entsteht und ziehe diesen fest.<br /><br />
            5. Wiederhole das Ganze mit den selben Fäden.<br /><br />
            6. Nimm nun den nächsten Faden in die linke Hand und wiederhole das
            Ganze bis du am Ende der Reihe bist.<br /><br />
            7. Starte nun wieder am Anfang der Reihe und führe das Ganze solange
            durch bis dir die Länge des Bandes passt.<br /><br />
            8. Mache nun wieder einen Knoten in das Band und du bist fertig.<br /><br />
          </div>
          <div class="col s4"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Kreativ",
  mounted: function () {
    var element = this.$refs["startkreativv"];
    var top = element.offsetTop;
    window.scrollTo(0, top - 100);
  },
  methods: {
    sc() {
      var element = this.$refs["inhaltkreativv"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
