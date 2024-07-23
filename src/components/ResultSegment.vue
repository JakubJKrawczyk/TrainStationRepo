<script setup lang="ts">

import ScrollableRouteItem from '@/components/ScrollableRouteItem.vue'
import { GlobalConst } from '@/GlobalConsts'
import Global = WebAssembly.Global
</script>

<template class="Results">
  <h1 class="routes-header">Routes List</h1>

  <template v-for="index in GlobalConst.Routes.routes.length" :key="index">
    <div class="lamps">
      <template v-for="num in 3" :key="num">

        <div class="lamp" :style="`left: ${num * 23.3}vw`"></div>
      </template>
    </div>


    <ScrollableRouteItem :delay="index * 0.2" :route="GlobalConst.Routes.routes[index]"/>
  </template>

</template>
<!--ha-->
<style scoped>

</style>