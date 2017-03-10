<template>
  <div v-show="showFlag" class="food" transition="move" v-el:food>
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image">
        <div class="back">
          <i class="icon-arrow_lift" @click="hide"></i>
        </div>
      </div>
      <div class="content">
        <h1 class="title">
          {{food.name}}
        </h1>
        <p class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
        </p>
        <div class="price">
          <span class="now">¥{{food.price}}</span>
          <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <div class="buy" v-show="!food.count || food.count === 0" @click="addFirst" transition="fade">加入购物车</div>
      </div>
      <split v-show="food.info"></split>
      <div class="food-info" v-show="food.info">
        <h1 class="title">
          商品介绍
        </h1>
        <p class="text">
          {{food.info}}
        </p>
      </div>
      <split></split>
      <div class="rating">
        <h1 class="title">
          商品评价
        </h1>
        <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc"></ratingselect>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  const POSITIVE = 0
//  const NEGATIVE = 1
  const ALL = 2

  import BScroll from 'better-scroll'
  import cartcontrol from 'components/cartcontrol/cartcontrol'
  import Vue from 'Vue'
  import split from 'components/split/split'
  import ratingselect from 'components/ratingselect/ratingselect'

  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    methods: {
      show() {
        this.showFlag = true
        this.selectType = ALL
        this.onlyContent = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$els.food, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide() {
        this.showFlag = false
      },
      addFirst(event) {
        if (event._constructor) {
          return
        }
        Vue.set(this.food, 'count', 1)
        this.$dispatch('cart.add', event.target)
      }
    },
    components: {
      cartcontrol,
      split,
      ratingselect
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
    &.move-leave, &.move-enter {
      transform: translate3d(100%, 0, 0);
    }
    .food-content {
      position: relative;
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
      .content {
        position: relative;
        padding: 18px;
        .title {
          font-size: 14px;
          color: rgb(7, 17, 27);
          font-weight: 700;
          line-height: 14px;
        }
        .detail {
          margin-top: 8px;
          font-size: 0;
          color: rgb(147, 153, 159);
          font-size: 10px;
          line-height: 10px;
          height: 10px;
          .sell-count {
            margin-right: 12px;
          }
        }
        .price {
          margin-top: 18px;
          line-height: 24px;
          font-weight: 700;
          .now {
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            font-size: 10px;
            color: rgb(147, 153, 159);
            text-decoration: line-through;
          }
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 12px; //本身有6px的padding
          bottom: 12px;
        }
        .buy {
          position: absolute;
          right: 18px;
          bottom: 18px;
          z-index: 10;
          height: 24px;
          line-height: 24px;
          padding: 0 12px;
          box-sizing: border-box;
          font-size: 10px;
          color: rgb(255, 255, 255);
          border-radius: 12px;
          background-color: rgb(0, 160, 220);
          &.fade-transition {
            transition: all 0.2s;
            opacity: 1;
          }
          &.fade-enter, &.fade-leave {
            opacity: 0;
          }
        }
      }
      .food-info {
        padding: 18px;
        .title {
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
          margin-bottom: 6px;
        }
        .text {
          font-size: 12px;
          color: rgb(77, 85, 93);
          line-height: 24px;
          font-weight: 200;
        }
      }
      .rating {
        .title {
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
          margin-top: 18px;
          margin-left: 18px;
        }
      }
    }
  }
</style>
