<template>
	<div>
		<my-header></my-header>
		<search></search>
		<hr>
		<!-- <div class="btn-group btn-group-lg text-left" style="margin-left: 50px;">
			<button type="button" class="btn btn-default"></button>
			<button type="button" class="btn btn-default">Button 2</button>
			<button type="button" class="btn btn-default">Button 3</button>
		</div> -->
			<div class="tab-content">
				<div style="display: block;" class="tab-pane" v-for="(item,i) of data" :key="i">
					<!-- 猜你喜欢商品 -->
					<Product :selectimage="selectimage[i]" :item="item"></Product>
				</div>
			</div>
			<reg-login />
		<my-foot></my-foot>
	</div>

</template>

<script>
	import {
		setInterval
	} from "timers";
	export default {
		data() {
			return {
				SearchContent: "",
				selectimage: [],
				data: [],
				con: "+关注",
				flag: false, //单位切换开关
			}
		},
		methods: {
			xuanhuang(){
				setInterval(this.isActive(),500);
			},
			//监测搜素值的变化
			isActive(){
				var contentsearch = this.$store.state.SearchContent;
				if(!contentsearch===this.SearchContent)
				{
					this.SearchContent=contentsearch;
					console.log("#################################搜素值发生了改变",contentsearch);
				}
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
			open4() {
				this.$notify({
					title: '失败',
					message: '很抱歉，请输入您要搜素的关键字',
					type: 'warning'
				});
			},
			getRouterData() {
				// 只是改了query，其他都不变
				this.SearchContent = this.$store.state.SearchContent
				console.log("这是搜素页的数据", this.SearchContent);
				if (this.SearchContent) {
					var url = "/Search";
					var params = {
						type: "category",
						kw: this.SearchContent
					};
					this.axios.get(url, {
						params
					}).then(result => {
						console.log("#######################################这是搜素商品出来的数据", result.data.data);
						this.data = result.data.data;
						console.log(this.data);
						var otherimage = [];
						var imagereg = /;/;
						for (var item of this.data) {
							if (imagereg.test(item.pimages)) {
								console.log(item.pimages);
								var i = item.pimages.split(";");
								otherimage.push(i[0]);
							} else {
								otherimage.push(item.pimages);
							}

						};
						this.selectimage = otherimage;
						console.log(this.selectimage);
					});
				}else{
					this.open4()
				}

			}
		},
		watch:{
			'$store.state.SearchContent'(){
				this.getRouterData();
			}
			// SearchContent(){
			// 	this.getRouterData();
			// }
		},
		created() {
			this.getRouterData();
			// this.xuanhuang();
		}
	}
</script>

<style scoped>
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
		height:2118px;
		/* height: 1584px; */
		/* border: 1px solid red; */
		padding-left: 20px;
		margin-top: 70px;
		margin-bottom: 100px;
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
