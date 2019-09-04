
<template>
	<div>
		<!-- 主页 -->
		<!-- 页头 -->
		<my-header/>
        <!-- 搜索 -->
        <search/>
		<!-- 这是轮播 -->
		<Carousel :lunbo="lunbo"/>
		<!-- 频道广场 -->
		<div class="pd" first="1">
			<img class="pd-left" src="../../public/images/左边装饰红.png" alt />
			<div class="pd-a">
				<a href="javascript:;" class="pd_a">频道广场</a>
				<div class="pd-p-div">
					<p>Classification of commodities</p>
				</div>
			</div>
			<img class="pd-right" src="../../public/images/右边装饰红.png" alt />
		</div>
		<!-- 频道广场商品展示 -->
		<div class="pd-products">
			<div class="pd-1">
				<div class="pd-p-1 p-left-1">
					<div class="pd-1-title">
						<a class="p-left-title" href="javascript:;">数码产品</a>
						<p>DIGTAL PRODUCTS</p>
						<img src="../../public/images/details/素材/1_0.png" alt />
					</div>
				</div>
				<div class="pd-p-1 p-right-1">
					<div class="pd-1-title">
						<a class="p-right-title" href="javascript:;">运动体育</a>
						<p id="p-right-p">MOTION SPORTS</p>
                    <div class="p-right-img">
                        <img src="../../public/images/details/素材/4_3.png" alt="">
                    </div>
					</div>
				</div>
			</div>
			<div class="pd-2">
				<div class="pd-p-2" v-for="(item,i) of nav1" :key="i">
					<div class="pd-p-s">
						<a class="pd-p-a" href="javascript:;">{{item.name}}</a>
						<p class="pd-p-p">{{item.englishname}}</p>
						<img class="pd-p-img" :src="item.image_url" alt />
					</div>
				</div>
			</div>
			<div class="pd-3">
				<div class="pd-p-3" v-for="(item,i) of nav2" :key="i">
					<div class="pd-p-s">
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
			<div class="guess-like-img">
				<img src="../../public/images/喜欢小banner.png" alt />
			</div>
			<div class="guess-like-products">
				<div class="g-l-p-img" v-for="(item,i) of 12" :key="i">
					<img :data-id="item.pid" src="../../public/images/details/素材/4_5.png" />
				</div>
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
			<ul class="nav nav-pills text-center">
				<li class="nav-item" @click="DiscoverLike(1)">
					<a class="nav-link active" >最新发布</a>
				</li>
				<li class="nav-item" @click="DiscoverLike(2)">
					<a class="nav-link">发现好货</a>
				</li>
				<li class="nav-item" @click="DiscoverLike(3)">
					<a class="nav-link">特色优选</a>
				</li>
			</ul>
		</div>
		<div style="display: none;" class="tab-content" v-for="(items,i) of 3" :key="i">
			<div style="display: block;" class="tab-pane" v-for="(item,i) of data" :key="i">
				<!-- 猜你喜欢商品 -->
				<div class="g-l-p">
					<div class="g-l-p-title">
						<!-- 头像 -->
						<div class="g-l-hp">
							<img :src="item.image" :data-uid="item.uid" />
						<!-- 用户名 -->
							<p>{{item.nickname}}</p>
						</div>
						<div class="g-l-right">
							<div @click="enter"  id="dian" v-bind:class="{ 'you' : flag, 'you2': !flag}">{{con}}</div> 
						</div>
						<p class="p-introduce">{{item.pname}}</p>
						<div class="g-l-product">
							<img :src="item.pimages" :data-pid="item.pid" alt />
						</div>
						<div class="g-l-table">
							<table>
								<tbody>
									<tr>
										<td>
											<img class="td-right" src="../../public/images/浏览眼睛.png" />
											<p class="td-right">{{item.watched}}人浏览</p>
										</td>
										<td>
											<span>12人想要</span>
										</td>
									</tr>
									<tr>
										<td>
											<p class="td-right td-red">￥{{item.price}}</p>
										</td>
										<td>
											<a :data-pid="item.uid" class="btn td-btn-focus">我想要</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<reg-login />
		<my-foot />
	</div>
</template>

<script>
	// @ is an alias to /src
	import RegLogin from "../components/RegLogin";
	import Carousel from "../components/Carousel.vue"
	export default {
		data() {
			return {
				con:"+关注",
		        flag:false//单位切换开关,
				lunbo:[{lunbo_url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/lunbo/banner2.png"},
				{lunbo_url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/lunbo/banner1.png"},
				{lunbo_url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/lunbo/%E9%A5%B0%E5%93%81%E9%A6%96%E9%A5%B0.png"}
				],
				data: [],
				recommendation: [],
				category: [],
				SearchContent:"手机",
				nav1: [{
						name: "服装服饰",
						englishname: "CLOTHING AND APPAREL",
						image_url: require("../../public/images/details/素材/0_1.png")
					},
					{
						name: "饰品首饰",
						englishname: "JEWELRY AND ORNAMENTS",
						image_url: require("../../public/images/details/素材/0_1.png")
					},
					{
						name: "家用电器",
						englishname: "ELECTIC APPLIANCE",
						image_url: require("../../public/images/details/素材/0_1.png")
					},
					{
						name: "宠物用品",
						englishname: "PET SUPPLIES",
						image_url: require("../../public/images/details/素材/0_1.png")
					}
				],
				nav2: [{
						name: "日用百货",
						englishname: "ARTICLES OF DAILY USE",
						image_url: require("../../public/images/details/素材/0_1.png")
					},
					{
						name: "左图右史",
						englishname: "BOOL COMPLETE",
						image_url: require("../../public/images/details/素材/0_1.png")
					},
					{
						name: "美容护肤",
						englishname: "COSMETIC SKIN CARE",
						image_url: require("../../public/images/details/素材/0_1.png")
					},
					{
						name: "健康养生",
						englishname: "HEALTH PRESERVATION",
						image_url: require("../../public/images/details/素材/0_1.png")
					}
				]

			};
		},
		methods: {
			//关注此用户
			concern(uid){
				console.log(uid);
				var url="/"
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
				var url = "/Index";
				var params = {};
				if (category == 1) {
					params.type = "new";
				} else if (category == 2) {
					params.type = "superior";
				} else if(category == 3){
					params.type = "characteristic";
				}
				this.axios
					.get(url, {
						params
					})
					.then(result => {
						this.data = result.data.data;
						console.log(result);
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
					type:"category",
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
			Carousel
		}

	};
</script>
<style>
	@import url("../assets/css/index.css");
</style>
