export default defineEventHandler((event) => {
  event.context.auth = { username: 'ryan' }
  // eslint-disable-next-line no-console
  console.log('context', event.context)
})
