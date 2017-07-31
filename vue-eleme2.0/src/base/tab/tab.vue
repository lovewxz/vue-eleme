<template>
<div class="tab">
  <div class="tab-item border-1px" v-for="item in link">
    <router-link :to="item.url" tag="a">{{item.name}}</router-link>
  </div>
</div>
</template>
<script>
export default {
  props: {
    link: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";

.tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
    @include border-1px($color-theme-l);
    .tab-item {
        flex: 1;
        text-align: center;
        > a {
            &.router-link-active {
                color: $color-theme-d;
            }
            display: block;
            font-size: 14px;
            color: $color-theme;
        }
    }
}
</style>
