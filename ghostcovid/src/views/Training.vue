<template>
    <div class="training">
      <Header />
      <Titel msg="Training" />
      <Zitat msg="... Denn bei vielen Betroffenen hat die Virusinfektion die kleinsten Gefäße verändert,
          sodass die Zellen auch im Gehirn nicht mehr ausreichend mit Sauerstoff versorgt werden. 
          Bei Long-Covid spricht man von einem Brain-Fog, einem Nebel im Gehirn. ..." msg2="Norddeutscher Rundfunk (NDR)"/>
      
      <div class="row auswahlbtn">
        <div class="col s6"><router-link to="/spiele"><a class="waves-effect waves-light btn-large buttontra btn">Spiele</a></router-link></div>
        <div class="col s6"><router-link to="/entspannung"><a class="waves-effect waves-light btn-large buttontra btn">Entspannung</a></router-link></div>
        <div class="col s6"><router-link to="/kreativ"><a class="waves-effect waves-light btn-large buttontra btn">Kreativität</a></router-link></div>
        <div class="col s6"><router-link to="/motivation"><a class="waves-effect waves-light btn-large buttontra btn">Motivation</a></router-link></div>
      </div>

      <Footer />
    </div>
</template>

<script>
export default {
  name: "Training",
  components: {
  },
};
</script>
