<template>
    <div>
		<my-header />
		<!-- 搜索 -->
		<search />	
		<!-- 用户介绍 -->
		<div class="y-intro">
			<!-- 头像、签名、诚信度 -->
			<div class="y-div">
				<div class="y-photo">
					<img src="" alt="">
				</div>
				<div class="y-q-c">
					<p class="text-left">昵称</p>
					<p class="text-left">诚信分</p>
				</div>
				<div class="y-q-q">

				</div>
			</div>
		</div>
	</div>
</template>

<script >
import search from "../components/search.vue"
export default {
    data () {
        return {}
	},
    components:{
		search
    }
	
}
</script>
<style lang="stylus" scoped>
.y-intro{
	width:1180px;
	height:800px;
	border:1px solid red;
	margin:0 auto;
	padding-top:50px;
}
.y-div{
	width:90%;
	height:200px;
	border:1px solid green;
	margin:0 auto;
}
.y-photo{
	width:200px;
	height:200px;
	border:1px solid yellow;
	float:left;
	margin-left:50px;
	border-radius:50%;
}
.y-photo img{
	width:100%;
	height:100%;
	border-radius:50%;
}
.y-q-c{
	width:400px;
	height:200px;
	border:1px solid purple;
	float:left;
	margin-left:20px;
}
.y-q-c p{
	width:40%;
	height:40px;
	// border:1px solid red;
	float:left;
	margin-top:50px;
	margin-right:30px;
}
.y-q-q{
	width:40%;
	height:40px;
	border:1px solid red;
	float:left;
}
</style>