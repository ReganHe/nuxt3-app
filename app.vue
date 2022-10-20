<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-blue-600">
        {{ brand }}
      </h1>
      <p class="mt-4 text-9xl font-bold text-gray-900">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const year: number = 2022
const brand: string = `${year} iThome`
const title: string = '铁人赛'
</script>
