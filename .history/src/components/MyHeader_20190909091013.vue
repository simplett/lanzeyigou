<template>
   <div class="nav-top">
    <el-row>
        <el-col :span="12">
      <!-- 左部分导航栏 -->
      <!-- mode属性将导航栏水平模式显示 -->
        <el-menu class="el-menu-demo" mode="horizontal" background-color="#e5e5e5"
         text-color="#000" active-text-color="#00f">
            <el-menu-item index="5" style="margin-left:100px;">
                <a href="javascript:;">首页</a>
            </el-menu-item>
            <el-menu-item index="2">
                <a href="#" @click="ShowDiv('MyDiv','fade')" id="Button1">请登录...</a>
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
	<reg-login/>
    </div>
</template>
<script>
import RegLogin from './RegLogin.vue'
export default {
    data() {
      return {
	  }
    },
    methods: {
     
			
			
	},
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
		// this.change();
		// this.checklog();
	},
	created() {

	},
	components:{
		RegLogin
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