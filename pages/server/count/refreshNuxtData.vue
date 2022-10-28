<template>
  <div class="my-24 flex flex-col items-center">
    <p class="text-6xl text-gray-600">瀏覽次數</p>
    <span class="mt-12 text-9xl font-semibold text-sky-400">{{ pending ? 'Loading' : count }}</span>
    <div class="mt-12 text-3xl">
      <button @click="refresh">Refresh</button>
    </div>
  </div>
</template>

<script setup>
const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))
const refresh = () => refreshNuxtData('count')
</script>
