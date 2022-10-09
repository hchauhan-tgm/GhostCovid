<template>
    <div class="impressum">
      <Header />
      <ImpressumC msg="Impressum" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import ImpressumC from "@/components/ImpressumC.vue";

export default {
  name: "Impressum",
  components: {
    ImpressumC,
  },
};
</script>
