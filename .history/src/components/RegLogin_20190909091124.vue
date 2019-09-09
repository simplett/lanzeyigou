<template>
	<div>
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
				
		},
		methods: {
			
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
</style>
