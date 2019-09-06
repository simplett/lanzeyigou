<template>
<div>
  <div class="content-title">
		<div>
			<img src="../../public/images/usercenter/zhanghao.png" alt="">
			<p>已购商品</p>
		</div>
	</div>
	<div class="content-b">
		<div v-for="(item,i) of 5" :key="i">
			<div class="b-g-b">
				<!-- 右边图片 -->
				<div class="b-g-b-img">
					<img src="" alt="">
				</div>
				<!--  -->
				<div class="b-g-b-content">
					<!-- 购买时间和订单号 -->
					<div class="b-g-b-p">
						<span>2019-02-31</span>
						<p>订单号:123456789</p>	
					</div>
					<!-- 商品名称、金额、运费和按钮 -->
					<div class="s-p-g">
						<!-- 商品名称 -->
						<div class="p-g-div-name">
							<p>嘉华豪华大礼包(中秋节特惠)</p>
						</div>
						<!-- 金额、运费和按钮 -->
						<div class="p-g-div-money">
							<span>￥34.90(含运费￥0.00)</span>
							<div>
								<a href="javascript:;" class="btn btn-primary"></a>
								<a href="javascript:;" class="btn btn-primary"></a>
							</div>
						</div>
					</div>
					<!-- 步骤条 -->
					<div class="b-g-b-div">
						<el-steps :space="200" :active="1" finish-status="success">
							<el-step title="已付款"></el-step>
							<el-step title="等待发货"></el-step>
							<el-step title="等待收货"></el-step>
							<el-step title="已完成"></el-step>
						</el-steps>
					</div>
				</div>
			</div>
		</div>
		<!-- 页码 -->
		<div class="block content-page">
			<el-pagination
				layout="prev, pager, next"
				:total="1000">
			</el-pagination>
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
	height:180px;
	border:1px solid silver;
	margin-bottom:20px;
}
.b-g-b-img{
	float:left;
	width:16%;
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
	width:105%;
	height:75px;
	/* border:1px solid red; */
	padding-top:10px;
	/* margin-top:25px; */
	background: #f2f2f2;
}
.b-g-b-div .el-step__icon{
	margin-left:-185px;
}
.b-g-b-div .el-step__head{
	width:200%;
}
.b-g-b-p{
	height:40px;
	width:100%;
	background:#e2e3e4;
}
.b-g-b-p>p{
	float: right;
	height:40px;
	line-height:40px;
	padding:0;
	padding-right:20px;
	margin-bottom:0;
}
.b-g-b-p>span{
	float:left;
	height:40px;
	line-height:40px;
	padding:0;
	padding-left:20px;
}
.content-page{
	background:#e2e3e5;
}
.content-page .el-dialog, .el-pager>>>li{
	background: #e2e3e5;
}
.s-p-g{
	width:105%;
	height:61px;
}
.p-g-div-name{
	width:40%;
	height:100%;
	/* border:1px solid red; */
	float: left;
}
.p-g-div-name>p{
	height:52px;
	/* line-height:52px; */
	padding:0;
}
.p-g-div-money{
	width:40%;
	height:100%;
	margin-top:0;
	float:right;
	border:1px solid green;
}
.p-g-div-money>span{
	font-size:16px;
	width:100%;
	float: right;
}
.btn-primary{
	width:20%;
	height:27px;
	margin-right:20px;
	float: right;
}
</style>