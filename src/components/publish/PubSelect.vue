<template>
    <div class="publish-a">
        <div class="pub-select" id="select">
            全新或非全新
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value"
                :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!-- 商品信息填写 -->
         <div class="pub-proMsg">
            <div class="proMsg"> 
             <el-cascader :props="props"></el-cascader>
            </div> 
        </div>

        <!-- 下一步按钮 -->
    
    </div>
</template>
<script>
let id=0;
export default {
    data(){
        return{
        props: {
          lazy: true,
          lazyLoad (node, resolve) {
            const { level } = node;
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 })
                .map(item => ({
                  value: ++id,
                  label: `分类${id}`,
                  leaf: level >= 2
                }));
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes);
            }, 1000);
          }
        },
        options: [{
          value: '选项1',
          label: '全新'
        }, {
          value: '选项2',
          label: '非全新'
        }],
        }
    },
	methods:{
		
	}
}
</script>
<style scoped>
.publish-a{
    background-color: #f5f5f5;
}
div#select,.pub-details{
    width:1180px;
    height:50px;
    line-height: 50px;
    vertical-align: -webkit-baseline-middle;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    border:1px solid #e5e5e5;
    background-color: #fafafa;
}
div#select>.el-select,
div#select>.el-select>.el-input,
div#select>.el-select>.el-input>input.el-input__inner{
    width:217px;
    height:30px;
}
div#select>.el-select>.el-input>.el-input__suffix>
.el-input__suffix-inner>.el-input__icon{
    height:40px !important;
}
/* 信息编写详细信息填写页 */
.pub-proMsg,.pub-delMsg{
    width:1180px;height:400px;
    margin:0 auto;
    background-color: #fff;
}
.pub-proMsg>.proMsg{
    width:515px;
    height:400px;
    margin:0 auto;
}
.el-cascader{
    padding-top:30px;
}
/*************  按钮样式 ****************/
button {
    padding: 0;
    margin: 0;
    font-size: 20px;
}
.publish-a>button{
    background-color: #ccc;
    color:#fff;
    height:50px;
    line-height: 50px;
    width:200px;
    font-size:20px;
    border:0;
    margin:25px 0;
    padding: 0;
}
.publish-a>button:hover{
    background-color: #e61717;
    color:#fff;
}
</style>