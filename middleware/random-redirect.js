export default defineNuxtRouteMiddleware(() => {
  const num = Math.random()
  if (num > 0.5) {
    // eslint-disable-next-line no-console
    console.log(`[來自 random-redirect 中間件] 重新導向至 /haha`, num)
    return navigateTo('/middleware/local')
  }

  // eslint-disable-next-line no-console
  console.log(`[來自 random-redirect 中間件] 沒發生什麼特別的事情～`)
})
