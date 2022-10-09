<template>
    <div class="entspannung">
      <Header />
      <EntspannungC msg="Entspannung" />

      <div class="row" style="width: 95%; font-size: 110%;">
        <div class="col s2"></div>
        <div class="col s8">
          <img @click="showPic(1)" src="../assets/entspannungsU/steh.jpg" style="width: 10%; margin: 0.1%;"/>
          <img @click="showPic(2)" src="../assets/entspannungsU/stehr.jpg" style="width: 10%; margin: 0.1%;"/>
          <img @click="showPic(3)" src="../assets/entspannungsU/kerze.jpg" style="width: 10%; margin: 0.1%;"/>
          <img @click="showPic(4)" src="../assets/entspannungsU/kerzer.jpg" style="width: 10%; margin: 0.1%;"/>
          <img @click="showPic(5)" src="../assets/entspannungsU/statue.jpg" style="width: 10%; margin: 0.1%;"/>
          <img @click="showPic(6)" src="../assets/entspannungsU/statuer.jpg" style="width: 10%; margin: 0.1%;"/>
          <img @click="showPic(7)" src="../assets/entspannungsU/strecker.jpg" style="width: 10%; margin: 0.1%;"/>
          <img @click="showPic(8)" src="../assets/entspannungsU/sitz.jpg" style="width: 10%; margin: 0.1%;"/>
        </div>
        <div class="col s2"></div>
      </div>

      <div class="row">
        <div class="col s2"></div>
        <div class="col s4">
          <img class="src" :src="apic" style="width: 50%; margin-left:20%"/>
        </div>
        <div class="col s4" style="font-size: 150%; font-family: 'Alegreya SC', serif;">
          {{this.atext}}
        </div>
        <div class="col s2"></div>
      </div>

      <Footer />
    </div>
  
</template>

<script>
// @ is an alias to /src
import EntspannungC from "@/components/EntspannungC.vue";

export default {
  name: "Entspannung",
  components: {
    EntspannungC,
  },
  data(){
    return{
      apic: require('@/assets/entspannungsU/sitz.jpg'),
      atext: "Gottesanbeter"
    }
  },
  methods:{
    showPic(nr){
      if(nr==1) {
        this.apic = require('@/assets/entspannungsU/steh.jpg')
        this.atext = "Gottesanbeter"
      }
      if(nr==2) {
        this.apic = require('@/assets/entspannungsU/stehr.jpg')
        this.atext = "Gottesanbeter"
      }
      if(nr==3) {
        this.apic = require('@/assets/entspannungsU/kerze.jpg')
        this.atext = "Kerze"
      }
      if(nr==4) {
        this.apic = require('@/assets/entspannungsU/kerzer.jpg')
        this.atext = "Kerze"
      }
      if(nr==5) {
        this.apic = require('@/assets/entspannungsU/statue.jpg')
        this.atext = "Seite"
      }
      if(nr==6) {
        this.apic = require('@/assets/entspannungsU/statuer.jpg')
        this.atext = "Seite"
      }
      if(nr==7) {
        this.apic = require('@/assets/entspannungsU/strecker.jpg')
        this.atext = "Boden Strecker"
      }
      if(nr==8) {
        this.apic = require('@/assets/entspannungsU/sitz.jpg')
        this.atext = "Sitz"
      }
    }
  }
};
</script>
