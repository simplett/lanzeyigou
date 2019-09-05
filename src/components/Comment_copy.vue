<template>
    <div class="msg">
		<!-- 多个客户留言区域 -->
		<div class="msg-xunhuan">
			<div class="msg-img">
				<img :src="msg.msgimg">
			</div>
			<div class="msg-text">
				<div class="msg-name">
					<b style="">{{msg.msgname}}</b>
					<span>{{msg.msgpubtime}}</span>
				</div>
				<div class="msg-info">
					<span>{{msg.msginfo}}</span>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
	name:"comment_copy",
	props: {
				msg:{default: "111"}
			},
    data(){
		return {
			
		}
	}
}
</script>
<style scoped>
div.msg{
	height:100%;
	/* border-bottom:1px solid #b8b1b1; */
	margin:0 auto;
}
div.msg-xunhuan>.msg-img{
	width:80px;
	height:80px;
	/* line-height: 100px; */
	float: left;
	border-radius: 50%;
	/* border:1px solid red; */
	margin-top:10px;
	/* padding:0; */
}
.msg-xunhuan{
	width:100%;
	height:100px;
	border-bottom:1px solid #b8b1b1;
}
div.msg-xunhuan>.msg-img>img{
	width: 100%;
	height:100%;
	/* background:#000000; */
}
div.msg-xunhuan>.msg-text{
	width:90%;height:100px;
	float: left;
}
div.msg-xunhuan>.msg-text>.msg-name,
div.msg-xunhuan>.msg-text>.msg-info{
	text-align: left;
	margin-left: 10px;
	margin-top:10px;
}
</style>