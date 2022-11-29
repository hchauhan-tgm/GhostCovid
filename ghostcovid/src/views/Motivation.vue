<template>
    <div class="motivation">
      <Header />
      
      <section id="begruessung">
        <Titel msg="Motivation" />
        <Zitat msg="... Noch lange nach der eigentlichen Erkrankung leiden viele Menschen an den Spätfolgen einer Corona-Erkrankung, sogenanntem Long COVID. Das Krankheitsbild kann auch den Arbeitsalltag einschränken.  ..." msg2="MEDISinn"/><br><br>
        <a href="#training/spiele" class="startbutton">Let's <b style="font-family:Chalkduster; letter-spacing:1px;">get motivated</b> together!</a>
      </section>
      <section id="training/spiele" class="contenthome">
        <p class="lets">Belohne dich für getane Arbeit</p>
        <p class="hometext">
          Belohne dich nachdem du eine anstrengende Arbeit erledigt hast.<br> 
          Auch Teilerfolge sollten belohnt werden, denn dadurch verbindet das Gehirn Arbeit mit etwas Positivem. <br>

        </p>
        <p class="lets">-</p>
        <p class="lets">Setze dir realistische und konkrete Ziele</p>
        <p class="hometext">
          Je konkreter du deine Ziele formulierst, desto weniger Selbstmotivation ist nötig, um bis zum Ende des Zieles dranzubleiben.<br>
          Es hilft besonders die Ziele mithilfe der SMART Kriterien messbar zu machen.
        </p>
        <p class="lets">-</p>
        <p class="lets">Überliste dein Gehirn</p>
        <p class="hometext">
          Nimm dir vor dich für 5 Minuten einer Aufgabe zu widmen und danach zu überlegen, ob du weitermachst.<br>
          Dadurch ist die Chance dass du an der Aufgabe dranbleibst ziemlich hoch. 
        </p>
        <p class="lets">-</p>
        <p class="lets">Lass dir von anderen Leuten helfen</p>
        <p class="hometext">
          Manchmal hilft es mit anderen Menschen über deine Ziele und Pläne zu sprechen.<br>
          Diese können dich einerseits extrinsisch motivieren und dir andererseits wertvolle Tipps zum Erreichen der Ziele geben.
        </p>
        <p class="lets">-</p>
        <p class="lets">Finde heraus was dich motiviert</p>
        <p class="hometext">
          Jeder Mensch ist anders und lässt sich durch andere Sachen motivieren.<br>
          Deswegen ist es besonders wichtig herauszufinden, wie du dich am besten selbst motivieren kannst um deine Ziele zu erreichen.
        </p>
        <p class="lets">-</p>
        <p class="lets">Visualisiere deine Aufgabe</p>
        <p class="hometext">
          Stelle dir vor, dass du deine Aufgabe mit Freude erledigst.<br>
          Stelle dir außerdem das Gefühl vor, wie es sein wird wenn du die Aufgabe abgeschlossen hast.
        </p>
      </section>

      <Footer />
    </div>
  
</template>

<script>
export default {
  name: "Motivation",
  components: {
  },
};
</script>
