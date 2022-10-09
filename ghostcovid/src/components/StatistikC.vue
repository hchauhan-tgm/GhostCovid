<template>
  <div class="hello body">
    <h1>{{ msg }}</h1>
    <div class="row" style="text-align:center">
      <div class="col s1"></div>
      <div class="col s10">
        ... Oft finden Betroffene nicht genug oder die richtigen Informationen. 
        Auf stundenlanges Suchen und Durchstöbern des Internets haben diese Personen 
        keine Zeit und Lust, und wenn sie endlich eine Webseite zu dem Thema 
        gefunden haben, kommen sie erst über einen Irrgarten an Links ans Ziel. ...
        <p style="font-style: italic; font-size: 90%">Ghost Covid</p>
      </div>
      <div class="col s1"></div>
    </div>
    <div class="row">
      <div class="col s6">
        <img src="../assets/grafik01.png" />
      </div>
      <div class="col s6" style="margin-top: 1%;">
        ... Von Betroffenen, die mindestens 28 Tage nach der Infektion mit SARS-CoV-2 weiterhin 
        Symptome berichteten, litten auch nach 6 Monaten noch 91,8 % an persistierenden Symptomen. 
        Nach 6 Monaten waren die drei häufigsten Symptome Fatigue, Post-Exertional Malaise und 
        Brain Fog (kognitive Dysfunktion). ... Die Schwere der Symptome scheint tendenziell abzunehmen, 
        aber auch nach 7 Monaten stufte die Mehrheit der Studienteilnehmer*innen ihre Symptome als 
        moderat ein. Die Anzahl der berichteten Symptome hatte im Schnitt ihren Höhepunkt in Monat 2 seit 
        Krankheitsbeginn und flachte anschließend in den Folgemonaten leicht ab, auf durchschnittlich 
        13,8 Symptome in Monat 7. ... <br><br>
        <a href="https://www.mecfs.de/studien-zu-long-covid-ein-teil-der-coronainfizierten-entwickelt-me-cfs/" target="_blank">
          <button class="waves-effect waves-light btn">Artikel</button>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <img src="../assets/grafik02.png" />
      </div>
      <div class="col s6" style="margin-top: 1%;">
        - Bei Symptomen bis zu 4 Wochen nach der Infektion mit dem SARS-CoV-2 Virus handelt es sich um akutes COVID-19. 
        Dabei treten verschiedene Schweregrade auf. Schwere und kritische Fälle müssen im Spital versorgt werden. <br>
        - Im weiteren Verlauf (4-8 Wochen) werden die Symptome als fortwährend bezeichnet. Typische Symptome sind Husten, 
        Atemnot, Fieber, Hals-/Kopf-/Gliederschmerzen. <br>
        - Bleiben die Symptome länger als 8 Wochen bestehen und können nicht durch weitere Diagnosen anderen Erkrankungen 
        zugeschrieben werden, spricht man vom Post-COVID Syndrom. <br>
        - In Fachkreisen wird nun die gesamte Zeit ab 4 Wochen nach der Infektion als Long-COVID bezeichnet, sobald zu 
        den bestehenden Symptomen auch neue hinzukommen. <br><br>
        <a href="https://www.pfizermed.at/news/long-covid-der-lange-weg-der-genesung" target="_blank">
          <button class="waves-effect waves-light btn">Artikel</button>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <img src="../assets/grafik03.png" />
      </div>
      <div class="col s6" style="margin-top: 1%;">
        ... Geimpfte Menschen berichten, mehr Menschen mit Long-COVID zu kennen als Ungeimpfte. Eine Ursache-Wirkungs-Interpretation 
        ist hier allerdings nicht möglich. In der Tendenz sind Ungeimpfte, die Menschen mit Long-COVID kennen eher impfbereiter 
        als Menschen, die niemanden mit Long-COVID kennen (n.s., p = 0.08). Ungeachtet des Impfstatus macht aber eine Bekanntschaft 
        mit Long-COVID etwas mit der eigenen Wahrnehmung: Befragungsteilnehmende, die jemanden mit Long-COVID kennen, schätzen eine 
        Infektion als risikoreicher (schwerwiegender) ein, haben mehr Angst vor einer Infektion und haben mehr Sorgen über 
        Langzeitfolgen. Außerdem sind sie eher für eine Impfpflicht als Menschen, die niemanden mit Long-COVID kennen. ... <br>
        <a href="https://projekte.uni-erfurt.de/cosmo2020/web/topic/risiko-emotionen-sorgen/40-longcovid/" target="_blank">
          <button class="waves-effect waves-light btn">Artikel</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatistikC",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  margin-top: 100px;
  margin-bottom: 60px;
}
.row {
  width: 80%;
  height: 30%;
  padding-top: 1%;
  text-align: left;
  font-size: 100%;
}
img {
  height: 100%;
  width: 100%;
}
.btn{
  color: #fff;
  background-color: #a35152;
  width: 25%;
  font-family: 'Alegreya SC', serif; 
  text-transform: small-caps;
}
h1 {
  margin: 40px 0 0;
  font-family: 'Alegreya SC', serif;
  font-variant: small-caps;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
