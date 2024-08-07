<script setup lang="ts"></script>

<template>
  <button class="back-button" v-on:click="back">Powrót</button>
  <div id="authorsDiv">
    <h1>Autorzy Projektu</h1>

    <div class="authorBox">
      <h2>Szymon Drogosz</h2>
      <h3><span class="green">Dane</span></h3>
      <h3>Kontakt:</h3>
      <h3>Discord: <span class="green">random_username6913</span></h3>
    </div>
    <div class="authorBox">
      <h2>Jakub Krawczyk</h2>
      <h3><span class="green">Front-End</span></h3>
      <h3>Kontakt:</h3>
      <h3>Discord: <span class="green">jakubjkrawczyk</span></h3>
    </div>
    <div class="authorBox">
      <h2>Łukasz Mastalerz</h2>
      <h3><span class="green">Back-End</span></h3>
      <h3>Kontakt:</h3>
      <h3>Discord: <span class="green">lakasabasz</span></h3>
    </div>
    <div class="authorBox">
      <h2>Marcel Gańczarczyk</h2>
      <h3>Rola: <span class="green">hosting i GPT-6</span></h3>
      <h3>Kontakt:</h3>
      <h3>Discord: <span class="green">themultii</span></h3>
    </div>
    <div class="authorBox">
      <h2>dr Łukasz Więcław</h2>
      <h3><span class="green">Logo</span></h3>
      <h3>Kontakt:</h3>
      <h3>E-mail: <span class="green"><a class="green" href="mailto:lwieclaw@ubb.edu.pl">lwieclaw@ubb.edu.pl</a></span></h3>
    </div>
  </div>
</template>

<style scoped>
#authorsDiv {
  width: 50vw;
  height: 120vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: center;
}
.authorBox {
  height: 200px;
  width: 100%;
  border: 3px solid white;
  border-radius: 5px;
  margin-top: 30px;
  text-align: center;
}

#authorsDiv h1 {
  display: block;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
}
#authorsDiv h2 {
  margin-top: 20px;
}
#authorsDiv h3 {
  margin-top: 10px;
}

@media only screen and (max-width: 1024px) {
  .authorBox h1 {
    font-size: 24px;
  }

  .authorBox h2 {
    font-size: 20px;
  }

  .authorBox h3 {
    font-size: 16px;
  }

  .back-button {
    position: absolute;
    left: 40px;
    top: 40px;
  }
}
</style>

<script lang="ts">
export default {
  methods: {
    back: function () {
      this.$emit('changeComponent', 'SearchSegment')
    }
  }
}
</script>
