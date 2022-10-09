<template>
    <div class="videos">
      <Header />
      <VideosC msg="Videos" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import VideosC from "@/components/VideosC.vue";

export default {
  name: "Videos",
  components: {
    VideosC,
  },
};
</script>
