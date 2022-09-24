<template>
  <div class="stone" 
  :class="[stateColor, {'error-turn': isBusyCell}]" 
  @click="gameTurn" 
  @mouseover="curcorOverStone">
    <div ref="cursorStone" class="mouse-chase" 
      v-if="isStoneHover && stateColor=='board'" 
      :style="stoneStyle">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GameStone',
  props: {
    transferColor: {
      type: String
    },
    coord: {
      type: Object
    }
  },
  data() {
    return {
      stateColor: 'board',
      isBusyCell: false,
      isStoneHover: false,
    }
  },
  methods: {
    gameTurn() {
      if (this.stateColor === 'board') {
        if (this.transferColor === 'black') {
          this.stateColor = 'black'
        }
        else if (this.transferColor === 'white') {
          this.stateColor = 'white'
        }
        this.isBusyCell = true
        this.$emit('turn', this.stateColor)
      } 
      // switch (this.stateColor) {
      //   case 'board':
      //     if (this.transferColor === 'black') {
      //     this.stateColor = 'black'
      //   }
      //   else if (this.transferColor === 'white') {
      //     this.stateColor = 'white'
      //   }
      //     this.isBusyCell = true
      //     this.$emit('turn', this.stateColor)
      //     break;
      // }
    },
    curcorOverStone() {
      this.isStoneHover = true
    },
  },
  computed: {
    stoneStyle() {
    return { backgroundColor: this.transferColor,
          }
  }
}
}
</script>

<style lang="scss" scoped>
.stone {
  position: relative;
  margin-top: 0;
  aspect-ratio: 1 / 1;
  // outline: 1px solid black;
  align-self: center;
  transition: background-color 0.5s ease;
  cursor: pointer;
  &:hover .mouse-chase{
      position: absolute;
      inset: 0;
      border-radius: 50%;
  }
}

.black {
  border: none;
  background-color: black;
  // border: 1px solid black;
  border-radius: 50%;
  outline: none;
}

.white {
  border: none;
  border-radius: 50%;
  outline: none;
  // border: 1px solid black;
  background-color: white;
}

.board {
  border: none;
  background-color: inherit;
}

.error-turn {
  cursor: no-drop;
}

</style>