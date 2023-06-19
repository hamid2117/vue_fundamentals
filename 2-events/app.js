//without event why functions in method why call again if we trigger any event
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0
      }
    },
  },
  computed: {
    fullName() {
      return `${this.name} Mehmood`
    },
  },
  methods: {
    add() {
      this.counter++
    },
    remove() {
      this.counter--
      console.log('this runing')
    },
    confirmName() {
      console.log('I am runing')
      this.confirmedName = this.name
    },
  },
})

app.mount('#events')
