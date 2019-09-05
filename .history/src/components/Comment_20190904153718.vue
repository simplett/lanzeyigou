<template>
    <div class="msg">
		<div class="content-title">
			<div>
				<img src="../../public/images/usercenter/pinglun.png" alt="">
				<p>评论</p>
			</div>
		</div>
		<!-- 多个客户留言区域 -->
		<div class="msg-xunhuan" v-for="(item,i) of msg" :key="i">
			<div class="msg-img">
				<img :src="item.msgimg">
			</div>
			<div class="msg-text">
				<div class="msg-name">
					<b style="margin-right:30px;">{{msgname}}</b>
					<span>1小时前</span>
				</div>
				<div class="msg-info">
					<span>
					喜欢好久的商品了，在某宝上面看好久了，妈耶，但是太贵了，
					今天在这里看到，还么便宜，爱了！
					</span>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    data(){
		return {
			msg:[
				{
					msgname:"宇宙无敌小丸子",
					msginfo:"喜欢好久的商品了，在某宝上面看好久了，妈耶，但是太贵了,今天在这里看到，还么便宜，爱了！",
					msgimg:require("../../public/images/details/素材/0_0.png"),
				}
			]
		}
	}
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
div.msg{
	width: 100%;
	height:100%;
	/* border-bottom:1px solid #b8b1b1; */
	margin:0 auto;
}
div.msg>.msg-img{
	width:80px;
	height:80px;
	/* line-height: 100px; */
	float: left;
	border-radius: 50%;
	border:1px solid red;
	margin-top:10px;
	/* padding:0; */
}
div.msg>.msg-img>img{
	width: 100%;
	height:100%;
	/* background:#000000; */
}
div.msg>.msg-text{
	width:90%;height:100px;
	float: left;
}
div.msg>.msg-text>.msg-name,
div.msg>.msg-text>.msg-info{
	text-align: left;
	margin-left: 10px;
	margin-top:10px;
}
.msg-xunhuan{
	width:100%;
	height:100px;
	border-bottom:1px solid #b8b1b1;
}
</style>