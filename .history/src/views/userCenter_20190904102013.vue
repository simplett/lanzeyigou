<template>
<div>
    <my-header/>
    <!-- 搜索 -->
    <search/>
    <!-- 个人中心 -->
    <div class="bg-green">
        <div class="p-c-body">
            <div class="person-list">
                <!-- 个人中心 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/fangzi.png" alt="">
                    <p @click="show(1)">个人中心</p>
              </div>
              <!-- 收藏 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/shoucang.png" alt="">
                    <p @click="show(2)">收藏</p>
              </div>
              <!-- 关注 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/shoucang.png" alt="">
                    <p @click="show(3)">关注</p>
              </div>
              <!-- 聊天 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/liaotian.png" alt="">
                    <p @click="show(4)">聊天</p>
              </div>
              <!-- 评论 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/pinglun.png" alt="">
                    <p @click="show(5)">评论</p>
              </div>
              <!-- 账号中心 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/zhanghao.png" alt="">
                    <p @click="show(6)">账号中心</p>
              </div>
            </div>
            <!-- 个人信息 -->
            <div class="person-msg">
                <!-- 左边的头像、用户姓名和个人介绍 -->
                <div class="intro-img-msg">
                    <!-- 头像 -->
                    <div class="intro-img">
                        <img src="../../public/images/喜欢小banner.png" alt="">
                    </div>
                    <!-- 姓名、介绍 -->
                    <div class="intro-msg">
                        <h3>丁晓瑞</h3>
						<div class="intro-input">
							<input type="text" placeholder="请输入">
							<i
								class="el-icon-edit el-input__icon"
								slot="suffix">
							</i>
						</div>
                        
                    </div>
                </div>
                <!-- 右边的电话号码和邮箱 -->
                <div class="intro-pho-em">
                    <div class="pho-em">
                        <ul>
                            <li><p></p></li>
                            <li><img src="" alt=""><p>绑定手机</p></li>
                            <li><p></p></li>
                            <li><img src="" alt=""><p>绑定邮箱</p></li>
                        </ul>
                    </div>
                </div>
            </div>
			<!-- 广告 -->
            <div class="p-c-body-gg">

            </div>
			<!-- 内容 -->
            <div class="content">
				<!-- 个人中心 -->
				<personcenter/>
				<!-- 关注 -->
				<focus/>
            </div>
        </div>
	</div>
</div>
</template>

<script>
	import search from "../components/search.vue"
	import focus from "../components/focus.vue"
	import personcenter from "../components/personcenter.vue"
	export default {
        data(){
            return {
                activeName: '1'
            };
        },
         methods: {
            
        },
        components:{
            search,focus,personcenter
        }
    }
</script>
<style lang="stylus">
.bg-green{
    width:100%;
    height:177px;
    background:#ccffcc;
    position:relative;
}
.p-c-body{
    width:1180px;
    // height:500px;
    margin:0 auto;
    // border:1px solid red;
}
.person-list{
    width:22%;
    height:700px;
    float:left;
    background:#f5f5f5;
    border:1px solid #c0c0c0;
    // margin-top:-50px;
}
.person-msg{
    width:55%;
    height:177px;
    float:left;
    // border:1px solid green;
    background:#f2f2f2;
}
.p-c-body-gg{
    width:20%;
    height:177px;
    float:left;
    border:1px solid red;
}
.content{
    width:75%;
    height:500px;
    float:left;
    // border:1px solid yellow;
    padding-left:10px;
}
.intro-img-msg{
    width:50%;
    height:177px;
    float:left;
    // border:1px solid #fcc;
}
.intro-pho-em{
    width:50%;
    height:177px;
    float:right;
    // border:1px solid #fcc;    
}
.intro-img{
    width:136px;
    height:136px;
    float:left;  
    margin-left:10px;
    margin-top:20px;
    // background:#bfbfbf;
}
.intro-img img{
    width:100%;
    height:100%;
    // border:1px solid red; 
    border-radius:50%; 
}
.intro-msg{
    width:50%;
    height:177px;
    float:right;
    // border:1px solid #ccf;
    padding-top:45px;
}
.pho-em{
    width:60%;
    height:177px;
    margin:0 auto;
    // boder:1px solid red;
    
}

.el-input--suffix .el-input__inner {
    padding-right: 30px;
    border: 0px;
    background: #f2f2f2;
}
.person-list-5{
    width:90%;
    height:72px;
    padding-top:30px;
    margin:0 auto;
    border-bottom:1px solid #c0c0c0;
}
.person-list-5>img,.person-list-5>p{
    float:left;
}
.person-list-5>img{
    width:24px;
    margin-right:20px;
}
.person-list-5>p{
    font-size:22px;
    padding:0;
    line-height:100%;
}
.tab-content{
	margin-top:20px;
}
.intro-input{
	width:200px;
	height:30px;
	margin-left:20px;
	margin-top:20px;
}
.intro-input input{
	width:100%;
	height:100%;
	border:0px;
	background:;
}
.intro-input i{
	margin-top:-40px;
}
</style>
