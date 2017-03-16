<template>
  <div class="ratings" v-el:ratings>
    <div class="ratings-scroll">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <p class="rank">高于周边商家{{seller.rankRate}}%</p>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <span class="star-wrapper">
            <star :size="36" :score="seller.serviceScore"></star>
          </span>
            <span class="score">
            {{seller.serviceScore}}
          </span>
          </div>
          <div class="score-wrapper">
            <span class="title">菜品评价</span>
            <span class="star-wrapper">
            <star :size="36" :score="seller.foodScore"></star>
          </span>
            <span class="score">
            {{seller.foodScore}}
          </span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="deliveryTime">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :only-content="onlyContent" :select-type="selectType" :ratings="ratings"></ratingselect>
      <div class="user-ratings-wrapper">
        <ul>
          <li class="rating-item" v-for="rating in ratings" v-show="needShow(rating.rateType,rating.text)">
            <div class="avatar">
              <img :src="rating.avatar" alt="" width="28" height="28">
            </div>
            <div class="content">
              <div class="name">{{rating.username}}</div>
              <div class="star-wrapper">
                <span class="star"><star :size="24" :score="rating.score"></star></span>
                <span class="time" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
              <div class="text" v-show="rating.text">
                {{rating.text}}
              </div>
              <div class="recommend-wrapper">
                <span :class="{'icon-thumb_up':rating.rateType === 0,'icon-thumb_down':rating.rateType === 1}"></span>
                <span v-for="item in rating.recommend"
                      v-show="rating.recommend && rating.recommend.length" class="tag">{{item}}</span>
              </div>
            </div>
            <div class="deliveryTime">
              {{rating.rateTime | formateDate}}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {formateDate} from 'common/js/date'
  import star from 'components/star/star'
  import split from 'components/split/split'
  import ratingselect from 'components/ratingselect/ratingselect'
  import BScroll from 'better-scroll'
  const ALL = 2
  const ERR_OK = 0
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        ratings: [],
        onlyContent: false,
        selectType: ALL
      }
    },
    created() {
      this.$http.get('/api/ratings').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.ratings = response.data
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$els.ratings, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
      })
    },
    methods: {
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return this.selectType === type
        }
      }
    },
    filters: {
      formateDate(time) {
        let date = new Date(time)
        return formateDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    events: {
      'ratingtype.select'(type) {
        this.selectType = type
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      'content.toggle'(onlyContent) {
        this.onlyContent = onlyContent
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    components: {
      star,
      split,
      ratingselect
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../common/scss/mixin.scss";

  .ratings {
    position: absolute;
    top: 174px;
    bottom: 0px;
    left: 0;
    overflow: hidden;
    width: 100%;
    .overview {
      display: flex;
      padding: 18px 0;
      .overview-left {
        flex: 0 0 137px;
        width: 137px;
        border-right: 1px solid rgba(7, 17, 27, .1);
        text-align: center;
        padding: 6px 0;
        @media only screen and (max-width: 320px) {
          flex: 0 0 120px;
          width: 120px;
        }
        .score {
          font-size: 24px;
          color: rgb(255, 153, 0);
          line-height: 28px;
          margin-bottom: 6px;
        }
        .title {
          font-size: 12px;
          color: rgb(7, 17, 27);
          line-height: 12px;
          margin-bottom: 8px;
        }
        .rank {
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 10px;
        }
      }
      .overview-right {
        flex: 1;
        padding: 6px 0;
        font-size: 0;
        margin-left: 24px;
        @media only screen and (max-width: 320px) {
          margin-left: 6px;
        }
        .score-wrapper {
          margin-bottom: 8px;
          .title {
            display: inline-block;
            vertical-align: top;
            font-size: 12px;
            line-height: 18px;
            color: rgb(7, 17, 27);
            margin-right: 12px;
            @media only screen and (max-width: 320px) {
              margin-right: 6px;
            }
          }
          .star-wrapper {
            display: inline-block;
            vertical-align: top;
            margin-right: 12px;
            @media only screen and (max-width: 320px) {
              margin-right: 6px;
            }
          }
          .score {
            font-size: 12px;
            color: rgb(255, 153, 0);
            line-height: 18px;
          }
        }
        .delivery-wrapper {
          .title {
            font-size: 12px;
            line-height: 18px;
            color: rgb(7, 17, 27);
            margin-right: 12px;
            @media only screen and (max-width: 320px) {
              margin-right: 6px;
            }
          }
          .deliveryTime {
            font-size: 12px;
            color: rgb(147, 153, 159);
            line-height: 18px;
          }
        }
      }
    }
    .user-ratings-wrapper {
      .rating-item {
        padding: 18px 0;
        position: relative;
        @include border-1px(rgba(7, 17, 27, .1));
        margin: 0 18px;
        display: flex;
        .avatar {
          flex: 0 0 28px;
          width: 28px;
          margin-right: 12px;
          img {
            border-radius: 50%;
          }
        }
        .content {
          flex: 1;
          .name {
            font-size: 10px;
            color: rgb(7, 17, 27);
            line-height: 12px;
            margin-bottom: 4px;
          }
          .star-wrapper {
            font-size: 0;
            margin-bottom: 6px;
            .star {
              display: inline-block;
              vertical-align: top;
            }
            .time {
              display: inline-block;
              vertical-align: top;
              margin-left: 6px;
              font-size: 10px;
              font-weight: 200;
              color: rgb(147, 153, 159);
              line-height: 12px;
            }
          }
          .text {
            font-size: 12px;
            line-height: 18px;
            color: rgb(7, 17, 27);
            margin-bottom: 8px;
          }
          .recommend-wrapper {
            font-size: 0;
            .icon-thumb_up, .icon-thumb_down, span {
              font-size: 12px;
              margin-right: 8px;
            }
            .icon-thumb_down {
              color: rgb(183, 187, 191)
            }
            .icon-thumb_up {
              color: rgb(0, 160, 220)
            }
            .tag {
              padding: 3px 6px;
              margin-bottom: 6px;
              color: rgb(147, 153, 159);
              font-size: 9px;
              border: 1px solid rgba(7, 17, 27, .1);
              border-radius: 2px;
              display: inline-block;
            }
          }
        }
        .deliveryTime {
          position: absolute;
          right: 0px;
          top: 18px;
          font-size: 10px;
          font-weight: 200;
          color: rgb(147, 153, 159);
          line-height: 12px;
        }
      }
    }
  }
</style>
