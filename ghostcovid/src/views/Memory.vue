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

        <div class="anleitung" id="-1" style="margin-top:0px">
            <Anleitung :anl="anltext"/>
        </div>

        <Titel msg="" /><br>
        <div class="endscreen" id="-1" style="margin-top:0px">
            <EndScreen :key="endKeym" :points="movesc" :name="name" :time="zeit"/>
        </div>

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
let anl = 0;
export default ({
    name: 'App',
    components: {
    },
    data() {
        return {
            status: "",
            movesc: 0,
            name: "MEMORY",
            zeit: 0,
            anltext: "Ziel ist es, möglichst schnell alle Paarungen zu finden. Dabei müssen nacheinander immer zwei Karten umgedreht werden - durch einen einfachen Klick auf die Rückseite der Karte, die man ansehen möchte. Haben die zwei gewählten Karten die selbe Farbe, bleiben sie aufgedeckt und man hat ein Paar gefunden. Haben die zwei gewählten Karten nicht die selbe Farbe, werden sie wieder verdeckt - man muss sich also merken unter welcher Karte sich welche Farbe versteckt.",
        }
    },
    mounted: function() {
        this.shuffle();
        document.querySelector(".endscreen").style.visibility = 'hidden';
        document.querySelector(".anleitung").style.visibility = 'hidden';
    },
    methods: {
        getMoves() {
            return moves
        },
        reloadPage() {
            window.location.reload();
        },
        anlei() {
            if(anl==0) {
                document.querySelector(".anleitung").style.visibility = 'visible';
                anl = anl + 1;
            } else {
                document.querySelector(".anleitung").style.visibility = 'hidden';
                anl = anl - 1;
            }            
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
                    this.movesc = 1000-moves;
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
    }
})
</script>