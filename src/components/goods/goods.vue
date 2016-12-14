<template>
    <div class="goods">
        <div class="menu-wrapper">
          <li class="menu-item" v-for="item in goods">
            <span class="text border-1px">
              <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
            </span>
          </li>
        </div>
        <div class="foods-wrapper"></div>
    </div>
</template>

<script>
    const ERR_OK = 0
    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data() {
        return {
          goods: []
        }
      },
      created() {
        this.$http.get('/api/goods').then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.goods = response.data
            console.log(this.goods)
          }
        })
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
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
    }
}
</style>