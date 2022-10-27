<template>
  <div class="flex justify-center">local middleware</div>
</template>
<script setup>
definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    // eslint-disable-next-line no-console
    console.log(`[匿名中間件] 我是直接定義在頁面內的匿名中間件`)
  })
})
</script>
