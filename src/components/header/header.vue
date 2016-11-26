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
						</div>
				</div>
				<div class="notice-wrapper">
				</div>
				<div class="count-wrapper">
				</div>
    </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.header {
	background: #999;
	position: relative;
	.content-wrapper {
		font-size: 0;
		padding: 24px 12px 18px 24px;
		.avatar {
			display: inline-block;
			vertical-align: top;
			width: 64px;
			height: 64px;
		}
		.title {
			display: inline-block;
		}
	}
}
</style>
