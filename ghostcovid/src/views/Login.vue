<template>
    <div class="login">
      <Header />
      <Titel msg="Login" />

      <div class="logbox">
        <div class="row">
          <div class="col s4"></div>
            <div class="col s4" style="background-color:#fff;border-radius:10px;padding-top:10px">
              <div class="input-field">
                <i class="material-icons prefix">account_circle</i>
                <input id="icon_prefix1" type="text" class="validate">
                <label for="icon_prefix1">Benutzername</label>
              </div>
            </div>
            <div class="col s4"></div>
        </div>
        <div class="row">
          <div class="col s4"></div>
            <div class="col s4" style="background-color:#fff;border-radius:10px;padding-top:10px">
              <div class="input-field">
                <i class="material-icons prefix">https</i>
                <input id="icon_prefix2" type="password" class="validate">
                <label for="icon_prefix2">Passwort</label>
              </div>
            </div>
          <div class="col s4"></div>
        </div>
        <div class="row">
          <div class="col s4"></div>
            <div class="input-field col s2">
              <router-link to="/registrieren" >
              <button class="waves-effect waves-light buttonlog">registrieren
                <i class="material-icons right">border_color</i>
              </button>
              </router-link>
            </div>
            <div class="input-field col s2">
              <router-link to="/">
              <button class="waves-effect waves-light buttonlog" type="submit" name="action">einloggen
                <i class="material-icons right">forward</i>
              </button>
              </router-link>
            </div>
          <div class="col s4"></div>
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
/* icon prefix focus color */
.input-field .prefix.active {
  color: #000;
}
</style>

<script>
export default {
  name: "Login",
  components: {
  },
};
</script>
