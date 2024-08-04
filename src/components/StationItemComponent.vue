<script setup lang="ts">
import { GlobalConst } from '@/GlobalConsts'
</script>

<template>
  <div class="stations-list-item">
    <div class="stations-list-itempart stations-list-name">
      <span>{{ $props.station.name.replace('"', '').replace("'", '') }}</span>
    </div>
    <div
      :style="`background: ${GlobalConst.DiscriminantsLegend[$props.station.discriminant].color}`"
      class="stations-list-itempart stations-list-discriminant"
    >
      <span>{{ GlobalConst.DiscriminantsLegend[$props.station.discriminant].name }}</span>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { StationModel } from '@/models/Models'

export default {
  props: {
    station: {
      type: StationModel,
      required: true
    }
  },
  data() {
    return {
      dicriminants: new Map<string, Map<string, string>>([
        ['PO', new Map<string, string>([['Posterunek Osobowy', 'blue']])]
      ])
    }
  }
}
</script>
