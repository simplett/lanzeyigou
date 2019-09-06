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
					<li>
						<a @click="tabshow(c1)">
						<img src="../../public/images/usercenter/fangzi.png" alt="">个人中心</a>
					</li>
				<!-- 收藏 -->
					<li>
						<a @click="tabshow(c2)">
							<img src="../../public/images/usercenter/shoucang.png" alt="">收藏</a>
					</li>
				<!-- 关注 -->
					<li>
						<a @click="tabshow(c3)">
							<img src="../../public/images/usercenter/shoucang.png" alt="">关注</a>
					</li>
				<!-- 聊天 -->
					<li>
						<a @click="tabshow(c4)">
							<img src="../../public/images/usercenter/liaotian.png" alt="">聊天</a>
					</li>
				<!-- 评论 -->
					<li>
						<a @click="tabshow(c5)">
							<img src="../../public/images/usercenter/pinglun.png" alt="">评论</a>
					</li>
				<!-- 交易记录 -->
					<li>
						<a>
							<img src="../../public/images/usercenter/zhanghao.png" alt="">交易记录</a>
					</li>
					<ul class="trad-re">
						<li @click="tabshow(c6)">已购商品</li>
						<li @click="tabshow(c7)">发布商品</li>
					</ul>
				</ul>
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
                            <li><p>123</p></li>
                            <li><img src="" alt=""><p>绑定手机</p></li>
                            <li><p>123</p></li>
                            <li><img src="" alt=""><p>绑定邮箱</p></li>
                        </ul>
                    </div>
                </div>
            </div>
			<!-- 广告 -->
            <div class="p-c-body-gg">
				<img src="../../public/images/首页页头背景.jpg" alt="">
            </div>
			<!-- 内容 -->
			<div :is="contentView" class="content">
			
            </div>

        </div>
	</div>
</div>
</template>

<script>
	import search from "../components/search.vue"
	import c1 from "../components/personcenter.vue"
	import c2 from "../components/collect.vue"
	import c5 from "../components/Comment.vue"
	import c6 from "../components/boughtgoods.vue"
	export default {
        data(){
            return {
				activeName: '1',
				input: '',
				c1:'c1',
				c2:'c2',
				c5:'c5',
				c6:'c6',
				contentView:'c1'
            };
        },
         methods: {
            tabshow(tabItem){
				this.contentView = tabItem;
			}
        },
        components:{
            search,c1,c2,c5,c6
        }
    }
</script>
<style lang="stylus" scoped>

</style>>
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
    /* border:1px solid red; */
}
.content{
    width:75%;
    height:500px;
    float:left;
    /* border:1px solid red; */
    padding-left:10px;
	/* margin:0 auto; */
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
    width:90%;
    height:177px;
    margin:0 auto;
    /* // boder:1px solid red; */
    
}
.pho-em>ul{
	height:177px;
	width:100%;
}
.pho-em>ul>li{
	/* width:50%; */
	height:25%;
	padding:0px;
	/* border:1px solid red; */
	border:0;
}
.pho-em>ul>li>img{
	width:20px;
	height:20px;
	/* border:1px solid red; */
	float:left;
	margin-left:25px;
	margin-top:10px;
}
.pho-em>ul>li>p{
	width:80%;
	height:40px;
	padding:0;
	margin:0;
	line-height:40px;
	text-align: center;
}
.el-input--suffix .el-input__inner {
    padding-right: 30px;
    border: 0px;
    background-color: #f2f2f2;
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
}
.nav-tabs{
	border-bottom:0;
}
</style>
