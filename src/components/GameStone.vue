<template>
  <div class="stone" :class="stateColor" @click="gameTurn">
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
  },
  data() {
    return {
      stateColor: 'board',
    }
  },
  methods: {
    gameTurn() {
      if (this.stateColor == 'board') {
        if (this.transferColor === 'black') {
          this.stateColor = 'black'
          this.$emit('turn', this.stateColor)
        }
        else if (this.transferColor === 'white') {
          this.stateColor = 'white'
          this.$emit('turn', this.stateColor)
        }
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.stone {
  margin-top: 0;
  width: calc(100hv/9);
  aspect-ratio: 1 / 1;
  border: 1px solid black;
  border-radius: 0.001px;
  align-self: center;
  transition: all 0.5s ease;
  cursor: grab;
  
  .black {
    background-color: black;
    border: 1px solid black;
    border-radius: 3rem;
  }
  
  .white {
    border-radius: 50%;
    border: 1px solid black;
    background-color: white;
  }
  
  .board {
    background-color: inherit;
  }
}
</style>