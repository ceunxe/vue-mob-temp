<template>
  <div v-show="show" class="mod_loading">
    <div class="jump-ball">
      <div class="ball-1"></div>
      <div class="ball-2"></div>
      <div class="ball-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.mod_loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .jump-ball {
    & > div {
      display: inline-block;
      background-color: #cab08b;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 0 4px;
    }
    .ball-1 {
      animation: ball-jump 1.5s 0s infinite linear;
    }
    .ball-2 {
      animation: ball-jump 1.5s 0.5s infinite linear;
    }
    .ball-3 {
      animation: ball-jump 1.5s 1s infinite linear;
    }
  }
  // css动画
  @keyframes ball-jump {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
