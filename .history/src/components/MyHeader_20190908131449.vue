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
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
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