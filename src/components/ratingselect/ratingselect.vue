<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="block all">{{desc.all}}<span class="count">57</span></span>
      <span class="block positive">{{desc.positive}}<span class="count">47</span></span>
      <span class="block negative">{{desc.negative}}<span class="count">10</span></span>
    </div>
    <div class="switch">
      <span class="icon-check_circle"></span>
      <span class="text">只显示有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  //  const POSITIVE = 0
  //  const NEGATIVE = 1
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
        background-color: rgba(0, 160, 220, .2);
        .count {
          font-size: 8px;
          margin-left: 2px;
        }
      }
    }
  }
</style>
