<template lang="html">
  <div class="eheader">
    <div class="seller-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="avatar-right">
        <h3 class="title">
          <span class="brand"></span>
          <span class="text">{{seller.name}}</span>
        </h3>
        <div class="delivery">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-num" v-if="seller.supports" @click="showDetail">
        <span class="num">{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulltin-wrapper" @click="showDetail">
      <span class="bulltin-icon"></span>
      <span class="bulltin">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="seller-background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <transition name="fadeIn">
      <div class="seller-detail" v-show="showFlag">
      <div class="seller-top clearfix" @click.stop="hideDetail">
        <div class="seller-main">
          <h2 class="title">{{seller.name}}</h2>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="info-title" v-if="seller.supports">
            <span class="line"></span>
            <span class="text">优惠信息</span>
            <span class="line"></span>
          </div>
          <div class="sale-detail" v-if="seller.supports">
            <div class="sale-item" v-for="(item,index) in seller.supports">
              <i class="icon" :class="classMap[item.type]"></i>
              <p class="text">{{item.description}}</p>
            </div>
          </div>
          <div class="info-title">
            <span class="line"></span>
            <span class="text">商品公告</span>
            <span class="line"></span>
          </div>
          <div class="bulletin-detail">
            <p>{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="seller-bottom">
        <i class="icon-close" @click.stop="hideDetail"></i>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import Star from '@/base/star/star'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    showDetail() {
      this.showFlag = true
    },
    hideDetail() {
      this.showFlag = false
    }
  },
  components: {
    Star
  }
}
</script>

<style lang="scss">
@import '~common/scss/mixin';

.eheader {
    position: relative;
    height: 134px;
    width: 100%;
    background: rgba(7,17,27,.5);
    overflow: hidden;
    .seller-wrapper {
        box-sizing: border-box;
        padding: 24px 12px 18px 24px;
        display: flex;
        position: relative;
        .avatar {
            flex: 0 0 64px;
            width: 64px;
            margin-right: 16px;
        }
        .avatar-right {
            flex: 1;
            color: #fff;
            .title {
                font-size: 0;
                margin-top: 2px;
                .brand {
                    @include bg-img( 'brand');
                    background-size: 30px 18px;
                    width: 30px;
                    height: 18px;
                    display: inline-block;
                    vertical-align: middle;
                }
                .text {
                    margin-left: 6px;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 18px;
                }
            }
            .delivery {
                font-size: 12px;
                font-weight: 200;
                line-height: 12px;
                margin-top: 8px;
            }
            .supports {
                font-size: 0;
                margin-top: 10px;
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    background-size: 12px 12px;
                    &.decrease {
                        @include bg-img( 'decrease_1');
                    }
                    &.discount {
                        @include bg-img( 'discount_1');
                    }
                    &.guarantee {
                        @include bg-img( 'guarantee_1');
                    }
                    &.invoice {
                        @include bg-img( 'invoice_1');
                    }
                    &.special {
                        @include bg-img( 'special_1');
                    }
                }
                .text {
                    font-size: 10px;
                    line-height: 12px;
                    margin-left: 4px;
                    font-weight: 200;
                }
            }
        }
        .supports-num {
            position: absolute;
            padding: 7px 8px;
            background: rgba(0,0,0,.2);
            font-size: 0;
            color: #fff;
            border-radius: 15px;
            bottom: 18px;
            right: 12px;
            .num {
                display: inline-block;
                vertical-align: middle;
                font-size: 12px;
                line-height: 12px;
                font-weight: 200;
                margin-right: 2px;
                text-align: center;
            }
            .icon-keyboard_arrow_right {
                font-size: 12px;
                display: inline-block;
                vertical-align: top;
            }
        }
    }
    .bulltin-wrapper {
        width: 100%;
        height: 28px;
        padding: 0 12px;
        background-color: rgba(0,0,0,.2);
        display: flex;
        align-items: center;
        box-sizing: border-box;
        position: relative;
        .bulltin-icon {
            @include bg-img( 'bulletin');
            background-size: 22px 12px;
            width: 22px;
            height: 12px;
            margin-right: 4px;
        }
        .bulltin {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 10px;
            font-weight: 200;
            line-height: 28px;
            color: #fff;
        }
        .icon-keyboard_arrow_right {
            position: relative;
            font-size: 12px;
            color: #fff;
        }
    }
    .seller-background {
        width: 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        filter: blur(10px);
    }
    .seller-detail {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: rgba(7,17,27,0.8);
        backdrop-filter: blur(10px);
        text-align: center;
        &.fadeIn-leave-active,&.fadeIn-enter-active {
          transition: all .4s;
        }
        &.fadeIn-leave-to,&.fadeIn-enter {
          opacity: 0;
        }
        .seller-top {
            width: 100%;
            min-height: 100%;
            color: #fff;
            .seller-main {
                margin-top: 64px;
                padding-bottom: 64px;
                .title {
                  font-size: 16px;
                  font-weight: 700;
                  line-height: 16px;
                }
                .star-wrapper {
                  margin-top: 16px;
                }
                .info-title {
                  width: 80%;
                  margin: 28px auto 24px auto;
                  display: flex;
                  .line {
                    flex: 1;
                    border-bottom: 1px solid rgba(255,255,255,.2);
                    position: relative;
                    top: -7px;
                  }
                  .text {
                    font-size: 14px;
                    font-weight: 700;
                    color: #fff;
                    line-height: 14px;
                    padding: 0 12px;
                  }
                }
                .sale-detail {
                  width: 80%;
                  margin: 0 auto;
                  text-align: left;
                  padding-left: 12px;
                  .sale-item {
                    margin-bottom: 12px;
                    font-size: 0;
                    &:last-child {
                      margin-bottom: 0;
                    }
                    .icon {
                      display: inline-block;
                      vertical-align: top;
                      width: 12px;
                      height: 12px;
                      background-size: 12px 12px;
                      margin-right: 6px;
                      &.decrease {
                          @include bg-img( 'decrease_1');
                      }
                      &.discount {
                          @include bg-img( 'discount_1');
                      }
                      &.guarantee {
                          @include bg-img( 'guarantee_1');
                      }
                      &.invoice {
                          @include bg-img( 'invoice_1');
                      }
                      &.special {
                          @include bg-img( 'special_1');
                      }
                    }
                    .text {
                      font-size: 12px;
                      font-weight: 200;
                      color: #fff;
                      line-height: 12px;
                      display: inline-block;
                      vertical-align: top;
                    }
                  }
                }
                .bulletin-detail {
                  width: 80%;
                  margin: 0 auto;
                  p {
                    text-align: left;
                    font-size: 12px;
                    font-weight: 200;
                    color: #fff;
                    line-height: 24px;
                  }
                }
            }
        }
        .seller-bottom {
            position: relative;
            width: 32px;
            height: 32px;
            margin: -64px auto 0;
            clear: both;
            .icon-close {
                font-size: 32px;
                color: #fff;
            }
        }
    }
}
</style>
