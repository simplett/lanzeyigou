<template>
<div>
  <div class="content-title">
		<div>
			<img src="../../public/images/usercenter/zhanghao.png" alt="">
			<p>已购商品</p>
		</div>
	</div>
	<div class="content-b">
		<div>
			<div class="b-g-b">
				<!-- 右边图片 -->
				<div class="b-g-b-img">
					<img src="" alt="">
				</div>
				<!--  -->
				<div class="b-g-b-content">
					<p>订单号:</p>
					<!-- 步骤条 -->
					<div>

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
    return {}
  },
  methods: {
    
  }
};
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
.b-g-b{
	width:100%;
	height:100px;
	border: 1px solid red;
}
.b-g-b-img{
	float:left;
	width:80px;
	height:100%;
	background:orange;
}
.b-g-b-img>img{
	width:100%;
	height:100%;
}.
b-g-b-content
</style>