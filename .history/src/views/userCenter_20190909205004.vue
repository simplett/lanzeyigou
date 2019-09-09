<template>
	<div>
		<my-header />
		<!-- 搜索 -->
		<search />
		<!-- 个人中心 -->
		<div class="bg-green">
			<div class="p-c-body">
				<div class="person-list">
					<ul class="nav nav-tabs pt-4">
						<!-- 个人中心 -->
						<li>
							<a @click="tabshow(0)">
								<img src="../../public/images/usercenter/fangzi.png" alt="">个人中心</a>
						</li>
						<!-- 收藏 -->
						<li>
							<a @click="tabshow(1)">
								<img src="../../public/images/usercenter/shoucang.png" alt="">收藏</a>
						</li>
						<!-- 关注 -->
						<li>
							<a @click="tabshow(2)">
								<img src="../../public/images/usercenter/shoucang.png" alt="">关注</a>
						</li>
						<!-- 聊天 -->
						<li>
							<a @click="tabshow(3)">
								<img src="../../public/images/usercenter/liaotian.png" alt="">聊天</a>
						</li>
						<!-- 评论 -->
						<li>
							<a @click="tabshow(4)">
								<img src="../../public/images/usercenter/pinglun.png" alt="">评论</a>
						</li>
						<!-- 交易记录 -->
						<li>
							<a>
								<img src="../../public/images/usercenter/zhanghao.png" alt="">交易记录</a>
						</li>
						<ul class="trad-re">
							<li @click="tabshow(5)">已购商品</li>
							<li @click="tabshow(6)">发布商品</li>
						</ul>
					</ul>
				</div>
				<!-- 个人信息 -->
				<div class="person-msg">
					<!-- 左边的头像、用户姓名和个人介绍 -->
					<div class="intro-img-msg">
						<!-- 头像 -->
						<div class="intro-img">
							<img :src="userdata.image">
						</div>
						<!-- 姓名、介绍 -->
						<div class="intro-msg">
							<h3>{{userdata.nickname}}</h3>
							<div class="intro-input">
								<el-input v-model="input" :placeholder="userdata.description"></el-input><i class="el-icon-edit"></i>
							</div>

						</div>
					</div>
					<!-- 右边的电话号码和邮箱 -->
					<div class="intro-pho-em">
						<div class="pho-em">
							<ul>
								<li>
									<p>{{userdata.phone}}</p>
								</li>
								<li><img src="" alt="">
									<p>绑定手机</p>
								</li>
								<li>
									<p>{{userdata.email}}</p>
								</li>
								<li><img src="" alt="">
									<p>绑定邮箱</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- 广告 -->
				<div class="p-c-body-gg">
					<img src="../../public/images/首页页头背景.jpg" alt="">
				</div>
				<!-- 内容 -->
				<div :is="contentView" :description="input" :userdata="userdata" class="content">

				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import search from "../components/search.vue"
	import c1 from "../components/personcenter.vue"
	import c2 from "../components/collect.vue"
	import c3 from "../components/focus.vue"
	import c4 from "../components/Comment.vue"
	import c5 from "../components/boughtgoods.vue"
	import c6 from "../components/publishgoods.vue"
	import c7 from "../components/publishgoods.vue"
	export default {
		data() {
			return {
				sunuserdata: [
					[]
				],
				userdata: [],
				uid: "",
				activeName: '1',
				input: '',
				c1:'c1',
				c2:'c2',
				c3:'c3',
				c4:'c4',
				c5:'c5',
				c6:'c6',
				c7:'c7',
				contentView:'c1'
            };
        },
         methods: {
            tabshow(tabItem){
				this.contentView = tabItem;
				c: ["c1", "c2", "c3", "c4", "c5", "c6", "c7"],
				contentView:'c1'
			};
		},
		methods: {
			tabshow(number) {
				this.userdata = this.sunuserdata[number][0];
				this.contentView = this.c[number];

			},
			//请求用户的基本详细信息
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
						console.log("########################################################这是用户中心的第一次数据请求", result.data);
						this.userdata = result.data;
						this.sunuserdata[0][0] = result.data;
					})
				} else {
					this.open5()
				}

			},
			//获取C2的请求
			getC2() {
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
						console.log("########################################################这是用户中心的第一次数据请求", result.data);
						this.userdata = result.data;
						this.sunuserdata[1][0] = result.data;
					})
				}
			},
			//获取C3的请求
			getC3() {
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
						console.log("########################################################这是用户中心的第一次数据请求", result.data);
						this.userdata = result.data;
						this.sunuserdata[2][0] = result.data;
					})
				}
			},
			//获取C4的请求
			getC4() {
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
						console.log("########################################################这是用户中心的第一次数据请求", result.data);
						this.userdata = result.data;
						this.sunuserdata[3][0] = result.data;
					})
				}
			},
			//获取C5的请求
			getC5() {
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
						console.log("########################################################这是用户中心的第一次数据请求", result.data);
						this.userdata = result.data;
						this.sunuserdata[4][0] = result.data;
					})
				}
			},
			//获取C6的请求
			getC6() {
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
						console.log("########################################################这是用户中心的第一次数据请求", result.data);
						this.userdata = result.data;
						this.sunuserdata[5][0] = result.data;
					})
				}
			},
			//获取C7的请求
			getC7() {
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
						console.log("########################################################这是用户中心的第一次数据请求", result.data);
						this.userdata = result.data;
						this.sunuserdata[6][0] = result.data;
					})
				}
			},
			open5() {
				this.$notify.error({
					title: '错误',
					message: '用户状态异常'
				});
			},
			getRouterData() {
				// 只是改了query，其他都不变
				this.uid = this.$route.query.uid;
				console.log(this.uid);
			},
        },
        components:{
            search,c1,c2,c3,c4,c5,c6,c7
        },
		created(){
		},
		components: {
			search,
			c1,
			c2,
			c3,
			c4,
			c5,
			c6,
			c7
		},
		created() {
			this.getRouterData();
			this.GetUserData();
		}
	}
</script>
<style scoped>
	.bg-green {
		width: 100%;
		height: 177px;
		background: #ccffcc;
		position: relative;
	}

	.p-c-body {
		width: 1180px;
		/* // height:500px; */
		margin: 0 auto;
		/* // border:1px solid red; */
	}

	.person-list {
		width: 22%;
		height: 700px;
		float: left;
		background: #f5f5f5;
		border: 1px solid #c0c0c0;
		/* // margin-top:-50px; */
	}

	.person-msg {
		width: 55%;
		height: 177px;
		float: left;
		/* // border:1px solid green; */
		background: #f2f2f2;
	}

	.p-c-body-gg {
		width: 20%;
		height: 177px;
		float: left;
		/* border:1px solid red; */
	}

	.content {
		width: 75%;
		height: 500px;
		float: left;
		/* border:1px solid red; */
		padding-left: 10px;
		/* margin:0 auto; */
	}

	.intro-img-msg {
		width: 50%;
		height: 177px;
		float: left;
		/* // border:1px solid #fcc; */
	}

	.intro-pho-em {
		width: 50%;
		height: 177px;
		float: right;
		/* // border:1px solid #fcc;     */
	}

	.intro-img {
		width: 136px;
		height: 136px;
		float: left;
		margin-left: 10px;
		margin-top: 20px;
		/* // background:#bfbfbf; */
	}

	.intro-img img {
		width: 100%;
		height: 100%;
		/* // border:1px solid red;  */
		border-radius: 50%;
	}

	.intro-msg {
		width: 50%;
		height: 177px;
		float: right;
		/* // border:1px solid #ccf; */
		padding-top: 45px;
	}

	.pho-em {
		width: 90%;
		height: 177px;
		margin: 0 auto;
		/* // boder:1px solid red; */

	}

	.pho-em>ul {
		height: 177px;
		width: 100%;
	}

	.pho-em>ul>li {
		/* width:50%; */
		height: 25%;
		padding: 0px;
		/* border:1px solid red; */
		border: 0;
	}

	.pho-em>ul>li>img {
		width: 20px;
		height: 20px;
		/* border:1px solid red; */
		float: left;
		margin-left: 25px;
		margin-top: 10px;
	}

	.pho-em>ul>li>p {
		width: 80%;
		height: 40px;
		padding: 0;
		margin: 0;
		line-height: 40px;
		text-align: center;
	}

	/* .el-input--suffix .el-input__inner {
    padding-right: 30px;
    border: 0px;
    background-color: #f2f2f2;
} */
	/* .tab-content{
	margin-top:20px;
} */
.intro-input{
	width:150px;
	height:40px;
	/* // border:1px solid red; */
	margin-left:20px;
}
.el-input{
	width:85% !important;
	float:left;
}
.el-input>>>input{
	border:0 !important;
	background:#f2f2f2 !important;
}
.el-icon-edit:before{
	padding-top:15px;
}
.intro-input>el-input>[class*=" el-icon-"], [class^=el-icon-]{
	margin-top:10px;
}
.nav-tabs,.nav-item{
	width:90%;
	margin:0 auto;
}
li{
	padding-left:0px;
	border-bottom:1px solid #c0c0c0;
	height:75px;
	line-height:72px;
	width:100%;
}
li>a{
	padding-left:0px;
	padding-bottom:0px;
	float:left;
	font-weight:bold;
}
a>img{
	width:24px;
	height:24px;
	margin-right:10px;
}

a{
	color:#000000;
	font-size:22px;
	/* margin-left:10px; */
}
.nav-tabs a{
	border:0px;
	cursor: pointer;
}
.p-c-body-gg>img{
	height:100%;
	width:100%;
}
.trad-re{
	width:200px;
	height:80px;
	float: left;
	/* border: 1px solid red; */
	padding:0;
	/* border-bottom:0; */
}
.trad-re>li{
	width:70%;
	height:25px;
	/* margin-left:0; */
	line-height:25px;
	border-bottom:0;
	/* border:1px solid green; */
	margin-top:5px;
	/* float:left; */
	/* margin:0; */
	font-size:20px;
	cursor: pointer;
}
.nav-tabs{
	border-bottom:0;
}
</style>
=======
	.intro-input {
		width: 150px;
		height: 40px;
		/* // border:1px solid red; */
		margin-left: 20px;
	}

	.el-input {
		width: 85% !important;
		float: left;
	}

	.el-input>>>input {
		border: 0 !important;
		background: #f2f2f2 !important;
	}

	.el-icon-edit:before {
		padding-top: 15px;
	}

	.intro-input>el-input>[class*=" el-icon-"],
	[class^=el-icon-] {
		margin-top: 10px;
	}

	.nav-tabs,
	.nav-item {
		width: 90%;
		margin: 0 auto;
	}

	li {
		padding-left: 0px;
		border-bottom: 1px solid #c0c0c0;
		height: 75px;
		line-height: 72px;
		width: 100%;
	}

	li>a {
		padding-left: 0px;
		padding-bottom: 0px;
		float: left;
		font-weight: bold;
	}

	a>img {
		width: 24px;
		height: 24px;
		margin-right: 10px;
	}

	a {
		color: #000000;
		font-size: 22px;
		/* margin-left:10px; */
	}

	.nav-tabs a {
		border: 0px;
		cursor: pointer;
	}

	.p-c-body-gg>img {
		height: 100%;
		width: 100%;
	}

	.trad-re {
		width: 200px;
		height: 80px;
		float: left;
		/* border: 1px solid red; */
		padding: 0;
		/* border-bottom:0; */
	}

	.trad-re>li {
		width: 70%;
		height: 25px;
		/* margin-left:0; */
		line-height: 25px;
		border-bottom: 0;
		/* border:1px solid green; */
		margin-top: 5px;
		/* float:left; */
		/* margin:0; */
		font-size: 20px;
	}

	.nav-tabs {
		border-bottom: 0;
	}
</style>
>>>>>>> 0846d293d3a8271b204c8ce2e0377d99e144edc4
