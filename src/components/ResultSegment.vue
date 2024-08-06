<script setup lang="ts">
import ScrollableRouteItem from '@/components/ScrollableRouteItem.vue'
import { GlobalConst } from '@/GlobalConsts'
import LampComponent from '@/components/LampComponent.vue'
import TooltipComponent from '@/components/TooltipComponent.vue'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

//tooltip props
let isShow = ref(false)
let X = ref(0.0)
let Y = ref(0.0)
let correctPos = ref(0.0)
let Message = ref('hello')
//

const showToolTip = async (sender: HTMLElement) => {
  let discr = GlobalConst.stationDiscriminant[sender.innerText]
  Message.value = GlobalConst.DiscriminantsLegend[discr].name
  X.value = sender.getBoundingClientRect().left
  Y.value = sender.getBoundingClientRect().top - 30
  isShow.value = true
  await nextTick()
    let tt = document.getElementsByClassName("tooltip")[0];
    if(tt){
      correctPos.value = (sender.clientWidth - tt.clientWidth)/2;
    }


}

const hideToolTip = () => {
  correctPos.value = 0.0;
  isShow.value = false
}

const items = document.getElementsByClassName('station-name')
onMounted(() => {
  if (items) {
    for (let item of items) {
      item.addEventListener('mouseover', () => showToolTip(item as HTMLElement))
      item.addEventListener('mouseout', () => hideToolTip())
    }
  }
})

onUnmounted(() => {
  if (items) {
    for (let item of items) {
      item.removeEventListener('mouseover', () => showToolTip(item as HTMLElement))
      item.removeEventListener('mouseout', () => hideToolTip())
    }
  }
})
</script>

<template class="Results">
  <button class="back-button" v-on:click="back">Back</button>
  <h1 class="routes-header">Routes List</h1>

  <template v-for="index in GlobalConst.Routes.routes.length" :key="index">
    <LampComponent  :count="3" :space="23.3"></LampComponent>

    <ScrollableRouteItem :delay="index * 0.2" :route="GlobalConst.Routes.routes[index - 1]" />
  </template>
  <TooltipComponent
    :isShow="isShow"
    :positionX="X"
    :positionY="Y"
    :message="Message"
    :correctPos=correctPos
  ></TooltipComponent>
</template>

<script lang="ts">
export default {
  props: {
    id: String
  },
  emits: {
    changeComponent: Function as (arg: string) => void
  },
  methods: {
    back: function () {
      this.$emit('changeComponent', 'SearchSegment')
    }
  }
}
</script>
