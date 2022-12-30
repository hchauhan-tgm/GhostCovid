<template>
<div>
<!--<Headerspiele msghs="MerksDir" link="/training/spiele/farben"/>-->
        <template>
            <div class="nav">
                <img class="logo" alt="['goostcohvit'] logo" src="../assets/GhostCovidLogo.png" />
                <div class="nav22">
                    <b class="text2">Merk's Dir</b>
                    <b class="text2">||</b>
                    <i><router-link to="/training/spiele" class="text">Zurück</router-link></i>
                    <b class="text2">|</b>
                    <i @click="reloadPage" class="text" style="cursor:pointer">Neustart</i>
                </div>
            </div>
        </template>

      <Titel msg="" /><br>
      <div class="endscreen" id="-1"  style="margin-top:100px">
            <EndScreen/>
      </div>

        <div class="app">
          <div class="game-box">
            <div class="row">
              <div class="box box1" v-on:click="clickedBox(1)" v-bind:class="{ active: isBoxOneActive}">
              </div>
              <div class="box box2" v-on:click="clickedBox(2)" v-bind:class="{ active: isBoxTwoActive}">
              </div>
            </div>
            <div class="row">
              <div class="box box3" v-on:click="clickedBox(3)" v-bind:class="{ active: isBoxThreeActive}">
            </div>
      <div class="box box4" v-on:click="clickedBox(4)" v-bind:class="{ active: isBoxFourActive}">
      </div>
    </div>

    <div class="controls-box">
      <!--<div class="strict-mode-toggle" v-on:click="changeMode()" v-bind:class="{red: isStrictModeOn}">-->
        <!--<span v-if="isStrictModeOn">Strict</span><span v-else>Normal</span></div>-->
      <div class="start-button" v-on:click="changeState()" v-bind:class="{red: isPlaying}">&nbsp;</div>
      <div class="counter">{{step}}</div>
      <!--<div class="hi-score">Hi {{hiScore}}</div>-->
    </div>
        </div>
        </div>
        <div class="col s6" style="text-align:center"><span id="time">Time: 100</span></div>
  <Footerspiele msgfs="Merk's Dir" />
</div>

</template>
<script>
var timer;
export default {
  data: () => ({
    isStrictModeOn: true,
    step: '--',
    userTurn: false,
    state: 'Start',
    isPlaying: false,
    pattern: [],
    index: 0,
    isBoxOneActive: false,
    isBoxTwoActive: false,
    isBoxThreeActive: false,
    isBoxFourActive: false,
    showHelpBox: false,
    score: 0,
    hiScore: 0,
    message: ''
  }),
  created: function(){
    if(localStorage.getItem('simonHiScore')!== null){
      this.hiScore = localStorage.getItem('simonHiScore');
    }
  },
  mounted: function() {
    document.querySelector(" .endscreen").style.visibility = 'hidden';
    },
  methods: {
    reloadPage() {
            window.location.reload();
    },
    changeState: function() {
      if (this.state === 'Start') {
        this.state = 'Stop';
        this.message = null;
        this.isPlaying = true;
        this.step = 0;
        this.computerTurn();
      } else {
        this.resetGame();
      }
    },
    computerTurn: function() {
      var self = this;
      this.index = 0;
      this.step++;
      this.pattern.push(this.getRandomNumberOneToFour());
      this.showPattern(function(){
        self.userTurn = true;
      });
    },
    clickedBox: function(boxNum) {
      var self = this;
      if (this.state === 'Start') {
        return;
      }
      this.clickEffect(boxNum);
      var isCorrect = this.checkPattern(boxNum);
      if (!isCorrect) { // If user clicks wrong box
        if (this.isStrictModeOn) {// User playing in strict mode
          self.processGameOver();
          document.querySelector(" .endscreen").style.visibility = 'visible';
          return;
        } else {//User playing in regular mode
          self.showPattern()
        }
      } else { // If the current click is correct
        if (this.index === this.pattern.length - 1) { // If total items in pattern clicked
          this.score++;
          setTimeout(function() {
             self.userTurn = false;
            self.computerTurn();
          }, 1000);
        } else { // Pending clicks exist
          this.index++;
        }
      }
    },
    processGameOver: function(){          
          //If score is greater than hiScore, update localStorage
          if(this.score>this.hiScore){
            this.hiScore = this.score;
            this.message = 'Congo! New High Score';
            localStorage.setItem('simonHiScore', this.hiScore);
          } else {
            this.message = 'Game Over.'
          }
      console.log('Score: '+this.score);
          this.resetGame();
    },
    getRandomNumberOneToFour: function() {
      //Utility method to get a random number from 1 to 4
      return Math.floor(Math.random() * 4 + 1);
    },
    checkPattern: function(boxNum) {
      return (this.pattern[this.index] === boxNum);
    },
    resetGame: function() {
      this.step = '--';
      this.userTurn = false;
      this.state = 'Start';
      this.score = 0;
      this.isPlaying = false;
      this.pattern = [];
      this.index = 0;
    },
    showPattern: function(callback) {
      var self = this
      var i=0;
      timer = setInterval(function() {
        if(i>=self.pattern.length){
          self.stopInterval();
        }
        self.clickEffect(self.pattern[i]);
        i++;
      }, 500);
      callback();
    },
    stopInterval: function(){
      clearInterval(timer);
    },
    changeMode: function(){
      if(this.state !== 'Start'){
        return;
      }
      if(this.isStrictModeOn){
        this.isStrictModeOn = false;
      } else{
        this.isStrictModeOn = true;
      }
    },
    clickEffect: function(boxNum) {
      //This method takes in a box number as parameter
      //Then toggles its class as active
      //Then plays the respective audio file
      //Then reverts the class back to original
      var self = this
      switch (boxNum) {
        case 1:
          this.isBoxOneActive = true;
          setTimeout(function() {
            self.isBoxOneActive = false;
          }, 100);
          break;
        case 2:
          this.isBoxTwoActive = true;
          setTimeout(function() {
            self.isBoxTwoActive = false;
          }, 100);
          break;
        case 3:
          this.isBoxThreeActive = true;
          setTimeout(function() {
            self.isBoxThreeActive = false;
          },100);
          break;
        case 4:
          this.isBoxFourActive = true;
          setTimeout(function() {
            self.isBoxFourActive = false;
          }, 100);
          break;
      }
      return;
    }
  }
}
</script>

<style>
html {
  margin: 0px;
  padding: 0px;
  /*background-color: #FDE9C9;*/
  font-family: monospace;
}

h1 {
  text-align: center;
  font-size: 64px;
  font-weight: 900;
  font-family: sans-serif;
  color: #323232;
}

a {
  text-decoration: none;
  color: #3F72AF;
}

span {
  font-size: 20px;
  text-align: center;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-box {
  position: absolute;
  top: 200px;
}

.controls-box {
  position: absolute;
  top: 70px;
  left: 55px;
  /*z-index: 500;*/
  width: 170px;
  height: 170px;
  border: 10px solid #323232;
  border-radius: 100%;
  background-color: grey;
  padding: 0 auto;
  text-align: center;
}

.box {
  display: inline-block;
  width: 150px;
  height: 150px;
  font-size: 64px;
  text-align: center;
  border: 10px solid #323232;
  /*box-shadow: 5px 10px 10px #323232;*/
  margin-left: -10px;
  margin-bottom: -10px;
  cursor: pointer;
}

.box1 {
  background-color: red;
  border-radius: 100% 0 0 0;
}

.box2 {
  background-color: blue;
  border-radius: 0 100% 0 0;
}

.box3 {
  background-color: green;
  border-radius: 0 0 0 100%;
}

.box4 {
  background-color: yellow;
  border-radius: 0 0 100% 0;
}

.active {
  background-color: hsl(50, 50%, 10%);
}

.start-button {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 5px solid #323232;
  box-shadow: 5px 5px 5px #323232;
  /*z-index: 800;*/
  background-color: #07D807;
  text-align: center;
  font-weight: 900;
  font-size: 22px;
  margin-top: 35%;
  /*margin-left: 5px;*/
  cursor: pointer;
  justify-content: center;
}
.strict-mode-toggle{
  display: block;
  width: 50px;
  height: 20px;
  border-radius: 5px;
  border: 3px solid #323232;
  box-shadow: 2px 2px 2px #323232;
  z-index: 800;
  background-color: orange;
  text-align: center;
  font-weight: 500;
  margin-top: 10%;
  margin-left: 50px;
  padding: 2px 5px;
  cursor: pointer;
}
.counter {
  display: inline-block;
  width: 50px;
  height: 40px;
  border: 5px solid #323232;
  border-radius: 10px;
  /*z-index: 800;*/
  margin-left: 10px;
  text-align: center;
  font-weight: 900;
  font-family: monospace;
  font-size: 22px;
  color: red;
  background-color: maroon;
}
.hi-score{
  font-weight: 800;
  color: darkgray;
  margin-top: 15px;
  font-size: 22px;
}

.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 5px 10px;
  color: #323232;
  font-size: 14px;
  font-family: monospace
}

.hint {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 5px;
  color: #323232;
  font-size: 14px;
  font-family: monospace;
  z-index: 800;
  background-color: #FDE9C9;
}

.help {
  cursor: pointer;
  text-decoration: underline;
}

.help-box {
  position: absolute;
  margin-top: 100px;
  width: 500px;
  height: 300px;
  border: 5px solid darkgray;
  border-radius: 10px;
  background-color: white;
  box-shadow: 30px 30px 30px black;
  z-index: 900;
  color: brown;
  font-family: monospace;
  font-size: 16px;
}
.info-box{
  margin-top: 30px;
  text-align: center;
  color: grey;
  font-weight: 900;
  font-size: 20px;
}
.red{
  background-color: red;
}
/*
For mobile responsiveness, simply scale the dimesions
of the boxes
*/

@media only screen and (max-width: 670px) {
  h1 {
    font-size: 36px;
  }
  .game-box {
    top: 100px;
  }
  .box {
    width: 120px;
    height: 120px;
  }
  .controls-box {
    width: 110px;
    height: 110px;
  }
  .counter, .start-button {
    width: 30px;
    height: 30px;
    margin-top: 10%;
    margin-left: 8px;
    font-size: 18px;
  }
  .strict-mode-toggle{
    display: block;
    width: 45px;
    height: 15px;
    border-radius: 5px;
    border: 2px solid #323232;
    box-shadow: 2px 2px 2px #323232;
    z-index: 800;
    background-color: orange;
    text-align: center;
    font-weight: 500;
    margin-top: 5%;
    margin-left: 30px;
    padding: 1px 3px;
    cursor: pointer;
}
  .hi-score{
    font-size: 16px;
    margin-top: 10px;
  }
  .help-box {
    width: 300px;
    top: 10px;
  }
}
</style>