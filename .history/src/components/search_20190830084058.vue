<template>
  <header>
       <!-- 首页页头 -->
		<div class="index-header">
			<!-- 首页页头左部分 -->
			<div class="index-header-left">
				<img src="../../public/images/logo完整版.png" alt />
			</div>
			<!-- 首页页头右部分 -->
			<div class="index-header-right">
				<input class="index-header-input" type="text" placeholder="蓝沢   请输入关键词" />
				<img src="../../public/images/搜索.png" alt />
			</div>
		</div>
  </header>
</template>
<script>
  export default {
  }
</script>
<style scoped>
.header{
    height: 36px;
    width:100%;
    margin: 0 auto;
    border-bottom: 2px solid #e6e6e6;
    background: #f2f2f2;
}
.header-div{
    height: 100%;
    width:1180px;
    margin: 0 auto;
}
.header-left,.header-right{
    height:100%;
}
.header-left{
    float: left;
}
.header-right{
    float: right;
}
.header-left-img{
    width:20px;
    margin: -2px auto;
    padding-right: 3px;
}
.header-left>a,.header-right>a{
    margin-right: 20px;
}
.header-right-red{
    color:#f00;
}
</style>