<!--商品详情页面-->
<template>
	<div class="details text-center">
		<my-header />
		<!-- 搜索 -->
		<search />

		<!-- 广告图片 -->
		<div class="det-img">
			<img src="../../public/images/details/1-1.png" />
		</div>
		<!-- 商品详情 -->
		<div class="det-pro">
			<!-- 商品图片展示 -->
			<div class="fandajing">
				<div id="preview" class="pro-img col pr-0 p-0">
					<div class="card bg-transparent mr-5 position-absolute">
						<img class="card-img-top" :src="imagesss[i]" alt="Card image cap" id="mImg" />
						<!-- 	<div id="mask" class="position-absolute d-none"></div>
					<div id="super-mask" class="position-absolute"></div> -->
						<!-- <div id="div-lg" class="position-absolute d-none" :style="{'background-image':`url(${imagesss[i]})`,'background-position':bgposition}"></div> -->
						<div class="card-body p-0 text-center">
							<img src="../../public/images/jt-left.png" class="btn float-left btn-light border-0 p-1" :class="{disabled:leftDisabled}"
							 @click="move(-1)" id="btnLeft" />
							<div class="d-inline-block pt-2 mx-0 m-auto">
								<!-- <ul class="list-unstyled mb-0"> -->
								<ul class="list-unstyled mb-0" id="ulImgs" :style="ulStyle">
									<li v-for="(p,i) of imagesss" :key="i" class="float-left p-1" @mouseover="changei(i)">
										<div class="imageli">
											<img :src="p" />
										</div>
									</li>
								</ul>
							</div>
							<img src="../../public/images/jt-right.png" class="btn float-right btn-light border-0 p-1" :class="{disabled:rightDisabled}"
							 @click="move(+1)" id="btnRight" />
						</div>
					</div>
				</div>
			</div>
			<!-- 商品详情信息介绍 -->
			<detailsCenter :detailsCenter="detailsCenter"></detailsCenter>
			<!-- 发布者信息 -->
			<peopledetails :proper="userdatas"></peopledetails>
		</div>
		<!-- 商品留言评价 -->
		<div class="title">
			<ul class="title-nav nav-tabs">
				<li class="nav-item1">
					<a id="msg1" @click="msg1()" class="nav-link p-0">留言</a>
				</li>
				<li class="nav-item2">
					<a id="msg2" @click="msg2()" class="nav-link p-0 ismyactive">商家其他发布(7)</a>
				</li>
			</ul>

			<div class="tab-content">
				<!-- 留言页面 -->
				<div id="msgtab1" class="tab-pane active">
					<!-- 警示区域 -->
					<div class="p-t-3">
						如果遇到以下情况可能会是诈骗行为:
						<span style="color:#f00;font-size:14px;">
							1、宝贝价格异常低;
							2、卖家要求其他方式沟通;
							3、卖家要求直接汇款。
						</span>
						<b>寻求防骗经验</b>
					</div>
					<!-- 留言区域 -->
					<div class="title-text">
						<input type="text" />
						<button class="btn">留言</button>
					</div>
					<hr style="color:#f4f4f4;margin-bottom:0px;" />
					<div class="title-msg">
						<div style="text-align:left;font-size:20px;
                        margin-bottom:10px;">
							<b>全部留言</b>
						</div>
						<div class="msg" v-for="(item,i) of 8" :key="i">
							<!-- 多个客户留言区域 -->
							<div class="msg-img">
								<img src="../../public/images/details/1-1.png" />
							</div>
							<div class="msg-text">
								<div class="msg-name">
									<b style="margin-right:30px;">宇宙无敌小丸子</b>
									<span>1小时前</span>
								</div>
								<div class="msg-info">
									<span>
										喜欢好久的商品了，在某宝上面看好久了，妈耶，但是太贵了，
										今天在这里看到，还么便宜，爱了！
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 商家发布其他商品页面 -->
				<div id="msgtab2" class="tab-pane">
					<div class="p-t-3">
						如果遇到以下情况可能会是诈骗行为:
						<span style="color:#f00;font-size:14px;">
							1、宝贝价格异常低;
							2、卖家要求其他方式沟通;
							3、卖家要求直接汇款。
						</span>
						<b>寻求防骗经验</b>
					</div>
					<div class="pro-show">
						<div class="pro-item">
							<div class="item-detail">
								<div class="item-img">
									<div class="img-icon">
										<img src="../assets/logo.png" />
									</div>
									<div class="item-name">
										<span style="font-size:14px;
					                    color:#333;margin-top:20px;">李希</span>
										<br />
										<span style="color:#999;">1小时前</span>
									</div>
								</div>
								<hr style="margin:0" />
								<div class="product">
									<span style="margin:10px;">
										高端产品，廉价出售
										大牌产品高价入手低价出货
									</span>
									<div class="product-img">
										<img src="../../public/images/details/1_0.png" style="width:100%;height:100%;" />
									</div>
								</div>
								<div class="pro-price">
									<span style="color:red;">
										<b>￥3569.00</b>
									</span>
									<span style="color:#999;
					                margin-left:60px;">云南&nbsp;&nbsp;昆明</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 商品显示结束 -->
			</div>
		</div>
		<!-- 页尾 -->
		<my-foot></my-foot>
	</div>
</template>
<script>
	import {
		setTimeout
	} from "timers";
	import peopledetails from "../components/peopledetails.vue";
	import detailsCenter from "../components/detailsCenter.vue";
	export default {
		components: {
			peopledetails,
			detailsCenter
		},
		data() {
			return {
				detailsCenter: {},
				userdatas: {},
				imagesss: [],
				ulStyle: {
					//控制ul的样式
					width: 0,
					"margin-left": 0,
					transition: "margin-left 1.5s linear"
				},
				i: 0, //记录当前正在显示第几张图片
				times: 0 //记录左移的次数
			};
		},
		//   props: ["lid"],
		computed: {
			// bgposition() {
			// 	//   var left = parseInt(this.maskStyle.left);
			// 	//   var top = parseInt(this.maskStyle.top);
			// 	return;
			// },
			leftDisabled() {
				return this.times == 0;
			},
			rightDisabled() {
				return (
					this.imagesss.length <= 4 || this.times == this.imagesss.length - 4
				);
			}
		},
		watch: {
			//监控
			times() {
				this.ulStyle["margin-left"] = -this.times * 90 + "px";
			},
			imagesss() {
				this.ulStyle.width = this.imagesss.length * 90 + "px";
			}
		},
		methods: {
			msg1() {
				var msg1 = document.getElementById("msg1");
				var msg2 = document.getElementById("msg2");
				var msgtab1 = document.getElementById("msgtab1");
				var msgtab2 = document.getElementById("msgtab2");
				msg1.classList = "nav-link p-0 ismyactive";
				msg2.classList = "nav-link p-0";
				msgtab1.classList = "tab-pane active";
				msgtab2.classList = "tab-pane";
			},
			msg2() {
				var msg1 = document.getElementById("msg1");
				var msg2 = document.getElementById("msg2");
				var msgtab1 = document.getElementById("msgtab1");
				var msgtab2 = document.getElementById("msgtab2");
				msg2.classList = "nav-link p-0 ismyactive";
				msg1.classList = "nav-link p-0";
				msgtab2.classList = "tab-pane active";
				msgtab1.classList = "tab-pane";
			},
			load() {
				//封装发送ajax请求和初始化数据的方法，用于反复调用
				if (1 === 1) {
					//在发送请求之前就清除transition
					this.ulStyle.transition = "";
					this.axios
						.get("/Search", {
							params: {
								type: "goods",
								pid: 45
							}
						})
						.then(result => {
							console.log(result.data);
							var {
								pimages,
								description,
								image,
								p_description,
								nickname,
								pid,
								pname,
								price,
								sex,
								uid,
								status
							} = result.data;
							this.userdatas = {
								p_description,
								image,
								sex,
								uid,
								nickname,
								pid
							};
							this.detailsCenter = {
								pname,
								price,
								pid
							}
							console.log(this.userdata);
							console.log(1231231313);
							this.imagesss = pimages.split(";");
							console.log(this.imagesss);

							//每次重新加载页面后，都要把移动次数归零
							this.times = 0;
							this.i = 0;
							//一切都初始化完之后，最后再设置ul的transition
							setTimeout(() => {
								this.ulStyle.transition = "margin-left .5s linear";
							}, 50);
						});
				}
			},
			details_ajax() {
				var pid = this.pid;
				var url = "/Details?pid=" + pid;
				var params = {
					pid
				};
			},
			over_display() {},
			move(i) {
				if (
					(i == -1 && this.leftDisabled == false) ||
					(i == 1 && this.rightDisabled == false)
				) {
					this.times += i;
					if (this.times < 0) {
						this.times = 0;
					} else if (this.times > this.pics.length - 4) {
						this.times = this.pics.length - 4;
					}
				}
			},

			//当鼠标进入每个li时，修改data中i变量的值，为当前li的下标。
			changei(i) {
				this.i = i;
				//data中i改变，导致中图片的src和大图片的background-image自动同时变化。
			}
		},
		created() {
			this.load();
		}
	};
</script>
<style scoped>
	/* ********************************************************** */
	/* 商家发布商品其他信息 */
	.pro-show {
		width: 1120px;
		height: 400px;
		/* border:1px solid red; */
		background: #e5e5e5;
	}

	.pro-item {
		width: 280px;
		height: 379px;
		float: left;
	}

	.item-detail {
		width: 240px;
		height: 339px;
		background: #fff;
		margin: 20px auto;
	}

	/* 发布者信息 */
	.item-img {
		width: 240px;
		height: 70px;
		/* border:1px solid yellow; */
	}

	.img-icon {
		width: 40px;
		height: 40px;
		margin: 15px 10px;
		border-radius: 50%;
		float: left;
	}

	.item-name {
		width: 150px;
		height: 70px;
		text-align: left;
		float: left;
		padding: 10px;
	}

	.item-img>span {
		margin: 10px auto;
	}

	.img-icon>img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	/* 商品展示 */
	.pro-show>.pro-item>.item-detail>.product {
		width: 240px;
		height: 220px;
	}

	/* 商品图片 */
	.pro-show>.pro-item>.item-detail>.product-img {
		width: 240px;
		height: 200px;
		margin: 0;
	}

	/* 底部价格以及位置 */
	.pro-show>.pro-item>.item-detail>.pro-price {
		margin: 10px auto;
	}

	/* ********************************************************** */
	.details {
		background-color: #f5f5f5;
	}

	/* ******************广告图片div************************ */
	.det-img {
		width: 1180px;
		height: 150px;
		margin: 0 auto;
		margin-bottom: 30px;
	}

	/* 广告图片宽高 */
	.det-img>img {
		width: 100%;
		height: 100%;
	}

	/************************** 商品详情********************* */
	.det-pro {
		margin-top: 20px;
		width: 1180px;
		height: 500px;
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		margin: 0 auto;
	}

	.fandajing {
		width: 450px;
		height: 500px;
		background: #fff;
	}

	/* 商品详情左侧图片 */
	.pro-img {
		width: 100%;
		height: 100%;
	}

	/* 商品详情介绍 */
	.det-pro>.pro-detail {
		float: left;
		text-align: left;
		width: 30%;
		height: 100%;
		/* border:1px solid red; */
	}

	.det-pro>.pro-detail>.detail-text {
		width: 100%;
		height: 478px;
		margin: 10px 0;
		background: #fff;
	}

	.det-pro>.pro-detail>.detail-text>.info-text {
		width: 300px;
		height: 150px;
		font-size: 16px;
		color: #333;
		padding-left: 70px;
	}

	.det-pro>.pro-detail>.detail-text>.info-text>.pname,
	.det-pro>.pro-detail>.detail-text>.pro-address>.address {
		height: 35px;
		line-height: 35px;
		padding-top: 10px;
	}

	.det-pro>.pro-detail>.detail-text>.pro-address {
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

	/* **********************商品留言区域************************ */
	.title {
		width: 1180px;
		height: 800px;
		margin: 50px auto;
	}

	.title-nav {
		list-style: none;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
	}

	/* 留言框按钮的颜色设置 */
	.title-nav>.nav-item1 {
		width: 160px;
		height: 40px;
		font-size: 20px;
		background: #fff;
	}

	.title-nav>.nav-item1>a.ismyactive,
	.title-nav>.nav-item2>a.ismyactive {
		background-color: #e61717;
		color: #fff;
	}

	/* 商品发布框按钮的颜色设置 */
	.title-nav>.nav-item2 {
		width: 267px;
		height: 40px;
		font-size: 20px;
		background: #fff;
		border-right-width: 1px solid #ddd;
	}

	.title-nav>li>a {
		color: #000;
		text-decoration: none;
		text-align: center;
	}

	/* 鼠标移入时候颜色改变 */

	/* 留言页面样式 */
	.tab-content {
		width: 1180px;
		height: 584px;
		padding: 0;
		margin: 0;
	}

	.tab-content>#tab1 {
		width: 100%;
		height: 760px;
		border-top-width: 1px solid #333;
		background-color: #fff;
	}

	.title-text {
		width: 100%;
		height: 200px;
		margin-bottom: 20px;
	}

	.title-text>input {
		width: 1120px;
		height: 100px;
		margin: 20px auto;
		border: 1px solid #ccc;
		border-radius: 3px;
		background: #f4f4f4;
	}

	.title-text>button {
		width: 160px;
		height: 50px;
		border: 0.5px solid #ddd;
		color: #000;
		font-size: 20px;
		float: right;
		margin-right: 29px;
	}

	/* 已有留言模块 */
	.title-msg {
		width: 1120px;
		/* height: 500px; */
		margin: 0 auto;
	}

	.title-msg>.msg {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #b8b1b1;
	}

	.title-msg>.msg>.msg-img {
		width: 10%;
		height: 100px;
		float: left;
		border-radius: 50%;
	}

	.title-msg>.msg>.msg-img>img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}

	.title-msg>.msg>.msg-text {
		width: 90%;
		height: 100px;
		float: left;
	}

	.title-msg>.msg>.msg-text>.msg-name,
	.title-msg>.msg>.msg-text>.msg-info {
		text-align: left;
		margin-left: 10px;
		margin-top: 10px;
	}

	.nav-link {
		height: 40px !important;
		line-height: 40px !important;
	}

	.fandajing {
		width: 450px;
		height: 500px;
	}

	.card {
		width: 100%;
		height: 500px;
	}

	.card-img-top {
		width: 100%;
		height: 400px;
	}

	.card-body {
		width: 100%;
		height: 100px;
		display: flex;
		flex-flow: row;
	}

	.imageli {
		width: 70px;
		height: 80px;
		margin: 0px 5px;
	}

	.imageli>img {
		width: 100%;
		height: 100%
	}
	.d-inline-block{
		overflow: hidden;
	}
</style>
