<template>
    <div class="statistik">
      <Header />
      <section id="begruessung">
        <Titel msg="Informationen" />
        <Zitat msg="... Oft finden Betroffene nicht genug oder die richtigen Informationen. 
            Auf stundenlanges Suchen und Durchstöbern des Internets haben diese Personen 
            keine Zeit und Lust, und wenn sie endlich eine Webseite zu dem Thema 
            gefunden haben, kommen sie erst über einen Irrgarten an Links ans Ziel. ..." msg2="Ghost Covid"/><br><br>
        <a href="#contenthome" class="startbutton">Let's 𝒈𝒆𝒕 𝒊𝒏𝒇𝒐𝒓𝒎𝒆𝒅 together!</a>
      </section>
      <section id="contenthome">
        <p class="lets">Teil der Coronainfizierten entwickelt ME/CFS</p>
        <div class="row infos">
          <div class="col s6">
            <img class="infogr" src="../assets/grafik01.png" />
          </div>
          <div class="col s6 infotext">
            ... Von Betroffenen, die mindestens 28 Tage nach der Infektion mit SARS-CoV-2 weiterhin 
            Symptome berichteten, litten auch nach 6 Monaten noch 91,8 % an persistierenden Symptomen. 
            Nach 6 Monaten waren die drei häufigsten Symptome Fatigue, Post-Exertional Malaise und 
            Brain Fog (kognitive Dysfunktion). ... Die Schwere der Symptome scheint tendenziell abzunehmen, 
            aber auch nach 7 Monaten stufte die Mehrheit der Studienteilnehmer*innen ihre Symptome als 
            moderat ein. Die Anzahl der berichteten Symptome hatte im Schnitt ihren Höhepunkt in Monat 2 seit 
            Krankheitsbeginn und flachte anschließend in den Folgemonaten leicht ab, auf durchschnittlich 
            13,8 Symptome in Monat 7. ... <br><br>
            <a href="https://www.mecfs.de/studien-zu-long-covid-ein-teil-der-coronainfizierten-entwickelt-me-cfs/" target="_blank">
              <button class="waves-effect waves-light btn buttoninf">Artikel</button>
            </a>
          </div>
        </div>
        <p class="lets">-</p>
        <p class="lets">Long-COVID: Der lange Weg der Genesung</p>
        <div class="row infos">
          <div class="col s6">
            <img class="infogr" src="../assets/grafik02.png" />
          </div>
          <div class="col s6 infotext">
            - Bei Symptomen bis zu 4 Wochen nach der Infektion mit dem SARS-CoV-2 Virus handelt es sich um akutes COVID-19. 
            Dabei treten verschiedene Schweregrade auf. Schwere und kritische Fälle müssen im Spital versorgt werden. <br>
            - Im weiteren Verlauf (4-8 Wochen) werden die Symptome als fortwährend bezeichnet. Typische Symptome sind Husten, 
            Atemnot, Fieber, Hals-/Kopf-/Gliederschmerzen. <br>
            - Bleiben die Symptome länger als 8 Wochen bestehen und können nicht durch weitere Diagnosen anderen Erkrankungen 
            zugeschrieben werden, spricht man vom Post-COVID Syndrom. <br>
            - In Fachkreisen wird nun die gesamte Zeit ab 4 Wochen nach der Infektion als Long-COVID bezeichnet, sobald zu 
            den bestehenden Symptomen auch neue hinzukommen. <br><br>
            <a href="https://www.pfizermed.at/news/long-covid-der-lange-weg-der-genesung" target="_blank">
              <button class="waves-effect waves-light btn buttoninf">Artikel</button>
            </a>
          </div>
        </div>
        <p class="lets">-</p>
        <p class="lets">Long COVID</p>
        <div class="row infos">
          <div class="col s6">
            <img class="infogr" src="../assets/grafik03.png" />
          </div>
          <div class="col s6 infotext">
            ... Geimpfte Menschen berichten, mehr Menschen mit Long-COVID zu kennen als Ungeimpfte. Eine Ursache-Wirkungs-Interpretation 
            ist hier allerdings nicht möglich. In der Tendenz sind Ungeimpfte, die Menschen mit Long-COVID kennen eher impfbereiter 
            als Menschen, die niemanden mit Long-COVID kennen (n.s., p = 0.08). Ungeachtet des Impfstatus macht aber eine Bekanntschaft 
            mit Long-COVID etwas mit der eigenen Wahrnehmung: Befragungsteilnehmende, die jemanden mit Long-COVID kennen, schätzen eine 
            Infektion als risikoreicher (schwerwiegender) ein, haben mehr Angst vor einer Infektion und haben mehr Sorgen über 
            Langzeitfolgen. Außerdem sind sie eher für eine Impfpflicht als Menschen, die niemanden mit Long-COVID kennen. ... <br><br>
            <a href="https://projekte.uni-erfurt.de/cosmo2020/web/topic/risiko-emotionen-sorgen/40-longcovid/" target="_blank">
              <button class="waves-effect waves-light btn buttoninf">Artikel</button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  
</template>

<script>
export default {
  name: "Statistik",
  components: {
  },
};
</script>
