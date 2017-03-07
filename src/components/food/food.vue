
<template>
  <div v-show="showFlag" class="food" transition="move">
    <div class="image-header">
      <img :src="food.image">
      <div class="back">
        <i class="icon-arrow_lift" @click="hide"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .food {
    position: fixed;
    left: 0;
    bottom: 48px;
    top: 0;
    z-index: 30;
    background: #fff;
    width: 100%;
    &.move-transition {
      transition: all .2s linear;
      transform: translate3d(0, 0, 0);
    }
    &.move-leave,&.move-enter {
      transform: translate3d(100%, 0, 0);
    }
    .image-header {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .back {
        position: absolute;
        top: 10px;
        left: 0;
        i {
          padding: 10px;
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
</style>
