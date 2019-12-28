<template>
  <div class="mod_navfooter">
    <div v-for="(item,index) in navList" :key="index" class="nav-item self_link_a" :class="{'is-active':navIndex === index}" @click="jumpOther(index,item.href)">
      <div class="s-icon">
        <img :src="navIndex === index?item.iconh:item.icon" alt="">
      </div>
      <div class="s-des">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIndex: 0,
      navList: [
        {
          text: "首页",
          href: "/home",
          icon: require("./img/nav-i1.png"),
          iconh: require("./img/nav-i1-h.png")
        },
        {
          text: "分类",
          href: "/goodsCate",
          icon: require("./img/nav-i2.png"),
          iconh: require("./img/nav-i2-h.png")
        },
        {
          text: "购物车",
          href: "/shopcart",
          icon: require("./img/nav-i3.png"),
          iconh: require("./img/nav-i3-h.png")
        },
        {
          text: "会员",
          href: "/user",
          icon: require("./img/nav-i4.png"),
          iconh: require("./img/nav-i4-h.png")
        }
      ]
    };
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler: function () {
        if (this.$route.name === "home") {
          this.navIndex = 0;
        }
        if (this.$route.path.indexOf("/goodsCate") >= 0) {
          this.navIndex = 1;
        }
        if (this.$route.path.indexOf("/shopcart") >= 0) {
          this.navIndex = 2;
        }
        if (this.$route.path.indexOf("/user") >= 0) {
          this.navIndex = 3;
        }
      }
    }
  },
  methods: {
    // 跳转
    jumpOther(index, src) {
      if (this.navIndex === index) {
        return;
      } else {
        this.$router.toGo(src);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mod_navfooter {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  background-color: #fff;
  text-align: center;
  width: 100%;
  height: 50px;
  box-shadow: 0px -2px 10px 2px rgba(184, 184, 184, 0.1);
  .nav-item {
    flex: 1;
    padding: 6px 0;
    &.is-active {
      .s-des {
        color: #cab08b;
      }
    }
    .s-icon {
      height: 20px;
      img {
        margin: auto;
        height: 100%;
      }
    }
    .s-des {
      font-size: 12px;
      color: #bbb;
    }
  }
}
</style>
