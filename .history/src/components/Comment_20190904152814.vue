<template>
    <div class="msg">
		<div class="content-title">
			<div>
				<img src="../../public/images/usercenter/pinglun.png" alt="">
				<p>评论</p>
			</div>
		</div>
    <!-- 多个客户留言区域 -->
        <div class="msg-img">
            <img src="../../public/images/details/素材/0_0.png">
        </div>
        <div class="msg-text">
            <div class="msg-name">
                <b style="margin-right:30px;">宇宙无敌小丸子</b>
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
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div.msg{
        width: 100%;
        height:100px;
        border-bottom:1px solid #b8b1b1;
        margin:0 auto;
    }
    div.msg>.msg-img{
        width:80px;height:80px;
        /* line-height: 100px; */
        float: left;
        border-radius: 50%;
		border:1px solid red;
		margin-top:10px;
		padding:0;
    }
    div.msg>.msg-img>img{
        width: 100%;height:100%;
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
</style>