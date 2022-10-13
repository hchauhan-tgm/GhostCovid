<template>
    <div class="profil">
      <Header />
      <ProfilC msg="Profil" />
      <!--<ProfilCnoUser msg="Profil" />-->
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import ProfilC from "@/components/ProfilC.vue";
//import ProfilCnoUser from "@/components/ProfilCnoUser.vue";

export default {
  name: "Profil",
  components: {
    ProfilC,
    //ProfilCnoUser,
  },
};
</script>
