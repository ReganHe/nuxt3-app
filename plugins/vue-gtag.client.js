import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  // eslint-disable-next-line no-console
  // console.log('nuxtApp', nuxtApp)
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GA_MEASUREMENT_ID'
    }
  })
})
