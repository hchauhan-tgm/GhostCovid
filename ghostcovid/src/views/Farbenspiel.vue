<template>
<div>
    <!--<Headerspiele msghs="FARBENDURCHEINANDER" link="/training/spiele/farben"/>-->
        <template>
            <div class="nav">
                <img class="logo" alt="['goostcohvit'] logo" src="../assets/GhostCovidLogo.png" />
                <div class="nav22">
                    <b class="text2">FARBENDURCHEINANDER</b>
                    <b class="text2">||</b>
                    <i><router-link to="/training/spiele" class="text">Zurück</router-link></i>
                    <b class="text2">|</b>
                    <i @click="reloadPage" class="text" style="cursor:pointer">Neustart</i>
                </div>
            </div>
        </template>

      <Titel msg="" /><br>
      <div class="endscreen" id="-1" style="margin-top:100px">
            <EndScreen key="endKey" :points="rounds" :name="name" :time="zeit"/>
        </div>
      <!--<router-link to="/training/spiele"><button class="button1">zurück</button></router-link><br>-->

    <div class="board" style="margin-top: -3%">
            <div v-on:click="click($event)" class="colorCard bgColor" id="1">1</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="2">2</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="3">3</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="4">4</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="5">5</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="6">6</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="7">7</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="8">8</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="9">9</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="10">10</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="11">11</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="12">12</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="13">13</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="14">14</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="15">15</div>
            <div v-on:click="click($event)" class="colorCard bgColor" id="16">16</div>
    </div>
    <div class="row" style="width:50%">
        <div class="col s6" style="text-align:right"><span id="0">Rounds: 0</span></div>
        <div class="col s6" style="text-align:left"><span id="time">Time: 100</span></div>
      </div>
    <Footerspiele msgfs="Farbendurcheinander" />
</div>
</template>
<script>
import { ref } from 'vue';
const endK = ref(0);
let aktKarte = 0;
let counter = 0;
//let moves = 0;
export default ({
    data () {
        return {
        anzR: 0,
        name: "Farbendurcheinander",
        rounds: 0
        }
    },
    setup() {
        
    },
    mounted: function() {
        this.shuffle()
        counter = 0
        this.anzR = 0
    },
    methods: {
        reloadPage() {
            window.location.reload();
        },
        click: function(event) {
            const target = event.currentTarget;
            if(target.classList.contains('right') == true) {
                counter = counter+1;
                this.anzR = this.anzR+1;
                target.className = target.className.replace('right','').trim();
                document.getElementById(0).textContent = 'Rounds: ' + counter;
                this.shuffle()
            } else {
                /*alert('Punktestand: ' + counter)
                counter = 0;
                document.getElementById(0).textContent = 'Rounds: ' + counter;            
                this.shuffle()*/
                if(this.anzR<20) {
                    counter = counter+1;
                    document.getElementById(0).textContent = 'Rounds: ' + counter;
                    this.shuffle()
                } else {
                    counter = 0;
                    document.querySelector(" .endscreen").style.visibility = 'visible';
                }
                
                //document.querySelector(" .button1").style.visibility = 'hidden';
            }
            if(this.anzR==20) {
                counter = 0;
                document.querySelector(" .endscreen").style.visibility = 'visible';
                this.rounds = counter;
                endK.value +1;
            }
        },
        shuffle: function() {
            this.startZeit = new Date();
            this.aktZeit = 0;
            this.time = 0;
            document.querySelector(" .endscreen").style.visibility = 'hidden';
            //document.querySelector(" .button1").style.visibility = 'visible';
            const richtigeKombinationen = [['grün',' tSchwarz',' gruenRichtig'],['gelb',' tSchwarz',' gelbRichtig'],['blau',' tSchwarz',' blauRichtig'],['rot', ' tSchwarz',' rotRichtig']]
            const falscheKombinationen = [
                ['grün',' tGruen',' gelbRichtig'],
                ['grün',' tGruen',' blauRichtig'],
                ['grün',' tGruen',' rotRichtig'],
                ['grün',' tgelb',' gruenRichtig'],
                ['grün',' trot',' gruenRichtig'],
                ['grün',' tblau',' gruenRichtig'],
                ['gelb',' tGruenHell',' gruenRichtig'],
                ['rot',' tGruenHell',' gruenRichtig'],
                ['blau',' tGruenHell',' gruenRichtig'],

                ['gelb',' tgelb',' gruenRichtig'],
                ['gelb',' tgelb',' blauRichtig'],
                ['gelb',' tgelb',' rotRichtig'],
                ['gelb',' tGruen',' gelbRichtig'],
                ['gelb',' trot',' gelbRichtig'],
                ['gelb',' tblau',' gelbRichtig'],
                ['grün',' tgelbHell',' gelbRichtig'],
                ['rot',' tgelbHell',' gelbRichtig'],
                ['blau',' tgelbHell',' gelbRichtig'],

                ['blau',' tblau',' gelbRichtig'],
                ['blau',' tblau',' gruenRichtig'],
                ['blau',' tblau',' rotRichtig'],
                ['blau',' tgelb',' blauRichtig'],
                ['blau',' trot',' blauRichtig'],
                ['blau',' tGruen',' blauRichtig'],
                ['gelb',' tblauHell',' blauRichtig'],
                ['rot',' tblauHell',' blauRichtig'],
                ['grün',' tblauHell',' blauRichtig'],

                ['rot',' trot',' gelbRichtig'],
                ['rot',' trot',' blauRichtig'],
                ['rot',' trot',' gruenRichtig'],
                ['rot',' tgelb',' rotRichtig'],
                ['rot',' tGruen',' rotRichtig'],
                ['rot',' tblau',' rotRichtig'],
                ['gelb',' trotHell',' rotRichtig'],
                ['grün',' trotHell',' rotRichtig'],
                ['blau',' trotHell',' rotRichtig'],

                ['grün',' tSchwarz',' gelbRichtig'],
                ['grün',' tSchwarz',' rotRichtig'],
                ['grün',' tSchwarz',' blauRichtig'],

                ['gelb',' tSchwarz',' gruenRichtig'],
                ['gelb',' tSchwarz',' rotRichtig'],
                ['gelb',' tSchwarz',' blauRichtig'],

                ['rot',' tSchwarz',' gelbRichtig'],
                ['rot',' tSchwarz',' gruenRichtig'],
                ['rot',' tSchwarz',' blauRichtig'],

                ['blau',' tSchwarz',' gelbRichtig'],
                ['blau',' tSchwarz',' rotRichtig'],
                ['blau',' tSchwarz',' gruenRichtig'],
            ]
            //console.log(richtigeKombinationen)
            const zuweisen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
            let zufallKombinationR = richtigeKombinationen[Math.floor(Math.random()*richtigeKombinationen.length)];
            let zKombi = false;
            for(let i = 0;i<2;i++) {
                aktKarte = zuweisen[Math.floor(Math.random()*zuweisen.length)];
                if(zKombi === false) {
                    for(let j = 0;j<2;j++) {
                        if(document.getElementById(aktKarte).classList.contains('tgelb') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tgelb','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('trot') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('trot','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tblau') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tblau','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tGruen') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tGruen','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tSchwarz') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tSchwarz','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('trotHell') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('trotHell','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tblauHell') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tblauHell','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tGruenHell') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tGruenHell','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tgelbHell') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tgelbHell','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('gelbRichtig') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('gelbRichtig','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('rotRichtig') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('rotRichtig','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('blauRichtig') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('blauRichtig','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('gruenRichtig') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('gruenRichtig','').trim();
                        }
                    }
                    document.getElementById(aktKarte).textContent = zufallKombinationR[0];
                    document.getElementById(aktKarte).className += zufallKombinationR[1];
                    document.getElementById(aktKarte).className += zufallKombinationR[2];
                    zKombi = true
                    console.log(aktKarte)
                    zuweisen.splice(aktKarte-1,1)
                    document.getElementById(aktKarte).className += ' right';
                    console.log(zuweisen)
                } else {
                    for(let i = 0;i<15;i++) {
                        for(let j = 0;j<2;j++) {
                            if(document.getElementById(zuweisen[i]).classList.contains('tgelb') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tgelb','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('trot') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('trot','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tblau') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tblau','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tGruen') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tGruen','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tSchwarz') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tSchwarz','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tgelbHell') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tgelbHell','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('trotHell') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('trotHell','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tblauHell') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tblauHell','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tGruenHell') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tGruenHell','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('gelbRichtig') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('gelbRichtig','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('rotRichtig') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('rotRichtig','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('blauRichtig') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('blauRichtig','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('gruenRichtig') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('gruenRichtig','').trim();
                            }
                        }
                        let zufallKombinationF = falscheKombinationen[Math.floor(Math.random()*falscheKombinationen.length)];
                        document.getElementById(zuweisen[i]).textContent = zufallKombinationF[0];
                        document.getElementById(zuweisen[i]).className += zufallKombinationF[1];
                        document.getElementById(zuweisen[i]).className += zufallKombinationF[2];
                        //console.log(aktKarte)
                        //zuweisen.splice(aktKarte-1,1)
                        console.log(zuweisen)
                    }
                }
            }
        },
    }
})
</script>

<style scoped>

</style>