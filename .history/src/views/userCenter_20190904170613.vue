<template>
<div>
    <my-header/>
    <!-- 搜索 -->
    <search/>
    <!-- 个人中心 -->
    <div class="bg-green">
        <div class="p-c-body">
            <div class="person-list">
				<ul class="nav nav-tabs pt-4">
				<!-- 个人中心 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab1">
						<img src="../../public/images/usercenter/fangzi.png" alt="">个人中心</a>
					</li>
				<!-- 收藏 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link " href="#tab2"><img src="../../public/images/usercenter/shoucang.png" alt="">收藏</a>
					</li>
				<!-- 关注 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab3"><img src="../../public/images/usercenter/shoucang.png" alt="">关注</a>
					</li>
				<!-- 聊天 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab4"><img src="../../public/images/usercenter/liaotian.png" alt="">聊天</a>
					</li>
				<!-- 评论 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab5"><img src="../../public/images/usercenter/pinglun.png" alt="">评论</a>
					</li>
				<!-- 账号中心 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab6"><img src="../../public/images/usercenter/zhanghao.png" alt="">交易记录</a>
					</li>
				</ul>
            </div>
			<div class="tab-content">
				<!-- 个人中心 -->
                <div id="tab1" class="tab-pane active">
                   <personcenter/>
                </div>
                <div id="tab2" class="tab-pane">
                    <div class="intro pt-3">
					</div>
                    <div class="hero">
                        <img src="黑寡妇.jpg" alt="">
                    </div>


                </div>
                <div id="tab3" class="tab-pane">
                    <div class="intro pt-3">
					</div>
                    <div class="hero">
                        <img src="奇异博士.jpg" alt="">
                    </div>

                </div>
                <div id="tab4" class="tab-pane">
                    <div class="intro pt-3">
                        
                    </div>
                    <div class="hero">
                        <img src="美国队长.jpg" alt="">
                    </div>

                </div>
                <div id="tab5" class="tab-pane">
                    <div class="intro pt-3">
                        <span>《雷神》（Thor）是漫威影业出品的一部科幻动作电影，取材自漫威漫画，是漫威电影宇宙的第四部电影。由肯尼思·布拉纳执导，克里斯·海姆斯沃斯，汤姆·希德勒斯顿，娜塔丽·波特曼等主演。影片讲述了被放逐到地球的索尔·奥丁森学习如何成为一个真正英雄的故事。 </span>
                    </div>
                    <div class="hero">
                        <img src="雷神.jpg" alt="">
                    </div>

                </div>
                <div id="tab6" class="tab-pane">
                    <div class="intro pt-3">
                    </div>
                    <div class="hero">
                        <img src="绿巨人.jpg" alt="">
                    </div>

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
							<el-input v-model="input" placeholder="请输入内容"></el-input><i class="el-icon-edit"></i>	
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
            <!-- </div> -->
			<!-- 广告 -->
            <div class="p-c-body-gg">

            </div>
			<!-- 内容 -->
            <div class="content">
				<!-- 个人中心 -->
				
				<!-- 关注 -->
				<!-- <collect/> -->
				<Comment/>
            </div>
        </div>
	</div>
</div>
</template>

<script>
	import search from "../components/search.vue"
	import collect from "../components/collect.vue"
	import Comment from "../components/Comment.vue"
	export default {
        data(){
            return {
				activeName: '1',
				input: ''
            };
        },
         methods: {
            
        },
        components:{
            search,collect,Comment
        }
    }
</script>
<style scoped>
.bg-green{
    width:100%;
    height:177px;
    background:#ccffcc;
    position:relative;
}
.p-c-body{
    width:1180px;
    /* // height:500px; */
    margin:0 auto;
    /* // border:1px solid red; */
}
.person-list{
    width:22%;
    height:700px;
    float:left;
    background:#f5f5f5;
    border:1px solid #c0c0c0;
    /* // margin-top:-50px; */
}
.person-msg{
    width:55%;
    height:177px;
    float:left;
    /* // border:1px solid green; */
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
    /* // border:1px solid yellow; */
    padding-left:10px;
}
.intro-img-msg{
    width:50%;
    height:177px;
    float:left;
    /* // border:1px solid #fcc; */
}
.intro-pho-em{
    width:50%;
    height:177px;
    float:right;
    /* // border:1px solid #fcc;     */
}
.intro-img{
    width:136px;
    height:136px;
    float:left;  
    margin-left:10px;
    margin-top:20px;
    /* // background:#bfbfbf; */
}
.intro-img img{
    width:100%;
    height:100%;
    /* // border:1px solid red;  */
    /* border-radius:50%;  */
}
.intro-msg{
    width:50%;
    height:177px;
    float:right;
    /* // border:1px solid #ccf; */
    padding-top:45px;
}
.pho-em{
    width:60%;
    height:177px;
    margin:0 auto;
    /* // boder:1px solid red; */
    
}
.el-input--suffix .el-input__inner {
    padding-right: 30px;
    border: 0px;
    background: #f2f2f2;
}
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
.el-input__inner{
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
.nav-item{
	padding-left:0px;
	border-bottom:1px solid #c0c0c0;
	height:72px;
	line-height:72px;
}
.nav-link{
	padding-left:0px;
	padding-bottom:0px;
	float:left;
}
.nav-link>img{
	width:24px;
	height:24px;
	margin-right:10px;
}
a{
	color:#000000;
	font-size:22px;
	/* margin-left:10px; */
}
.nav-tabs .nav-link.active, 
.nav-tabs .nav-link.hover, 
.nav-tabs .nav-item.show .nav-link{
	color:#000000;
	/* background:#f2f2f2; */
	border:0px;
}
</style>
