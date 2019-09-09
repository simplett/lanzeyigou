<template>
  <div>
	<div class="content-b">
		<div class="content-z" v-for="(item,i) of 6" :key="i ">
			<!-- 状态、价钱 -->
			<div class="content-z-p">
				<a href="javascript:;" class="btn btn-light">已售出</a>
				<p>￥3333.00</p>
			</div>
			<!-- 名称、图片 -->
			<div class="content-name"> 
				<p>11111111111111111111111</p>
				<img src="../../public/images/details/素材/0_0.png" alt="">
			</div>
			<!-- 收藏和点赞 -->
			<div class="content-collect">
				<a href="javascript:;" class="btn btn-danger">收藏(22)</a>
				<a href="javascript:;" class="btn btn-danger">点赞(22)</a>
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
.content-b{
    width:100%;
    height:90%;
    padding-top:10px;
	/* border:1px solid red; */
}
.content-z{
	width:281px;
	height:400px;
	float:left;
	background: #ffffff;
	margin-right:10px;
	margin-bottom:20px;
}
.content-z-p{
	width:90%;
	height:60px;
	border-bottom:1px solid silver;
	/* float:right; */
	padding-top:10px;
	margin: 0 auto;
}
.content-z-p a{
	float:left;
	height:40px;
	width:90px;
	padding:0;
	line-height:40px;
	margin-left:20px;
}
.content-z-p p{
	float:right;
	height:50px;
	margin-right:20px;
	line-height: 50px;
}
.content-name{
	width:90%;
	height:265px;
	margin: 0 auto;
	/* border:1px solid red; */
	margin-top:10px;
	/* margin-bottom:20px; */
}
.content-name p{
	width: 100%;
	height:37px;
	/* border:1px solid green; */
	text-align: center;
}
.content-name img{
	width:90%;
	height:230px;
	background:#f2f2f2;
	margin: 0 auto;
}
.content-collect{
	width:90%;
	height:50px;
	/* border:1px solid red; */
	margin: 0 auto;
	margin-top:26px;
}
.content-collect .btn-danger{
	width:80px;
	height:35px;
	line-height:35px;
	padding:0;
	margin-right:10px;
	margin-left:10px;
	font-size: 16px;
}
</style>