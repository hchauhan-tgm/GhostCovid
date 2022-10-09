<template>
    <div class="home">
      <Header />
      <HomeC msg="Herzlich Willkommen" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import HomeC from "@/components/HomeC.vue";

export default {
  name: "Home",
  components: {
    HomeC,
  },
};
</script>
