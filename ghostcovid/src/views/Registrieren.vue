<template>
  <div class="registrieren" ref="startregg">
    <Header />
    <!-- Titel Abschnitt mit Anleitung -->
    <!-- <Titel :msg="Registrieren" />
    <Zitat :msg="Wenn du noch kein Benutzerkonto erstellt hast, kannst du dich hier ganz einfach registrieren." :msg2="Was ist das?" /><br> -->

    <!-- Input Felder und Buttons -->
    <div class="obentr">
      <div class="row">
        <div class="col s2"></div>
          <div class="col s4" style="background-color:#fff;border-radius:10px;padding-top:10px;margin:5px;width:33%">
            <div class="input-field">
              <i class="material-icons prefix">person</i>
              <input id="vn" type="text" class="validate" v-model="data.vn">
              <label for="vn">Vorname</label>
            </div>
          </div>
          <div class="col s4" style="background-color:#fff;border-radius:10px;padding-top:10px;margin:5px;width:33%">
            <div class="input-field">
              <i class="material-icons prefix">person</i>
              <input id="nn" type="text" class="validate" v-model="data.nn">
              <label for="nn">Nachname</label>
            </div>
          </div>
        <div class="col s2"></div>
      </div>

      <div class="row">
        <div class="col s2"></div>
          <div class="col s8" style="background-color:#fff;border-radius:10px;padding-top:10px;margin-left:5px">
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input id="email" type="email" class="validate" v-model="data.email">
              <label for="email">E-Mail Adresse</label>
              <span class="helper-text" data-error="Keine gültige E-Mail Adresse" data-success="Korrekte E-Mail Adresse"></span>
            </div>
          </div>
        <div class="col s2"></div>
      </div>

      <div class="row">
        <div class="col s2"></div>
          <div class="col s4" style="background-color:#fff;border-radius:10px;padding-top:10px;margin:5px;width:33%">
            <div class="input-field">
              <i class="material-icons prefix">cake</i>
              <input id="gb" type="date" class="validate" v-model="data.gebdatum">
              <label for="gb">Geburtsdatum</label>
            </div>
          </div>
          <div class="col s4" style="background-color:#fff;border-radius:10px;padding-top:10px;margin:5px;width:33%">
            <div class="input-field">
              <i class="material-icons prefix">location_on</i>
              <input id="land" type="text" class="validate" v-model="data.land">
              <label for="land">Land</label>
            </div>
          </div>
        <div class="col s2"></div>
      </div>

      <div class="row">
        <div class="col s2"></div>
          <div class="col s8" style="background-color:#fff;border-radius:10px;padding-top:10px;margin-left:5px">
            <div class="input-field">
              <i class="material-icons prefix">account_circle</i>
              <input id="bn" type="text" class="validate" v-model="data.bname">
              <label for="bn">Benutzername</label>
            </div>
          </div>
          <div class="col s2"></div>
      </div>

      <div class="row">
        <div class="col s2"></div>
          <div class="col s4" style="background-color:#fff;border-radius:10px;padding-top:10px;margin:5px;width:33%">
            <div class="input-field">
              <i class="material-icons prefix">https</i>
              <input id="pw" type="password" class="validate" v-model="data.pw">
              <label for="pw">Passwort</label>
            </div>
          </div>
          <div class="col s4" style="background-color:#fff;border-radius:10px;padding-top:10px;margin:5px;width:33%">
            <div class="input-field">
              <i class="material-icons prefix">https</i>
              <input id="pw2" type="password" class="validate" v-model="data.pwrepeat">
              <label for="pw2">Passwort wiederholen</label>
            </div>
          </div>
        <div class="col s2"></div>
      </div>

      <div class="row">
        <div class="col s2"></div>
          <div class="input-field col s4">
            <router-link to="/login">
              <a class="waves-effect waves-light buttonlog">zum Login</a>
            </router-link>
          </div>
          <div class="input-field col s4">
            <router-link to="/login">
              <input type="button" @click="signUp" value="Registrieren" class="waves-effect waves-light buttonlog" />
              <!--<a class="waves-effect waves-light buttonlog">registrieren</a>-->
              <!-- <p v-if="msg">{{ msg }}</p> -->
            </router-link>
          </div>
        <div class="col s2"></div>
      </div>
    </div>
    <div id="contentreg">
    </div>

    <Footer />
  </div>
  
</template>

<script>
import DataServices from '@/services/DataServices.js';
export default {
  name: "Registrieren",
  data() {
    return {
      data: {
        vn: "",
        nn: '',
        email: '',
        gebdatum: '',
        land: '',
        bname: '',
        pw: '',
        pwrepeat: '',
        // msg: '',
      },
    };
  },
  mounted:function(){
    var element = this.$refs['startregg'];
    var top = element.offsetTop;
    window.scrollTo(0, top-100);
  },
  methods: {
    async signUp() {
      console.log(JSON.stringify(this.data));
      try {
        const data = {
          vn: this.vn,
          nn: this.nn,
          email: this.email,
          gb: this.gebdatum,
          land: this.land,
          bn: this.bname,
          pw: this.pw,
          pw2: this.pwrepeat
        };
        console.log(JSON.stringify(data));
        const response = await DataServices.signUp(data);
        console.log(response)
        // this.msg = response.msg;
        this.$router.push("/login");
      } catch (error) {
        // this.msg = error.response.data.msg;
        console.log("ERROR - ", error)
      }
    }
  }
};
</script>

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
