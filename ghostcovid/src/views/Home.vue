<template>
    <div class="home">
      <Header />
      <section id="begruessung">
        <Titel msg="Herzlich Willkommen" />
        <p class="hometextoben">
          Dies ist eine Seite für Long-Covid, Post Covid Syndrom und alle anderen Betroffenen! <br><br>
          Egal ob du an Long-Covid leidest oder jemanden kennst, hier sind alle Willkommen und eingeladen, sich zu Informieren und zu Trainieren.
        </p><br><br>
        <a href="##" class="startbutton" v-on:click.alt="data">Let's <b style="font-family:Chalkduster; letter-spacing:1px;">Ghost Covid</b> together!</a>
      </section>
      <section id="#" class="contenthome">
        <p class="lets">Gedächtnistraining und Austausch</p>
        <p class="hometext">
          Wir bieten eine Auswahl an verschiedenen Spielen, welche dein Gedächtnis und deine Merkfähigkeit wieder in Schwung bringen.<br>
          In unserem Podcast erzählen Betroffene, wie es ihnen mit der Situation geht und was ihnen besonders geholfen hat. <br>
          Außerdem könnt ihr euch selbst in unserem Forum mit Gleichgesinnten austauschen und Erfahrungen sammeln bzw. weitergeben. <br>
        </p><br><br>
        <div class="row">
          <div class="col s4"></div>
          <div class="col s4">
            <router-link to="/training/spiele"><a class="waves-effect waves-light buttonhom"><i class="material-icons top" style="font-size: 150%;">extension</i>Spiele</a></router-link>
            <router-link to="/erfahrungen/podcast"><a class="waves-effect waves-light buttonhom"><i class="material-icons top" style="font-size: 150%;">mic</i>Podcast</a></router-link>
            <router-link to="/erfahrungen/forum"><a class="waves-effect waves-light buttonhom"><i class="material-icons top" style="font-size: 150%;">forum</i>Forum</a></router-link>
            <router-link to="/statistik"><a class="waves-effect waves-light buttonhom"><i class="material-icons top" style="font-size: 150%;">info</i>Infos</a></router-link>
          </div>
          <div class="col s4"></div>
        </div>
        <br><br>
        <p class="lets">-</p>
        <p class="lets">Registrierung</p>
        <p class="hometext">
          Bei uns kannst du innerhalb von 2 Minuten ein Benutzerprofil erstellen! <br><br>
          Durch eine Registrierung kannst du Erfahrungen in unserem Forum mit anderen teilen. Außerdem werden dein Bestwerte zu den Gedächtnisspielen gespeichert - 
          so siehst du sofort, wie gut du dich verbessert hast und was dein bisheriger Bestwert war.
          <br><br>
          All diese Informationen werden in deinem Profil angezeigt, welches über das runde Icon in der rechten oberen Ecke zugänglich ist.
        </p><br><br>
        <div class="row">
          <div class="col s4"></div>
          <div class="col s4">
            <router-link to="/registrieren"><a class="waves-effect waves-light buttonhom"><i class="material-icons top" style="font-size: 150%;">border_color</i>Registrieren</a></router-link><br>
          </div>
          <div class="col s4"></div>
        </div>
      </section>
      <section id="endehome">
        <p class="lets" style="color:black">Partner & Unterstützung</p>
        <p class="hometextoben">
          Wir bedanken uns bei unseren Partnern und Unterstützern! <br><br>
          Dieses Projekt wäre ohne die folgenden Institutionen nicht zustande gekommen. Sie haben uns im Entwicklungsprozess und bei der Umsetzung mit vereinten Kräften unterstützt.
        </p><br><br>
        <div class="row welcome">
          <div class="col s4">
            <a href="https://www.tgm.ac.at/" target="_blank"><img src="../assets/logotgm.png" class="logoshome" alt="TGM Logo"/></a>
          </div>
          <div class="col s4">
            <a href="https://www.tgm.ac.at/?page_id=12662" target="_blank"><img src="../assets/logoit.png" class="logoshome" alt="HIT Logo"/></a>
          </div>
          <div class="col s4">
            <a href="https://ghostcovid.netlify.app" target="_blank"><img src="../assets/GhostCovidLogo.png" class="logoshome" alt="['goostcohvit']Logo"/></a>
          </div>
        </div>
      </section>

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