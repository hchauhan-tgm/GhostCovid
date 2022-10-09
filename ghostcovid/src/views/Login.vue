<template>
    <div class="login">
      <Header />
      <LoginC msg="Login" />
      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import LoginC from "@/components/LoginC.vue";

export default {
  name: "Login",
  components: {
    LoginC,
  },
};
</script>
