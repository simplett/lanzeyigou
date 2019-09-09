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
}
.y-div{
	width:100%;
	height:200px;
	border:1px solid green;
}
.y-phtoto{
	width:;
}
</style>