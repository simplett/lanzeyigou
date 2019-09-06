<template>
		<div class="pro-item">
			<div class="item-detail">
				<div class="item-img">
					<div class="img-icon">
						<img :src="productlist.image">
					</div>
					<div class="item-name">
						<span style="font-size:14px;
                        color:#333;margin-top:20px;">{{productlist.nickname}}</span><br>
						<span style="color:#999;">关注量{{productlist.watched}}</span>
					</div>
				</div>
				<hr style="margin:0">
				<div class="product">
					<div class="pro-text">
						<span>{{productlist.pname}}</span>
					</div>
					<div class="product-img">
						<img :src="otherimage" />
					</div>
				</div>
				<div class="pro-price">
					<b>￥{{productlist.price}}</b>
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

			}
		},
		props: {
			productlist: {
				default: "111"
			},
			otherimage: {
				default: "111"
			}
		}
	}
</script>
<style scoped>
	div.pro-item {
		width: 280px;
		height: 379px;
		/* float: left; */
		margin-top: 20px;
		/* margin-right: 10px; */
	}
div.pro-item:hover{
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
		margin:0 auto;
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
