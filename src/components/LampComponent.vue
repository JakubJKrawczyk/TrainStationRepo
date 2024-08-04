<script setup lang="ts"></script>

<template>
  <div class="lamps">
    <template v-for="num in $props.count" :key="num">
      <div class="lamp" :style="`left: ${num * $props.space!}vw`"></div>
    </template>
  </div>
</template>

<style scoped></style>

<script lang="ts">
export default {
  props: {
    count: Number,
    space: Number
  }
}
</script>
