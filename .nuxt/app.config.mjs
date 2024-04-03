
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "52cedb5e-a15a-4734-a106-ff53f7067a19"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /*@__PURE__*/ defuFn(inlineConfig)
