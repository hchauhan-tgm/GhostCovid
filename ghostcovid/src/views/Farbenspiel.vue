<template>
<div>
    <Header/>
    <Titel msg="Farbendurcheinander" />

    <router-link to="/training/spiele"><button class="button1">zurück</button></router-link><br>

    <div class="board">
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
            <div style="text-align:center"><span id="0">Rounds: 0</span></div>
    </div>
    <Footer />
</div>
</template>
<script>
let aktKarte = 0;
let counter = 0;
//let moves = 0;
export default ({
    setup() {
        
    },
    mounted: function() {
        this.shuffle()
    },
    methods: {
        click: function(event) {
            const target = event.currentTarget;
            if(target.classList.contains('right') == true) {
                counter = counter+1;
                target.className = target.className.replace('right','').trim();
                document.getElementById(0).textContent = 'Rounds: ' + counter;
                this.shuffle()
            } else {
                alert('Punktestand: ' + counter)
                counter = 0;
                document.getElementById(0).textContent = 'Rounds: ' + counter;            
                this.shuffle()
            }
        },
        shuffle: function() {
            const richtigeKombinationen = [['Grün',' tSchwarz',' gruenRichtig'],['Gelb',' tSchwarz',' gelbRichtig'],['Blau',' tSchwarz',' blauRichtig'],['Rot', ' tSchwarz',' rotRichtig']]
            const falscheKombinationen = [
                ['Grün',' tGruen',' gelbRichtig'],
                ['Grün',' tGruen',' blauRichtig'],
                ['Grün',' tGruen',' rotRichtig'],
                ['Grün',' tGelb',' gruenRichtig'],
                ['Grün',' tRot',' gruenRichtig'],
                ['Grün',' tBlau',' gruenRichtig'],
                ['Gelb',' tGruenHell',' gruenRichtig'],
                ['Rot',' tGruenHell',' gruenRichtig'],
                ['Blau',' tGruenHell',' gruenRichtig'],

                ['Gelb',' tGelb',' gruenRichtig'],
                ['Gelb',' tGelb',' blauRichtig'],
                ['Gelb',' tGelb',' rotRichtig'],
                ['Gelb',' tGruen',' gelbRichtig'],
                ['Gelb',' tRot',' gelbRichtig'],
                ['Gelb',' tBlau',' gelbRichtig'],
                ['Grün',' tGelbHell',' gelbRichtig'],
                ['Rot',' tGelbHell',' gelbRichtig'],
                ['Blau',' tGelbHell',' gelbRichtig'],

                ['Blau',' tBlau',' gelbRichtig'],
                ['Blau',' tBlau',' gruenRichtig'],
                ['Blau',' tBlau',' rotRichtig'],
                ['Blau',' tGelb',' blauRichtig'],
                ['Blau',' tRot',' blauRichtig'],
                ['Blau',' tGruen',' blauRichtig'],
                ['Gelb',' tBlauHell',' blauRichtig'],
                ['Rot',' tBlauHell',' blauRichtig'],
                ['Grün',' tBlauHell',' blauRichtig'],

                ['Rot',' tRot',' gelbRichtig'],
                ['Rot',' tRot',' blauRichtig'],
                ['Rot',' tRot',' gruenRichtig'],
                ['Rot',' tGelb',' rotRichtig'],
                ['Rot',' tGruen',' rotRichtig'],
                ['Rot',' tBlau',' rotRichtig'],
                ['Gelb',' tRotHell',' rotRichtig'],
                ['Gruen',' tRotHell',' rotRichtig'],
                ['Blau',' tRotHell',' rotRichtig'],

                ['Grün',' tSchwarz',' gelbRichtig'],
                ['Grün',' tSchwarz',' rotRichtig'],
                ['Grün',' tSchwarz',' blauRichtig'],

                ['Gelb',' tSchwarz',' gruenRichtig'],
                ['Gelb',' tSchwarz',' rotRichtig'],
                ['Gelb',' tSchwarz',' blauRichtig'],

                ['Rot',' tSchwarz',' gelbRichtig'],
                ['Rot',' tSchwarz',' gruenRichtig'],
                ['Rot',' tSchwarz',' blauRichtig'],

                ['Blau',' tSchwarz',' gelbRichtig'],
                ['Blau',' tSchwarz',' rotRichtig'],
                ['Blau',' tSchwarz',' gruenRichtig'],
            ]
            //console.log(richtigeKombinationen)
            const zuweisen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
            let zufallKombinationR = richtigeKombinationen[Math.floor(Math.random()*richtigeKombinationen.length)];
            let zKombi = false;
            for(let i = 0;i<2;i++) {
                aktKarte = zuweisen[Math.floor(Math.random()*zuweisen.length)];
                if(zKombi === false) {
                    for(let j = 0;j<2;j++) {
                        if(document.getElementById(aktKarte).classList.contains('tGelb') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tGelb','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tRot') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tRot','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tBlau') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tBlau','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tGruen') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tGruen','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tSchwarz') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tSchwarz','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tRotHell') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tRotHell','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tBlauHell') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tBlauHell','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tGruenHell') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tGruenHell','').trim();
                        } else if(document.getElementById(aktKarte).classList.contains('tGelbHell') === true) {
                            document.getElementById(aktKarte).className = document.getElementById(aktKarte).className.replace('tGelbHell','').trim();
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
                            if(document.getElementById(zuweisen[i]).classList.contains('tGelb') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tGelb','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tRot') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tRot','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tBlau') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tBlau','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tGruen') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tGruen','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tSchwarz') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tSchwarz','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tGelbHell') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tGelbHell','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tRotHell') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tRotHell','').trim();
                            } else if(document.getElementById(zuweisen[i]).classList.contains('tBlauHell') === true) {
                                document.getElementById(zuweisen[i]).className = document.getElementById(zuweisen[i]).className.replace('tBlauHell','').trim();
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