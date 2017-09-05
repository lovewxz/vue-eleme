<template lang="html">
  <div class="stars" :class="starType">
    <span class="star" v-for="item in itemClasses" :class="item"></span>
  </div>
</template>

<script>
const STAR_LEN = 5
const CLS_ON = 'on'
const CLS_OFF = 'off'
const CLS_HALF = 'half'
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
      return `star-${this.size}`
    },
    itemClasses() {
      let result = []
      let score = Math.floor(this.score * 2) / 2 // 取出0.5
      let hasDecimal = (score % 1 !== 0) // 是否有小数
      let interger = Math.floor(score) // 取出整数部分
      for (let i = 0; i < interger; i++) { // 遍历整数部分
        result.push(CLS_ON)
      }
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      while (result.length < STAR_LEN) { // 补余
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="scss">
@import "~common/scss/mixin";

.stars {
    font-size: 0;
    .star {
        display: inline-block;
        vertical-align: top;
    }
    &.star-48 {
        .star {
            width: 20px;
            height: 20px;
            margin-right: 22px;
            background-size: 20px 20px;
            &:last-child {
                margin-right: 0;
            }
            &.on {
                @include bg-img( 'star48_on');
            }
            &.off {
                @include bg-img( 'star48_off');
            }
            &.half {
                @include bg-img( 'star48_half');
            }
        }
    }
    &.star-36 {
        .star {
            width: 15px;
            height: 15px;
            margin-right: 6px;
            background-size: 15px 15px;
            &:last-child {
                margin-right: 0;
            }
            &.on {
                @include bg-img( 'star36_on');
            }
            &.off {
                @include bg-img( 'star36_off');
            }
            &.half {
                @include bg-img( 'star36_half');
            }
        }
    }
    &.star-24 {
        .star {
            width: 10px;
            height: 10px;
            margin-right: 3px;
            background-size: 10px 10px;
            &:last-child {
                margin-right: 0;
            }
            &.on {
                @include bg-img( 'star24_on');
            }
            &.off {
                @include bg-img( 'star24_off');
            }
            &.half {
                @include bg-img( 'star24_half');
            }
        }
    }

}
</style>
