<template>
    <div class="memory" v-on:load="shuffle">
        <Header />
        <Titel msg="Memory" /><br>
        <router-link to="/training/spiele"><button class="button1">zurück</button></router-link><br>
        <section class="game-board" >
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
        <!--<section class="score-panel">
            <div class="timer" id="timer">
            </div>
        </section>-->
        <div class="row" style="width:50%">
            <div class="col s6" style="text-align:right"><span id="0">Moves: 0</span></div>
            <div class="col s6" style="text-align:left"><span class="timer">Time: 100</span></div>
        </div>
        <Footer />
    </div>  
</template>
<script>
let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let status = "";
let colorsShuffled = [];
let moves = 0;

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
            status: ""
        }
    },
    mounted: function() {
        this.shuffle()
    },
    methods: {
        click: function(event) {
            /*const colors = [
                'yellow',
                'red',
                'blue',
                'green',
                'pink',
                'orange',
                'teal',
                'cyan'
            ]
            const cards = [...document.querySelectorAll(' .card')];
            console.log(cards)

            for(let color of colors) {
                const cardAIndex = parseInt(Math.random() * cards.length);
                const cardA = cards[cardAIndex];
                cards.splice(cardAIndex,1);
                cardA.className += ' color-hidden'
                cardA.className += ` ${color}`
                cardA.setAttribute('data-color', color)

                const cardBIndex = parseInt(Math.random() * cards.length);
                const cardB = cards[cardBIndex];
                cards.splice(cardBIndex,1);
                cardB.className += ' color-hidden'
                cardB.className += ` ${color}`
                cardB.setAttribute('data-color', color)
            }*/
            const target = event.currentTarget;
            if(preventClick || target === clickedCard || target.className.includes('done')) {
                return;
            }
            target.className = target.className.replace('card greyC','').trim();
            //console.log(target.className)
            if(target.classList.contains('first') == true) {
                target.className += 'card ' + colorsShuffled[0]
                let c = colorsShuffled[0]
                target.setAttribute('data-color',c);
                colorsShuffled.splice(0,1);
                target.className = target.className.replace('first',' ').trim();
            }
            //target.setAttribute('current-color',c);
            //target.className += ' farbe';
            //target.setAttribute('farbe',c)
            //target.className = target.className.replace(' greyC ',c).trim();
            //target.className += ' farbe'      
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
                   if(combosFound === 8) {
                    //alert("YOU WIN");
                    combosFound = 0
                    status = 'ende'
                    console.log(status)
                   }
                }
            }
        },
        shuffle: function() {
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
                    'midblueC'
            ]
            //const bg = 'grey'
            /*const cards = [...document.querySelectorAll('.card')];
            for(let color of colors) {
                const cardAIndex = parseInt(Math.random() * cards.length);
                const cardA = cards[cardAIndex];
                cards.splice(cardAIndex,1);
                //cardA.className += ' color-hidden'
                cardA.className = cardA.className.replace('grey',` ${color}`).trim();
                //cardA.className += ` ${color}`
                cardA.setAttribute('data-color', color)

                const cardBIndex = parseInt(Math.random() * cards.length);
                const cardB = cards[cardBIndex];
                cards.splice(cardBIndex,1);
                //cardB.className += ' color-hidden'
                cardB.className = cardB.className.replace('grey',` ${color}`).trim();
                //cardB.className += ` ${color}`
                cardB.setAttribute('data-color', color)
            }*/

            var j, x, i;
            for (i = colors.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = colors[i];
                colors[i] = colors[j];
                colors[j] = x;
            }
            colorsShuffled = colors
            console.log(colorsShuffled)

            /*moves = 0;
            counter.innerHTML = moves;
            //eslint-disable-next-line
            second = 0;
            //eslint-disable-next-line
            minute = 0;
            //eslint-disable-next-line
            hour = 0;
            var timer = document.querySelector(".timer");
            timer.innerHTML = "0m 0s";
            clearInterval(interval);*/
        },
        /*
        moveCounter: function() {
            moves++;
            counter.innerHTML = moves;
            if(moves == 1){
                second = 0;
                minute = 0; 
                hour = 0;
                this.startTimer();
            }
        },
        startTimer: function() {
            interval = setInterval(function(){
                timer.innerHTML = minute+"m "+second+"s";
                second++;
                if(second == 60){
                    minute++;
                    second=0;
                }
                if(minute == 60){
                    hour++;
                    minute = 0;
                }
            },1000);
        }*/
    }
})

</script>
<style scoped>

</style>
