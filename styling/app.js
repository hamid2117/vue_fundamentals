const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  methods: {
    boxSelect(box) {
      if (box === 'a') {
        this.boxASelected = !this.boxASelected
      }
      if (box === 'b') {
        this.boxBSelected = !this.boxBSelected
      }
      if (box === 'c') {
        this.boxCSelected = !this.boxCSelected
      }
    },
  },
})

app.mount('#styling')
