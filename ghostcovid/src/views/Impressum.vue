<template>
    <div class="impressum">
      <Header />
      <section id="begruessung">
        <Titel msg="Impressum" />
        <h2>Kontakt</h2>
        Ghost Covid GmbH <br>
        Wexstraße 19-23, 1200 Wien <br>
        Tel: +43 (0) 12364599 <br>
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
            <img src="../assets/jasmin2.jpg" class="kopf"/>
          </div>
          <div class="col s6 infotext">
            <p class="name">Jasmin Wagner</p>
            Position: <i>Projektleiterin</i><br>
            Aufgabenbereich: <i>Web Developer</i><br>
            E-Mail: <i><a href="mailto:jwagner.ghostcovid@gmail.com" style="color:#000">jwagner.ghostcovid@gmail.com</a></i><br>
            Telefon: <i>+43 1234 9876</i><br><br>
            <i>"Motivation is the key!"</i>
          </div>
        </div>
        <div class="row infos">
          <div class="col s6" style="text-align:right">
            <img src="../assets/nimy2.jpg" class="kopf"/>
          </div>
          <div class="col s6 infotext">
            <p class="name">Nimy Abraham</p>
            Position: <i>Projektmitglied</i><br>
            Aufgabenbereich: <i>Full Stack Developer</i><br>
            E-Mail: <i><a href="mailto:nabraham.ghostcovid@gmail.com" style="color:#000">nabraham.ghostcovid@gmail.com</a></i><br>
            Telefon: <i>+43 1234 9876</i><br><br>
            <i>"Erst die Arbeit, dann das Vergnügen!"</i>
          </div>
        </div>
        <div class="row infos">
          <div class="col s6" style="text-align:right">
            <img src="../assets/harman2.jpg" class="kopf"/>
          </div>
          <div class="col s6 infotext">
            <p class="name">Harmanpreet Chauhan</p>
            Position: <i>Projektmitglied</i><br>
            Aufgabenbereich: <i>Full Stack Developer</i><br>
            E-Mail: <i><a href="mailto:hchauhan.ghostcovid@gmail.com" style="color:#000">hchauhan.ghostcovid@gmail.com</a></i><br>
            Telefon: <i>+43 1234 9876</i><br><br>
            <i>"Staying focused is the only way to succeed!"</i>
          </div>
        </div>
        <div class="row infos">
          <div class="col s6" style="text-align:right">
            <img src="../assets/sarah2.jpg" class="kopf"/>
          </div>
          <div class="col s6 infotext">
            <p class="name">Sarah Frick</p>
            Position: <i>Projektmitglied</i><br>
            Aufgabenbereich: <i>Content Creator</i><br>
            E-Mail: <i><a href="mailto:sfrick.ghostcovid@gmail.com" style="color:#000">sfrick.ghostcovid@gmail.com</a></i><br>
            Telefon: <i>+43 1234 9876</i><br><br>
            <i>"Aufgeschoben ist nicht aufgehoben!"</i>
          </div>
        </div>

        <p class="lets">-</p>
        <p class="lets">Weiterführende Links</p>
        <i><a href="https://www.tgm.ac.at/" style="color:#000" target="_blank">Technologisches Gewerbemuseum</a></i><br>
        <i><a href="https://www.tgm.ac.at/?page_id=12662" style="color:#000"  target="_blank">Höhere Abteilung für Informationstechnologie</a></i><br><br>
        <i><a href="https://www.sozialministerium.at/" style="color:#000" target="_blank">Österreichisches Gesundheitsministerium</a></i><br>
        <i><a href="https://www.bundesgesundheitsministerium.de/" style="color:#000" target="_blank">Deutsches Gesundheitsministerium</a></i><br>
        <i><a href="https://www.bag.admin.ch/bag/de/home.html" style="color:#000" target="_blank">Schweizer Gesundheitsministerium</a></i><br>
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
