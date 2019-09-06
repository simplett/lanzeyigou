<template>
<div>
	<div class="content-title">
		<div>
			<img src="../../public/images/usercenter/shoucang.png" alt="">
			<p>收藏</p>
		</div>
	</div>
	<!--  -->
	<div class="content-b">
		<div class="g-l-p" v-for="(item,i) of shoucang" :key="i">
			<div class="g-l-p-title">
				<!-- 头像 -->
				<div class="g-l-hp">
					<img :src="item.shoucang_img" />
				<!-- 用户名 -->
					<p>{{item.nickname}}</p>
				</div>
				<!-- <div class="g-l-right">
					<a class="btn g-l-right-btn-focus">已关注</a>
				</div> -->
				<p class="p-introduce">{{item.shoucang_intro}}</p>
				<div class="g-l-product">
					<img :src="item.shoucang_show"/>
				</div>
				<div class="g-l-table">
					<table>
						<tbody>
							<tr>
								<td>
									<img class="td-right" src="../../public/images/浏览眼睛.png" />
									<p class="td-right">{{item.ll}}人浏览</p>
								</td>
								<td>
									<span class="td-span">{{item.shoucang_want}}人想要</span>
								</td>
							</tr>
							<tr>
								<td>
									<p class="td-right td-red">￥{{item.price}}</p>
								</td>
								<td>
									<a class="btn td-btn-focus">我想要</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
  export default {
      data(){
		  return {
			  shoucang:[
                    {
                        shoucang_img:require("../../public/images/喜欢小banner.png"),
                        nickname:"qwe",
                        shoucang_intro:"流浪狗收入所",
                        shoucang_show:require("../../public/images/details/素材/0_0.png"),
                        ll:"12",
                        shoucang_want:"1200",
                        price:"1200.00"
                    },
                    {
                        shoucang_img:require("../../public/images/喜欢小banner.png"),
                        nickname:"qwe",
                        shoucang_intro:"流浪狗收入所",
                        shoucang_show:require("../../public/images/details/素材/0_0.png"),
                        ll:"12",
                        shoucang_want:"1200",
                        price:"1200.00"
                    },
                    {
                        shoucang_img:require("../../public/images/喜欢小banner.png"),
                        nickname:"qwe",
                        shoucang_intro:"流浪狗收入所",
                        shoucang_show:require("../../public/images/details/素材/0_0.png"),
                        ll:"12",
                        shoucang_want:"1200",
                        price:"1200.00"
                    },
                    {
                        shoucang_img:require("../../public/images/喜欢小banner.png"),
                        nickname:"qwe",
                        shoucang_intro:"流浪狗收入所11111111111111111111111111111111111111111111111111",
                        shoucang_show:require("../../public/images/details/素材/0_0.png"),
                        ll:"12",
                        shoucang_want:"1200",
                        price:"1200.00"
                    },
                    {
                        shoucang_img:require("../../public/images/喜欢小banner.png"),
                        nickname:"qwe",
                        shoucang_intro:"流浪狗收入所",
                        shoucang_show:require("../../public/images/details/素材/0_0.png"),
                        ll:"12",
                        shoucang_want:"1200",
                        price:"1200.00"
                    },
                    {
                        shoucang_img:require("../../public/images/喜欢小banner.png"),
                        nickname:"qwe",
                        shoucang_intro:"流浪狗收入所",
                        shoucang_show:require("../../public/images/details/素材/0_0.png"),
                        ll:"12",
                        shoucang_want:"1200",
                        price:"1200.00"
                    },
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

.content-b{
    width:100%;
    height:90%;
    padding-top:10px;
}
.g-l-p{
    width:269px;
    height:420px;
    /* border: 1px solid green; */
    background: #FFFFFF;
    margin-bottom: 22px;
    margin-right: 22px;
    float: left;
}
.g-l-p-title{
    width:240px;
    height:380px;
    /* border: 1px solid yellow; */
    margin: 0 auto;
}
.g-l-hp{
    width:100%;
    height:70px;
    /* border: 1px solid red; */
    float: left;
    border-bottom: 1px solid #f5f5f5;
    /* border-radius:50%; */
    margin-top:10px;
}
.g-l-hp>img{
    float: left;
    width: 40px;
    /* margin-left:20px; */
    margin-top: 20px;
    margin-bottom:10px;
    border-radius: 50%;
}
.g-l-right{
    float: right;
    /* margin-top: -20px; */
    margin-right:5px;
    /* border: 1px solid green; */
    width:60px;
	height:25px;
	margin-top:-40px;
}
/* .g-l-right>a{
    color:red;
    font-weight: bold;
    margin-top: -10px;
    font-size: 14px;
    margin-left: -14px;
} */
.g-l-hp>p{
	margin-top: 25px;
	width: 100px;
    /* border: 1px solid red; */
}
.g-l-product{
    width: 100%;
    height: 200px;
    border: 1px solid red;
    background:#f2f2f2;
    /* margin-top:10px; */
}
.g-l-product>img{
    width: 100%;
    height:100%;
}
/* .g-l-p-title>p{
    margin: 0;
} */
.g-l-table{
    width: 100%;
    height:80px;
    /* border:1px solid green; */
}
.g-l-table>table{
    width: 100%;
    height:80px;
    /* border:1px solid green; */
    padding:0;
    margin:0;
}
p,span{
    padding:0;
    margin:0;
    font-size:12px;
}
.td-right{
    float: left;
    margin-left:7px;
}
td>img{
    margin-top: 3%;
}
td>span{
    color:#999999;
    margin-left: 30%;
}
.td-red{
    color:red;
    font-weight: bold;
    font-size:11px;
}
.g-l-right-btn-focus{
    width:60px;
    height:25px;
    font-size:12px;
    line-height:25px;
    /* margin-top: -20px; */
    padding:0px;
    color:#ffffff !important;
    border:0;
    border-radius:0;
    background:red;
}
.td-btn-focus{
    width:90px;
    height:25px;
    font-size:11px;
    line-height:25px;
    margin-top: 10px;
    margin-left: 10%;
    border: 1px solid black;
	padding:0;
}
.td-btn-focus:hover{
    color:#fff;
    border:0;
    background: #e31c1c;
}
.td-span{
	
}
</style>