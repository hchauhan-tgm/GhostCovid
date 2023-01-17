<template>
    <div class="containerEnde" style="margin-top: -8%">
        <h1> Herzlichen Glückwunsch </h1>
        <h2 style="margin-top: -2%"> DU HAST FÜR {{name}} {{time}} SEKUNDEN GEBRAUCHT! </h2>
        <h2>DATUM: {{datum}} DEIN SCORE: {{points}}</h2>
        <router-link to="/training/spiele"><button class="buttonEnd" style="justify-content: center">zurück</button></router-link><br>
    </div>
</template>

<script>
export default {
    name:'EndScreen',
    props: {
        points: String,
        name: String,
        time: Number,
    },
    data() {
        return {
            datum: String
        }
    },
    mounted: function() {
        this.getDate()
    },
    methods: {
        getDate: function() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            this.datum = day + "." + month + "." + year;
        },
    }
}
</script>
<style scoped>
    .containerEnde {
        width: 90%;
        height: 80%;
        margin-left: 5%;
        background-color: rgba(148,62,52,0.95);
        vertical-align: middle;
        text-align: center;
        position: absolute;
        margin-top: -5%;
        font-weight: 1200;
        z-index: 1;
        /*margin-top: -575px;
        color: white;
        position: absolute;
        text-align: center;
        background-color: rgba(255,0,4,0.56);
        font-size: 10em;
        vertical-align: middle;*/
        /*visibility: hidden;*/
    }
</style>