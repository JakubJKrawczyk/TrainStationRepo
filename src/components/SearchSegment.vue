<script setup lang="ts">
import TooltipComponent from '@/components/TooltipComponent.vue'
</script>

<template>
  <div class="segment">
    <button class="stations-button" v-on:click="showStationsList">
      <img src="@/assets/icons/station-white.svg" /> <span>stations &#8594;</span>
    </button>
    <h1>Znajdź połączenie</h1>
    <div class="inputs">
      <input
        id="startStationInput"
        list="start-stations"
        type="text"
        placeholder="Stacja początkowa..."
        v-on:input="setStartStation($event.target as HTMLInputElement)"
      />
      <datalist id="start-stations">
        <template v-if="startStations !== null">
          <option
            v-on:click="startStationInput.value = ($event.target as HTMLOptionElement).value"
            v-for="station in startStations.stations"
            :key="station.id"
            :value="station.name"
          >
            {{ station.name }}
          </option>
        </template>
      </datalist>
      <input
        id="endStationInput"
        list="end-stations"
        type="text"
        placeholder="Stacja końcowa..."
        v-on:input="setEndStation($event.target as HTMLInputElement)"
      />
      <datalist id="end-stations">
        <template v-if="endStations !== null">
          <option
            v-on:click="endStationInput.value = ($event.target as HTMLOptionElement).value"
            v-for="station in endStations.stations"
            :key="station.id"
            :value="station.name"
          >
            {{ station.name }}
          </option>
        </template>
      </datalist>
    </div>
    <span style="color:red;" id="warning"></span><br>
    <button id="SearchRouteBtn" v-on:click="handleSearch()">Szukaj</button>
  </div>
  <tooltip-component></tooltip-component>
</template>

<style scoped></style>

<script lang="ts">
import { StationModel, Stations } from '@/models/Models'
import { ApiController } from '@/controllers/ApiController'
import { GlobalConst } from '@/GlobalConsts'
import App from '@/App.vue'

export default {
  data() {
    return {
      startStations: null as Stations | null,
      endStations: null as Stations | null,
      controller: new ApiController(),
      startStation: null as String | null,
      endStation: null as String | null,
      startStationInput: document.getElementById('startStationInput') as HTMLInputElement,
      endStationInput: document.getElementById('endStationInput') as HTMLInputElement
    }
  },
  methods: {
    setStartStation: async function setStartStation(stationInput: HTMLInputElement): Promise<void> {
      this.startStations = await this.controller.fetchStations(stationInput.value)
    },
    setEndStation: async function setStartStation(stationInput: HTMLInputElement): Promise<void> {
      this.endStations = await this.controller.fetchStations(stationInput.value)
    },
    handleSearch: async function handleSearch() {
      let i1 = (document.getElementById('startStationInput') as HTMLInputElement).value
      let i2 = (document.getElementById('endStationInput') as HTMLInputElement).value
      if(i1 == "" && i2 == ""){
        document.getElementById("warning")!.innerHTML = `Conajmniej jedno pole musi być wypełnione`;
        return
      }
      let s1: StationModel,s2: StationModel = new StationModel(-1, "none", "none");
      try{
        s1 = await this.controller.getStationByName(i1)
        s2 = await this.controller.getStationByName(i2)
      }catch(error){
        document.getElementById("warning")!.innerHTML = `Nie znaleziono wyników dla podanych stacji: ${i1} i ${i2}`;
      return
      }


      GlobalConst.Routes = await this.controller.fetchRoutes(s1.id, s2.id)
      this.$emit('change-component', 'ResultSegment')
    },
    showStationsList: function showStationsList() {
      this.$emit('change-component', 'StationsList')
    }
  }
}
</script>
