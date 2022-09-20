<template>

  <div class="game-board" >
    <component v-for="stone in stones" 
    @turn=newTurn
    :key="stone.id" 
    :transferColor="transferColor"
    :is="stone.name">{{stone.id}}</component>
  </div>
</template>

<script>
export default {
  name: "AppGameView",
  data() {
    return {
      stones: [],
      transferColor: "black",
    }
  },
  mounted() {
    this.startGame()
  },

  methods: {
    startGame() {
      for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
          this.stones.push({ id: `${i}${j}`, name: 'GameStone' })
        }
      }
    },
    newTurn(stateColor) {
      if (stateColor == 'black') {
        this.transferColor = 'white'
      }
      else if (stateColor == 'white') {
        this.transferColor = 'black'
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.game-board {
  margin-top: 0;
  margin-inline: auto;
  width: 100vh;
  color: burlywood;
  aspect-ratio: 1 / 1;
  background-color: burlywood;
  display: grid;
  grid-template: repeat(9, 1fr) / repeat(9, 1fr);
}



.black {
  background-color: black;
}

.white {
  background-color: white;
}

.board {
  background-color: inherit;
}
</style>