<template>
  <div class="star" :class="starType">
    <span class="star-item" v-for="itemClass in itemClasses" :class="itemClass" track-by="$index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size
      },
      itemClasses() {
        let result = []
        let score = Math.floor(this.score * 2) / 2
        let interger = Math.floor(score)
        let hasDecimal = score % 1 !== 0
        for (let i = 0; i < interger; i++) {
          result.push(CLS_ON)
        }
        if (hasDecimal) {
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../../common/scss/mixin.scss';

  .star {
    font-size: 0;
    .star-item {
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-48 {
      .star-item {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        margin-right: 22px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg-img('star48_on');
        }
        &.off {
          @include bg-img('star48_off');
        }
        &.half {
          @include bg-img('star48_half');
        }
      }
    }
    &.star-36 {
      .star-item {
        width: 15px;
        height: 15px;
        background-size: 15px 15px;
        margin-right: 6px;
        &.on {
          @include bg-img('star36_on');
        }
        &.off {
          @include bg-img('star36_off');
        }
        &.half {
          @include bg-img('star36_half');
        }
      }
    }
    &.star-24 {
      .star-item {
        width: 10px;
        height: 10px;
        background-size: 10px 10px;
        margin-right: 3px;
        &.on {
          @include bg-img('star24_on');
        }
        &.off {
          @include bg-img('star24_off');
        }
        &.half {
          @include bg-img('star24_half');
        }
      }
    }
  }
</style>
