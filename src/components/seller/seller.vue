<template>
  <div class="seller" v-el:seller>
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="star-wrapper border-1px">
          <span class="star"><star :size="36" :score="seller.score"></star></span>
          <span class="ratingCount">({{seller.ratingCount}})</span>
          <span class="sellCount">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="block">
          <li class="block-item">
            <h2 class="block-title">起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block-item">
            <h2 class="block-title">商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block-item">
            <h2 class="block-title">平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite">
          <i class="icon-favorite" :class="{'active': favorite}" @click="toggleFavorite($event)"></i>
          <p class="text">{{favoriteText}}</p>
        </div>
      </div>
      <split></split>
      <div class="bulletin-wrapper">
        <div class="title">公告与活动</div>
        <div class="bulletin border-1px">{{seller.bulletin}}</div>
        <ul class="supports" v-if="seller.supports">
          <li class="supports-item border-1px" v-for="item in seller.supports">
            <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
            <span class="supports-text">{{seller.supports[$index].description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <div class="title">商家实景</div>
        <div class="pics-wrapper" v-el:pics-wrapper>
          <ul class="pics-list" v-el:pics-list>
            <li class="pics-item" v-for="pic in seller.pics">
              <img :src="pic" alt="" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="infos">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item border-1px" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import star from 'components/star/star'
  import split from 'components/split/split'
  import {saveToLocal, loadFromLocal} from 'common/js/store'
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        favorite: (() => {
          return loadFromLocal(this.seller.id, 'favorite', false)
        })()
      }
    },
    computed: {
      favoriteText() {
        return this.favorite ? '已收藏' : '收藏'
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    watch: {
      'seller'() {
        this._initScroll()
        this._initPicScroll()
      }
    },
    ready() {
      this._initScroll()
      this._initPicScroll()
    },
    methods: {
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$els.seller, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      },
      _initPicScroll() {
        if (this.seller.pics) {
          let margin = 6
          let picWidth = 120
          let wid = (margin + picWidth) * this.seller.pics.length - margin
          this.$els.picsList.style.width = wid + 'px'
          this.$nextTick(() => {
            if (!this.picScroll) {
              this.picScroll = new BScroll(this.$els.picsWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              })
            } else {
              this.picScroll.refresh()
            }
          })
        }
      },
      toggleFavorite(event) {
        if (event._constructor) {
          return
        }
        this.favorite = !this.favorite
        saveToLocal(this.seller.id, 'favorite', this.favorite)
      }
    },
    components: {
      star,
      split
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../common/scss/mixin.scss";

  .seller {
    position: absolute;
    top: 174px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    overflow: hidden;
    .overview {
      position: relative;
      padding: 18px 0;
      margin: 0 18px;
      .title {
        font-size: 14px;
        color: rgb(7, 17, 27);
        line-height: 14px;
        margin-bottom: 8px;
      }
      .star-wrapper {
        font-size: 0px;
        padding-bottom: 18px;
        @include border-1px(rgba(7, 17, 27, .1));
        .star {
          display: inline-block;
          vertical-align: top;
          margin-right: 8px;
        }
        .ratingCount, .sellCount {
          display: inline-block;
          vertical-align: top;
          font-size: 10px;
          color: rgb(77, 85, 93);
          line-height: 18px;
        }
        .sellCount {
          margin-left: 12px;
        }
      }
      .block {
        margin-top: 18px;
        display: flex;
        .block-item {
          flex: 1;
          text-align: center;
          border-right: 1px solid rgba(7, 17, 27, .1);
          &:last-child {
            border: none;
          }
          .block-title {
            font-size: 10px;
            color: rgb(147, 153, 159);
            line-height: 10px;
            margin-bottom: 4px;
          }
          .content {
            font-size: 10px;
            line-height: 24px;
            color: rgb(7, 17, 27);
            font-weight: 200;
            .stress {
              font-size: 24px;
              font-weight: 200;
            }
          }
        }
      }
      .favorite {
        position: absolute;
        width: 50px;
        text-align: center;
        right: 0px;
        top: 14px;
        .icon-favorite {
          font-size: 24px;
          line-height: 24px;
          color: rgb(77, 85, 93);
          margin-bottom: 4px;
          display: block;
          &.active {
            color: rgb(240, 20, 20)
          }
        }
        .text {
          font-size: 10px;
          color: rgb(77, 85, 93);
          line-height: 10px;
        }
      }
    }
    .bulletin-wrapper {
      padding-top: 18px;
      margin: 0 18px;
      .title {
        font-size: 14px;
        color: rgb(7, 17, 27);
        line-height: 14px;
        margin-bottom: 8px;
      }
      .bulletin {
        padding: 0 12px 16px 12px;
        font-size: 12px;
        font-weight: 200;
        color: rgb(240, 20, 20);
        line-height: 24px;
        @include border-1px(rgba(7, 17, 27, .1));
      }
      .supports {
        .supports-item {
          padding: 16px 12px;
          @include border-1px(rgba(7, 17, 27, .1));
          &:last-child {
            @include border-none();
          }
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 16px;
            height: 16px;
            background-size: 16px 16px;
            &.decrease {
              @include bg-img('decrease_4');
            }
            &.discount {
              @include bg-img('discount_4');
            }
            &.guarantee {
              @include bg-img('guarantee_4');
            }
            &.invoice {
              @include bg-img('invoice_4');
            }
            &.special {
              @include bg-img('special_4');
            }
          }
          .supports-text {
            margin-left: 6px;
            display: inline-block;
            font-size: 12px;
            line-height: 16px;
            font-weight: 200;
            color: rgb(7, 17, 27);
          }
        }
      }
    }
    .pics {
      padding: 18px 0;
      margin: 0 18px;
      .title {
        font-size: 14px;
        color: rgb(7, 17, 27);
        line-height: 14px;
        margin-bottom: 12px;
      }
      .pics-wrapper {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        .pics-list {
          font-size: 0;
          .pics-item {
            display: inline-block;
            margin-right: 6px;
            &:last-child {
              margin-right: 0px;
            }
          }
        }
      }
    }
    .infos {
      padding-top: 16px;
      margin: 0 18px;
      .title {
        font-size: 14px;
        color: rgb(7, 17, 27);
        line-height: 14px;
        padding-bottom: 12px;
        @include border-1px(rgba(7, 17, 27, .1))
      }
      .info-item {
        padding: 16px 12px;
        font-size: 12px;
        font-weight: 200;
        color: rgb(7, 17, 27);
        line-height: 16px;
        @include border-1px(rgba(7, 17, 27, .1));
        &:last-child {
          @include border-none();
        }
      }
    }
  }
</style>
