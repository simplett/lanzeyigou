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
				<input class="index-header-input" type="text" v-model="SearchContent" placeholder="蓝沢   请输入关键词" />
				<img src="../../public/images/搜索.png" @click="Search()" />
			</div>
		</div>
  </header>
</template>
<script>
  export default {
      data(){
          return {
SearchContent:"手机"
          }
      },
      methods:{
          Search() {
				var SearchContent = this.SearchContent;
				var url = "/Search";
				var params = {
					type:"category",
					kw: SearchContent
				};
				this.axios.get(url, {
					params
				}).then(result => {
					console.log(result)
				});
			}
      }
  }
</script>
<style scoped>
.index-header{
    width:1180px;
    margin: 0 auto;
    height: 120px;
}
.index-header-left{
    margin-left: 30px;
    margin-top: 30px;
    float: left
}
.index-header-right{
    float: right;
    margin-right: 54px;
}
.index-header-input{
    width: 550px;
    height:40px;
    margin-top: 8%;
    position: relative;
    border: 0;
    border-radius: 5px;
}
.index-header-input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #000000;
    /* placeholder字体大小  */
    font-size: 16px;
    /* placeholder位置  */
    text-align: left;
    padding-left: 20px;
    line-height:normal;
}
.index-header-right>img{
    /* float: right; */
    margin-left: -45px;
    margin-top: 53px;
    width: 20px;
    position: absolute;
}
</style>