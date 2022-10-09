<template>
    <div class="profil">
      <Header />
      <ProfilC msg="Profil" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import ProfilC from "@/components/ProfilC.vue";

export default {
  name: "Profil",
  components: {
    ProfilC,
  },
};
</script>
