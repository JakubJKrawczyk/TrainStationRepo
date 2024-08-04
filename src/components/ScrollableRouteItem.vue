<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const routeItemContainer = ref<HTMLElement | null>(null)
let animationId: number | null = null
let isPaused = false

const startAnimation = () => {
  if (!routeItemContainer.value) return

  const container = routeItemContainer.value
  const maxScrollLeft = container.scrollWidth - container.clientWidth
  container.scrollLeft = 0
  animationId = requestAnimationFrame(() => scroll(container, maxScrollLeft))
}

const scroll = (container: HTMLElement, maxScrollLeft: number) => {
  if (isPaused) return

  if (container.scrollLeft >= maxScrollLeft) {
    container.scrollLeft = 0
  } else {
    container.scrollLeft += 1
  }

  animationId = requestAnimationFrame(() => scroll(container, maxScrollLeft))
}

const pauseAnimation = () => {
  isPaused = true
  if (animationId !== null) {
    cancelAnimationFrame(animationId)
  }
}

const resumeAnimation = () => {
  isPaused = false
  startAnimation()
}

onMounted(() => {
  startAnimation()
  const container = routeItemContainer.value
  if (container) {
    container.addEventListener('mouseover', pauseAnimation)
    container.addEventListener('mouseleave', resumeAnimation)
  }
})

onUnmounted(() => {
  const container = routeItemContainer.value
  if (container) {
    container.removeEventListener('mouseover', pauseAnimation)
    container.removeEventListener('mouseleave', resumeAnimation)
  }
  if (animationId !== null) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<template v-if="$props.route !== undefined">
  <div
    class="route-item-container"
    ref="routeItemContainer"
    :style="`animation-delay: ${$props.delay}s`"
    v-if="$props.route !== undefined && Array.isArray($props.route)"
  >
    <div class="route-item scroll-content">
      <div v-for="index in $props.route.length" :key="index" class="station-name-container">
        <span
          :style="`background: ${GlobalConst.DiscriminantsLegend[$props.route[index - 1].discriminant].color}`"
          :class="`station-name ${index - 1 === 0 ? 'start-station' : index - 1 === $props.route.length - 1 ? 'end-station' : ''}`"
        >
          {{ $props.route[index - 1].name }}
        </span>

        <template v-if="index - 1 < $props.route.length - 1">
          <span class="separator">&bull; &bull; &bull; &bull; &bull; &bull;</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { StationModel } from '@/models/Models'
import { GlobalConst } from '@/GlobalConsts'

export default {
  props: {
    delay: {
      type: Number,
      required: true
    },
    route: {
      type: Array as () => StationModel[] | undefined,
      required: true
    }
  },
  created() {
    for (let s of this.$props.route!) {
        GlobalConst.stationDiscriminant[s.name] = s.discriminant
    }
  }
}
</script>
