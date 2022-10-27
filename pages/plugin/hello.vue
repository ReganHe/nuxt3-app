<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="my-2 text-6xl font-semibold text-sky-400">{{ title }}</h1>
      <h1 class="my-2 text-6xl font-semibold text-emerald-400">{{ $hello('Jennifer') }}</h1>
    </div>
  </div>
</template>

<script setup>
const { $hello } = useNuxtApp()
const title = $hello('Ryan')
</script>
