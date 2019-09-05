<template>
  <div class="nav-top row">
    <!-- 左部分导航栏 -->
    <div class="col-5 text-left">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#e5e5e5"
        text-color="#000"
        active-text-color="#00f"
      >
        <el-menu-item index="5" style="margin-left:100px;">首页</el-menu-item>
        <el-menu-item index="2">请登录...</el-menu-item>
        <el-menu-item index="3">免费注册</el-menu-item>
        <el-dropdown>
          <span class="el-dropdown-link">
            消息中心
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>平台消息通知</el-dropdown-item>
            <el-dropdown-item>买家联系</el-dropdown-item>
            <el-dropdown-item>卖家联系</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
    </div>
    <!-- 右部分导航栏 -->
    <div class="col-7">
      <el-menu
        class="el-menu-demo1 m-r-2"
        mode="horizontal"
        @select="handleSelect"
        background-color="#e5e5e5"
        text-color="#000"
        active-text-color="#00f"
      >
        <el-dropdown>
          <span class="el-dropdown-link">
            我的蓝沢
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>待处理订单</el-dropdown-item>
            <el-dropdown-item>返修退货订单</el-dropdown-item>
            <el-dropdown-item>降价商品</el-dropdown-item>
            <el-dropdown-item>我的积分</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            联系客服
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>客户</el-dropdown-item>
            <el-dropdown-item>在线客服</el-dropdown-item>
            <el-dropdown-item>资讯中心</el-dropdown-item>
            <el-dropdown-item>电联客服</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-menu-item index="4" style="margin-left:200px">收藏夹</el-menu-item>
        <el-dropdown>
          <span class="el-dropdown-link">
            蓝沢帮助
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>网站介绍</el-dropdown-item>
            <el-dropdown-item>关注卖家</el-dropdown-item>
            <el-dropdown-item>商品资讯</el-dropdown-item>
            <el-dropdown-item>平台招商</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.nav-top {
  width: 100%;
  min-width: 1245px;
}
.el-col {
  background-color: #e5e5e5;
}
.el-menu-demo,
.el-menu-demo > .el-menu-item,
.el-menu-demo > .el-menu,
.el-menu-demo1,
.el-menu-demo1 > .el-menu-item,
.el-menu-demo1 > .el-menu {
  height: 30px;
  line-height: 30px;
  text-align: center;
  vertical-align: -webkit-baseline-middle;
}
.el-menu-demo,
.el-menu-demo1 {
  float: left;
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
  font-size: 14px;
  padding: 0 20px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>