const getRandomValue = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    }
  },
  computed: {
    playerHealthBar() {
      return { width: this.playerHealth + '%' }
    },
    monsterHealthBar() {
      return { width: this.monsterHealth + '%' }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++
      const dmg = getRandomValue(12, 5)
      this.monsterHealth -= dmg
      this.attackPlayer()
    },
    attackPlayer() {
      const dmg = getRandomValue(15, 8)
      this.playerHealth -= dmg
    },
    specialAttackMonster() {
      this.currentRound++
      const dmg = getRandomValue(10, 25)
      this.monsterHealth -= dmg
    },
    playerHeal() {
      this.currentRound++
      const heal = getRandomValue(20, 10)
      if (heal + this.playerHealth > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += heal
      }
      this.attackPlayer()
    },
  },
})

app.mount('#game')
