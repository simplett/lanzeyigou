<template>
<div>
	<div class="content-title">
		<div>
			<img src="../../public/images/usercenter/shoucang.png" alt="">
			<p>收藏</p>
		</div>
	</div>
	<div class="content-b">
		<el-container>
			<el-container>
				<!-- 侧边栏 -->
				<el-aside> 
					<!-- 姓名 -->
					<div class="chat-a"><p>丁小瑞</p></div>
					<!-- 聊天列表 -->
					<div class="chat-list-a">

					</div>
					<div class="chat-list">
						<!-- 聊天朋友列表 -->
						<div class="chat-list-b">
							<div class="list-img">
								<img class="list-i" src="../../public/images/usercenter/liaotian.png">
							</div>
							<div class="list-text">
								<p class="list-name">qwe</p>
								<p class="list-time">14:53</p>
							</div>
						</div>
					</div>
				</el-aside>
				<el-main>
					<!-- 信息框 -->
					<div class="chat-b"><p>小螺号</p></div>
					<div class="chat-msg">
						<div class="chat-msg-a">
							<img src="../../public/images/usercenter/liaotian.png">
							<div class="msg-list">

							</div>
						</div>
						<div class="chat-msg-b">
							<div class="msg-list"></div>
							<img src="../../public/images/usercenter/liaotian.png">
						</div>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.content-title{
    width:100%;
    height:60px;
    background:#c0c0c0;
	margin-top:10px;
}
.content-title>div{
    width:250px;
    height:100%;
    float:left;
}
.content-title>div>img{
    margin:20px;
    float:left;
    margin-left:30px; 
}
.content-title>div>p{
    font-size:26px;
    font-weight:bold;
    float:left;
    padding:0;
    line-height:60px;
}

.content-b{
    width:100%;
    height:90%;
    padding-top:10px;
}
.el-header{
    background-color: #ccc;
    color: #323232;
    text-align: left;
    line-height: 60px;
    margin:10px 0 20px;
    font-size:26px;
    font-weight:bold;
    float:left;
    padding:0;
}
aside.el-aside{
    width:255px !important;
}
.el-aside {
    background-color: #cbe198;
    color: #333;
    text-align: center;
    line-height: 200px;
    width:255px;
    height:430px;
    margin:0 10px;
}
.el-main {
    background-color: #cbe198;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.el-header>div>img{
    margin:20px;
    float:left;
    margin-left:30px; 
}
main.el-main{
    padding: 0;
}
.chat-a,.chat-b,.chat-a>p{
    width:100%;height:40px;
    background-color: #add597;
    font-size: 20px;
    line-height: 40px;
}
.chat-a>p{
    /* position: fixed;
    top:0;left:0; */
    color:#fff;
    /* z-index: 2; */
    }
.chat-b>p{
    color:#000;
    font-size:20px;
    }
.chat-list,.chat-msg{
    width:100%;
    height:385px;
    min-height: 385px;
	border:1px solid rosybrown;
}
.chat-list-a{
    width:100%;height:70px;
    background-color: #80c26a;
    margin: 2px 0 10px;
}
.chat-list-b{
    width:100%;height:50px;
    /* background-color: #cbe198;
    border:2px solid #d8e7b5;
    border-left-color: #cbe198;
    border-right-color:#cbe198;  */
	border:1px solid purple;
}
.list-img{
	/* margin:5px 10px; */
    width:40px;
    height:40px;
    float: left;
	/* border:1px solid rebeccapurple; */
	margin:5px;
}
img.list-i{
   width:100%;
   height:100%;
   margin-top:-161px;
}
.list-text{
    width: 170px;
	height:50px;
    float: left;
	/* border:1px solid yellow; */
}
/* .chat-list-b>div.list-text>p{
    line-height: 20px;
    float: left;
    font-size:18px;
} */
.list-name{
    /* margin-top:-74px; */
	height:50px;
	width:50%;
	float: left;
	padding:0;
	line-height:50px;
	/* border:1px solid red; */
}
.chat-list-b>div.list-text>.list-time{
    float:right;
    /* margin-top:-25px; */
    margin-right: 5px;
	height:50px;
	line-height:50px;
	padding:0;
	font-size:12px;
}

.chat-msg>.chat-msg-a,
.chat-msg>.chat-msg-b{
    width: 100%;height:80px;
    /* border:1px solid red; */
}
.chat-msg>.chat-msg-a>img{
    width: 50px;height:50px;
    float: left;
    margin:15px;
}
.chat-msg>.chat-msg-b>img{
    width: 50px;height:50px;
    float: right;
    margin:15px;
}
.chat-msg>.chat-msg-a>.msg-list{
    float: right;
    width:490px;height:80px;
    border:1px solid #dae8ba;
    margin:0 10px;
}
.chat-msg>.chat-msg-b>.msg-list{
    float: left;
    width:490px;height:80px;
    border:1px solid #dae8ba;
    margin:0 10px;
}
</style>