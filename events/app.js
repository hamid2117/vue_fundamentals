const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add() {
      counter++
    },
    remove() {
      counter--
    },
  },
})

app.mount('#events')
