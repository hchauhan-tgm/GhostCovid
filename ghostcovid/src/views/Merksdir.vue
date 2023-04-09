<template>
  <div>
    <!--<Headerspiele msghs="MerksDir" link="/training/spiele/farben"/>-->
    <template>
      <div class="nav">
        <img
          class="logo"
          alt="['goostcohvit'] logo"
          src="../assets/GhostCovidLogo.png"
        />
        <div class="nav22">
          <b class="text2">Merk's Dir</b>
          <b class="text2">||</b>
          <i
            ><router-link to="/training/spiele" class="text"
              >Zurück</router-link
            ></i
          >
          <b class="text2">|</b>
          <i @click="reloadPage" class="text" style="cursor: pointer"
            >Neustart</i
          >
          <b class="text2">|</b>
          <i @click="anlei" class="text" style="cursor: pointer">Anleitung</i>
        </div>
      </div>
    </template>

    <div class="anleitung" id="-1" style="margin-top: 0px">
      <Anleitung :anl="anltext" />
    </div>

    <Titel msg="" /><br />
    <div class="endscreen" id="-1" style="margin-top: 0px">
      <EndScreen key="endKeyd" :points="scorec" :name="name" :time="zeit" />
    </div>

    <div class="appmd">
      <div class="game-boxmd" style="margin-top: 15px">
        <div class="row">
          <div
            class="boxmd boxmd1"
            v-on:click="clickedBox(1)"
            v-bind:class="{ active: isBoxOneActive }"
          ></div>
          <div
            class="boxmd boxmd2"
            v-on:click="clickedBox(2)"
            v-bind:class="{ active: isBoxTwoActive }"
          ></div>
        </div>
        <div class="row">
          <div
            class="boxmd boxmd3"
            v-on:click="clickedBox(3)"
            v-bind:class="{ active: isBoxThreeActive }"
          ></div>
          <div
            class="boxmd boxmd4"
            v-on:click="clickedBox(4)"
            v-bind:class="{ active: isBoxFourActive }"
          ></div>
        </div>

        <div class="controls-boxmd">
          <div class="countermd">{{ step }}</div>
          <br />
          <div class="timemd">
            <span id="time" style="color: white">0 sek</span>
          </div>
        </div>
      </div>
    </div>

    <Footerspiele msgfs="Merk's Dir" />
  </div>
</template>
<script>
import { ref } from "vue";
const endKd = ref(0);
var timer;
let anl = 0;
export default {
  data: () => ({
    isStrictModeOn: true,
    step: "--",
    userTurn: false,
    state: "Start",
    isPlaying: false,
    pattern: [],
    index: 0,
    isBoxOneActive: false,
    isBoxTwoActive: false,
    isBoxThreeActive: false,
    isBoxFourActive: false,
    score: 0,
    hiScore: 0,
    message: "",
    name: "MERK'S DIR",
    movesc: 0,
    zeit: 0,
    scorec: 0,
    anltext:
      "Ziel ist es, die nacheinander leuchtenden Felder in der richtigen Reihenfolge anzuklicken. Das Spiel startet mit dem Aufleuchten eines der vier Felder. Dieses Signal muss man durch Drücken auf das entsprechende Feld wiederholen. Wenn man das Leuchten richtig wiedergegeben hat, erhöht sich die Anzahl der leuchtenden Felder in der nächsten Runde um eins.",
  }),
  created: function () {
    if (localStorage.getItem("simonHiScore") !== null) {
      this.hiScore = localStorage.getItem("simonHiScore");
    }
  },
  mounted: function () {
    document.querySelector(".endscreen").style.visibility = "hidden";
    document.querySelector(".anleitung").style.visibility = "hidden";
    this.changeState();
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    anlei() {
      if (anl == 0) {
        document.querySelector(".anleitung").style.visibility = "visible";
        anl = anl + 1;
      } else {
        document.querySelector(".anleitung").style.visibility = "hidden";
        anl = anl - 1;
      }
    },
    /**
     * Mithilfe dieser Methode wird das Spiel gestartet
     */
    changeState: function () {
      if (this.state === "Start") {
        this.time = 0;
        this.startZeit = new Date();
        this.aktZeit = 0;
        this.state = "Stop";
        this.message = null;
        this.isPlaying = true;
        this.step = 0;
        this.scorec = 0;
        this.ende = false;
        this.computerTurn();
      } else {
        this.resetGame();
      }
    },
    /**
     * In dieser Methode wird ein Feld zufällig ausgewählt und gedrückt.
     */
    computerTurn: function () {
      var self = this;
      this.index = 0;
      this.step++;
      this.scorec++;
      this.pattern.push(this.getRandomNumberOneToFour());
      this.showPattern(function () {
        self.userTurn = true;
      });
      this.aktZeit = new Date();
      this.time = Math.floor(
        (this.aktZeit.getTime() - this.startZeit.getTime()) / 1000
      );
      document.getElementById("move").textContent = `Rounds: ` + this.step;
      document.getElementById("time").textContent = this.time + ` sec`;
    },
    /**
     * Hier wird überprüft, ob der Benutzer das richtige Feld gedrückt hat
     */
    clickedBox: function (boxNum) {
      this.aktZeit = new Date();
      this.time = Math.floor(
        (this.aktZeit.getTime() - this.startZeit.getTime()) / 1000
      );
      document.getElementById("time").textContent = this.time + ` sec`;
      var self = this;
      if (this.state === "Start") {
        return;
      }
      this.clickEffect(boxNum);
      var isCorrect = this.checkPattern(boxNum);
      if (!isCorrect) {
        // If user clicks wrong box
        if (this.isStrictModeOn) {
          this.ende = true;
          document.querySelector(" .endscreen").style.visibility = "visible";
          this.zeit = this.time;
          this.scorec = 0 + this.scorec;
          endKd.value + 1;
          return;
        } else {
          self.showPattern();
        }
      } else {
        // If the current click is correct
        if (this.index === this.pattern.length - 1) {
          // If total items in pattern clicked
          this.score++;
          setTimeout(function () {
            self.userTurn = false;
            self.computerTurn();
          }, 1000);
        } else {
          // Pending clicks exist
          this.index++;
        }
      }
    },
    getRandomNumberOneToFour: function () {
      return Math.floor(Math.random() * 4 + 1);
    },
    checkPattern: function (boxNum) {
      return this.pattern[this.index] === boxNum;
    },
    resetGame: function () {
      this.step = "--";
      this.userTurn = false;
      this.state = "Start";
      this.score = 0;
      this.isPlaying = false;
      this.pattern = [];
      this.index = 0;
    },
    /**
     * Diese Methode zeigt die zufällig ausgewählten Felder in der richtigen Reihenfolge
     */
    showPattern: function (callback) {
      this.aktZeit = new Date();
      this.time = Math.floor(
        (this.aktZeit.getTime() - this.startZeit.getTime()) / 1000
      );
      document.getElementById("time").textContent = this.time + ` sek`;
      var self = this;
      var i = 0;
      timer = setInterval(function () {
        if (i >= self.pattern.length) {
          self.stopInterval();
        }
        self.clickEffect(self.pattern[i]);
        i++;
      }, 500);
      callback();
    },
    stopInterval: function () {
      clearInterval(timer);
    },
    changeMode: function () {
      if (this.state !== "Start") {
        return;
      }
      if (this.isStrictModeOn) {
        this.isStrictModeOn = false;
      } else {
        this.isStrictModeOn = true;
      }
    },
    /**
     * Diese Methode generiert den Effekt des Klickens
     */
    clickEffect: function (boxNum) {
      this.aktZeit = new Date();
      this.time = Math.floor(
        (this.aktZeit.getTime() - this.startZeit.getTime()) / 1000
      );
      document.getElementById("time").textContent = this.time + ` sek`;
      var self = this;
      switch (boxNum) {
        case 1:
          this.isBoxOneActive = true;
          setTimeout(function () {
            self.isBoxOneActive = false;
          }, 100);
          break;
        case 2:
          this.isBoxTwoActive = true;
          setTimeout(function () {
            self.isBoxTwoActive = false;
          }, 100);
          break;
        case 3:
          this.isBoxThreeActive = true;
          setTimeout(function () {
            self.isBoxThreeActive = false;
          }, 100);
          break;
        case 4:
          this.isBoxFourActive = true;
          setTimeout(function () {
            self.isBoxFourActive = false;
          }, 100);
          break;
      }
      return;
    },
  },
};
</script>

<style>
.active {
  background-color: black;
  z-index: 300;
}
.red {
  background-color: red;
}
</style>
