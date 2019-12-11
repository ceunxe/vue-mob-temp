<template>
  <div id="app">
    <div class="view-page">
      <transition :name="viewTransition">
        <keep-alive :include="getCache" :max="9">
          <router-view :key="$route.fullPath" />
        </keep-alive>
      </transition>
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
      handler: function(to, from) {
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