<template>
	<div class="nav-top">
		<el-row>
			<el-col :span="12">
				<!-- 左部分导航栏 -->
				<!-- mode属性将导航栏水平模式显示 -->
				<el-menu class="el-menu-demo" mode="horizontal" background-color="#e5e5e5" text-color="#000" active-text-color="#00f">
					<el-menu-item index="5" style="margin-left:100px;">
						<a @click="ToIndex()">首页</a>
					</el-menu-item>
					<!-- <el-menu-item index="2">
						<a href="#">请登录...</a>
					</el-menu-item> -->
					<el-menu-item index="2">
						<a href="#" @click="getUserCenter()">个人中心</a>
					</el-menu-item>
					<el-dropdown>
						<span class="el-dropdown-link">
							<!-- 点击之后显示消息的上下箭头图标交换 -->
							消息中心<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>平台消息通知</el-dropdown-item>
							<el-dropdown-item>买家联系</el-dropdown-item>
							<el-dropdown-item>卖家联系</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-menu>
			</el-col>
			<el-col :span="12">
				<!-- 右部分导航栏 -->
				<el-menu class="el-menu-demo1" mode="horizontal" @select="handleSelect" background-color="#e5e5e5" text-color="#000"
				 active-text-color="#00f">
					<el-dropdown>
						<span class="el-dropdown-link">
							我的蓝沢<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>待处理订单</el-dropdown-item>
							<el-dropdown-item>返修退货订单</el-dropdown-item>
							<el-dropdown-item>降价商品</el-dropdown-item>
							<el-dropdown-item>我的积分</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<el-dropdown>
						<span class="el-dropdown-link">
							联系客服
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1805549914&amp;site=qq&amp;menu=yes">QQ联系丁瑞</a></el-dropdown-item>
							<el-dropdown-item><a href="mailto:1805549914@qq.com">邮箱联系我们</a></el-dropdown-item>
							<el-dropdown-item><a href="tel:18214594484">拨号</a></el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<el-menu-item index="4" style="margin-left:100px;" @click="getUserCenter()">收藏夹</el-menu-item>
					<el-dropdown style="margin-right:100px">
						<span class="el-dropdown-link">
							蓝沢帮助<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>网站介绍</el-dropdown-item>
							<el-dropdown-item>关注卖家</el-dropdown-item>
							<el-dropdown-item>商品资讯</el-dropdown-item>
							<el-dropdown-item>平台招商</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-menu>
			</el-col>
		</el-row>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
			};
		},
		methods: {
			ToIndex() {
				this.$router.push("/")
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			getUserCenter() {
				var token = localStorage.getItem("token");
				if (token) {
					this.$router.push("/usercenter");
					var params = {
						token
					};
					var url = "/Login"
					this.axios
						.get(url, {
							params
						})
						.then(result => {
							console.log("###################################这是登陆之后的数据", result.data);
							this.Status2 = result.data.status;
							if (this.Status2 === 1) {
								var mytoken=result.data.token;
									this.$store.commit("SAVE_USERINFO", mytoken);
								this.$router.push("/usercenter");
							} else {
								this.$notify({
									title: '失败',
									message: '请您先登陆',
									type: 'warning'
								});
							}
						});
				} else {
					this.$notify({
						title: '失败',
						message: '请您先登陆',
						type: 'warning'
					});
				}

			}
		},
		created() {
			window.addEventListener('beforeunload', e => {
				var c = this.$store.state.shoucanlist;
				console.log(c, "这是我们关闭的数据######################################%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
				localStorage.setItem('shoucanlist', c);
			});
		}
	}
</script>
<style scoped>
	.nav-top {
		width: 100%;
		min-width: 1250px;
		background-color: #f5f5f5;
	}

	.el-col {
		background-color: #f5f5f5;
	}
	.el-menu{
		border: 0!important;
	}

	.el-menu-demo,
	.el-menu-demo>.el-menu-item,
	.el-menu-demo>.el-menu,
	.el-menu-demo1,
	.el-menu-demo1>.el-menu-item,
	.el-menu-demo1>.el-menu {
		height: 30px;
		line-height: 30px;
		text-align: center;
		vertical-align: -webkit-baseline-middle;
		background-color: #f5f5f5!important;
		
	}
	.el-menu-item{
		background-color: #f5f5f5!important;
	}
	.el-menu-demo {
		float: left;
	}

	.el-menu-demo1 {
		float: right;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #000;
		font-size: 14px;
		padding: 0 20px;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}
</style>
