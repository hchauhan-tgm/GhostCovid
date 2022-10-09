<template>
    <div class="statistik">
      <Header />
      <StatistikC msg="Informationen" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import StatistikC from "@/components/StatistikC.vue";

export default {
  name: "Statistik",
  components: {
    StatistikC,
  },
};
</script>
