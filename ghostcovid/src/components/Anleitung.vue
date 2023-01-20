<template>
    <div class="containerEnde2" style="margin-top: 1%;padding: 5%;color:#fff">
        <h5> {{anl}}</h5><br>
        <h6> Auf "Anleitung" klicken zum Schließen! </h6>
    </div>
</template>

<script>
export default {
    name:'Anleitung',
    props: {
    anl: String
  },
}
</script>