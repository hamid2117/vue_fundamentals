const getRandomValue = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    }
  },
  computed: {
    playerHealthBar() {
      return { width: this.playerHealth <= 0 ? '0%' : this.playerHealth + '%' }
    },
    monsterHealthBar() {
      return {
        width: this.monsterHealth <= 0 ? '0%' : this.monsterHealth + '%',
      }
    },
    disableSpecial() {
      return this.currentRound % 3 !== 0
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0) {
        if (this.monsterHealth <= 0) {
          this.winner = 'draw'
        } else {
          this.winner = 'monster'
        }
      }
    },
    monsterHealth(value) {
      if (value <= 0) {
        if (this.playerHealth <= 0) {
          this.winner = 'draw'
        } else {
          this.winner = 'player'
        }
      }
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
    resetGame() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.currentRound = 0
      this.winner = null
    },
    surrenderGame() {
      this.winner = 'monster'
    },
  },
})

app.mount('#game')
