// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    devServer: {
		port: 8767,
		host: '0.0.0.0',
	},
	app: {
		baseURL: '/Sort-catalog/dist/'
	},

    css: ['~/assets/css/style.css'],
    modules: ['nuxt-icons',"@nuxt/image"],
	image:{
		dir:'assets/img'
	}
})