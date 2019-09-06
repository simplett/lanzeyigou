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
					<div>
						<p>订单号:123456789</p>	
					</div>
					<!-- 步骤条 -->
					<div class="b-g-b-div">
						<el-steps :space="200" :active="1" finish-status="success">
							<el-step title="已付款"></el-step>
							<el-step title="等待发货"></el-step>
							<el-step title="等待收货"></el-step>
							<div class="el-step__icon-inner">3</div></div></div>
							<div class="el-step__main">
								<div class="el-step__title is-wait">等待收货</div>
								<div class="el-step__description is-wait"></div></div></div><div class="el-step is-horizontal" style="flex-basis: 200px; max-width: 25%;"><div class="el-step__head is-wait"><div class="el-step__line"><i class="el-step__line-inner"></i></div>
						</el-steps>
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
<style >
.el-steps{
	width:100%;
}
div.el-step__title{
	text-align:center;
}
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
	height:125px;
	border: 1px solid red;
}
.b-g-b-img{
	float:left;
	width:120px;
	height:100%;
	background:orange;
}
.b-g-b-img>img{
	width:100%;
	height:100%;
}
.b-g-b-content{
	width:80%;
	height:100%;
	/* border:1px solid yellow; */
	float: left;
}
.b-g-b-content>p{
	float: left;
	width:30%;
	height:20px;
	font-size:20px;
}
.b-g-b-div{
	width:108%;
	height:70px;
	border:1px solid red;
	margin-top:25px;
}

</style>