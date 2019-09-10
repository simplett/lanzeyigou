<template>
    <div class="publish">
        <!-- 导航栏 -->
        <my-header/>
        <!-- 搜索栏 -->
        <search/>
        <hr style="margin:0 auto;color:#ccc;
        width:1180px;height:2px;">
        <!-- 商品发布步骤导航 -->
        <div id="myapp">
            <!-- 步骤条线圆 -->
            <div class="step">
                <!-- 线 -->
                <div class="step-line1-success"></div>
                <div class="step-line2"></div>
                <!-- 圆 -->
                <div class="step-icon1">
                    <img src="../../public/images/publish/11.png">
                </div>
                <div class="step-icon2">
                    <img src="../../public/images/publish/22.png">
                </div>
                <div class="step-icon3">
                    <img src="../../public/images/publish/33.png">
                </div>
                <!-- 步骤条文字 -->
                <div class="text1-success">商品类型选择</div>
                <div class="text2">填写商品信息</div>
                <div class="text3">发布成功</div>
            </div>
        </div>
        <!-- *********************第一步*********************** -->
        <!-- ******************商品分类选择框 ****************-->
        <div class="pub-select" id="select">
            常用商品分类
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value"
                :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!-- 商品信息填写 -->
        <div class="pub-proMsg">
            <div class="proMsg"> 
                <!-- 分类 表格-->
                <div class="classify">
                    <el-table :data="tableData" stripe  style="width: 100%">
                        <el-table-column prop="date" label="分类"
                        width="218">
                        </el-table-column>
                    </el-table>
                </div>
                <!-- 标签 -->
                <div class="label">
                     <div class="label-title">品类标签</div>
                     <div class="label-text"></div>
                </div>
            </div>
        </div>

        <!-- 下一步按钮 -->
        <button style="margin-top: 12px;" 
        @click="next">下一步</button>

        <!-- ********************第二步********************** -->
        <!-- <div class="pub-text">
            <div>
                <b>您所选择的商品类型 ：</b>
                数码产品 > 酷炫电脑
                <b style="color:red">(返回修改)</b>
            </div>
        </div> -->
        <!-- 商品发布详情页面 -->
        <!-- <div class="pub-details">
            <b>商品详情</b>
        </div> -->
        <!-- 商品详情信息填写 -->
        <!-- <div class="pub-delMsg">
            <div class="pub-from">
                <el-form :label-position="labelPosition" 
                label-width="80px" :model="formLabelAlign">
                    <el-form-item label="标题:" style="margin-top:20px;">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="价格:">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="新旧:" 
                    style="margin-top:10px;" id="btn">
                        <el-button type="danger" style="margin-left:-110px;">全新</el-button>
                        <el-button type="info" plain>非全新</el-button>
                    </el-form-item>
                    <el-form-item label="所在地:">
                        <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                    <el-form-item label="描述:" id="my-input">
                        <el-input v-model="formLabelAlign.type" 
                        placeholder="商品补充描述"></el-input>
                    </el-form-item>
                    <div class="pub-from-text">
                        <b style="color:#606262">宝贝图片:</b>
                        <p>请上传商品的亮点图片，有助于更快的售出</p>
                        <a href="#"><img src="../../public/images/publish/pic1.png" alt=""></a>
                    </div>
                </el-form>
            </div>
        </div> -->
        
        <!-- 下一步按钮 -->
        <!-- <button style="margin-top: 12px;" 
        @click="next">下一步</button>  -->
       <!-- **********************第三步************************* -->
        <!-- <div class="pub-success">
            <p class="pub-sucMsg"><b>宝贝发布成功！</b></p><br>
            <button style="margin-right:60px;">查看发布</button>
            <button>继续发布</button>
        </div> -->
    </div>
</template>
<script scoped>
import search from "../components/search.vue"
export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        tableData: [{
          date: '数码产品',
        }, {
          date: '美妆饰品',
        }, {
          date: '运动服饰',
        }, {
          date: '家居好物',
        },{
          date: '数码产品',
        },{
          date: '美妆饰品',
        },{
          date: '美妆饰品',
        }, {
          date: '运动服饰',
        }, {
          date: '家居好物',
        },{
          date: '数码产品',
        }],
        active:0,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    },
    components:{
        search
    },
    methods:{
		// 按钮点击事件
        next(){
            if (this.active++ > 2) 
            this.active = 0;
        }
    }

}
</script>
<style>
/* ************************第三步**************************** */
.pub-success{
    width: 1180px;
    height:360px;
    text-align: center;
    vertical-align: -webkit-baseline-middle;
    padding: 0;
    margin: 0 auto;
    background-color: #fff;
}
.pub-success>.pub-sucMsg{
    font-size: 30px;
    color:#000;
    padding-top:115px;
    padding-bottom: 40px;
}
.pub-success>button{
    background-color: #e61717;
    width:140px;height:40px;
    border:5px;
	color:#fff;
    border-radius: 5px;
}
/* ************************第二步**************************** */
/* 商品详情框上面的文字提醒 */
.pub-text{
    font-size: 16px;
    width:400px;height:20px;
    margin-left:90px;
}
.pub-delMsg{
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}
.pub-delMsg>.pub-from{
    width:400px;
    height:339px;
    margin:0 auto;
    margin-bottom: 41px;
    border:1px solid #FFF;
}
/* form表单中一行样式 */
.el-form-item {
    height:30px;
    margin-bottom: 10px !important;
}
/* 标题 */
label.el-form-item__label{
    margin: 4px auto;
    padding-right: 20px;
    height: 30px;
    line-height: 30px;
}
/* 输入框 */
div.el-input,.el-form-item__content{
    width: 300px;
    height:30px;
}
/* 内嵌输入框 */
input.el-input__inner{
    width: 300px;
    height:30px;
    line-height: 30px;
    padding: 0;
}
/* 新旧按钮样式 */
.el-button{
    width:90px;
    height:30px;
    text-align: center;
    padding: 5px 20px !important;
}
.el-form>.pub-from-text{
    font-size: 14px;
    color:#999;
}
/* 商品描述输入框样式 */
div#my-input.el-form-item,
div#my-input.el-form-item>.el-form-item__content,
div#my-input.el-form-item>.el-form-item__content>
.el-input>.el-input__inner{
    height:60px;
}
div#my-input.el-form-item{
    margin-top: 15px;
}
.el-form>.pub-from-text>b{
    margin-left:-338px;
}
.el-form>.pub-from-text>p{
    margin-top: -20px;
}
.el-form>.pub-from-text>a>img{
    margin-left: -90px;
    margin-top: 14px;
    padding: 0;
}
/* ************************固定不变的背景，导航***************** */
/* 背景色 */
.publish{
    background-color: #f5f5f5;
}
/* 步骤条 */
#myapp{
    width:1180px;height:80px;
    margin: 0 auto;
    background-color: #fff;
    margin-bottom: 30px;
}
/* 大边框 */
.step{
    width:812px;
    height:100%;
    margin:0 auto;
    margin-top:20px;
    border:1px solid #fff;
}
/* 线条默认样式 */
.step-line1,.step-line2{
    border:2px solid #e6e6e6;
    width:370px;height:1px;
    margin-top:20px;
    margin-left:25px;
    z-index: 3;
    float: left;
}
/* 步骤默认样式 */
.step-icon1,.step-icon2,.step-icon3{
    width:46px;height:46px;
    border-radius: 50%;
    background-color: #e6e6e6;
    float: left;
    margin-top:-25px;
}
.step-icon2{
    margin-left: 330px;
    margin-right: 330px;
}
.step-icon3{
    float: right;
}
/* 文字默认样式 */
.text1,.text2,.text3{
    float: left;
    width:100px;height:20px;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
    color:#000;
    font-weight: bold;
    text-align: center;
    margin-top:10px;
}
.text1,.text1-success{
    margin-left:-30px;
}
.text2,.text2-success{
    margin-left:280px;
}
.text3,.text3-success{
    float: right;
    margin-right:-30px;
}
/* 第一步成功之后线条的样式的样式 */
.step-line1-success,.step-line2-success{
    border:2px solid #e61717;
    width:370px;height:1px;
    margin-top:20px;
    margin-left:25px;
    z-index: 3;
    float: left;
}
/* 第一步成功之后文字的样式的样式 */
.text1-success,.text2-success,.text3-success{
    float: left;
    width:100px;height:20px;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
    color:#e61717;
    font-weight: bold;
    text-align: center;
    margin-top:10px;
}
/* 第一步成功之后图片的样式的样式 */
img{ 
    padding:7px;
}

/* ************************第一步**************************** */
/* 商品详情选择头 */
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
/* 分类及品类标签的样式 */
.pub-proMsg>.proMsg>.classify,
.pub-proMsg>.proMsg>.label{
    width:220px;height:330px;
    border:1px solid #f5f5f5;
    float: left;
    margin-top: 30px;
    margin-bottom: 40px;
    overflow: hidden;

}
/* 两个小模块之间的间距 */
.pub-proMsg>.proMsg>.classify{
    margin-right: 75px;
}
/* 商品分类里面的样式 */
.el-table td, .el-table th {
    padding: 3px 0 !important;
}
.label>.label-title{
    font-size: 14px;
    color:#000;
    text-align: left;
    width:100%;
    height:30px;
    line-height: 30px;
    padding: 0;
    background-color: #f5f5f5;
    border-bottom-width: 1px solid #f5f5f5;
}
.label>.label-text{
    width:100%;
    height:300px;
}
/*************  按钮样式 ****************/
button {
    padding: 0;
    margin: 0;
    font-size: 20px;
}
.publish>button{
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
.publish>button:hover{
    background-color: #e61717;
    color:#fff;
}
</style>