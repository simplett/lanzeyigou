<template>
  <header>
         <!-- 页头 -->
    <div class="header">
        <div class="header-div">
            <!-- 页头左部分 -->
            <div class="header-left">
                    <a href="javascript:;"><img src="../../public/images/首页-选中.png" alt="" class="header-left-img">客户服务</a>
                    <a href="javascript:;">先登录</a>
                    <a href="javascript:;">免费注册</a>
                    <a href="javascript:;">消息</a>
                </div>
                <!-- 页头右部分 -->
                <div class="header-right">
                    <a href="javascript:;">我的蓝沢</a>
                    <a class="header-right-red" href="javascript:;">联系客服</a>
                    <a href="javascript:;">蓝沢会员</a>
                    <a class="header-right-red" href="javascript:;">收藏夹 0</a>
                    <a href="javascript:;">帮助</a>
                    <a href="javascript:;">手机蓝沢</a>
                </div>
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