<template>
  <div class="seller">
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
      </div>
    </div>
    <split></split>
  </div>
</template>

<script>
  import star from 'components/star/star'
  import split from 'components/split/split'
  export default {
    props: {
      seller: {
        type: Object
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
    .overview {
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
    }
  }
</style>
