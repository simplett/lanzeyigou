<template>
  
</template>
<script>
export default {
  data() {
    return {
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