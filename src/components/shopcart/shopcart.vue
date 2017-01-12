<template>
    <div class="shopcart">
        <div class="content">
          <div class="content-left">
              <div class="logo-wrapper">
                  <div class="logo" :class="{highlight: totalCount > 0}">
                      <i class="icon-shopping_cart" :class="{highlight: totalCount > 0}"></i>
                  </div>
                  <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
              </div>
              <div class="price" :class="{highlight: totalPrice > 0}">{{totalPrice}}元</div>
              <div class="desc">另需配送费¥{{deliveryPrice}}元</div>
          </div>
          <div class="content-right">
            <div class="pay" :class="payClass">
              {{payDesc}}
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        selectedFoods: {
          type: Array,
          default() {
            return []
          }
        },
        deliveryPrice: {
          type: Number,
          default: 0
        },
        minPrice: {
          type: Number,
          default: 0
        }
      },
      computed: {
        totalPrice() {
          let total = 0
          this.selectedFoods.forEach((food) => {
            total += food.price * food.count
          })
          return total
        },
        totalCount() {
          let total = 0
          this.selectedFoods.forEach((food) => {
            total += food.count
          })
          return total
        },
        payDesc() {
          if (this.totalPrice === 0) {
            return `￥${this.minPrice}元起送`
          } else if (this.totalPrice < this.minPrice) {
            let diff = 0
            diff = this.minPrice - this.totalPrice
            return `还差￥${diff}元起送`
          } else {
            return '去结算'
          }
        },
        payClass() {
          if (this.totalPrice < this.minPrice) {
            return 'not-enough'
          } else {
            return 'enough'
          }
        }
      }
    }
</script>

<style lang="scss">
    .shopcart {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 48px;
      z-index: 50;
      .content {
        display: flex;
        background: #141d27;
        color: rgba(255,255,255,.4);
        .content-left {
          flex: 1;
          font-size: 0;
          .logo-wrapper {
            display: inline-block;
            vertical-align: top;
            margin: 0 12px;
            position: relative;
            top: -10px;
            padding: 6px;
            width: 56px;
            height: 56px;
            box-sizing: border-box;
            border-radius: 50%;
            background: #141d27;
            .num {
              position: absolute;
              top: 0;
              right: 0;
              width: 24px;
              height: 16px;
              background-color: rgb(240, 20, 20);
              color: #fff;
              line-height: 16px;
              font-size: 9px;
              font-weight: 700;
              text-align: center;
              border-radius: 6px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4)
            }
            .logo {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background: #2b343c;
              text-align: center;
              &.highlight {
                background: rgb(0, 160, 220);
              }
              .icon-shopping_cart {
                font-size: 24px;
                color: #80858a;
                line-height: 44px;
                &.highlight {
                  color: #fff;
                }
              }
            }
          }
          .price {
            display: inline-block;
            vertical-align: top;
            line-height: 24px;
            border-right: 1px solid rgba(255,255,255,.1);
            padding-right: 12px;
            font-size: 16px;
            font-weight: 700;
            margin: 12px 0;
            &.highlight {
              color: #fff;
            }
          }
          .desc {
            display: inline-block;
            vertical-align: top;
            margin: 12px 0 0 12px;
            line-height: 24px;
            font-size: 10px;
          }
        }
        .content-right {
          flex: 0 0 105px;
          width: 105px;
          height: 48px;
          .pay {
            line-height: 48px;
            text-align: center;
            font-size: 12px;
            font-weight: 700;
            &.not-enough {
              background: #2b333b;
            }
            &.enough {
              background: #00b43c;
              color: #fff;
            }
          }
        }
      }
    }
</style>