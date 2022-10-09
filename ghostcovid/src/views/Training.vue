<template>
    <div class="home">
      <Header />
      <TrainingC msg="Training" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import TrainingC from "@/components/TrainingC.vue";

export default {
  name: "Training",
  components: {
    TrainingC,
  },
};
</script>
