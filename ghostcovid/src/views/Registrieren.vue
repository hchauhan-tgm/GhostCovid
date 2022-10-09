<template>
    <div class="registrieren">
      <Header />
      <RegistrierenC msg="Registrieren"/>
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import RegistrierenC from "@/components/RegistrierenC.vue";

export default {
  name: "Registrieren",
  components: {
    RegistrierenC,
  },
};
</script>
