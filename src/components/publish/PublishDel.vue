<template>
    <div class="publish-b">
        <div class="pub-text">
            <div>
                <b>您所选择的商品类型 ：</b>
                数码产品 > 酷炫电脑
                <b style="color:red">(返回修改)</b>
            </div>
        </div>
        <!-- 商品发布详情页面 -->
        <div class="pub-details-a">
            <b>商品详情</b>
        </div>
        <!-- 商品详情信息填写 -->
        <div class="pub-delMsg">
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
                        <a href="#"><img src="../../../public/images/publish/pic1.png"></a>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="pub-details-b">
            <b>交易担保</b>
        </div>
        <div class="pub-delMsg-b">
            <div class="pub-delMsg-db">
                <el-checkbox v-model="checked"></el-checkbox>
                <img src="../../../public/images/details/lzdb.png">
                <span>由蓝沢易购为您提供鉴定服务</span>
            </div>
            <div class="pub-delMsg-cn">
                <span>1、投保交易的商品有特殊标签，更加容易出售</span><br>
                <span>2、保险无需额外缴费，费用将从商品收益中扣除</span>
            </div>
        </div>
        <!-- 下一步按钮 -->
    </div>
</template>
<script>
export default {
    data(){
        return{
        checked: true,
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        active:0,
        methods:{
           
        }
        }
    }
}
</script>
<style scoped>
.publish-b{
    background-color: #f5f5f5;
}
.pub-details-a,.pub-details-b{
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
.pub-details-b{
    margin-top: 20px;
}
/* 商品详情框上面的文字提醒 */
.pub-text{
    font-size: 16px;
    width:1180px;height:20px;
    margin-left:90px;
	margin:0 auto;
}
.pub-text>b{
	margin-left: -100px;
}
.pub-delMsg{
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
	width: 1180px;
	height: 450px;
	margin: 0 auto;
	background-color: #fff;
	}
.pub-delMsg-b{
    width:1180px;height:100px;
    background-color:#fff;
    margin: 0 auto;
    
}
.pub-delMsg-b>.pub-delMsg-db,
.pub-delMsg-b>.pub-delMsg-cn{
    height:100%;width: 420px;
    padding:30px;
    float: left;
    text-align: left;
}
.pub-delMsg-b>.pub-delMsg-db{
    margin-left:200px;
    /* padding-left: 100px; */
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
    height:40px;
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
/*************  按钮样式 ****************/

</style>