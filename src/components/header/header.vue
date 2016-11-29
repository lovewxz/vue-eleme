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
							<div class="support">
									<div class="icon" :class="classMap[seller.supports[0].type]"></div>
									<div class="support-detail">
										{{seller.supports[0].description}}
									</div>
							</div>
						</div>
				</div>
        <div class="count-wrapper">
          <div class="count" v-if="seller.supports">
            <span class="count-num">{{seller.supports.length}}个</span>
            <i class="icon-keyboard_arrow_right"></i>
          </div>
				</div>
				<div class="notice-wrapper">
          <span class="notice-icon"></span>
          <span class="notice">{{seller.bulletin}}</span>
          <i class="icon-keyboard_arrow_right"></i>
				</div>
        <div class="bground">
          <img :src="seller.avatar" width="100%" height="100%" />
        </div>		
    </div>
</template>



<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
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
  }
}
</style>
