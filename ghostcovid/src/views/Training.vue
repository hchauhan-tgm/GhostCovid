<template>
    <div class="training">
      <Header />

      <!-- Titel Abschnitt mit Themensatz und Auswahl-Buttons -->
      <div id="obentr">
        <Titel msg="Training" />
        <Zitat msg="... Denn bei vielen Betroffenen hat die Virusinfektion die kleinsten Gefäße verändert,
            sodass die Zellen auch im Gehirn nicht mehr ausreichend mit Sauerstoff versorgt werden. 
            Bei Long-Covid spricht man von einem Brain-Fog, einem Nebel im Gehirn. ..." msg2="Norddeutscher Rundfunk (NDR)"/><br><br>
        <router-link to="/training/entspannung" class="trainingbutton btn">Entspannung</router-link>
        <router-link to="/training/atmen" class="trainingbutton btn">Atemtraining</router-link><br>
        <router-link to="/training/spiele" class="trainingbutton btn">Spiele</router-link>
        <router-link to="/training/kreativ" class="trainingbutton btn">Kreativität</router-link>
        <router-link to="/training/motivation" class="trainingbutton btn">Motivation</router-link>
      </div>
      
      <!-- roter Balken unter Buttons -->
      <div id="contenttr">
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
