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
					<img src="../../../public/images/details/lzdb.png" style="margin-left:10px;" />
				</a>
			</div>

			<div v-else>
				蓝沢担保 :
				<a>
					<img src="../../../public/images/details/lzdb-gray.png" style="margin-left:10px;" />
				</a>
			</div>
			<br />
			<button class="btn btn-danger1 buy-btn" @click="buy(detailsCenter.pid)">立即购买</button>
			<br />
			<br />
			<!-- <button class="share" style="margin-right:20px;" @click="collect(detailsCenter.pid)">收藏(3)</button> -->
			<button @click="enter(detailsCenter.pid)"  id="dian" v-bind:class="{ 'you' : flag, 'you2': !flag}">{{con}}</button> 
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
				con: "收藏",
				flag: false, //单位切换开关
				shoucan: []
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
			open5() {
				this.$notify.error({
					title: '错误',
					message: '请您先登录'
				});
			},
			open6() {
				this.$notify({
					title: '失败',
					message: '很抱歉，此商品正在被下单或者已经被购买，请您重新刷新数据',
					type: 'warning'
				});
			},
			// orderajax(orderlist) {
			// 	var xhr=new XMLHttpRequest;
			// 	//4.绑定监听，获取响应
			// 	xhr.onreadystatechange=function (){
			// 		if(xhr.readyState==4 && xhr.status==200){
			// 			var result=xhr.responseText;
			// 			console.log(result);
			// 		}
			// 	}
			// 	//2.打开连接，创建请求
			// 	xhr.open("get","http://10.2.57.31:8080/alipay/index?orderlist="+orderlist,true);
			// 	
			// 	//3.发送请求
			// 	//3.1设置请求头信息
			// 	// xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			// 	//创建请求主体
			// 	// var formdata="orderlist="+orderlist;
			// 	xhr.send(null);
			// },
			//#############################################################################################################
			//未完成
			buy(pid) {
				var token = localStorage.getItem("token");
				if (token) {
					this.axios
						.get("/Order", {
							params: {
								pid,
								token
							}
						}).then(result => {
							console.log("购买之后的数据", result);
							if (result.data.status == 1) {
								// this.orderajax(result.data.orderlist)
								window.location.href = 'http://10.2.57.31:8080/alipay/index?orderlist=' + result.data.orderlist;
							} else if (result.data.status == 0) {
								this.open6();
							}
						})
				} else {
					this.open5()
				}
			},
			collect(pid) {
				var tokens = localStorage.getItem("userinfo");
				if (!tokens == "") {

				}
			},
			thumbsUp(pid) {
				var token = localStorage.getItem("token")
				if (token) {
					this.axios
						.get("/Like", {
							params: {
								pid,
								token
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
				} else {
					this.open5()
				}

			},
			enter(pid) {
				// this.flag = !this.flag;
				if (this.flag == !true) {
					var token = localStorage.getItem("token")
					if (token) {
						this.axios
							.get("/Subscribe", {
								params: {
									pid,
									token,
									type: "production",
									action: "add"
								}
							}).then(result => {
								if (result.data.status == 1) {
									this.open7();
									this.con = "已收藏";
									this.$store.commit("SAVE_SHOUCANLIST", pid);
									this.shoucan = localStorage.getItem("shoucanlist").split(",");
									document.getElementById("dian").disabled = true;
									this.flag = true;
								} else if (result.data.status == 0) {
									this.open8()
								}
							})
					} else {
						this.open9()
					}


				}
			},
			init() {
				var shoucan = localStorage.getItem("shoucan");
				console.log("#############################################################这是初始化的数据", shoucan);
				if (shoucan == undefined) {
					this.shoucan[0] = "-1";
				} else {
					shoucan = JSON.parse(shoucan);
					console.log(shoucan);
					for (var item of shoucan) {
						this.shoucan.push(item.sp_pids);

					}
					this.$store.commit("SAVE_SHOUCANLIST", this.shoucan);
					this.shoucan = (localStorage.getItem("shoucanlist")).split(",");
					console.log(this.shoucan);
					console.log("初始化完成")
				}
			},
			arrincludes() {
				var bool = ((this.shoucan).indexOf(this.detailsCenter.pid)) == -1 ? false : true;
				this.flag = bool;
				console.log("这是判断商品是否有被收藏", this.flag)
				if (this.flag) {
					document.getElementById("dian").disabled = true;
					console.log("######################################################状态为", this.flag);
				}
			},
			//用户的关注
			open7() {
				this.$notify({
					title: '成功',
					message: '您已成功关注此商品',
					type: 'success'
				});
				this.sengmsg = "";
			},
			open8() {
				this.$notify({
					title: '失败',
					message: '很抱歉，系统错误，请稍后再试',
					type: 'warning'
				});
			},
			open9() {
				this.$notify.error({
					title: '错误',
					message: '请您先登录'
				});
			},

		},
		created() {
			this.init();

		},
		mounted() {
			this.arrincludes();
		}
	}
</script>

<style scoped>
	.you {
		/* width: 86px; */
		height: 31px;
		font-size: 12px;
		line-height: 20px;
		/* margin-top: -20px; */
		padding-left: 20px;
		padding-right: 20px;
		color: #e31c1c !important;
		border: 1px solid #e31c1c;
		border-radius: 3px;
		cursor: pointer;
		background: #f1f1f1;
		margin-right:34px;
		font-size:16px;
	}
	
	.you2 {
		/* width: 80px; */
		height: 31px;
		font-size: 12px;
		line-height: 20px;
		/* margin-top: -20px; */
		padding-left: 20px;
		padding-right: 20px;
		border-radius: 3px;
		color: #333333;
		/* border: 1px solid #333333; */
		cursor: pointer;
		background: #f1f1f1;
		margin-right:34px;
		font-size:16px;
	}
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
		margin: 0px 30px 0px 0;
	}

	/* 赞和分享的按钮样式 */
	button.zan {
		width: 95px;
		height: 30px;
		background: #f1f1f1;
		border-radius: 3px;
	}

	.btn-danger1 {
		background: #dc3545 !important;
	}
</style>
