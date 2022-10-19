module.exports = {
  apps: [
    {
      name: 'nuxt3-app',
      // exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs'
      // env: {
      //   PORT: 3333,
      //   NODE_ENV: 'development',
      // },
    }
  ]
}
