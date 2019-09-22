<template>
	<div>
		<my-header />
		<!-- 搜索 -->
		<search />
		<!-- 用户介绍 -->
		<div class="y-intro">
			<!-- 头像、签名、诚信度 -->
			<div class="y-div">
				<div class="y-photo">
					<img :src="userdata.image" alt="">
				</div>
				<div class="y-q-c">
					<p class="text-left">昵称{{userdata.nickname}}</p>
					<p class="text-left">诚信分{{userdata.credit}}</p>
					<div class="y-q-q">
						<p class="text-left">个人签名:{{userdata.description}}</p>
					</div>
				</div>
			</div>
			<!-- 商品 -->
			<div class="product-state">
				<div class="product-state-a">
					<a href="javascript:;" class="btn btn-danger">我的商品</a>
				</div>
				<div class="row justify-content-between">
					<div class="content" v-for="(item,i) of user_pid" :key="i">
						<delproduct_usercenter :pid="item" :image="userdata.image" :nickname="userdata.nickname"></delproduct_usercenter>
					</div>
				</div>

			</div>
		</div>
		<reg-login />
		<my-foot />
		
	</div>
</template>

<script>
	// import search from "../components/search.vue"
	// import a1 from "../components/personother/sellgoods.vue"
	import delproduct_usercenter from "../components/DelProduct_other.vue"

	export default {
		data() {
			return {
				user_pid: [],
				userdata: [],
				uid: "",
			}
		},
		methods: {

			open5() {
				this.$notify.error({
					title: '错误',
					message: '用户状态异常,正在使用模板用户数据'
				});
			},
			getRouterData() {
				// 只是改了query，其他都不变
				this.uid = this.$route.query.uid;
				console.log(this.uid);
			},
			GetUserData() {
				var url = "/Search";
				var uid = this.uid;
				var params = {
					uid,
					type: "user"
				};
				if (uid) {
					this.axios.get(url, {
						params
					}).then(result => {
						console.log("########################################################这是其他用户中心的第一次成功数据请求", result);
						this.userdata = result.data;
					})
				} 
			},
			GetUserHot() {
				this.axios
					.get("/Search", {
						params: {
							type: "goodlist",
							uid: this.uid
						}
					}).then(result => {
						console.log("######################################################这是uid为uid的用户的其他商品", result.data.data);
						for (var item of result.data.data) {
							this.user_pid.push(item.pid);
						}
					})
			},

		},
		components: {
			delproduct_usercenter
		},
		created() {
			this.getRouterData(),
				this.GetUserData(),
				this.GetUserHot()
		}

	}
</script>
<style lang="stylus" scoped>
	.y-intro {
		width: 1180px;
		height: 100%;
		// border:1px solid red;
		margin: 0 auto;
		padding-top: 50px;
	}

	.y-div {
		width: 96%;
		height: 200px;
		border: 1px solid silver;
		margin: 0 auto;
		margin-bottom: 10px;
	}

	.y-photo {
		width: 180px;
		height: 180px;
		border: 1px solid yellow;
		float: left;
		margin-left: 100px;
		border-radius: 50%;
		margin-top: 10px;
	}

	.y-photo img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.y-q-c {
		width: 400px;
		height: 200px;
		// border:1px solid purple;
		float: left;
		margin-left: 50px;
	}

	.y-q-c p {
		width: 40%;
		height: 40px;
		// border:1px solid red;
		float: left;
		margin-top: 50px;
		margin-right: 30px;
	}

	.y-q-q {
		width: 100%;
		height: 88px;
		// border:1px solid red;
		float: left;
	}

	.y-q-q p {
		padding: 0;
		margin: 0 auto;
	}

	.product-state {
		width: 90%;
		height: 130%;
		overflow: hidden;
		margin: 0 auto;
		// border:1px solid red;
		// background: #f2f2f2;
		padding-top: 10px;
	}

	.product-state-a {
		width: 100%;
		height: 60px;
		// padding-left: 10px;
		margin-top: 30px;
		// border:1px solid green;
	}

	.product-state-a a {
		color: #ffffff;
		font-size: 20px;
		border: 0;
		width: 150px;
		height: 60px;
		line-height: 60px;
		padding: 0;
		float: left;
		margin-right: 50px;
	}

	.content {
		width: 23%;
		height: 400px;
		// border:1px solid red;
		// padding-left: 95px;
		margin-right:10px;
		margin-left:10px;
	}
</style>
