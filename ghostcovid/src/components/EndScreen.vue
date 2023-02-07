<template>
  <div
    class="containerEnde"
    style="margin-top: -5%; padding-top: 5%; color: #fff"
  >
    <h1 style="color: #fff; text-decoration: underline">
      Herzlichen Glückwunsch
    </h1>
    <br />
    <h2 style="margin-top: -2%">
      FÜR <b>{{ name }}</b> HAST DU <b>{{ time }}</b> SEKUNDEN GEBRAUCHT!
    </h2>
    <h2>
      DATUM: {{ datum }} DEIN SCORE: <b>{{ points }}</b>
    </h2>
    <br />
    <router-link to="/training/spiele"
      ><button class="buttonEnd" style="justify-content: center">
        zurück
      </button></router-link
    ><br />
  </div>
</template>

<script>
export default {
  name: "EndScreen",
  props: {
    points: Number,
    name: String,
    time: Number,
  },
  data() {
    return {
      datum: String,
    };
  },
  mounted: function () {
    this.getDate();
  },
  methods: {
    getDate: function () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      this.datum = day + "." + month + "." + year;
    },
  },
};
</script>
<style scoped></style>
