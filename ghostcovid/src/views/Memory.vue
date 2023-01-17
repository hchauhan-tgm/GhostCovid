<template>
    <div class="memory" v-on:load="shuffle">
        <!--<Headerspiele msghs="MEMORY" link="/training/spiele/memory"/>-->
        <template>
            <div class="nav">
                <img class="logo" alt="['goostcohvit'] logo" src="../assets/GhostCovidLogo.png" />
                <div class="nav22">
                    <b class="text2">MEMORY</b>
                    <b class="text2">||</b>
                    <i><router-link to="/training/spiele" class="text">Zurück</router-link></i>
                    <b class="text2">|</b>
                    <i @click="reloadPage" class="text" style="cursor:pointer">Neustart</i>
                    <b class="text2">|</b>
                    <i @click="anlei" class="text" style="cursor:pointer">Anleitung</i>
                </div>
            </div>
        </template>

        <Titel msg="" /><br>
        <div class="endscreen" id="-1" style="margin-top:0px">
            <EndScreen key="endKeym" :points="movesc" :name="name" :time="zeit"/>
        </div>
        <!--<router-link to="/training/spiele"><button class="button1">zurück</button></router-link><br>-->
        <section class="game-board" style="margin-top:15px">
            <div v-on:click="click($event)"  class="first card greyC" ></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
            <div v-on:click="click($event)"  class="first card greyC"></div>
        </section>
        
            <div class="anleitung">
                Hallooo
            </div>
        <!--<section class="score-panel">
            <div class="timer" id="timer">
            </div>
        </section>-->
        <div class="row" style="width:50%">
            <div class="col s6" style="text-align:right"><span id="0">Moves: 0</span></div>
            <div class="col s6" style="text-align:left"><span id="timer">Time: 0</span></div>
        </div>
        <Footerspiele msgfs="Memory" />
    </div>  
</template>
<script>
import { ref } from 'vue';
const endKm = ref(0);
let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let status = "";
let colorsShuffled = [];
let moves = 1;
/*
let moves = 0;
let counter = document.querySelector(".moves");
var second = 0, minute = 0;
var timer = document.getElementById("timer");
//eslint-disable-next-line
var interval = 0, hour = 0;
*/
export default ({
    name: 'App',
    components: {
    },
    data() {
        return {
            status: "",
            movesc: 0,
            name: "MEMORY",
            zeit: 0
        }
    },
    mounted: function() {
        this.shuffle()
    },
    methods: {
        getMoves() {
            return moves
        },
        reloadPage() {
            window.location.reload();
        },
        click: function(event) {
            const target = event.currentTarget;
            this.aktZeit = new Date();
            this.time = Math.floor((this.aktZeit.getTime()-this.startZeit.getTime()) / 1000);
            document.getElementById("timer").textContent = `Time: ` + this.time;
            if(preventClick || target === clickedCard || target.className.includes('done')) {
                return;
            }
            target.className = target.className.replace('card greyC','').trim();
            if(target.classList.contains('first') == true) {
                target.className += 'card ' + colorsShuffled[0]
                let c = colorsShuffled[0]
                target.setAttribute('data-color',c);
                colorsShuffled.splice(0,1);
                target.className = target.className.replace('first',' ').trim();
            }
            target.className = target.className.replace(' greyC','').trim();
            target.className += ' done';
            if(!clickedCard) {
                clickedCard = target;
            } else if(clickedCard) {
                if(clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
                    preventClick = true;
                    setTimeout(() => {
                        clickedCard.className = clickedCard.className.replace('done','').trim() + ' greyC';
                        target.className = target.className.replace('done','').trim() + ' greyC';
                        clickedCard = null;
                        preventClick = false;
                    }, 500);
                    moves++;
                    document.getElementById(0).textContent = 'Moves: ' + moves;
                } else {
                   moves++;
                   document.getElementById(0).textContent = 'Moves: ' + moves;
                   combosFound++;
                   clickedCard = null;
                   console.log(combosFound)
                   if(combosFound === 10) {
                    console.log("Moves: " + moves)
                    document.querySelector(" .endscreen").style.visibility = 'visible';
                    this.movesc = moves;
                    this.zeit = this.time;
                    endKm.value +1;

                    combosFound = 0
                    status = 'ende'
                    console.log(status)
                   }
                }
            }
        },
        shuffle: function() {
            document.querySelector(" .endscreen").style.visibility = 'hidden';
            this.startZeit = new Date();
            this.aktZeit = 0;
            this.time = 0;
            moves = 0;
            const colors = [
                    'yellowC',
                    'redC',
                    'blueC',
                    'greenC',
                    'pinkC',
                    'orangeC',
                    'tealC',
                    'cyanC',
                    'yellowC',
                    'redC',
                    'blueC',
                    'greenC',
                    'pinkC',
                    'orangeC',
                    'tealC',
                    'cyanC',
                    'magentaC',
                    'midblueC',
                    'magentaC',
                    'midblueC'
            ]
            var j, x, i;
            for (i = colors.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = colors[i];
                colors[i] = colors[j];
                colors[j] = x;
            }
            colorsShuffled = colors
            console.log(colorsShuffled)
        },
        anlei() {
            document.querySelector(".anleitungf").style.visibility = 'visibile';
        }
    }
})
</script>
<style scoped>
.anleitungf {
    margin-top: 700px;
    width: 500px;
    height: 300px;
    background-color: aqua;
}
</style>