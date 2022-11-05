<template>
    <div class="home">
      <Header />
      <section id="begruessung">
        <Titel msg="Herzlich Willkommen" />
        <p class="hometextoben">
          Dies ist eine Seite für Long-Covid, Post Covid Syndrom und alle anderen Betroffenen! <br><br>
          Egal ob du an Long-Covid leidest oder jemanden kennst, hier sind alle Willkommen und eingeladen, sich zu Informieren und zu Trainieren.
        </p><br><br>
        <a href="#contenthome" class="startbutton">Let's 𝑮𝒉𝒐𝒔𝒕 𝑪𝒐𝒗𝒊𝒅 together!</a>
      </section>
      <section id="contenthome">
        <p class="lets">Gedächtnistraining und Austausch</p>
        <p class="hometext">
          Wir bieten eine Auswahl an verschiedenen Spielen, welche dein Gedächtnis und deine Merkfähigkeit wieder in Schwung bringen.<br>
          In unserem Podcast erzählen Betroffene, wie es ihnen mit der Situation geht und was ihnen besonders geholfen hat. <br>
          Außerdem könnt ihr euch selbst in unserem Forum mit Gleichgesinnten austauschen und Erfahrungen sammeln bzw. weitergeben. <br>
        </p><br><br>
        <router-link to="/spiele"><a class="waves-effect waves-light btn buttonhom btn"><i class="material-icons left" style="font-size: 175%;">extension</i>Spiele<i class="material-icons right" style="font-size: 175%;">extension</i></a></router-link><br>
        <router-link to="/podcast"><a class="waves-effect waves-light btn-small buttonhom btn"><i class="material-icons left" style="font-size: 175%;">mic</i>Podcast<i class="material-icons right" style="font-size: 175%;">mic</i></a></router-link><br>
        <router-link to="/forum"><a class="waves-effect waves-light btn-small buttonhom btn"><i class="material-icons left" style="font-size: 175%;">forum</i>Forum<i class="material-icons right" style="font-size: 175%;">forum</i></a></router-link><br>
        <router-link to="/statistik"><a class="waves-effect waves-light btn-small buttonhom btn"><i class="material-icons left" style="font-size: 175%;">info</i>Infos<i class="material-icons right" style="font-size: 175%;">info</i></a></router-link><br>
        <br><br>
        <p class="lets">Registrierung</p>
        <p class="hometext">
          Bei uns kannst du innerhalb von 2 Minuten ein Benutzerprofil erstellen! <br><br>
          Durch eine Registrierung kannst du Erfahrungen in unserem Forum mit anderen teilen. Außerdem werden dein Bestwerte zu den Gedächtnisspielen gespeichert - 
          so siehst du sofort, wie gut du dich verbessert hast und was dein bisheriger Bestwert war.
          <br><br>
          All diese Informationen werden in deinem Profil angezeigt, welches über das runde Icon in der rechten oberen Ecke zugänglich ist.
        </p><br><br>
        <router-link to="/registrieren"><a class="waves-effect waves-light btn-small buttonreghome btn"><i class="material-icons left" style="font-size: 100%;">border_color</i>Registrieren<i class="material-icons right" style="font-size: 100%;">border_color</i></a></router-link><br>
      </section>
      <section id="endehome">
        <p class="lets" style="color:black">Partner & Unterstützer</p>
        <p class="hometextoben">
          Wir bedanken uns bei unseren Partnern und Unterstützern! <br><br>
          Dieses Projekt wäre ohne die folgenden Institutionen nicht zustande gekommen. Sie haben uns im Entwicklungsprozess und bei der Umsetzung mit vereinten Kräften unsterstützt.
        </p><br><br>
        <div class="row welcome">
          <div class="col s4">
            <img src="../assets/logotgm.png" class="logoshome"/>
          </div>
          <div class="col s4">
            <img src="../assets/logoit.png" class="logoshome"/>
          </div>
          <div class="col s4">
            <img src="../assets/GhostCovidLogo.png" class="logoshome"/>
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