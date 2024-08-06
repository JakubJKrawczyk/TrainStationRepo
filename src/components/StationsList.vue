<script setup lang="ts">
import StationItemComponent from '@/components/StationItemComponent.vue'
import LampComponent from '@/components/LampComponent.vue'
</script>

<template>
  <header class="stations-list-header">
    <button class="back-button" v-on:click="back">Back</button>
    <h1 id="stations-list-h1">Lista stacjii</h1>
  </header>
  <template v-if="$data.stations.length != 0">
    <template v-for="station in $data.stations" :key="station.id">
      <StationItemComponent :station="station as StationModel"></StationItemComponent>
    </template>
  </template>
  <template v-else>
    <div :style="`text-align:center`">
      <h1>Wczytywanie...</h1>
    </div>
  </template>
</template>

<style scoped></style>

<script lang="ts">
import { StationModel } from '@/models/Models'
import { ApiController } from '@/controllers/ApiController'
let cont = new ApiController()

export default {
  data() {
    return {
      stations: [] as StationModel[],
      documentWidth: window.innerWidth
    }
  },
  methods: {
    async getStations() {
      try {
        const resp = await cont.stations()
        this.stations = resp.stations
        console.log('API: stations successfully loaded', this.stations)
      } catch (error) {
        console.error('Error fetching stations:', error)
      }
    },
    back: function () {
      console.log('Go Back')
      this.$emit('changeComponent', 'SearchSegment')
    }
  },
  emits: {
    changeComponent: Function as (arg: string) => void
  },
  props: {
    id: String
  },
  created() {
    this.getStations()
  }
}
</script>
