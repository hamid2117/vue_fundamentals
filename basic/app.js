const app = Vue.createApp({
  data() {
    return {
      name: 'hamid',
      link: 'hamidmehmood.vercel.app',
    }
  },
  methods: {
    renderHTML() {
      return `<a href="https://www.${this.link}">Learning Vue </a>`
    },
  },
})

app.mount('#main')
