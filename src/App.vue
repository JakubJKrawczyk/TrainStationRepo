<script setup lang="ts">
import StationsList from '@/components/StationsList.vue'
import ResultSegment from '@/components/ResultSegment.vue'
import SearchSegment from '@/components/SearchSegment.vue'
import PrivacyPolicyPopupSegment from '@/components/PrivacyPolicyPopupSegment.vue'

window.onerror = function(message, source, lineno, colno, error) {
  console.error(`Błąd: ${message} w ${source} na linii ${lineno}, kolumnie ${colno}`);
  window.location.href = '/error';
  return true;
};

window.addEventListener('unhandledrejection', function(event) {
  console.error(`Nieobsłużony błąd w Promise: ${event.reason}`);
  window.location.href = '/error';
  event.preventDefault();
});

</script>

<template>
  <main>
    <button v-if="currentComponentName == 'SearchSegment'" v-on:click="authors" class="back-button">
      Autorzy
    </button>
    <component
      id="segmentContainer"
      @change-component="SetCurrentComponent"
      :is="currentComponent"
    ></component>
  </main>
<!--  <PrivacyPolicyPopupSegment></PrivacyPolicyPopupSegment>-->
  <footer>
    Dane na podstawie regulaminu sieci PKP PLK 2023/24 (<a
      href="https://www.plk-sa.pl/klienci-i-kontrahenci/warunki-udostepniania-infrastruktury-i-regulaminy/regulamin-sieci/regulamin-sieci-2023/2024"
      >link</a
    >)
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script lang="ts">
import AuthorsComponent from '@/components/AuthorsComponent.vue'

export default {
  components: {
    SearchSegment,
    ResultSegment,
    StationsList
  },
  data() {
    return {
      currentComponentName: 'SearchSegment'
    }
  },
  computed: {
    currentComponent() {
      return {
        SearchSegment: SearchSegment,
        ResultSegment: ResultSegment,
        StationsList: StationsList,
        AuthorsComponent: AuthorsComponent
      }[this.currentComponentName]
    }
  },
  methods: {
    SetCurrentComponent(currentComponentName: string) {
      this.currentComponentName = currentComponentName
    },
    authors() {
      this.SetCurrentComponent('AuthorsComponent')
    }
  }
}
</script>
