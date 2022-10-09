<template>
    <div class="kreativ">
      <Header />
      <KreativC msg="Kreativ" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import KreativC from "@/components/KreativC.vue";

export default {
  name: "Kreativ",
  components: {
    KreativC,
  },
};
</script>
