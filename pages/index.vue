<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/about">前往 About</NuxtLink>
        <NuxtLink to="/contact">前往 Contact</NuxtLink>
        <NuxtLink to="/server/count/lazyAsyncData">前往LazyAsyncData</NuxtLink>
        <NuxtLink to="/server/count/lazyFetch">前往LazyFetch</NuxtLink>
      </div>
    </div>
  </div>
</template>
