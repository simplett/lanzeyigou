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
					<img src="../../../public/images/details/lianxi.png" style="margin-left:10px;" />
				</a>
			</div>
			<br />
			<div>
				交易方式 :
				<a>
					<img src="../../../public/images/details/pay.png" style="margin-left:10px;" />
				</a>
			</div>
			<br />
			<div v-if="guarantee">
				蓝沢担保 :
				<a>
					<img src="../../../public/images/details/pay.png" style="margin-left:10px;" />
				</a>
			</div>
			
			<div v-else>
				蓝沢担保 :不
				<a>
					<img src="../../../public/images/details/lzdb.png" style="margin-left:10px;" />
				</a>
			</div>
			<br />
			<button class="btn btn-danger1 buy-btn" @click="buy(detailsCenter.pid)">立即购买</button>
			<br />
			<br />
			<button class="share" style="margin-right:20px;" @click="collect(detailsCenter.pid)">收藏(3)</button>
			<button id="likes" class="zan" @click="thumbsUp(detailsCenter.pid)">点赞({{detailsCenter.wcount}})</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			detailsCenter: {
				default: "111"
			},
			guarantee: {
				default: "111"
			}
		},
		data() {
			return {

			}
		},
		name: "detailsCenter",
		methods: {
			// guarantee(){
			// 	if(detailsCenter.status==1)
			// 	{
			// 		return true;
			// 	}else if(detailsCenter.status==2)
			// 	{
			// 		return false;
			// 	}
			// },
			//点赞之后成功的提示
			open3() {
				this.$notify({
					title: '成功',
					message: '您已成功点赞',
					type: 'success'
				});
			},
			//点赞之后失败的提示
			open4() {
				this.$notify({
					title: '失败',
					message: '很抱歉，点赞失败',
					type: 'warning'
				});
			},

			buy(pid) {
				var tokens = localStorage.getItem("userinfo");
				console.log(tokens);
				if (tokens) {

				} else {
					alert
				}
			},
			collect(pid) {
				var tokens = localStorage.getItem("userinfo");
				if (!tokens == "") {

				}
			},
			thumbsUp(pid) {
				this.axios
					.get("/Like", {
						params: {
							pid
						}
					}).then(result => {
						if (result.data.status == 1) {
							this.open3();
							document.getElementById("likes").disabled = true;
							this.detailsCenter.wcount++;
						} else if (result.data.status == 0) {
							this.open4()
						}
					})
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
		width: 230px;
		line-height: 35px;
		padding-top: 10px;
		overflow: hidden;
		/*溢出隐藏*/
		text-overflow: ellipsis;
		/*以省略号...显示*/
		-webkit-line-clamp: 1;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;


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
		margin: 20px 30px 0px 0;
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
