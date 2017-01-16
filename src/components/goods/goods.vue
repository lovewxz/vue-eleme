<template>
    <div class="goods">
        <div class="menu-wrapper" v-el:menu-wrapper>
          <ul>
            <li class="menu-item" v-for="item in goods" :class="{current: currentIndex === $index}" @click="selectMenu($index,$event)">
              <span class="text border-1px">
                <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
              </span>
            </li>
          </ul>
        </div>
        <div class="foods-wrapper" v-el:foods-wrapper>
          <ul>
            <li class="food-list food-list-hook" v-for="item in goods">
              <h1 class="title">{{item.name}}</h1>
              <ul>
                <li class="food-item border-1px" v-for="food in item.foods">
                  <div class="icon">
                    <img :src="food.icon" :alt="food.name" width="57" height="57">
                  </div>
                  <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{food.description}}</p>
                    <div class="extra">
                      <span>月售{{food.sellCount}}</span>
                      <span class="rating">好评率{{food.rating}}%</span>
                    </div>
                    <div class="price">
                      <span class="now">¥{{food.price}}</span>
                      <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                      <cartcontrol :food="food"></cartcontrol>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <shopcart v-ref:shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" :selected-foods="selectedFoods"></shopcart>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import shopcart from 'components/shopcart/shopcart'
    import cartcontrol from 'components/cartcontrol/cartcontrol'

    const ERR_OK = 0
    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data() {
        return {
          goods: [],
          listHeight: [],
          scrollY: 0
        }
      },
      created() {
        this.$http.get('/api/goods').then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.goods = response.data
            this.$nextTick(() => {
              this._initScroll()
              this._caculateHeight()
            })
          }
        })
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      },
      computed: {
        currentIndex() {
          for (let i = 0; i < this.listHeight.length; i++) {
            let height1 = this.listHeight[i]
            let height2 = this.listHeight[i + 1]
            if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
              return i
            }
          }
          return 0
        },
        selectedFoods() {
          let foods = []
          this.goods.forEach((good) => {
            good.foods.forEach((food) => {
              if (food.count) {
                foods.push(food)
              }
            })
          })
          return foods
        }
      },
      methods: {
        selectMenu(index, event) {
          if (!event._constructed) {
            return
          }
          let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook')
          let el = foodList[index]
          this.foodsScroll.scrollToElement(el, 300)
        },
        _initScroll() {
          this.menuScroll = new BScroll(this.$els.menuWrapper, {
            click: true
          })
          this.foodsScroll = new BScroll(this.$els.foodsWrapper, {
            click: true,
            probeType: 3
          })
          this.foodsScroll.on('scroll', (pos) => {
            this.scrollY = Math.abs(Math.round(pos.y))
          })
        },
        _caculateHeight() {
          let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook')
          let height = 0
          this.listHeight.push(height)
          for (let i = 0; i < foodList.length; i++) {
            let itemHeight = foodList[i].clientHeight
            height += itemHeight
            this.listHeight.push(height)
          }
        },
        _drop(target) {
          this.$refs.shopcart.drop(target)
        }
      },
      components: {
        shopcart,
        cartcontrol
      },
      events: {
        'cart.add'(target) {
          this._drop(target)
        }
      }
    }
</script>

<style lang="scss">
@import '../../common/scss/mixin.scss';
.goods {
    position: absolute;
    top: 174px;
    bottom: 46px;
    display: flex;
    width: 100%;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px; //不写安卓浏览器有问题！
      background-color: #f3f5f7;
      .menu-item {
        width: 56px;
        height: 54px;
        display: table;
        line-height: 14px;
        padding: 0 12px;
        &.current {
          position: relative;
          top: -1px;
          background: #fff;
          font-weight: 700;
          .text {
            @include border-none();
          }
        }
        .icon {
          display: inline-block;
          vertical-align: top;
          background-size: 12px 12px;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          &.decrease {
            @include bg-img('decrease_3');
          }
          &.discount {
            @include bg-img('discount_3');
          }
          &.guarantee {
            @include bg-img('guarantee_3');
          }
          &.invoice {
            @include bg-img('invoice_3');
          }
          &.special {
            @include bg-img('special_3');
          }
        }
        .text {
          display: table-cell;
          width:56px;
          font-size: 14px;
          vertical-align: middle;
          color: #333;
          font-weight: 200;
          @include border-1px(rgba(7,17,27,0.1));
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .title {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left:2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147,153,159);
        background: #f3f5f7;
      }
      .food-item {
        display: flex;
        margin: 18px;
        @include border-1px(rgba(7,17,27,0.1));
        padding-bottom: 18px;
        &:last-child {
          @include border-none();
          margin-bottom: 0px;
        }
        .icon {
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .content {
          flex: 1;
          .name {
            margin-top: 2px;
            font-size: 14px;
            line-height: 14px;
            color: rgb(7,17,27);
          }
          .desc {
            font-size: 10px;
            line-height: 12px;
            color: rgb(147,153,159);
            margin: 8px 0;
          }
          .extra {
            font-size: 10px;
            line-height: 10px;
            color: rgb(147,153,159);
            &.rating {
              margin-left: 12px;
            }
          }
          .price {
            line-height: 24px;
            font-weight: 700;
            .now {
              font-size: 14px;
              color: rgb(240,20,20);
            }
            .old {
              font-size: 10px;
              color: rgb(147,153,159);
              text-decoration: line-through;
            }
          }
          .cartcontrol-wrapper {
            position: absolute;
            bottom: 12px;
            right: 0px;
          }
        }
      }
    }
}
</style>