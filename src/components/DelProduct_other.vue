<template>
	<div class="pro-item">
		<div class="item-detail">
			<div class="item-img">
				<div class="img-icon">
					<img :src="image">
				</div>
				<div class="item-name">
					<span style="font-size:14px;
                        color:#333;margin-top:20px;">{{nickname}}</span><br>
					<span style="color:#999;">关注量{{wcount}}</span>
				</div>
			</div>
			<hr style="margin:0">
			<div class="product">
				<div class="pro-text">
					<span>{{pname}}</span>
				</div>
				<div class="product-img">
					<img @click="detailsrouter()" :src="pimages" />
				</div>
			</div>
			<div class="pro-price">
				<b>￥{{price}}</b>
				<span style="color:#999;margin-left:60px;">
					云南&nbsp;&nbsp;昆明</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				pimages: "",
				p_description: "",
				pname: "",
				price: "",
				wcount: ""
			}
		},
		props: {
			pid: {
				default: "111"
			},
			nickname: {
				default: "111"
			},
			image: {
				default: "111"
			}
		},
		methods: {
			getproductlist() {
				var pid = this.pid;
				if (pid) {
					this.axios.get("/Search", {
						params: {
							type: "goods",
							pid
						}
					}).then(result => {
						var {
							pimages,
							p_description,
							pname,
							price,
							wcount
						} = result.data;
						var otherimage = [];
						var imagereg = /;/;
							if (imagereg.test(pimages)) {
								var i = pimages.split(";");
								otherimage.push(i[0]);
							} else {
								otherimage.push(pimages);
							}
							
						this.pimages=otherimage,
						this.p_description=p_description,
						this.pname=pname,
						this.price=price,
						this.wcount=wcount

					})
				}else{
					{
						this.axios.get("/Search", {
							params: {
								type: "goods",
								pid:1
							}
						}).then(result => {
							var {
								pimages,
								p_description,
								pname,
								price,
								wcount
							} = result.data;
							this.pimages=pimages,
							this.p_description=p_description,
							this.p_description=pname,
							this.price=price,
							this.wcount=wcount
					
						})
					}
				}
			},
			//跳转到商品详细情况
			detailsrouter() {
				console.log();
				this.$router.push({
					name: "details",
					query: {
						pid:this.pid
					}
				});
			},
		},
		created() {
			this.getproductlist()
		}
	}
</script>
<style scoped>
	div.pro-item {
		width:100%;
		height: 379px;
		/* float: left; */
		margin-top: 20px;
		/* margin-right: 10px; */
		margin-right:10px;
	}

	div.pro-item:hover {
		box-shadow: #e6e6e6 3px 3px 10px;
	}

	div.pro-item>.item-detail {
		width: 100%;
		height: 100%;
		background: #fff;
	}

	/* 发布者信息 */
	div.pro-item>.item-detail>.item-img {
		width: 240px;
		height: 70px;
		/* border:1px solid yellow; */
	}

	div.pro-item>.item-detail>.item-img>.img-icon {
		width: 40px;
		height: 40px;
		margin: 15px 10px;
		border-radius: 50%;
		float: left;
	}

	div.pro-item>.item-detail>.item-img>.item-name {
		width: 150px;
		height: 70px;
		text-align: left;
		float: left;
		padding: 10px;
	}

	div.pro-item>.item-detail>.item-img>span {
		margin: 10px auto;
	}

	div.pro-item>.item-detail>.item-img>.img-icon>img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	/* 商品展示 */
	div.pro-item>.item-detail>.product {
		width: 240px;
		height: 256px;
		margin: 0 auto;
		/* border: 1px solid yellow; */
	}

	div.pro-item>.item-detail>.product>.pro-text {
		width: 240px;
		height: 40px;
		font-size: 12px;
		line-height: 40px;
		padding: 0 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		/*以省略号...显示*/
		-webkit-line-clamp: 2;
		/* 换行 */
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	/* 商品图片 */
	.product-img {
		width: 240px;
		height: 200px;
		margin: 0 auto;
		padding-top: 10px;
	}

	.product-img>img {
		width: 100%;
		height: 100%;
	}

	/* 底部价格以及位置 */
	.pro-price {
		margin: 10px auto;
		/* border: 1px solid red; */
		width: 240px;
		height: 40px;
	}
</style>
