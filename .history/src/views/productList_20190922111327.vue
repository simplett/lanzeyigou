<template>
	<div>
		<!-- 页头 -->
		<my-header />
		<!-- 搜索 -->
		<search />
		<!-- 这是轮播 -->
		<div class="IMG">
			<img :src="codeid.imgurl[7]" alt="">
		</div>
		<!--  -->
		<!-- 7个图片 -->
		<div class="p-7-img">
			<!-- 最左边的大的div -->
			<div class="p-7-left">
				<img :src="codeid.imgurl[8]" alt="">
			</div>
			<!-- 右边6个div -->
			<div class="p-7-right">
				<div class="p-7-right-2" :style="DIVstyle" v-for="(item,i) of 6" :key="i">
					<!-- 6个div上覆盖的模糊层 -->

					<div class="p-7-right-img">
						<img 
						:src="codeid.imgurl[i]" />
						<div class="p-7-m-font">
							{{codeid.name[i]}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 分类 -->
		<div class="myadd-nav" v-for="(item,i) of 6" :key="i">
			<!-- 标题 -->
			<div class="title">
				<div class="title-div">
					<a>{{codeid.name[i]}}</a>
				</div>
			</div>
			<!-- 商品列表 -->
			<div class="p-list">
				<div class="products" v-for="(item,j) of datas[i]" :key="j">
					<!-- 商品图片 -->
					<div class="products-img">
						<img @click="detailsrouter(datas[i][j].pid)" :src="selectimage[i][j]" alt="">
					</div>
					<!-- 商品介绍 -->
					<table>
						<tbody>
							<tr>
								<td class="td-top" colspan="2">
									<a class="td-top-p-intro" href="javascript:;">{{item.intro}}</a>
								</td>
							</tr>
							<tr>
								<td class="td-left">
									<p>￥{{item.price}}</p>
								</td>
								<td class="td-p-right">
									<p><a>{{item.customer}}</a>人想要</p>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- 商家信息与关注 -->
					<div class="p-msg">
						<div class="p-msg-left">
							<div class="p-msg-left-img">
								<img @click="userCenterRouter(item.uid)" :src="item.image" alt="">
							</div>
							<p @click="userCenterRouter(item.uid)">丁晓瑞</p>
						</div>
						<div>
							<div class="p-msg-right">
								<a href="javascript:;" @click="detailsrouter(item.pid)" class="btn btn-focus">我想要</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
<reg-login />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//选中的裁剪出来的图片
				selectimage: [
					[],
					[],
					[],
					[],
					[],
					[]
				],
				//请求回来的所有数据，商品列别的
				datas: [],
				codeid: 1,
				DIVstyle:{
					background:"linear-gradient(45deg, #c4e4ff, #91ccff)"
				}
			}
		},
		methods: {
			// change(){
			// 	document.getElementById("userimage").style.filter="blur(50px)";
			// }
			//循环请求数据
			forajax(codeid) {
				console.log(codeid[0])
				for (var item of codeid) {
					console.log(item, "的请求")
					this.category(item)
				}
			},
			//请求不同类别的数据
			category(codelist) {
				var params = {
					type: "categories",
					codelist
				};
				var url = "/Search";
				this.axios
					.get(url, {
						params
					})
					.then(result => {
						console.log(result.data.data);
						this.datas.push(result.data.data);
						console.log("这是商品列别的数据", this.datas);
						var i = 0;
						for (var items of this.datas) {
							console.log("裁剪之后的数组", "pimages", items);
							for (var item of items) {
								var imagereg = /;/;
								if (imagereg.test(item.pimages)) {
									var j = item.pimages.split(";");
									console.log(i, "这是I");
									this.selectimage[i].push(j[0]);
								} else {
									this.selectimage[i].push(item.pimages)
								}
							}
							i++;
						};
						console.log("这个可能是一个三维数组", this.selectimage);
					});
			},
			getRouterData() {
				// 只是改了query，其他都不变
				this.codeid = this.$store.state.productlist[this.$route.query.code]
				console.log("这是商品内页的数据", this.codeid);

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
			//跳转到当前用户详细情况
			userCenterRouter(uid) {
				console.log(uid);
				this.$router.push({
					name: "otherperson",
					query: {
						uid
					}
				});
			},
		},
		created() {
			this.getRouterData();
			var mycategory = this.codeid.codelist;
			this.DIVstyle.background=this.codeid.divstyle;
			this.forajax(mycategory);
		}
	}
</script>
<style scoped>
	.p-7-img {
		width: 1192px;
		height: 550px;
		margin: 0 auto;
		/* // border 1px solid red; */
		margin-top: 50px;
	}
	.p-7-left {
		float: left;
		width: 335px;
		height: 100%;
		/* // border:1px solid green; */
		background: linear-gradient(45deg, #c4e4ff, #91ccff);
	}
	.p-7-right {
		float: left;
		width: 842px;
		height: 100%;
		/* border:1px solid yellow; */
		margin-left: 15px;
		/* display: flex; */
	}
	.p-7-right-2 {
		width: 270px;
		height: 270px;
		position: relative;
		/* // border:1px solid pink; */
		margin-bottom: 10px;
		margin-right: 10px;
		/* background: linear-gradient(45deg, #c4e4ff, #91ccff); */
		float: left;
	}
	.p-7-right-img {
		width: 100%;
		height: 100%;
		position: relative;
		/* border:1px solid green; */
		top: 0px;
		left: 0px;
		text-align: center;
		/* z-index: 200; */
		/* filter: blur(50px); */
	}
	/* /* .p-7-right-img:hover {
	filter: blur(20px);
	} */
	.p-7-right-img:hover p {
	color: blue;
	} */
	.p-7-right-img>img {
		width: 270px;
		height: 80%;
		margin-top: 10%;

	}
	.p-7-m-font {
		overflow: hidden;
		position: absolute;
		top: 0px;
		z-index: 300;
		display: none;
		font-size: 36px;
		font-weight: 400;
		color: gold;
		padding: 0;
		height: 100%;
		width:100%;
		line-height: 270px;
	}
	.title {
		width: 1180px;
		height: 68px;
		border-bottom: 1px solid black;
		margin: 0 auto;
		margin-top: 60px;
		margin-bottom: 30px;
	}

	.title-div {
		float: left;
		width: 250px;
		height: 100%;
		padding-bottom: 19px;
		border-bottom: 5px solid black;
	}

	.title-div>a {
		font-size: 40px;
		font-weight: bold;
		float: left;
	}

	.p-list {
		width: 1199px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		/* height: 672px; */
		margin: 0 auto;
		/* // border:1px solid red; */
		padding-left: 9px;
		/* padding-bottom: 10px;; */
		/* overflow: hidden; */
	}

	.products {
		width: 228px;
		/* height: 330px; */
		background: #ffffff;
		margin-right: 10px;
		margin-bottom: 10px;
		/* float: left; */
	}

	.products-img {
		margin: 0 auto;
		width: 150px;
		height: 150px;
		/* // border:1px solid red; */
		margin-top: 20px;
	}

	.products-img>img {
		width: 150px;
		height: 150px;
	}

	table {
		width: 180px;
		height: 96px;
		/* // border:1px solid red; */
		margin: 0 auto;
	}

	.td-top {
		/* // border:1px solid green; */
		height: 30px;
		padding-bottom: 25px;
	}

	.td-left {
		float: left;
	}

	.td-p-right {
		float: right;
		/* // width:50px; */
	}

	.td-left>p {
		color: red;
		font-size: 16px;
	}

	.td-p-right>p {
		color: #999999;
		font-size: 12px;
	}

	.p-msg {
		width: 100%;
		height: 60px;
		/* // float:bottom; */
		border-top: 1px solid #f5f5f5;
	}

	.p-msg-left,
	.p-msg-right {
		width: 49%;
		height: 100%;
		/* // border:1px solid green; */
		float: left;
	}

	.p-msg-left-img {
		width: 30px;
		height: 30px;
		margin-left: 22px;
		margin-top: 12px;
		float: left;
		/* // border:1px solid black; */
	}

	.p-msg-left-img>img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}

	.p-msg-left>p {
		width: 112px;
		line-height: 56px;
	}

	.p-msg-right {
		float: right;
		padding-top: 16px;
	}

	.btn-focus {
		width: 70px;
		height: 25px;
		color: #333333;
		font-size: 12px;
		border: 1px solid #333333;
		line-height: 10px;
		float: right;
		margin-right: 11px;
	}

	.btn-focus:hover {
		color: red;
		border: 1px solid red;
	}

	.td-top-p-intro {
		width: 180px;
		height: 35px;
		overflow: hidden;
		/*溢出隐藏*/
		text-overflow: ellipsis;
		/*以省略号...显示*/
		-webkit-line-clamp: 2;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		padding: 0;
		color: #999999;
		font-size: 12px;
	}

	.td-top-p-intro:hover {
		color: #999999;
	}

	.myadd-nav {
		margin: 20px 0px;
	}

	.IMG {
		width: 1920px;
		/* height:600px; */
		margin: 0 auto;
	}

	.IMG img {
		width: 100%;
		/* height:100%; */
	}
</style>
