<template>
    <div class="training">
      <Header />
      <section id="obentr">
        <Titel msg="Training" />
        <Zitat msg="... Denn bei vielen Betroffenen hat die Virusinfektion die kleinsten Gefäße verändert,
            sodass die Zellen auch im Gehirn nicht mehr ausreichend mit Sauerstoff versorgt werden. 
            Bei Long-Covid spricht man von einem Brain-Fog, einem Nebel im Gehirn. ..." msg2="Norddeutscher Rundfunk (NDR)"/><br><br>
        <router-link to="/training/entspannung" class="trainingbutton btn">Entspannung</router-link>
        <router-link to="/training/atmen" class="trainingbutton btn">Atemtraining</router-link><br>
        <router-link to="/training/spiele" class="trainingbutton btn">Spiele</router-link>
        <router-link to="/training/kreativ" class="trainingbutton btn">Kreativität</router-link>
        <router-link to="/training/motivation" class="trainingbutton btn">Motivation</router-link>
      </section>
      <section id="contenttr">

      </section>


      <!--<section id="contenthome">
        <div class="row auswahlbtn">
          <div class="col s6"><router-link to="/spiele"><a class="waves-effect waves-light btn-large buttontra btn">Spiele</a></router-link></div>
          <div class="col s6"><router-link to="/entspannung"><a class="waves-effect waves-light btn-large buttontra btn">Entspannung</a></router-link></div>
          <div class="col s6"><router-link to="/kreativ"><a class="waves-effect waves-light btn-large buttontra btn">Kreativität</a></router-link></div>
          <div class="col s6"><router-link to="/motivation"><a class="waves-effect waves-light btn-large buttontra btn">Motivation</a></router-link></div>
        </div>
      </section>-->

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
