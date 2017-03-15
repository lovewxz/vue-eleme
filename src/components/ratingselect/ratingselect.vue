<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="block all" :class="{'active':selectType===2}" @click="select(2,$event)">{{desc.all}}<span
        class="count">{{ratings.length}}</span></span>
      <span class="block positive" :class="{'active':selectType===0}" @click="select(0,$event)">{{desc.positive}}<span
        class="count">{{positives.length}}</span></span>
      <span class="block negative" :class="{'active':selectType===1}" @click="select(1,$event)">{{desc.negative}}<span
        class="count">{{negatives.length}}</span></span>
    </div>
    <div class="switch" :class="{'on': onlyContent}" @click="toggleContent">
      <span class="icon-check_circle"></span>
      <span class="text">只显示有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0
  const NEGATIVE = 1
  const ALL = 2

  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return []
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },
    computed: {
      positives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE
        })
      },
      negatives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE
        })
      }
    },
    methods: {
      select(type, event) {
        if (event._constructor) {
          return
        }
        this.selectType = type
        this.$dispatch('ratingtype.select', type)
      },
      toggleContent(event) {
        if (event._constructor) {
          return
        }
        this.onlyContent = !this.onlyContent
        this.$dispatch('content.toggle', this.onlyContent)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../../common/scss/mixin.scss';

  .ratingselect {
    .rating-type {
      font-size: 0;
      margin: 0 18px;
      padding: 18px 0;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .block {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        line-height: 16px;
        padding: 8px 12px;
        margin-right: 8px;
        color: rgb(77, 85, 93);
        border-radius: 1px;
        .count {
          font-size: 8px;
          margin-left: 2px;
        }
        &.active {
          color: #fff;
        }
        &.positive, &.all {
          background-color: rgba(0, 160, 220, .2);
          &.active {
            background-color: rgb(0, 160, 220);
          }
        }
        &.negative {
          background-color: rgba(77, 85, 93, .2);
          &.active {
            background-color: rgb(77, 85, 93);
          }
        }
      }
    }
    .switch {
      color: rgb(147, 153, 159);
      font-size: 0;
      padding: 12px 0;
      border-bottom: 1px solid rgba(7, 17, 27, .2);
      padding-left: 18px;
      &.on {
        .icon-check_circle {
          color: #00b43c;
        }
      }
      .icon-check_circle {
        display: inline-block;
        vertical-align: top;
        font-size: 24px;
        line-height: 24px;
        color: rgb(147, 153, 159);
        margin-right: 4px;
      }
      .text {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        line-height: 24px;
      }
    }
  }
</style>
