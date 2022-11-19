<template>
    <div class="spiele">
      <Header />
      <section id="begruessung">
        <Titel msg="Spiele" />
        <Zitat msg="... Gedächtnisprobleme stiegen nach sechs bis 18 Monaten nach der akuten Erkrankung an. 
        Nach einem halben Jahr war das Risiko für Gedächtnisprobleme noch um 11,5 Prozent erhöht, bei Frauen waren es 18,7 Prozent.  ..." msg2="Kurier"/><br><br>
        <a href="#training/spiele" class="startbutton">Let's <b style="font-family:Chalkduster; letter-spacing:1px;">play</b> together!</a>
      </section>
      <section id="training/spiele" class="contenthome">
        <p class="lets">Memory</p>
        <div class="row infos">
          <div class="col s6">
            <img class="infogr" src="../assets/spielew.png" />
          </div>
          <div class="col s6 infotext">
            Das Ziel ist, möglichst schnell alle Paarungen zu finden.<br><br>
            Dabei müssen nacheinander immer zwei Karten umgedreht werden - durch einen einfachen Klick auf die Rückseite der Karte, die man ansehen möchte.
            Haben die zwei gewählten Karten die selbe Farbe, bleiben sie aufgedeckt und man hat ein Paar "gefunden".
            Haben die zwei gewählten Karten nicht die selbe Farbe, werden sie wieder verdeckt - man muss sich also merken unter welcher Karte sich welche Farbe versteckt. <br>
            <router-link to="/training/spiele/memory"><button class="waves-effect waves-light buttoninf">Spiel starten</button></router-link>
          </div>
        </div>
        <p class="lets">-</p>
        <p class="lets">Schiebepuzzle</p>
        <div class="row infos">
          <div class="col s6">
            <img class="infogr" src="../assets/spielew.png" />
          </div>
          <div class="col s6 infotext">
            Ziel ist es, die Zahlen möglichst schnell in die richtige Reihenfolge zu bringen. <br><br>
            Dabei kann man durch Anklicken eine Zahl verschieben - dies funktioniert jedoch nur, wenn ein Nebenfeld dieser Zahl frei ist.
            Die Zahlen müssen so angeordnet werden, dass in der obersten Reihe die Ziffern 1 bis 4 stehen und in der untersten 13 bis 15.
            Das Feld rechts unten in der Ecke mus am Ende frei sein, damit man gewonnen hat. <br>
            <router-link to="/training/spiele/schiebepuzzle"><button class="waves-effect waves-light buttoninf">Spiel starten</button></router-link>
          </div>
        </div>
        <p class="lets">-</p>
        <p class="lets">Merk's dir</p>
        <div class="row infos">
          <div class="col s6">
            <img class="infogr" src="../assets/spielew.png" />
          </div>
          <div class="col s6 infotext">
            ... Geimpfte Menschen berichten, mehr Menschen mit Long-COVID zu kennen als Ungeimpfte. Eine Ursache-Wirkungs-Interpretation 
            ist hier allerdings nicht möglich. In der Tendenz sind Ungeimpfte, die Menschen mit Long-COVID kennen eher impfbereiter 
            als Menschen, die niemanden mit Long-COVID kennen (n.s., p = 0.08). Ungeachtet des Impfstatus macht aber eine Bekanntschaft 
            mit Long-COVID etwas mit der eigenen Wahrnehmung: Befragungsteilnehmende, die jemanden mit Long-COVID kennen, schätzen eine 
            Infektion als risikoreicher (schwerwiegender) ein, haben mehr Angst vor einer Infektion und haben mehr Sorgen über 
            Langzeitfolgen. Außerdem sind sie eher für eine Impfpflicht als Menschen, die niemanden mit Long-COVID kennen. ... <br>
            <router-link to="/training/spiele/merken"><button class="waves-effect waves-light buttoninf">Spiel starten</button></router-link>
          </div>
        </div>
        <p class="lets">-</p>
        <p class="lets">Farbendurcheinander</p>
        <div class="row infos">
          <div class="col s6">
            <img class="infogr" src="../assets/spielew.png" />
          </div>
          <div class="col s6 infotext">
            ... Geimpfte Menschen berichten, mehr Menschen mit Long-COVID zu kennen als Ungeimpfte. Eine Ursache-Wirkungs-Interpretation 
            ist hier allerdings nicht möglich. In der Tendenz sind Ungeimpfte, die Menschen mit Long-COVID kennen eher impfbereiter 
            als Menschen, die niemanden mit Long-COVID kennen (n.s., p = 0.08). Ungeachtet des Impfstatus macht aber eine Bekanntschaft 
            mit Long-COVID etwas mit der eigenen Wahrnehmung: Befragungsteilnehmende, die jemanden mit Long-COVID kennen, schätzen eine 
            Infektion als risikoreicher (schwerwiegender) ein, haben mehr Angst vor einer Infektion und haben mehr Sorgen über 
            Langzeitfolgen. Außerdem sind sie eher für eine Impfpflicht als Menschen, die niemanden mit Long-COVID kennen. ... <br>
            <router-link to="/training/spiele/farben"><button class="waves-effect waves-light buttoninf">Spiel starten</button></router-link>
          </div>
        </div>
      </section>

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
