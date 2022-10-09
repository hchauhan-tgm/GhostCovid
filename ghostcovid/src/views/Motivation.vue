<template>
    <div class="motivation">
      <Header />
      <MotivationC msg="Motivation" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import MotivationC from "@/components/MotivationC.vue";

export default {
  name: "Motivation",
  components: {
    MotivationC,
  },
};
</script>
