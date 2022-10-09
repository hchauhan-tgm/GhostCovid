<template>
    <div class="forum">
      <Header />
      <ForumC msg="Forum" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import ForumC from "@/components/ForumC.vue";

export default {
  name: "Forum",
  components: {
    ForumC,
  },
};
</script>
