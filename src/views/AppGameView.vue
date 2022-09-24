<template>
  <div class="game">
    <h1>Turn: {{transferColor}}</h1>
    <div class="game-board" @mousemove="setStone">

      <component v-for="(stone) in stones" @turn=newTurn :key="stone.id" :transferColor="transferColor"
        :coord="stone.coord" :is="stone.name">

      </component>
    </div>
  </div>
</template>

<script>

export default {
  name: "AppGameView",
  data() {
    return {
      stones: [],
      transferColor: "black",
      cursorStone: {
        x: 0,
        y: 0
      }
    }
  },
  mounted() {
    this.startGame()
  },

  methods: {
    startGame() {
      for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
          this.stones.push({ id: `${i}${j}`, name: 'GameStone', coord: { x: 0, y: 0 } })
        }
      }

    },
    newTurn(stateColor) {
      this.transferColor = (stateColor == 'black') ? 'white' : 'black'
      // switch (stateColor) {
      //   case 'black':
      //     this.transferColor = 'white'
      //     break;
      //   case 'white':
      //     this.transferColor = 'black'
      //     break;
      // }
    },
    gameOver() {
    },

  },

}
</script>

<style lang="scss" scoped>
.game-board {
  position: relative;
  z-index: 1;
  margin-top: 0;
  margin-inline: auto;
  width: 80vh;
  color: burlywood;
  aspect-ratio: 1 / 1;
  background-color: transparent;
  display: grid;
  grid-template: repeat(9, 1fr) / repeat(9, 1fr);
  padding: 7px 0px 2px 7px;
  width: 450px;
  aspect-ratio: 1 / 1;
  background-image: url('@/assets/images/boards/board9.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.mouse-chase {
  z-index: 10;
  display: block;
  position: absolute;
  width: 5rem;
  aspect-ratio: 1 /1;
  border-radius: 50%;
  background-color: tomato;
}
</style>