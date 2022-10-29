<template>
    <div class="home">
      <Header />
      <Titel msg="Herzlich Willkommen" />

      <div class="row welcome">
        <div class="col s3">
          <div class="row welcome">
            <div class="col s12"><router-link to="/spiele"><a class="waves-effect waves-light btn buttonhom btn"><i class="material-icons left" style="font-size: 175%;">extension</i>Spiele</a></router-link></div>
          </div>
          <div class="row welcome">
            <div class="col s12"><router-link to="/podcast"><a class="waves-effect waves-light btn-small buttonhom btn"><i class="material-icons left" style="font-size: 175%;">mic</i>Podcast</a></router-link></div>
          </div>
          <div class="row welcome">
            <div class="col s12"><router-link to="/forum"><a class="waves-effect waves-light btn-small buttonhom btn"><i class="material-icons left" style="font-size: 175%;">forum</i>Forum</a></router-link></div>
          </div>
          <div class="row welcome">
            <div class="col s12"><router-link to="/statistik"><a class="waves-effect waves-light btn-small buttonhom btn"><i class="material-icons left" style="font-size: 175%;">info</i>Infos</a></router-link></div>
          </div>
        </div>
        
        <div class="col s9 content">
          <p class="lets">Let's 𝑮𝒉𝒐𝒔𝒕 𝑪𝒐𝒗𝒊𝒅 together!</p>
          <p class="hometext">
            Dies ist eine Seite für Long-Covid, Post Covid Syndrom und alle anderen Betroffenen! <br><br>
            Egal ob du an Long-Covid leidest oder jemanden kennst, hier sind alle Willkommen und eingeladen, sich zu Informieren zu holen und bei Bedarf gerne auch die Spiele auszuprobieren.
            Für die kreativen Personen gibt es eine krative Ecke mit Mandalas und ähnlichen Übungen. Wir bieten außerdem eine Vielzahl an Entspannungsübungen mit Bildern und Erklärung an.
            <br><br>
            In unserem Podcast erzählen Betroffene, wie es ihnen mit der Situation geht und was ihnen besonders geholfen hat.
            Außerdem könnt ihr euch selbst in unserem Forum mit Gleichgesinnten austauschen und Erfahrungen sammeln bzw. weitergeben.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  
</template>

<script>
export default {
  name: "Home",
  components: {
  },
};
</script>
