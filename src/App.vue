<script setup lang="ts">
import StationsList from '@/components/StationsList.vue'
import ResultSegment from '@/components/ResultSegment.vue'
import SearchSegment from '@/components/SearchSegment.vue'
</script>

<template>
  <main>
    <component id="segmentContainer" @change-component="SetCurrentComponent" :is="currentComponent"></component>

  </main>
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


export default {
    components: {
      SearchSegment,
      ResultSegment,
      StationsList,
    },
    data() {
      return {
        currentComponentName: 'SearchSegment',
      }
    },
    computed: {
      currentComponent() {
        return {
          'SearchSegment': SearchSegment,
          'ResultSegment': ResultSegment,
          'StationsList': StationsList
        }[this.currentComponentName];
      }
    },
  methods:{
      SetCurrentComponent(currentComponentName: string) {
        this.currentComponentName = currentComponentName;
      }
  }


  }

</script>

