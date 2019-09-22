<template>
  <div>
	  <div class="content-title">
		<div>
			<img src="../../public/images/usercenter/zhanghao.png" alt="">
			<p>已发布商品</p>
		</div>
	</div>
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
				<a href="javascript:;" class="btn btn-light">收藏(22)</a>
				<a href="javascript:;" class="btn btn-light">点赞(22)</a>
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
    background: #ffffff;;
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
	font-size: 12px;
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
	width: 90%;
	margin:0 auto;
	font-size:16px;
	height:37px;
	/* border:1px solid green; */
	text-align: center;
	overflow: hidden;  /*溢出隐藏*/
    text-overflow: ellipsis; /*以省略号...显示*/
    -webkit-line-clamp: 2;
    word-break:break-all;
    display:-webkit-box;
    -webkit-box-orient:vertical;
}
.content-name img{
	width:90%;
	height:210px;
	background:#f2f2f2;
	margin: 0 auto;
	/* background:#f2f2f2; */
}
.content-collect{
	width:90%;
	height:50px;
	/* border:1px solid red; */
	margin: 0 auto;
	margin-top:26px;
}
.content-collect .btn-light{
	width:80px;
	height:35px;
	line-height:35px;
	padding:0;
	margin-right:10px;
	margin-left:10px;
	font-size: 16px;
}
</style>