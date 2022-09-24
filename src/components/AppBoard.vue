<template>
  <div>
    <canvas class="board" width="500" ></canvas>
  </div>
</template>

<script>
export default {
  name: "AppBoard",


}
</script>

<style lang="scss" scoped>
.board {
  width: 500px;
  aspect-ratio: 1 / 1;
  background-image: url('@/assets/images/boards/board19.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>