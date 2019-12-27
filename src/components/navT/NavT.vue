<template>
  <div class="mod_navheader" :class="{'border':border}">
    <div class="nav-l">
      <slot name="left"></slot>
      <div v-if="lTit" class="s-tit">{{ lTit }}</div>
      <div v-if="lArrow" class="s-icon" @click="$router.goBack()">
        <img src="./img/arrow-l.png" alt="">
      </div>
    </div>
    <div class="nav-c">
      <slot name="center"></slot>
      <div v-if="cTit" class="s-tit">{{ cTit }}</div>
    </div>
    <div class="nav-r">
      <slot name="right"></slot>
      <div v-if="rSearch" class="s-icon" @click="$router.toGo('/search')">
        <img src="./img/search.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean
    },
    lTit: {
      type: String,
    },
    lArrow: {
      type: Boolean
    },
    cTit: {
      type: String,
    },
    rSearch: {
      type: Boolean
    },
  }
};
</script>

<style lang="scss" scoped>
.mod_navheader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 50px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  &.border {
    &::before {
      position: absolute;
      box-sizing: border-box;
      content: " ";
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #d6d6d6;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
  .s-icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 45px;
    img {
      display: block;
      height: 16px;
    }
  }
  .nav-l {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .s-tit {
      font-size: 18px;
      font-weight: bold;
      padding-left: 12px;
    }
  }
  .nav-c {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .s-logo {
      height: 25px;
      img {
        display: block;
        height: 100%;
      }
    }
    .s-tit {
      font-size: 18px;
      color: #333;
      max-width: 50%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .nav-r {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .s-tit {
      font-size: 14px;
      color: #333;
      line-height: 44px;
      padding: 0 10px;
      padding-right: 12px;
    }
  }
}
</style>
