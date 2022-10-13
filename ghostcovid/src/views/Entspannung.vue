<template>
    <div class="entspannung">
      <Header />
      <EntspannungC msg="Entspannung" />

      <div class="row" style="width: 95%; font-size: 110%;">
        <div class="col s3">
          <p style="font-size: 110%; font-family: 'Alegreya SC', serif;">
            Wählen Sie eine Entspannungsübung und klicken Sie auf diese für weitere Informationen.
          </p><br>
          <img @click="showPic(1)" src="../assets/entspannungsU/steh.jpg" style="width: 20%; margin: 0.5%;"/>
          <img @click="showPic(2)" src="../assets/entspannungsU/stehr.jpg" style="width: 20%; margin: 0.5%;"/>
          <img @click="showPic(3)" src="../assets/entspannungsU/kerze.jpg" style="width: 20%; margin: 0.5%;"/>
          <img @click="showPic(4)" src="../assets/entspannungsU/kerzer.jpg" style="width: 20%; margin: 0.5%;"/>
          <img @click="showPic(5)" src="../assets/entspannungsU/statue.jpg" style="width: 20%; margin: 0.5%;"/>
          <img @click="showPic(6)" src="../assets/entspannungsU/statuer.jpg" style="width: 20%; margin: 0.5%;"/>
          <img @click="showPic(7)" src="../assets/entspannungsU/strecker.jpg" style="width: 20%; margin: 0.5%;"/>
          <img @click="showPic(8)" src="../assets/entspannungsU/sitz.jpg" style="width: 20%; margin: 0.5%;"/>
        </div>
        <div class="col s6">
          <img class="src" :src="apic" style="width: 80%; text-align:left; margin: 0.5%"/>
        </div>
        <div class="col s3">
          <p style="text-align:left;font-size: 150%; font-family: 'Alegreya SC', serif;">{{aname}}</p>
          <p style="text-align:left;font-size: 110%; font-family: 'Alegreya SC', serif;">{{atext}}</p>
        </div>
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
      apic: require('@/assets/entspannungsU/si.jpg'),
      aname: "Padmasana",
      atext: "Setzen sie sich auf ihre Matte oder einen anderen bequemen Untergrund. Legen sie Ihre Hände auf den Oberschenkeln ab und drehen Sie die Handflächen nach oben. Schließen Sie die Augen und versuchen Sie, sich zu entspannen und auf Ihren Körper zu hören. Bleiben Sie für 5 Minuten in dieser Position."
    }
  },
  methods:{
    showPic(nr){
      if(nr==1) {
        this.apic = require('@/assets/entspannungsU/st.jpg')
        this.aname = "Tadasana"
        this.atext = "Stellen Sie sich gerade hin und strecken beide Arme in Richtung Himmel, als würden Sie ein 'V' bilden. Schließen Sie wenn möglich die Augen. Strecken Sie sich so weit es geht und halten in der Position 30 Sekunden inne. Lockern Sie danach ihre Gliedmaßen. Wiederholen Sie diese Übung 5 mal."
      }
      if(nr==2) {
        this.apic = require('@/assets/entspannungsU/str.jpg')
        this.aname = "Tadasana"
        this.atext = "Stellen Sie sich gerade hin und strecken beide Arme in Richtung Himmel, als würden Sie ein 'V' bilden. Schließen Sie wenn möglich die Augen. Strecken Sie sich so weit es geht und halten in der Position 30 Sekunden inne. Lockern Sie danach ihre Gliedmaßen. Wiederholen Sie diese Übung 5 mal."
      }
      if(nr==3) {
        this.apic = require('@/assets/entspannungsU/ke.jpg')
        this.aname = "Vrksasana"
        this.atext = "Stellen Sie sich gerade hin und führen Sie eine Fußsohle zu ihrem Knie. Je höher Sie Ihre Fußsohle ansetzen, desto besser. Anschließend führen Sie Ihre Hände zusammen und strecken Ihre Armen in Richtung Himmel. Halten Sie diese Position 30 Sekunden lang. Gehen Sie zu Ihrer Ursprungsposition zurück, lockern Sie Ihre Gliedmaßen und wiederholen Sie die Übung 5 Mal, ehe Sie das Bein wehcseln."
      }
      if(nr==4) {
        this.apic = require('@/assets/entspannungsU/ker.jpg')
        this.aname = "Vrksasana"
        this.atext = "Stellen Sie sich gerade hin und führen Sie eine Fußsohle zu ihrem Knie. Je höher Sie Ihre Fußsohle ansetzen, desto besser. Anschließend führen Sie Ihre Hände zusammen und strecken Ihre Armen in Richtung Himmel. Halten Sie diese Position 30 Sekunden lang. Gehen Sie zu Ihrer Ursprungsposition zurück, lockern Sie Ihre Gliedmaßen und wiederholen Sie die Übung 5 Mal, ehe Sie das Bein wehcseln."
      }
      if(nr==5) {
        this.apic = require('@/assets/entspannungsU/sta.jpg')
        this.aname = "Utthita Ashwa Sanchalanasana"
        this.atext = "Machen Sie einen großen Schritt nach vorne mit dem rechten Fuß. Beugen Sie das vordere Knie, halten Sie Ihr Hinterbein gerade und die Ferse vom Boden angehoben. Lehnen Sie sich mit Ihren Hüften nach vorne und strecken Sie Ihre Arme zum Himmel. Dehnen Sie sich nach oben. Halten Sie diese Position für 30 Sekunden und wiederholen Sie dies auf der anderen Seite, jeweils 5 Mal."
      }
      if(nr==6) {
        this.apic = require('@/assets/entspannungsU/star.jpg')
        this.aname = "Utthita Ashwa Sanchalanasana"
        this.atext = "Machen Sie einen großen Schritt nach vorne mit dem rechten Fuß. Beugen Sie das vordere Knie, halten Sie Ihr Hinterbein gerade und die Ferse vom Boden angehoben. Lehnen Sie sich mit Ihren Hüften nach vorne und strecken Sie Ihre Arme zum Himmel. Dehnen Sie sich nach oben. Halten Sie diese Position für 30 Sekunden und wiederholen Sie dies auf der anderen Seite, jeweils 5 Mal."
      }
      if(nr==7) {
        this.apic = require('@/assets/entspannungsU/bs.jpg')
        this.aname = "Shavasana"
        this.atext = "Legen Sie sich auf den Boden und strecken die Arme und Beine aus. Achten Sie darauf. dass Ihr Rücken am Boden liegt und kein Hohlkreuz entsteht. Halten Sie die Position für eine Minute, entspannen Sie Ihre Gliedmaßen und wiederholen Sie die Übung 5 Mal."
      }
      if(nr==8) {
        this.apic = require('@/assets/entspannungsU/si.jpg')
        this.aname = "Padmasana"
        this.atext = "Setzen sie sich auf ihre Matte oder einen anderen bequemen Untergrund. Legen sie Ihre Hände auf den Oberschenkeln ab und drehen Sie die Handflächen nach oben. Schließen Sie die Augen und versuchen Sie, sich zu entspannen und auf Ihren Körper zu hören. Bleiben Sie für 5 Minuten in dieser Position."
      }
    }
  }
};
</script>
