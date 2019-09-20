<template>
	<div>
		<!-- 主页 -->
		<!-- 页头 -->
		<my-header />
		<!-- 搜索 -->
		<search />
		<!-- 这是轮播 -->
		<Carousel :lunbo="lunbo" />
		<!-- 频道广场 -->
		<div class="pd text-center" first="1">
			<img class="pd-left" src="../../public/images/左边装饰红.png" alt />
			<div class="pd-a">
				<a class="pd_a">频道广场</a>
				<div class="pd-p-div">
					<p>Classification of commodities</p>
				</div>
			</div>
			<img class="pd-right" src="../../public/images/右边装饰红.png" alt />
		</div>
		<!-- 频道广场商品展示 -->
		<div class="pd-products">
			<div class="pd-1">
				<div @click="productlistajax(0)" class="pd-p-1 p-left-1">
					<div class="pd-1-title">
						<a class="p-left-title" href="javascript:;">数码产品</a>
						<p>DIGTAL PRODUCTS</p>
						<img src="http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0.png" alt />
					</div>
				</div>
				<div @click="productlistajax(1)" class="pd-p-1 p-right-1">
					<div class="pd-1-title">
						<a class="p-right-title" href="javascript:;">运动体育</a>
						<p id="p-right-p">MOTION SPORTS</p>
						<div class="p-right-img">
							<img src="http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="pd-2">
				<div class="pd-p-2" v-for="(item,i) of nav1" :key="i">
					<div @click="productlistajax(i+2)" class="pd-p-s">
						<a class="pd-p-a" href="javascript:;">{{item.name}}</a>
						<p class="pd-p-p">{{item.englishname}}</p>
						<img class="pd-p-img" :src="item.image_url" alt />
					</div>
				</div>
			</div>
			<div class="pd-3">
				<div class="pd-p-3" v-for="(item,i) of nav2" :key="i">
					<div @click="productlistajax(i+6)" class="pd-p-s">
						<a class="pd-p-a" href="javascript:;">{{item.name}}</a>
						<p class="pd-p-p">{{item.englishname}}</p>
						<img class="pd-p-img" :src="item.image_url" alt />
					</div>
				</div>
			</div>
		</div>

		<!-- 猜你喜欢 -->
		<div class="pd">
			<img class="pd-left" src="../../public/images/左边装饰蓝.png" alt />
			<div class="pd-a">
				<a href="javascript:;" class="cn_a">猜你喜欢</a>
				<div class="pd-p_div">
					<p>Guess you like it</p>
				</div>
			</div>
			<img class="pd-right" src="../../public/images/右边装饰蓝.png" alt />
		</div>
		<!-- 猜你喜欢商品展示 -->
		<div class="guess-like">
		<!--<div class="guess-like-img">
				<img src="../../public/images/喜欢小banner.png" alt />
			</div> -->
			<div class="guess-like-products">
				<card></card>
				<!-- <div class="g-l-p-img" v-for="(item,i) of 12" :key="i">
					
					<img :data-id="item.pid" src="../../public/images/details/素材/4_5.png" />
				</div> -->
			</div>
		</div>

		<!-- 为你推荐 -->
		<div class="pd">
			<img class="pd-left" src="../../public/images/左边装饰红.png" alt />
			<div class="pd-a">
				<a href="javascript:;" class="pd_a">为你推荐</a>
				<div class="pd-p-d">
					<p>Recommendation for you</p>
				</div>
			</div>
			<img class="pd-right" src="../../public/images/右边装饰红.png" alt />
		</div>

		<!-- 为你推荐胶囊导航 -->
		<div class="g-l">
			<ul class="nav nav-pills p-0 m-0 text-center row justify-content-around">
				<li class="nav-item" @click="DiscoverLike(1)">
					<a class="nav-link active">最新发布</a>
				</li>
				<li class="nav-item" @click="DiscoverLike(2)">
					<a class="nav-link">发现好货</a>
				</li>
				<li class="nav-item" @click="DiscoverLike(3)">
					<a class="nav-link">特色优选</a>
				</li>
			</ul>
		</div>
		<div style="display: none;" class="tab-content" v-for="(items,j) of 3" :key="j">
			<div style="display: block;" class="tab-pane" v-for="(item,i) of data" :key="i">
				<!-- 猜你喜欢商品 -->
				<Product :selectimage="selectimage[i]" :item="item"></Product>
			</div>
		</div>
		<reg-login />
		<my-foot />
	</div>
</template>

<script>
	// @ is an alias to /src
	import RegLogin from "../components/RegLogin.1";
	import Carousel from "../components/Carousel.vue";
	import card from "../components/card.vue";
	export default {
		data() {
			return {
				selectimage: [],
				con: "+关注",
				flag: false, //单位切换开关
				lunbo: [{
						lunbo_url: "https://simplett-img.oss-cn-beijing.aliyuncs.com/lunbo/banner.png"
					},
					{
						lunbo_url: "https://simplett-img.oss-cn-beijing.aliyuncs.com/lunbo/banner1.png"
					},
					{
						lunbo_url: "https://simplett-img.oss-cn-beijing.aliyuncs.com/lunbo/banner2.png"
					},
					{
						lunbo_url: "https://simplett-img.oss-cn-beijing.aliyuncs.com/lunbo/banner1(1).png"
					}
				],
				data: [],
				recommendation: [],
				category: [],
				SearchContent: "手机",
				nav1: [{
						name: "服装服饰",
						englishname: "CLOTHING AND APPAREL",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2.png"
					},
					{
						name: "饰品首饰",
						englishname: "JEWELRY AND ORNAMENTS",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3.png"
					},
					{
						name: "家用电器",
						englishname: "ELECTIC APPLIANCE",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4.png"
					},
					{
						name: "宠物用品",
						englishname: "PET SUPPLIES",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5.png"
					}
				],
				nav2: [{
						name: "日用百货",
						englishname: "ARTICLES OF DAILY USE",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6.png"
					},
					{
						name: "左图右史",
						englishname: "BOOL COMPLETE",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7.png"
					},
					{
						name: "美容护肤",
						englishname: "COSMETIC SKIN CARE",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8.png"
					},
					{
						name: "健康养生",
						englishname: "HEALTH PRESERVATION",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9.png"
					}
				]


			};
		},
		methods: {
			//跳转到商品类别的分类
			productlistajax(code) {
				this.$router.push({
					name: "productList",
					query: {
						code
					}
				});
				// console.log(this.productListJson[code]);
				this.$store.commit("SAVE_CODE", code);
				var codeid = this.$store.state.code
				// console.log(this.$store.state.productlist[codeid]);
			},
			//跳转到商品详细情况
			detailsrouter(pid) {
				console.log(pid);
				this.$router.push({
					name: "details",
					query: {
						pid
					}
				});
			},
			enter: function() {
				this.flag = !this.flag;
				if (this.flag == true) {
					this.con = "已关注";
				} else if (this.flag == false) {
					this.con = "+关注";
				}
			},
			//关注此用户
			concern(uid) {
				console.log(uid);
				var url = "/"
			},

			isActive() {
				//获取tab主要按键
				var selectactive = document.getElementsByClassName("nav-link");
				var tab_content = document.getElementsByClassName("tab-content");
				console.log(selectactive, tab_content);
				tab_content[0].style.display = "block"; //下标从0开始
				for (var i = 0; i < selectactive.length; i++) {
					selectactive[i].index = i;
					selectactive[i].onclick = function() {
						var num = this.index;
						//清除冲突的样式
						for (var j = 0; j < tab_content.length; j++) {
							// if(j===num)
							// {
							// 	tab_content[j].style.display = "block";
							// 	selectactive[j].className = "nav-link active"
							// }else{
							// tab_content[j].style.display = "none";
							// selectactive[num].className = "nav-link"
							// }
							tab_content[j].style.display = "none";
							selectactive[j].className = "nav-link"
						}
						selectactive[num].className = "nav-link active";
						tab_content[num].style.display = "block";
					}

				}
			},
			//这是猜你喜欢页面的Ajax请求
			Recommendation() {
				var params = {
					type: recommendation
				};
				var url = "/Guess";
				this.axios
					.get(url, {
						params
					})
					.then(result => {
						this.recommendation = result;
					});
			},
			//这是为你推荐的Ajax请求
			//（category的可取值为new,superior,characteristic）
			DiscoverLike(category) {
				console.log(this.productlist)
				var url = "/Index";
				var params = {};
				if (category == 1) {
					params.type = "new";
				} else if (category == 2) {
					params.type = "superior";
				} else if (category == 3) {
					params.type = "characteristic";
				}
				this.axios
					.get(url, {
						params
					})
					.then(result => {
						this.data = result.data.data;
						this.selectimage=[];
						for (var item of this.data) {
							var i = item.pimages.split(";");
							this.selectimage.push(i[0]);
						};
						console.log("#################index######################这是裁剪出来的图片列表",this.selectimage)
						// this.productListJson=result.data.productlist.split("@");
						// console.log("这是productlist",this.productListJson[1]);
						console.log("这是index的数据", result);
						//数据保存在data中，分类别的请求会覆盖同一个data，实现数据的共享
						//在页面加载的时候，会预先发送一个请求，函数名称为DiscoverLike（”new“）
					});
			},
			//这是商品首页的列别的跳转
			classifications(i) {
				this.router.push("/Class?code=" + i);
			},
			//搜索的方法，使用双向绑定绑定SearchContent
			Search() {
				var SearchContent = this.SearchContent;
				var url = "/Search";
				var params = {
					type: "category",
					kw: SearchContent
				};
				this.axios.get(url, {
					params
				}).then(result => {
					console.log(result)
				});
			}
		},
		created() {

		},
		mounted() {
			this.isActive(),
			this.DiscoverLike(1)
		},
		components: {
			RegLogin,
			Carousel,
			card
		}

	};
</script>
<style scoped>

	.pd {
		margin: 0 auto;
		width: 372px;
		height: 170px;
		/* border: 1px solid red; */
	}

	.pd-left {
		margin-top: 20px;
		float: left;
	}

	.pd-right {
		float: right;
		margin-top: -40px;
	}

	.pd-a {
		/* border: 1px solid red; */
		width: 200px;
		height: 60px;
		margin: 0 auto;
		margin-top: 60px;
	}

	.pd_a {
		color: #e31c1c;
		font-size: 40px;
		/* margin-left: 22px;
		 */
		margin: 0 auto;
	}

	.pd_a:hover {
		color: red;
	}

	.pd-products {
		width: 1230px;
		height: 900px;
		margin: 0 auto;
	}

	.pd-p-1 {
		float: left;
		width: 580px;
		height: 300px;
		margin-left: 10px;
		margin-right: 10px;
		background: linear-gradient(45deg, #c4e4ff, #91ccff);
	}

	.pd-p-2,
	.pd-p-3 {
		width: 280px;
		height: 280px;
		float: left;
		margin-left: 10px;
		margin-right: 10px;
	}

	.pd-1 {
		width: 100%;
		height: 300px;
		margin-bottom: 20px;
		float: left;
	}

	.pd-2,
	.pd-3 {
		width: 100%;
		height: 280px;
		margin-bottom: 20px;
		float: left;
	}

	.pd-2 .pd-p-a {
		color: #b12317;
	}

	.pd-3 .pd-p-a {
		color: #b14d17;
	}

	.p-left-1 {
		background-color: #91ccff;
		border: 0px;
	}

	.p-right-1 {
		background: linear-gradient(45deg, #f4c9ff, #ff9eee);
		border: 0px;
	}

	.pd-p-2 {
		background: #ffd0dc;
		border: 0px;
	}

	.pd-p-3 {
		background: #ffe0cd;
		border: 0px;
	}

	.pd-1-title {
		margin-left: -250px;
		margin-top: 15%;
	}

	.p-left-title {
		color: #00549b;
		font-size: 50px;
		font-weight: bold;
	}

	.pd-1-title>p {
		color: #00549b;
		font-size: 30px;
	}

	.pd-1-title>img {
		float: right;
		margin-top: -150px;
	}

	.p-right-title {
		color: #d340ba;
		font-size: 50px;
		font-weight: bold;
	}

	.p-right-title:hover {
		color: #d340ba;
	}

	#p-right-p {
		color: #d340ba;
		font-size: 30px;
	}

	.p-right-img {
		margin-top: -193px;
		margin-left: 55%;
	}

	.p-right-img>img {
		width: 420px;
	}

	.pd-p-s {
		margin: 0 auto;
		width: 92%;
		height: 100%;
		padding-top: 20px;
		margin: 0px;
	}

	.pd-p-a {
		margin-left: 12%;
		color: #b12317;
		font-size: 30px;
		font-weight: bold;
	}

	.pd-p-p {
		color: #000000;
		font-size: 16px;
		font-weight: bold;
		margin: 0px;
		margin-left: 13%;
	}

	.pd-p-img {
		width: 270px;
	}

	.cn_a {
		color: #2f80e8;
		font-size: 40px;
		margin-left: 22px;
	}

	.pd-p-div,
	.pd-p_div,
	.pd-p-d {
		width: 500px;
		height: 40px;
		/* border: 1px solid red; */
		/*测试*/
		margin: 0 auto;
		margin-left: -134px;
	}

	.pd-p_div {
		margin-left: -140px;
	}

	.pd-p-div>p,
	.pd-p_div>p,
	.pd-p-d>p {
		color: silver;
		font-size: 26px;
	}

	.guess-like {
		width: 1180px;
		height: 320px;
		border: 5px solid red;
		margin: 0 auto;
		overflow: hidden;
	}

	.guess-like-img {
		width: 244px;
		height: 100%;
	}

	.g-l-p-img>img {
		margin-top: 20%;
		width: 90%;
	}

	.pd-p-d {
		margin-left: -135px;
	}

	.nav-pills .nav-link.active,
	.nav-pills .show>.nav-link {
		color: #fff;
		width: 360px;
		height: 62px !important;
		background: #f31c1c;
		border: 1px solid #f31c1c;
		line-height: 44px;
		/* color: #000000; */
	}

	.nav-pills .nav-link {
		width: 360px;
		height: 62px !important;
		color: #000000;
		border: 1px solid #000000;
		font-size: 30px;
		line-height: 44px;
	}

	.nav-link:hover {
		color: #000000;
	}

	.g-l-p {
		width: 280px;
		height: 420px;
		/* border: 1px solid green; */
		background: #FFFFFF;
		margin-bottom: 22px;
		margin-right: 22px;
		float: left;
	}

	.tab-content {
		margin: 0 auto;
		width: 1230px;
		height: 1584px;
		/* border: 1px solid red; */
		padding-left: 20px;
		margin-top: 70px;
	}

	.g-l-p-title {
		width: 240px;
		height: 380px;
		/* border: 1px solid yellow; */
		margin: 0 auto;
	}

	.g-l-hp {
		width: 100%;
		height: 70px;
		/* border: 1px solid red; */
		float: left;
		border-bottom: 1px solid #f5f5f5;
		/* border-radius:50%; */
	}

	.g-l-hp>img {
		float: left;
		width: 40px;
		/* margin-left:20px; */
		margin-top: 20px;
		margin-bottom: 10px;
		border-radius: 50%;
	}

	.g-l-right {
		float: right;
		margin-top: -38px;
		/* margin-right:20px; */
		/* border: 1px solid red; */
		width: 50px;
		height: 20px;
	}

	/* .g-l-right>a{
    color:red;
    font-weight: bold;
    margin-top: -10px;
    font-size: 14px;
    margin-left: -14px;
} */
	.g-l-hp>p {
		margin-top: 25px;
		width: 100px;
	}

	.g-l-product {
		width: 100%;
		height: 200px;
		/* border: 1px solid red; */
		background: #f2f2f2;
		margin-top: 10px;
	}

	.g-l-product>img {
		width: 100%;
		height: 100%;
	}

	/* .g-l-p-title>p{
    margin: 0;
} */
	.g-l-table {
		width: 100%;
		height: 80px;
		/* border:1px solid green; */
	}

	.g-l-table>table {
		width: 100%;
		height: 80px;
		/* border:1px solid green; */
		padding: 0;
		margin: 0;
	}

	p,
	span {
		padding: 0;
		margin: 0;
		font-size: 12px;
	}

	.td-right {
		float: left;
		margin-left: 7px;
	}

	td>img {
		margin-top: 3%;
	}

	td>span {
		color: #999999;
		margin-left: 30%;
	}

	.td-red {
		color: red;
		font-weight: bold;
		font-size: 11px;
	}

	.you {
		width: 50px;
		height: 20px;
		font-size: 12px;
		line-height: 20px;
		/* margin-top: -20px; */
		padding: 0px;
		color: #e31c1c !important;
		border: 1px solid #e31c1c;
		border-radius: 0;
		cursor: pointer;
	}

	.you2 {
		width: 50px;
		height: 20px;
		font-size: 12px;
		line-height: 20px;
		/* margin-top: -20px; */
		padding: 0px;
		border-radius: 0;
		color: #333333;
		border: 1px solid #333333;
		cursor: pointer;
	}

	.td-btn-focus {
		width: 90px;
		height: 25px;
		font-size: 11px;
		line-height: 10px;
		margin-top: 10px;
		margin-left: 10%;
		border: 1px solid black;
	}

	.td-btn-focus:hover {
		color: #fff !important;
		border: 0;
		background: #e31c1c;
	}

	.footer-div {
		float: bottom;
	}

	#footer {
		height: 500px;
	}

	.login-img2 {
		margin-top: 20px;
		width: 40px;
		height: 40px;
		text-align: center;
	}

	.login-img2>a {
		color: #FFFFFF;
		font-size: 22px;
	}

	.p-right-title:hover {
		color: #d340ba;
	}

	.guess-like-img>img {
		width: 100%;
		height: 100%;
	}

	.guess-like-products {
		width: 100%;
		height: 100%;
		/* border: 1px solid green; */
		margin-top: -320px;
		margin-left: 100px;
	}

	.g-l-p-img {
		width: 280px;
		height: 100%;
		border-left: 3px solid #e6e6e6;
		float: left;
	}

	.g-l {
		margin: 0 auto;
		width: 1180px;
		height: 80px;
		padding-left: 30px;
		margin-bottom: 30px;
	}

	.p-introduce {
		width: 240px;
		height: 45px;
		overflow: hidden;
		/*溢出隐藏*/
		text-overflow: ellipsis;
		/*以省略号...显示*/
		-webkit-line-clamp: 2;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
</style>
