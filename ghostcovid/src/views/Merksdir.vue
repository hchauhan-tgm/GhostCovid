<template>
<div class="merksdir" v-on:load="start()">
    <Header />
    <Titel msg="Merk's Dir" /><br>
    <!--<div class="outer-circle">
        <div class="topleft"></div>
        <div class="topright"></div>
        <div class="bottomleft"></div>
        <div class="bottomright"></div>
        <div class="inner-circle">
            <div id="title" class="font-effect-emboss">Merk's Dir</div>
            <div class="switches">
                <input type="checkbox" class="toggle" id="on">
                <button v-on:click="start()" class="button" id="start">Start</button>
                <input type="checkbox" class="toggle" id="strict">
            </div>
            <div class="text1">
                <span>POWER</span><span>STRICT</span>
            </div>
            <div class="turn"></div>
            <div class="text2">
                COUNT
            </div>
        </div>
    </div>-->
    <div>
    <div>
      <div v-on:click="click($event)" class="panel top-left-panel yellowC"></div>
      <div v-on:click="click($event)" class="panel top-right-panel greenC"></div>
    </div>
    <div>
      <div v-on:click="click($event)" class="panel bottom-left-panel blueC"></div>
      <div v-on:click="click($event)" class="panel bottom-right-panel redC"></div>
    </div>
    </div>
    <Footer />
</div>
</template>
<script>
//const buttons = document.querySelectorAll('.panel');
//let counter = 1;
//let auswahl = [];


/*
let order = [];
//eslint-disable-next-line
let playerOrder = [];
let flash;
let turn;
//eslint-disable-next-line
let good;
let compTurn;
let intervalId;
//eslint-disable-next-line
let strict = true;
//let noise = true;
let on = true;
let win;

const turnCounter = document.querySelector('.turn');
const topLeft = document.querySelectorAll('.topleft');
console.log(topLeft);
const topRight = document.querySelector('.topright');
const bottomLeft = document.querySelector('.bottomleft');
const bottomRight = document.querySelector('.bottomright');
//eslint-disable-next-line
const startButton = document.querySelector(".start");

//turnCounter.innerHTML = "";
clearColor();
clearInterval(intervalId);

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for(var i = 0; i < 20;i++) {
        order.push(Math.floor(Math.random()*4)+1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn,800);
}

function gameTurn() {
    on = false;

    if(flash === turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor;
        on = true;
    }

    if(compTurn) {
        clearColor();
        setTimeout(() => {
            if(order[flash] == 1) one();
            if(order[flash] == 1) two();
            if(order[flash] == 1) three();
            if(order[flash] == 1) four();
            flash++;
        },200)
    }
}

function one() {
    topLeft.setAttribute('background-color','lightgreen');
}
function two() {
    topRight.style.backgroundColor = "tomato";
}
function three() {
    bottomLeft.style.backgroundColor = "yellow";
}
function four() {
    bottomRight.style.backgroundColor = "lightskyblue";
}

function clearColor() {
    topLeft.setAttribute('background-color','darkgreen');
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
}
*/

//let counter = 2;
let auswahl = [];
let counterAnz = 1;
let counter = 0;
export default {
  components: {  },
    setup() {
        
    },
    mounted: function() {
        this.abfolge()
    },
    methods: {
        start: function() {
            this.abfolge()
        },
        abfolge: function() {
          const buttons = document.querySelectorAll('.panel');
          let zufall = Math.floor(Math.random() * (4 - 0)) + 0;
          let zButton = buttons[zufall];
          auswahl.push(zButton);
          //console.log(auswahl)
          /*for(let i = 0;i<auswahl.length;i++) {
              //console.log(auswahl[i])
              //console.log(auswahl[i].className)  
              auswahl[i].className += ' leuchten';
              //console.log(auswahl[i].className)
              //setInterval(() => auswahl[i].className = auswahl[i].className.replace(' leuchten',' ').trim(), 2000);    
              setTimeout(() => {    
                auswahl[i].className = auswahl[i].className.replace(' leuchten',' ').trim();        
              }, 1000);
              setInterval(auswahl[i].className = auswahl[i].className.replace(' leuchten',' ').trim(),2000);
              //console.log(auswahl[i].className) 
              console.log(auswahl)
          }*/
          for(let i = 0;i<counterAnz;i++) {
            auswahl[counter].className += ' leuchten';
            setTimeout(() => {    
                auswahl[counter].className = auswahl[counter].className.replace(' leuchten',' ').trim();        
            }, 1000);
            counter++;
          }
          counter = 0;
          counterAnz+1;
          //auswahl[i].className = auswahl[i].className.replace(' leuchten',' ').trim();
        },
        click: function(event) {
          /*for(let j = 0;j<auswahl.length;j++) {
            auswahl[j].className = auswahl[j].className.replace(' leuchten',' ').trim();
          }*/
          const target = event.currentTarget;
          for(let i = 0;i<auswahl.length;i++) {
            if(target === auswahl[i]) {
              //Auswahl stimmt
              console.log('Success')
            } else {
              //Auswahl stimmt nicht
              console.log('Fail')
            }
          }
          this.abfolge()
        }
    }
}
</script>

<style scoped>

.leuchten {
  background-color: orange;
  cursor: default;
}

.panel {
  width: 200px;
  height: 200px;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
}

.bottom-right-panel {
  /*background-color: red;*/
  border-bottom-right-radius: 200%;
  margin-left: 1%;
}

.bottom-left-panel {
  /*background-color: blue;*/
  border-bottom-left-radius: 200%;
}

.top-left-panel {
  /*background-color: yellow;*/
  border-top-left-radius: 200%;
}

.top-right-panel {
  /*background-color: green;*/
  border-top-right-radius: 200%;
  margin-left: 1%;
}


/*.merksdir {
  background-image: url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/nasty_fabric.png)
}

.toggle {
  margin-left: 20px;
  margin-right: 20px;
}

.button {
  position: absolute;
  margin-left: 52px;
  font-size: 2em;
}

.switches {
  position: absolute;
  font-family: 'Original Surfer', cursive;
  margin-left: 26px;
  margin-top: 110px;
}

.text2 {
  position: absolute;
  font-family: 'Original Surfer', cursive;
  margin-left: 88px;
  margin-top: 197px;
}

.text1 {
  position: absolute;
  font-family: 'Original Surfer', cursive;
  margin-left: 19px;
  margin-top: 130px;
}

.text1 span:last-child {
  padding-left: 70px;
}

.title {
  font-family: 'Original Surfer', cursive;
  position: absolute;
  font-size: 30px;
  margin-left: 35px;
  margin-top: 40px;
}

.turn {
  position: absolute;
  background: #330000;
  color: red;
  font-family: courier;
  font-size: 20px;
  height: 30px;
  width: 50px;
  margin-left: 90px;
  margin-top: 170px;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
}

.outer-circle {
  background: #385a94;
  border-radius: 50%;
  height: 500px;
  width: 500px;
  position: relative;
  border-style: solid;
  border-width: 10px;
  margin: auto;
  margin-top: -3.5%;
  box-shadow: 8px 8px 15px 5px #888888;
}

.topleft {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 250px 0 0 0;
  -moz-border-radius: 250px 0 0 0;
  -webkit-border-radius: 250px 0 0 0;
  background: darkgreen;
  top: 50%;
  left: 50%;
  margin: -250px 0px 0px -250px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.topright {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 250px 0 0;
  -moz-border-radius: 0 250px 0 0;
  -webkit-border-radius: 0 250px 0 0;
  background: darkred;
  top: 50%;
  left: 50%;
  margin: -250px 0px 0px 0px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.bottomleft {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 0 0 250px;
  -moz-border-radius: 0 0 0 250px;
  -webkit-border-radius: 0 0 0 250px;
  background: goldenrod;
  top: 50%;
  left: 50%;
  margin: 0px -250px 0px -250px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.bottomright {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 0 250px 0;
  -moz-border-radius: 0 0 250px 0;
  -webkit-border-radius: 0 0 250px 0;
  background: darkblue;
  top: 50%;
  left: 50%;
  margin: 0px 0px -250px 0px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.inner-circle {
  position: absolute;
  background: grey;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  border-style: solid;
  border-width: 10px;
  top: 50%;
  left: 50%;
  margin: -125px 0px 0px -125px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}*/
</style>