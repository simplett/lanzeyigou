<template>
  <div>
	  <div class="content-title">
		<div>
			<img src="../../public/images/usercenter/zhanghao.png" alt="">
			<p>已发布商品</p>
		</div>
	</div>
	<div class="content-b">
		<div>
			<!-- 状态、价钱 -->
			<div>
				<p>￥3333.00</p>
			</div>
			<!-- 名称、图片 -->
			<div>
				<p>11111111111111111111111</p>
				<img src="" alt="">
			</div>
			<!-- 收藏和点赞 -->
			<div>
				a
			</div>
		</div>
	</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
    
  }
};
</script>
<style  scoped>
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
</style>