<template>
   <div class="nav-top">
    <el-row>
        <el-col :span="12">
      <!-- 左部分导航栏 -->
      <!-- mode属性将导航栏水平模式显示 -->
        <el-menu class="el-menu-demo" mode="horizontal" background-color="#e5e5e5"
         text-color="#000" active-text-color="#00f">
            <el-menu-item index="5" style="margin-left:100px;">
                <a href="javascript:;" @click="ShowDiv('MyDiv','fade')">首页</a>
            </el-menu-item>
            <el-menu-item index="2">
                <a href="#">请登录...</a>
            </el-menu-item>
            <el-menu-item index="3">
                <a href="#">免费注册</a>
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
        <el-menu class="el-menu-demo1" mode="horizontal"
            @select="handleSelect" background-color="#e5e5e5" text-color="#000"
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
                    <el-dropdown-item>客户</el-dropdown-item>
                    <el-dropdown-item>在线客服</el-dropdown-item>
                    <el-dropdown-item>资讯中心</el-dropdown-item>
                    <el-dropdown-item>电联客服</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-menu-item index="4" style="margin-left:100px;">收藏夹</el-menu-item>
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

	<!-- 页面右边登录div -->
		<div class="login">
			<div class="login-img">
				<a href="javascript:;" @click="ShowDiv('MyDiv','fade')" id="Button1">
					<img src="../../public/images/登录.png" alt />
				</a>
			</div>
			<div class="login-img2">
				<a href="javascript:;">
					<img src="../../public/images/收藏夹.png" alt />收藏夹
				</a>
			</div>
		</div>
		<!--弹出层时背景层DIV-->
		<div id="fade" class="black_overlay"></div>
		<div id="MyDiv" class="white_content">
			<div style="text-align: right; cursor: default;" id="move">
				<span style="font-size:16px;" class="closeDiv" @click="CloseDiv('MyDiv','fade')">稍后弹出?</span>
				<div>
					<div class="container" id="container">
						<div class="form-container sign-up-container">
							<form action="#">
								<h1>注册</h1>
								<!-- <div class="social-container">
                                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>-->
								<span>第三方账号注册</span>
								<input class="input" type="text" v-model="uname" value placeholder="用户名  8~12位字母或数字" />
								<input class="input" type="email" v-model="email" placeholder="邮箱" />
								<input class="input" type="text" v-model="checking" placeholder="邮箱验证码" />
								<span class="e-check" @click="check">获取验证码</span>
								<input class="input" type="password" v-model="upwd" placeholder="密码  6-20个字母、数字、下划线" />
								<button @click="reg">注册</button>
							</form>
						</div>
						<div class="form-container sign-in-container">
							<form action="#">
								<h1>登录</h1>
								<div class="social-container">
									<a href="#" class="social">
										<i class="fab fa-facebook-f"></i>
									</a>
									<a href="#" class="social">
										<i class="fab fa-google-plus-g"></i>
									</a>
									<a href="#" class="social">
										<i class="fab fa-linkedin-in"></i>
									</a>
								</div>
								<span>第三方账号登录</span>
								<input class="input" type="text" v-model="emails" placeholder="邮箱" />
								<input class="input" type="password" v-model="upwd" placeholder="密码" />
								<a href="#">忘记密码？</a>
								<button @click="login">登录</button>
							</form>
						</div>
						<div class="overlay-container">
							<div class="overlay">
								<div class="overlay-panel overlay-left">
									<h1>欢迎回来！</h1>
									<p>请您先登录的个人信息，进行操作。</p>
									<button class="ghost" id="signIn">登录</button>
								</div>
								<div class="overlay-panel overlay-right">
									<h1>你好朋友！</h1>
									<p>输入您的个人信息注册成为会员。</p>
									<button class="ghost" id="signUp">注册</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
		uname: "", //自动添加了kwords()来监视kwords的变化
		upwd: "",
		upwd1: "",
		email: "",
		emails: "",
		placeholder: "输入搜索关键词",
		code: 0, //注册正则验证时候的状态码
		Status1: "", //注册时服务器返回的状态
		Status2: "", //登录时服务器返回的状态
		checking: "" //邮箱验证时服务器返回的验证码
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
	  },
	  //验证用户是否登录
			checklog() {
				console.log("#####################正在测试当前用户的登陆状态");
				var token = localStorage.getItem("token");
				console.log("####################token",token);
				if (!token) {
					this.ShowDiv('MyDiv', 'fade')
				} else {
					this.CloseDiv('MyDiv', 'fade')
				}
				// var search = "name=";
				// var begin = document.cookie.indexOf(search);
				// if (begin != -1) {
				// 	begin += search.length;
				// 	end = document.cookie.indexOf(";", begin);
				// 	if (end == -1) {
				// 		end = document.cookie.length;
				// 	}
				// 	document.getElementById("pageNameD").innerHTML = "<h1>对不起，" + document.cookie.substring(begin, end) +
				// 		".您已经登录。</h1>"
				// 	document.all.pageName.style.display = 'none'
				// } else {
				// 	alert("未登录");
				// }
			},
			// 弹出隐藏层
			ShowDiv(show_div, bg_div) {
				document.getElementById(show_div).style.display = "block";
				document.getElementById(bg_div).style.display = "block";
				var bgdiv = document.getElementById(bg_div);
				bgdiv.style.width = document.body.scrollWidth;
				// bgdiv.style.height = $(document).height();
				$("#" + bg_div).height($(document).height());
			},
			//关闭弹出层
			CloseDiv(show_div, bg_div) {
				document.getElementById(show_div).style.display = "none";
				document.getElementById(bg_div).style.display = "none";
			},
			check() {
				console.log(this.email);
				var regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				var email = this.email;
				var url = "Mail";
				var params = {
					email
				};
				if (regemail.test(email)) {
					console.log(email);
					this.axios.get(url, {
						params
					});
				} else {
					this.code = 2;
				}
				this.code = 0;
			},
			//登录的方法
			login() {
				var email = this.emails;
				var pwd = this.$md5(this.upwd);
				var url = "/Login";
				var params = {
					email,
					pwd
				};
				this.axios
					.get(url, {
						params
					})
					.then(result => {
						console.log("###################################这是登陆之后的数据",result);
						this.Status2 = result.data.status;
						if (this.Status2 === 1) {
							console.log(111);
							alert("状态1");
							var token=result.data.token;
							this.$store.commit("SAVE_USERINFO", token);
							this.CloseDiv('MyDiv', 'fade');
							
						}
						if (this.Status2 === 4) {
							console.log(444);
							alert("状态4");
						}
						if (this.Status2 === 5) {
							console.log(555);
							alert("状态5");
						}
					});
			},
			//登录与注册切换时的动画
			change() {
				const signUpButton = document.getElementById("signUp");
				const signInButton = document.getElementById("signIn");
				const container = document.getElementById("container");
				signUpButton.addEventListener("click", () => {
					container.classList.add("right-panel-active");
				});
				signInButton.addEventListener("click", () => {
					container.classList.remove("right-panel-active");
				});
			},
			open3(uname) {
				this.$notify({
					title: '成功',
					message: uname+'!您好，您已经成功注册了蓝泽易购',
					type: 'success'
				});
				this.sengmsg = "";
			},
			open4() {
				this.$notify({
					title: '失败',
					message: '很抱歉，系统错误',
					type: 'warning'
				});
			},
			reg() {
				//正则表达式
				var name = this.uname,
					pwd = this.upwd,
					email = this.email,
					checking = this.checking,
					reguname = /^[a-z1-9]{8,12}$/,
					regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
					regchecking = /^\d{6}$/,
					regupwd = /^(\w){6,10}$/;
				//用户名是否输入合法
				console.log(name);
				if (!reguname.test(name)) {
					this.code = 1; //根据code的状态，使用watch来动态监视在哪一步验证出错，动态的做出调整
					return;
				}
				//邮箱号是否输入合法
				if (!regemail.test(email)) {
					this.code = 2;
					return;
				}
				//密码格式是否合法
				if (!regupwd.test(pwd)) {
					this.code = 3;
					return;
				}
				if (!regchecking.test(checking)) {
					this.code = 4;
					return;
				}
				//验证用户输入的第二次密码是否和第一次一样，第一次已经验证了格式，
				//所以第二次就不用验证了，通过就是格式和内容与第一次密码一致
				//如果不需要输入第二次密码，则不启用
				// if (upwd === this.upwd1) {
				// 	this.code = 4;
				// 	return;
				// }
				var url = "/Regist";
				var params = {
					name,
					pwd: this.$md5(pwd),
					email,
					checking
				}; //ES6标准，可以简写
				this.axios.get(url, {
					params
				}).then(result => {
					//当status改变的时候，自动触发对应的函数
					this.Status1 = result.data.status;
					if (this.Status1 == 1) {
						var token = result.data.token;
						// if (token !== "") {
						//   this.$store.commit("SAVE_USERINFO", token);
						// }
						this.$store.commit("SAVE_USERINFO", token);
						this.open3(this.uname);
						console.log("#######################################这是用户注册成功之后的数据",result);
						// console.log(this.$store.state.userinfo);//打印出vueX里面的数据
					}else{
						this.open4()
					}
				});
			}
		}, //ES6标准，可以简写
		watch: {
			code() {
				if (this.code == 1) {
					alert("用户名格式有误");
					// this.$router.push("list")
				}
				if (this.code == 2) {
					alert("邮箱格式有误");
				}
				if (this.code == 3) {
					alert("用户密码格式有误");
				}
				if (this.code == 4) {
					alert("验证码有误");
				}
				this.code = 0;
			},
			Status1() {
				// (this.Status1 == 1) ? this.$router.push("list"): alert("失败");T
				if (this.Status1 == 1) {
					console.log("成功");
					// this.$router.push("list");
				}
				if (this.Status1 == 2) {
					console.log("邮箱的验证码不对");
				}
				if (this.Status1 == 3) {
					console.log("邮箱占用");
				}
			},
			Status2() {
				this.Status2 == 1 ? alert("成功") : alert("失败");
			}
		},
		mounted() {
			this.change();
			this.checklog();
		},
		created() {

		}
    
}
</script>
<style scoped>
.nav-top{
    width:100%;
    min-width:1250px;
    background-color: #e5e5e5;
}
.el-col{
    background-color: #e5e5e5;
}
.el-menu-demo,
.el-menu-demo>.el-menu-item,
.el-menu-demo>.el-menu,
.el-menu-demo1,
.el-menu-demo1>.el-menu-item,
.el-menu-demo1>.el-menu{
  height:30px;
  line-height: 30px;
  text-align: center;
  vertical-align: -webkit-baseline-middle;
}
.el-menu-demo{
    float: left;
}
.el-menu-demo1{
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