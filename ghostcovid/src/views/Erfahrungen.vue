<template>
    <div class="home">
      <Header />
      <ErfahrungenC msg="Erfahrungen" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import ErfahrungenC from "@/components/ErfahrungenC.vue";

export default {
  name: "Erfahrungen",
  components: {
    ErfahrungenC,
  },
};
</script>
