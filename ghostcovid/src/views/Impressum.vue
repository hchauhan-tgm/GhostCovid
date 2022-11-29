<template>
    <div class="impressum">
      <Header />
      <section id="begruessung">
        <Titel msg="Impressum" />
        <h2>Kontakt</h2>
        Ghost Covid GmbH <br>
        Wexstraße 19-23, 1200 Wien <br>
        Tel: <a href="tel:+4312364599">+43 (0) 12364599</a> <br>
        Mail: <a href="mailto:ghostcovid@tgm.ac.at">ghostcovid@gmail.com</a>
      </section>
      <section id="team" class="contenthome">
        <p class="lets">Team</p>
        <p class="hometext">
          Wir sind ein Team bestehend aus vier SchülerInnen aus der Abteilung für Informationstechnologie vom Technologischen Gewerbemuseum (TGM). <br>
          Dieses Projekt wurde als Dilomprojekt im Jahr 2022/23 gemeinsam erstellt.<br>
          Alle Rechte liegen bei uns.
        </p><br><br>
        <div class="row infos">
          <div class="col s6" style="text-align:right">
            <img src="../assets/jasmin2.png" class="kopf"/>
          </div>
          <div class="col s6 infotext">
            <p class="name">Jasmin Wagner</p>
            Position: <b>Projektleiterin</b><br>
            Aufgabenbereich: <b>Web Developer</b><br>
            E-Mail: <b><a href="mailto:jwagner.ghostcovid@gmail.com" style="color:#C1FFC1;text-decoration:underline">jwagner.ghostcovid@gmail.com</a></b><br>
            Telefon: <b><a href="tel:+4312349876" style="color:#C1FFC1">+43 1234 9876</a></b><br><br>
            <i>"Motivation is the key!"</i>
          </div>
        </div>
        <div class="row infos">
          <div class="col s6" style="text-align:right">
            <img src="../assets/nimy2.png" class="kopf"/>
          </div>
          <div class="col s6 infotext">
            <p class="name">Nimy Abraham</p>
            Position: <b>Projektmitglied</b><br>
            Aufgabenbereich: <b>Full Stack Developer</b><br>
            E-Mail: <b><a href="mailto:nabraham.ghostcovid@gmail.com" style="color:rgb(255, 136, 245);text-decoration:underline">nabraham.ghostcovid@gmail.com</a></b><br>
            Telefon: <b><a href="tel:+4312349876" style="color:rgb(255, 136, 245)">+43 1234 9876</a></b><br><br>
            <i>"Erst die Arbeit, dann das Vergnügen!"</i>
          </div>
        </div>
        <div class="row infos">
          <div class="col s6" style="text-align:right">
            <img src="../assets/harman2.jpg" class="kopf"/>
          </div>
          <div class="col s6 infotext">
            <p class="name">Harmanpreet Chauhan</p>
            Position: <b>Projektmitglied</b><br>
            Aufgabenbereich: <b>Full Stack Developer</b><br>
            E-Mail: <b><a href="mailto:hchauhan.ghostcovid@gmail.com" style="color:darkblue;text-decoration:underline">hchauhan.ghostcovid@gmail.com</a></b><br>
            Telefon: <b><a href="tel:+4312349876" style="color:darkblue">+43 1234 9876</a></b><br><br>
            <i>"Staying focused is the only way to succeed!"</i>
          </div>
        </div>
        <div class="row infos">
          <div class="col s6" style="text-align:right">
            <img src="../assets/sarah2.jpg" class="kopf"/>
          </div>
          <div class="col s6 infotext">
            <p class="name">Sarah Frick</p>
            Position: <b>Projektmitglied</b><br>
            Aufgabenbereich: <b>Content Creator</b><br>
            E-Mail: <b><a href="mailto:sfrick.ghostcovid@gmail.com" style="color:pink;text-decoration:underline">sfrick.ghostcovid@gmail.com</a></b><br>
            Telefon: <b><a href="tel:+4312349876" style="color:pink">+43 68181499583</a></b><br><br>
            <i>"Aufgeschoben ist nicht aufgehoben!"</i>
          </div>
        </div>

        <p class="lets">-</p>
        <p class="lets">Weiterführende Links</p>
        <a href="https://www.tgm.ac.at/" class="weiterlinks" target="_blank">Technologisches Gewerbemuseum</a><br>
        <a href="https://www.tgm.ac.at/?page_id=12662" class="weiterlinks"  target="_blank">Höhere Abteilung für Informationstechnologie</a><br><br>
        <a href="https://www.who.int/" class="weiterlinks" target="_blank">Weltgesundheitsorganisation</a><br><a href="https://www.sozialministerium.at/" class="weiterlinks" target="_blank">Österreichisches Gesundheitsministerium</a><br>
        <a href="https://www.bundesgesundheitsministerium.de/" class="weiterlinks" target="_blank">Deutsches Gesundheitsministerium</a><br>
        <a href="https://www.bag.admin.ch/bag/de/home.html" class="weiterlinks" target="_blank">Schweizer Gesundheitsministerium</a><br>
      </section>
      <section id="endehome">
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
  name: "Impressum",
  components: {
  },
};
</script>
