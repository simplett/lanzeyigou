<template>
	<div>
		<!-- 页面右边登录div -->
		<div class="right">
			<div class="login-div">
				<a class=" btn btn-danger" href="javascript:;" @click="ShowDiv('MyDiv','fade')" id="Button1">登录</a><br>
				<a href="javascript:;" @click="getUserCenter"  class="chat btn btn-danger">聊天</a><br>
				<a href="javascript:;" @click="getUserCenter" class="pb btn btn-danger">发布</a><br>
				<a href="javascript:;" @click="getUserCenter" class="pc btn btn-danger">个人中心</a>
			</div>
			<button class="login">...</button>
		</div>

		<!-- <div class="login-img">
				<a href="javascript:;" @click="ShowDiv(' ','fade')">
					<img src="../../public/images/登录.png" alt />
				</a>
			</div>
			<div class="login-img2">
				<a href="javascript:;">
					<img src="../../public/images/收藏夹.png" alt />收藏夹
				</a>
			</div> -->
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
								<input class="input" type="text" v-model="yzm" placeholder="邮箱验证码" />
								<span class="e-check" @click="check">获取验证码</span>
								<input class="input" type="password" v-model="upwd" placeholder="密码  6-20个字母、数字、下划线" />
								<button @click="reg()">注册</button>
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
								<button @click="login()">登录</button>
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
				uname: "", //自动添加了kwords()来监视kwords的变化
				upwd: "",
				upwd1: "",
				email: "",
				emails: "",
				placeholder: "输入搜索关键词",
				code: 0, //注册正则验证时候的状态码
				Status1: "", //注册时服务器返回的状态
				Status2: "", //登录时服务器返回的状态
				yzm: "" //邮箱验证时服务器返回的验证码
			};
		},
		methods: {
			getUserCenter(){
				this.$router.push("/usercenter");
			},
			//验证用户是否登录
			checklog() {
				console.log("#####################正在测试当前用户的登陆状态");
				var token = localStorage.getItem("token");
				console.log("####################token", token);
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
				var url = "/M";

				if (regemail.test(email)) {
					var params = {
						email
					};
					console.log(email);

					//1获取xhr对象
					var xhr = new XMLHttpRequest();
					console.log(xhr);
					//4监听
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4 && xhr.status == 200) {
							//接收响应数据
							var result = xhr.responseText;
							console.log(result);

						}
					}

					//2创建请求
					xhr.open('get', 'http://10.1.180.146:10086/M?email=' + email, true);
					//3发送请求
					xhr.send(null);
				} else {
					this.code = 2;
				}
				// this.code = 0;
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
						console.log("###################################这是登陆之后的数据", result.data);
						this.Status2 = result.data.status;
						if (this.Status2 === 1) {
							console.log(111);
							alert("状态1");
							var token = result.data.token;
							// var guanzhu=result.data;
							var shoucan = result.data.su_data;
							console.log("这是收藏 的数据", shoucan)
							// if (token !== "") {
							//   this.$store.commit("SAVE_USERINFO", token);
							// }
							this.$store.commit("SAVE_USERINFO", token);
							// this.$store.commit("SAVE_GUANZHU", guanzhu);
							if (shoucan) {
								console.log("这是收藏有数据");
								this.$store.commit("SAVE_SHOUCAN", shoucan);
							} else {
								console.log("这是收藏没有数据");
								var init = undefined;
								this.$store.commit("SAVE_SHOUCANINIT", init);
							}
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
					message: uname + '!您好，您已经成功注册了蓝泽易购',
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
					yzm = this.yzm,
					reguname = /^[a-z1-9]{8,12}$/,
					regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
					regchecking = /^\w{6}$/,
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
				if (!regchecking.test(yzm)) {
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
					yzm
				}; //ES6标准，可以简写
				this.axios.get(url, {
					params
				}).then(result => {
					//当status改变的时候，自动触发对应的函数
					this.Status1 = result.data.status;
					if (this.Status1 == 1) {
						var token = result.data.token;
						// var guanzhu=result.data;
						// var shoucan=result.data;
						// if (token !== "") {
						//   this.$store.commit("SAVE_USERINFO", token);
						// }
						this.$store.commit("SAVE_USERINFO", token);
						// this.$store.commit("SAVE_GUANZHU", token);
						var init = undefined;
						this.$store.commit("SAVE_SHOUCANINIT", init);

						this.open3(this.uname);
						this.closeDiv();
						console.log("#######################################这是用户注册成功之后的数据", result);
						// console.log(this.$store.state.userinfo);//打印出vueX里面的数据
					} else {
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
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

	/* 	@import url("../assets/login.css"); */
	* {
		box-sizing: border-box;
	}

	/* body {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
} */
	body {
		background: #f5f5f5;
	}

	h1 {
		font-weight: bold;
		margin: 0;
	}

	h2 {
		text-align: center;
	}

	p {
		font-size: 14px;
		font-weight: 100;
		line-height: 20px;
		letter-spacing: 0.5px;
		margin: 20px 0 30px;
	}

	.e-check {
		font-size: 16px;
		cursor: pointer;
		margin-top: -45px;
		margin-left: 180px;
		margin-bottom: 20px;
		color: #84848a;
	}

	.e-check:hover {
		color: #ff4b2b;
	}

	a {
		color: #666666;
		font-size: 12px;
		text-decoration: none;
		margin: 15px 0;
	}

	a:hover {
		text-decoration: none;
		/* font-size:16px; */
		color: #000;
	}

	button {
		border-radius: 20px;
		border: 1px solid #ff4b2b;
		background-color: #ff4b2b;
		color: #ffffff;
		font-size: 12px;
		font-weight: bold;
		padding: 12px 45px;
		letter-spacing: 1px;
		text-transform: uppercase;
		transition: transform 80ms ease-in;
		margin-top: 5px;
	}

	button:active {
		transform: scale(0.95);
	}

	button:focus {
		outline: none;
	}

	button.ghost {
		background-color: transparent;
		border-color: #ffffff;
	}

	form {
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 50px;
		height: 100%;
		text-align: center;
	}

	.input {
		background-color: #eee;
		border: none;
		padding: 12px 15px;
		margin: 10px 0;
		width: 100%;
		font-size: 16px;
		color: rgb(78, 76, 76);
		/* height:30px; */
	}

	.input:focus {
		outline: none;
	}

	.input::-webkit-input-placeholder {
		/* placeholder颜色  */
		color: #aab2bd;
		/* placeholder字体大小  */
		font-size: 16px;
		/* placeholder位置  */
		text-align: left;
	}

	.container {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
		overflow: hidden;
		position: fixed;
		width: 788px;
		height: 543px;
		left: 50%;
		top: 50%;
		margin-left: -394px;
		margin-top: -271px;
	}

	.closeDiv {
		position: fixed;
		width: 80px;
		height: 10px;
		line-height: 10px;
		left: 50%;
		top: 50%;
		margin-left: 394px;
		margin-top: -285px;
		cursor: pointer;
	}

	.form-container {
		position: absolute;
		top: 0;
		height: 100%;
		transition: all 0.6s ease-in-out;
	}

	.sign-in-container {
		left: 0;
		width: 50%;
		z-index: 2;
	}

	.container.right-panel-active .sign-in-container {
		transform: translateX(100%);
	}

	.sign-up-container {
		left: 0;
		width: 50%;
		opacity: 0;
		z-index: 1;
	}

	.container.right-panel-active .sign-up-container {
		transform: translateX(100%);
		opacity: 1;
		z-index: 5;
		animation: show 0.6s;
	}

	@keyframes show {

		0%,
		49.99% {
			opacity: 0;
			z-index: 1;
		}

		50%,
		100% {
			opacity: 1;
			z-index: 5;
		}
	}

	.overlay-container {
		position: absolute;
		top: 0;
		left: 50%;
		width: 50%;
		height: 100%;
		overflow: hidden;
		transition: transform 0.6s ease-in-out;
		z-index: 100;
	}

	.container.right-panel-active .overlay-container {
		transform: translateX(-100%);
	}

	.overlay {
		background: #ff416c;
		background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
		background: linear-gradient(to right, #ff4b2b, #ff416c);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 0;
		color: #ffffff;
		position: relative;
		left: -100%;
		height: 100%;
		width: 200%;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.container.right-panel-active .overlay {
		transform: translateX(50%);
	}

	.overlay-panel {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 40px;
		text-align: center;
		top: 0;
		height: 100%;
		width: 50%;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.overlay-left {
		transform: translateX(-20%);
	}

	.container.right-panel-active .overlay-left {
		transform: translateX(0);
	}

	.overlay-right {
		right: 0;
		transform: translateX(0);
	}

	.container.right-panel-active .overlay-right {
		transform: translateX(20%);
	}

	.social-container {
		margin: 20px 0;
	}

	.social-container a {
		border: 1px solid #dddddd;
		border-radius: 50%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin: 0 5px;
		height: 40px;
		width: 40px;
	}

	.black_overlay {
		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 1001;
		-moz-opacity: 0.8;
		opacity: 0.5;
		filter: alpha(opacity=80);
	}

	.white_content {
		top: 0px;
		left: 0px;
		z-index: 1002;
		overflow: hidden;
		position: fixed;
	}

	#move>span {
		margin-right: 30px;
		color: #fff;
	}
	.right{
		width:100px;
		height:200px;
		/* border: 1px solid red; */
		z-index: 5;
		position: fixed;
		top: 60%;
		right: 200px;
	}
	.login {
		width: 50px;
		height: 50px;
		float: top;
		background: #000000;
		/* border: 1px solid red; */
		/* margin-top: 200px; */
		/* position: relative; */
		color: #FFFFFF;
		border-radius: 50%;
		position: relative;
		padding: 0;
		border: 0;
		font-size: 20px;
		line-height: 40px;
	}

	.login-div {
		width:120%;
		height:230px;
		float: top;
		/* border: 1px solid #000000; */
		border-radius: 5px;
		background:white;
		box-shadow:10px 10px 5px #666666;
	}
	#Button1,.chat,.pb,.pc{
		font-size: 16px;
		margin-bottom: 10px;
		margin-top: 10px;
	}
	.btn-danger{
		color:#ffffff;
	}
</style>
