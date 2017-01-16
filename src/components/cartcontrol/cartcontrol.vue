<template>
    <div class="cartcontrol">
      <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart" transition="move">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
      <div class="cart-num" v-show="food.count > 0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
      props: {
        food: {
          type: Object
        }
      },
      methods: {
        addCart(event) {
          if (!event._constructed) {
            return
          }
          if (!this.food.count) {
            Vue.set(this.food, 'count', 1)
          } else {
            this.food.count++
          }
          this.$dispatch('cart.add', event.target)
        },
        decreaseCart(event) {
          if (!event._constructed) {
            return
          }
          if (this.food.count) {
            this.food.count--
          }
        }
      }
    }
</script>

<style lang="scss">
  .cartcontrol {
    font-size: 0;
    .cart-decrease,.cart-add {
      display: inline-block;
      padding: 6px;
      transition: all 0.4s linear;
      &.move-transition {
        opacity: 1;
        transform: translate3D(0,0,0);
        .inner {
          display: inline-block;
          font-size: 24px;
          line-height: 24px;
          color: rgb(0,160,220);
          transition: all 0.4s linear;
          transform: rotate(0deg);
        }
      }
      &.move-enter,&.move-leave {
        opacity: 0;
        transform: translate3D(24px,0,0);
        .inner {
          transform: rotate(180deg);
        }
      } 
    }
    .cart-num {
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      text-align: center;
      font-size: 10px;
      line-height: 24px;
      color: rgb(147,153,159);
    }
    .cart-add {
      display: inline-block;
      font-size: 24px;
      padding: 6px;
      font-size: 24px;
      color: rgb(0,160,220);
      line-height: 24px;
    }
    
  }
</style>