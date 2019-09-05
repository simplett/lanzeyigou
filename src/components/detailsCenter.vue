<template>
	<div class="pro-detail">
		<!-- 商品信息 -->
		<div class="info-text">
			<div class="pname">{{detailsCenter.pname}}</div>
			<br />
			<div class="x-price">
				售&nbsp;价 :￥
				<b style="color:red;font-size:18px;">{{detailsCenter.price}}</b>
			</div>
			<br />
			<div class="y-price">来&nbsp;自 :蓝沢易购</div>
		</div>
		<hr style="margin:0" />
		<!-- 商品发布地 -->
		<div class="pro-address">
			<div class="address">所在地 : 广东东莞</div>
			<br />
			<div>
				联系方式 :
				<a>
					<img src="../../public/images/details/lianxi.png" style="margin-left:10px;" />
				</a>
			</div>
			<br />
			<div>
				交易方式 :
				<a href="#">
					<img src="../../public/images/details/pay.png" style="margin-left:10px;" />
				</a>
			</div>
			<br />
			<button class="btn btn-danger1 buy-btn" @click="buy(detailsCenter.pid)">立即购买</button>
			<br />
			<br />
			<button class="share" style="margin-right:20px;" @click="collect(detailsCenter.pid)">收藏(3)</button>
			<button class="zan" @click="thumbsUp(detailsCenter.pid)" @>点赞(12)</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			detailsCenter: {
				default: "111"
			}
		},
		name: "detailsCenter",
		methods: {
			buy(pid) {
				var tokens = localStorage.getItem("userinfo");
				if (tokens) {

				}
			},
			collect(pid) {
				var tokens = localStorage.getItem("userinfo");
				if (!tokens) {

				}
			}
		}
	}
</script>

<style scoped>
	.pro-detail {
		text-align: left;
		width: 390px;
		height: 500px;
		padding-left: 10px;
		background: #fff;
		/* border:1px solid red; */
	}



	.info-text {
		width: 300px;
		height: 150px;
		font-size: 16px;
		color: #333;
		padding-left: 70px;
	}

	.pname,
	.address {
		height: 35px;
		line-height: 35px;
		padding-top: 10px;
	}

	.pro-address {
		width: 300px;
		height: 328px;
		font-size: 16px;
		color: #333;
		padding-left: 70px;
	}

	/* 交易方式按钮样式 */
	button.ex-style {
		width: 100px;
		height: 30px;
		text-align: center;
		border-radius: 3px;
	}

	/* 立即购买按钮样式 */
	button.buy-btn {
		color: #fff;
		font-size: 20px;
		width: 201px;
		height: 40px;
		border: 0;
		margin: 20px 30px 30px 0;
	}

	/* 赞和分享的按钮样式 */
	button.share,
	button.zan {
		width: 86px;
		height: 30px;
		background: #f1f1f1;
		border-radius: 3px;
	}

	.btn-danger1 {
		background: #dc3545 !important;
	}
</style>
