<template>
    <div class="header">
        <div class="content-wrapper">
						<div class="avatar">
							<img :src="seller.avatar" :alt="seller.name" width="64" height="64">
						</div>
						<div class="content">
							<div class="title">
								<span class="brand"></span>
								<span class="name">{{seller.name}}</span>
							</div>
							<div class="description">
									{{seller.description}}/{{seller.deliveryTime}}分钟送达
							</div>
							<div class="support" v-if="seller.supports">
									<div class="icon" :class="classMap[seller.supports[0].type]"></div>
									<div class="support-detail">
										{{seller.supports[0].description}}
									</div>
							</div>
						</div>
				</div>
        <div class="count-wrapper">
          <div class="count" v-if="seller.supports" @click="showDetail">
            <span class="count-num">{{seller.supports.length}}个</span>
            <i class="icon-keyboard_arrow_right"></i>
          </div>
				</div>
				<div class="notice-wrapper" @click="showDetail">
          <span class="notice-icon"></span>
          <span class="notice">{{seller.bulletin}}</span>
          <i class="icon-keyboard_arrow_right"></i>
				</div>
        <div class="bground">
          <img :src="seller.avatar" width="100%" height="100%" />
        </div>
				<div class="detailShow" v-show="detailShow" transition="fade">
          <div class="detail-wrapper cf">
            <div class="detail-main">
              <div class="name">{{seller.name}}</div>
              <div class="star-wrapper">
                <star :size="48" :score="seller.score"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="info">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul class="supports" v-if="seller.supports">
                <li class="supports-item" v-for="item in seller.supports">
                  <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
                  <span class="supports-text">{{seller.supports[$index].description}}</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="info">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="bulletin">
                <p class="bulletin-text">{{seller.bulletin}}</p>
              </div>
            </div>
          </div>
          <div class="detail-close" @click="hideDetail">
            <i class="icon-close"></i>
          </div>
        </div>		
    </div>
</template>



<script>
import star from '../star/star'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail() {
      this.detailShow = true
    },
    hideDetail() {
      this.detailShow = false
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    star
  }
}
</script>

<style lang="scss">
@import '../../common/scss/mixin.scss';
.header {
	color: #fff;
	background: rgba(7,17,27,0.5);
	position: relative;
	.content-wrapper {
		font-size: 0;
		padding: 24px 12px 18px 24px;
		.avatar {
			display: inline-block;
			vertical-align: top;
			img {
				border-radius: 2px;
			}
		}
		.content {
			color:#fff;
			margin: 2px 0 2px 16px;
			display: inline-block;
			.title {	
				.brand {
					display: inline-block;
					vertical-align: top;
					@include bg-img('brand');
					width: 30px;
					height: 18px;
					background-size: 30px 18px;
					background-repeat: no-repeat;
				}
				.name {
					display: inline-block;
					margin-left: 6px;
					font-size: 16px;
					font-weight: bold;
					line-height: 18px;
				}
			}
			.description {
				font-size: 12px;
				line-height: 12px;
				font-weight: 200;
				margin-top: 8px;
			}
			.support {
				margin-top: 10px;
				.icon {
					display: inline-block;
          vertical-align: top;
					width: 12px;
					height: 12px;
					background-size: 12px 12px;
					&.decrease {
						@include bg-img('decrease_1');
					}
					&.discount {
						@include bg-img('discount_1');
					}
					&.guarantee {
						@include bg-img('guarantee_1');
					}
					&.invoice {
						@include bg-img('invoice_1');
					}
					&.special {
						@include bg-img('special_1');
					}
				}
				.support-detail {
          margin-left: 4px;
          display: inline-block;
					font-size: 10px;
					line-height: 12px;
					font-weight: 200;
				}
			}
		}
	}
  .count-wrapper {
    position: absolute;
    right: 12px;
    bottom: 46px;
    background: rgba(0,0,0,0.2);
    border-radius: 18px;
    line-height: 24px;
    height: 24px;
    padding: 0px 12px;
    box-sizing: border-box;
    text-align: center;
    .count {
      .count-num {
        vertical-align: top;
        font-size: 10px;
        font-weight: 200; 
      }
      .icon-keyboard_arrow_right {
        margin-left: 2px;
        line-height: 24px;
        font-size: 10px;
      }
    }
  }
  .notice-wrapper {
    position: relative;
    background-color: rgba(7,17,27,0.2);
    height: 28px;
    padding: 0 22px 0 12px;
    line-height: 28px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .notice-icon {
      display: inline-block;
      vertical-align: middle;
      width: 21px;
      height: 11px;
      background-size: 21px 11px;
      @include bg-img('bulletin');
    }
    .notice {
      font-size: 10px;
      font-weight: 200;
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      font-size: 10px;
      top: 10px;
      right: 8px;
    }
  }
  .bground {
		z-index: -1;
		position: absolute;
		left: 0;
		top: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    overflow: hidden;
  }
	.detailShow {
		overflow: auto;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
    height: 100%;
    z-index: 101;
    transition: all 0.5s;
    &.fade-transition {
      opacity: 1;
      background-color: rgba(7,17,27,0.8);
    }
    &.fade-enter,&.fade-leave {
      opacity: 0;
      background-color: rgba(7,17,27,0);
    }
    .detail-wrapper {
      width: 100%;
      min-height: 100%;
      .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;
        .name {
          font-size: 16px;
          line-height: 16px;
          color: #fff;
          font-weight: 700;
          text-align: center;
        }
        .star-wrapper {
          margin: 16px auto 28px auto;
          text-align: center;
        }
        .title {
          width: 80%;
          display: flex;
          margin: 28px auto 24px auto;
          .line {
            flex: 1;
            position: relative;
            top: -7px;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }
          .info {
            padding: 0 12px;
            font-size: 14px;
            line-height: 14px;
            color: #fff;
            font-weight: 700;
          }
        }
        .supports {
          padding: 0 12px;
          width: 80%;
          margin: 0 auto;
          .supports-item {
            margin-bottom: 12px;
            &:last-child {
              margin-bottom: 0px;
            }
            .icon {
              display: inline-block;
              vertical-align: top;
              background-size: 16px 16px;
              width: 16px;
              height: 16px;
              margin-right: 6px;
              &.decrease {
						    @include bg-img('decrease_2');
              }
              &.discount {
                @include bg-img('discount_2');
              }
              &.guarantee {
                @include bg-img('guarantee_2');
              }
              &.invoice {
                @include bg-img('invoice_2');
              }
              &.special {
                @include bg-img('special_2');
              }
            }
            .supports-text {
              font-size: 12px;
              line-height: 200;
              line-height: 16px;
            }
          }
        }
        .bulletin {
          width: 80%;
          margin: 0 auto;
          padding: 0 12px;
          .bulletin-text {
            font-size: 12px;
            color: #fff;
            line-height: 24px;
          }
        }
      }
    }
    .detail-close {
      clear: both;
      display: block;
      font-size: 32px;
      width: 32px;
      height: 32px;
      position: relative;
      margin: -64px auto 0 auto;
    }
	}
}
</style>
