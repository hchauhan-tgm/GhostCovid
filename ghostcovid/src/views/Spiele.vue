<template>
    <div class="spiele">
      <Header />
      <SpieleC msg="Spiele" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import SpieleC from "@/components/SpieleC.vue";

export default {
  name: "Spiele",
  components: {
    SpieleC,
  },
};
</script>
