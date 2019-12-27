<template>
  <div id="app">
    <div class="app-main">
      <transition :name="viewTransition">
        <keep-alive :include="$store.state.cache" :max="9">
          <router-view :key="$route.fullPath" class="app-ctx"/>
        </keep-alive>
      </transition>
      <nav-b />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewTransition: "forward"
    };
  },
  watch: {
    $route: {
      handler: function (to, from) {
        // 动态缓存页面
        const name = to.matched[0].components.default.name || "";
        if (name && name.indexOf("Keep") > -1) {
          const arr = JSON.parse(JSON.stringify(this.$store.state.cache));
          arr.includes(name) ? "" : this.$store.state.cache.push(name);
        }
        // 路由切换动画
        if (to.meta.isRoot && from.meta.isRoot) {
          if (to.meta.sort > from.meta.sort) {
            this.viewTransition = "app-in";
          } else {
            this.viewTransition = "app-out";
          }
          return false;
        }
        this.viewTransition =
          "app-" + (this.$router.direction === "forward" ? "in" : "out");
      }
    }
  }
};
</script>