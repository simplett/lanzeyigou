<template>
	<div>
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
		<reg-login/>
	</div>
</template>

<script>
import RegLogin from './RegLogin.vue'
	export default {
		data() {
			return {};
		},
		components:{
			RegLogin
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

	.login {
		width: 40px;
		height: 100%;
		float: right;
		background: #000000;
		/* border: 1px solid red; */
		/* margin-top: 200px; */
		/* position: relative; */
		z-index: 5;
		position: fixed;
		top: 0px;
		right: 1px;
	}

	.login-img {
		width: 40px;
		height: 40px;
		background: red;
	}

	.login-img>a>img,
	.login-img2>a>img {
		width: 100%;
		height: 100%;
	}
</style>
