<template>
    <div class="podcast">
      <Header />
      <PodcastC msg="Podcast" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import PodcastC from "@/components/PodcastC.vue";

export default {
  name: "Podcast",
  components: {
    PodcastC,
  },
};
</script>
