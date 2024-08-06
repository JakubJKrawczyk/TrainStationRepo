<template>
  <div
    class="tooltip"
    :style="{
      visibility: isShow ? 'visible' : 'hidden',
      position: `fixed`,
      zIndex: 999,
      left: `${positionX}px`,
      top: `${positionY}px`,
      transform: `translateX(${correctPos}px)`
    }"
  >
    {{ message }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    message: String,
    positionX: Number,
    positionY: Number,
    isShow: Boolean,
    correctPos: Number
  }
}
</script>
