<template>
    <div class="registrieren">
      <Header />
      <Titel msg="Registrieren"/>

      <div class="regbox">
        <div class="row">
          <div class="col s2"></div>
            <div class="input-field col s4">
              <input id="vn" type="text" class="validate">
              <label for="vn">Vorname</label>
            </div>
            <div class="input-field col s4">
              <input id="nn" type="text" class="validate">
              <label for="nn">Nachname</label>
            </div>
          <div class="col s2"></div>
        </div>

        <div class="row">
          <div class="col s2"></div>
            <div class="input-field col s8">
              <input id="email" type="email" class="validate">
              <label for="email">E-Mail Adresse</label>
              <span class="helper-text" data-error="Keine gültige E-Mail Adresse" data-success="Korrekte E-Mail Adresse"></span>
            </div>
          <div class="col s2"></div>
        </div>

        <div class="row">
          <div class="col s2"></div>
            <div class="input-field col s4">
              <input id="gb" type="date" class="validate">
              <label for="gb">Geburtsdatum</label>
            </div>
            <div class="input-field col s4">
              <input id="land" type="text" class="validate">
              <label for="land">Land</label>
            </div>
          <div class="col s2"></div>
        </div>

        <div class="row">
          <div class="col s2"></div>
            <div class="input-field col s8">
              <input id="bn" type="text" class="validate">
              <label for="bn">Benutzername</label>
            </div>
            <div class="col s2"></div>
        </div>

        <div class="row">
          <div class="col s2"></div>
            <div class="input-field col s4">
              <input id="pw" type="password" class="validate">
              <label for="pw">Passwort</label>
            </div>
            <div class="input-field col s4">
              <input id="pw2" type="password" class="validate">
              <label for="pw2">Passwort wiederholen</label>
            </div>
          <div class="col s2"></div>
        </div>

        <div class="row">
          <div class="col s2"></div>
            <div class="input-field col s4">
              <router-link to="/login" class="text">
              <button class="waves-effect waves-light btn buttonreg">zum Login
                <i class="material-icons right">border_color</i>
              </button>
              </router-link>
            </div>
            <div class="input-field col s4">
              <router-link to="/" class="text">
              <button class="btn waves-effect waves-light buttonreg" type="submit" name="action">registrieren
                <i class="material-icons right">forward</i>
              </button>
              </router-link>
            </div>
          <div class="col s2"></div>
        </div>
      </div>

      <Footer />
    </div>
  
</template>

<style scoped>
/* label focus color */
.input-field input[type=text]:focus + label {
  color: #943e34;
}
/* label underline focus color */
.input-field input[type=text]:focus {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* valid color */
.input-field input[type=text].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input[type=text].invalid {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* label focus color */
.input-field input[type=password]:focus + label {
  color: #943e34;
}
/* label underline focus color */
.input-field input[type=password]:focus {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* valid color */
.input-field input[type=password].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input[type=password].invalid {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* label focus color */
.input-field input[type=email]:focus + label {
  color: #943e34;
}
/* label underline focus color */
.input-field input[type=email]:focus {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* valid color */
.input-field input[type=email].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input[type=email].invalid {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* label focus color */
.input-field input[type=date]:focus + label {
  color: #943e34;
}
/* label underline focus color */
.input-field input[type=date]:focus {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* valid color */
.input-field input[type=date].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input[type=date].invalid {
  border-bottom: 1px solid #943e34;
  box-shadow: 0 1px 0 0 #943e34;
}
/* icon prefix focus color */
.input-field .prefix.active {
  color: #000;
}
</style>

<script>
export default {
  name: "Registrieren",
  components: {
  },
};
</script>
