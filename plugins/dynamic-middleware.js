export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-test',
    () => {
      // eslint-disable-next-line no-console
      console.log('這個是由插件添加的全域中間件，並將在每次路由變更時執行')
    },
    { global: true }
  )

  addRouteMiddleware('random-redirect', () => {
    // eslint-disable-next-line no-console
    console.log('這個是由插件添加的具名中間件，並將會覆蓋任何現有的同名中間件')
  })
})
