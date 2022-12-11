<template>
    <div class="kreativ">
      <Header />
      
      <section id="begruessung">
        <Titel msg="Kreativübungen" />
        <Zitat msg="... Eine Batterie die leer ist, wenn sie die gleich noch einmal massiv belasten, wird sie noch leerer. Aber wenn man die Batterie nur ins Bett legt, 
        ladet sie sich nicht wieder auf. Man muss quasi gezielte Stimuli setzten, zum Beispiel Bewegung, eine Kreativtherapie oder auch ein Outdoor-Programm.   ..." msg2="Tips Urfahr-Umgebung"/><br><br>
        <a href="#training/spiele" class="startbutton">Let's <b style="font-family:Chalkduster; letter-spacing:1px;">be creative</b> together!</a>
      </section>
      <section id="training/spiele" class="contenthome">
        <p class="lets">Madalas</p>
        <p class="hometext">
          Malen entspannt und hilft beim Konzentrieren.
        </p>
        <p class="lets">-</p>
        <p class="lets">Kreise</p>
        <p class="hometext">
          Kreise ausmalen hilft dir.
        </p>
        <p class="lets">-</p>
        <p class="lets">Weitere</p>
        <p class="hometext">
          Stricken und Häkeln hilft dir, deine Fingerfertigkeit wieder zu verbessern.
        </p>
      </section>

      <Footer />
    </div>
</template>

<script>
export default {
  name: 'Kreativ',
}
</script>
