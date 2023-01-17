<template>
    <div class="kreativ" ref="startkreativv">
      <Header />
      
      <div id="begruessung">
        <Titel msg="Kreativübungen" />
        <Zitat msg="... Eine Batterie die leer ist, wenn sie die gleich noch einmal massiv belasten, wird sie noch leerer. Aber wenn man die Batterie nur ins Bett legt, 
        ladet sie sich nicht wieder auf. Man muss quasi gezielte Stimuli setzten, zum Beispiel Bewegung, eine Kreativtherapie oder auch ein Outdoor-Programm.   ..." msg2="Tips Urfahr-Umgebung"/><br><br>
        <a @click="sc()" class="startbutton">Let's <b style="font-family:Chalkduster; letter-spacing:1px;">be creative</b> together!</a>
      </div>

      <div ref="inhaltkreativv" class="contenthome">
        <p class="lets">Mandalas</p>
        <p class="hometext">
          Malen entspannt und hilft beim Konzentrieren.
        </p>
        <div class="row">
          <div class="col s6" style="text-align:right">
            <img src="../assets/Mandala1.png" class="kreativm"/><br>
          </div>
          <div class="col s6" style="text-align:left">
            <img src="../assets/Mandala2.png" class="kreativm"/><br>
          </div>
        </div>
        <div class="row">
          <div class="col s6" style="text-align:right;padding-right:100px">
            <a href="../Mandala1.pdf" download style="color: white; font-size:1.5em; text-decoration:underline">
          DOWNLOAD
          </a>
          </div>
          <div class="col s6" style="text-align:left;padding-left:100px">
            <a href="../Mandala2.pdf" download style="color: white; font-size:1.5em; text-decoration:underline">
          DOWNLOAD
          </a>
          </div>
        </div>
        <p class="lets">-</p>
        <p class="lets">Kreise</p>
        <p class="hometext">
          Kreise ausmalen fördert deine Kreativität.
        </p>
        <img src="../assets/kreise1.png" class="kreativk"/><br>
        <a href="../Kreise1.pdf" download style="color: white; font-size:1.5em; text-decoration:underline">
          DOWNLOAD
          </a>
        <p class="lets">-</p>
        <p class="lets">Weitere</p>
        <p class="hometext">
          Stricken und Häkeln hilft dir, deine Fingerfertigkeit wieder zu verbessern.
        </p>
      </div>

      <Footer />
    </div>
</template>

<script>
export default {
  name: 'Kreativ',
  mounted:function(){
    var element = this.$refs['startkreativv'];
    var top = element.offsetTop;
    window.scrollTo(0, top-100);
  },
  methods: {
    sc() {
      var element = this.$refs['inhaltkreativv'];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
</script>
<style scoped>
.kreativm {
  width: 300px;
}
.kreativk {
  width: 500px;
}
</style>
