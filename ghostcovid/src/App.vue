<template>
    <div id="app">
      <router-view />
        <fab :position="top-left" :actions="fabActions"  @E-Mail="mailme" @Spotify="gotospotify" @Instagram="gotoinsta" ></fab>

        
    </div>
</template>

<style>
  @import '../src/allgemein.css';
</style>

<script>
import fab from "vue-fab";

export default {
  name: "App",
  components: {
    fab
  },
  data() {
    return {
      bgColor: "#778899",
      position: "top-right",
      fabActions: [
        {
          name: "E-Mail",
          icon: "email"
        },
        {
          name: "Spotify",
          icon: "library_music"
        },
        {
          name: "Instagram",
          icon: "camera_alt"
        }
      ]
    };
  },
  methods: {
    mailme() {
      window.location.href = "mailto:jwagner@student.tgm.ac.at";
    },
    gotospotify() {
      window.location.href = "https://www.spotify.com";
    },
    gotoinsta() {
      window.location.href = "https://www.instagram.com";
    }
  }
};
</script>

<style scoped>
.fab {
  color: blueviolet;
}
</style>
