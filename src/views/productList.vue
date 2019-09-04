<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 页头 -->
        <my-header/>
        <!-- 搜索 -->
        <search/>
        <!-- 这是轮播 -->
		<Carousel/>
        <!--  -->
        <!-- 7个图片 -->
        <div class="p-7-img">
            <!-- 最左边的大的div -->
            <div class="p-7-left">

            </div>
            <!-- 右边3个div -->
            <div class="p-7-right">
                <div class="p-7-right-2" v-for="(item,i) of p71" :key="i">
                    <div class="p-7-right-img">
                        <img :src="item.p2img_url" alt="">
                    </div>
                </div>
            </div>
            <div class="p-7-right">
                <div class="p-7-right-2" v-for="(item,i) of p72" :key="i">
                    <div class="p-7-right-img">
                        <img :src="item.p2img_url" alt="">
                    </div>
                </div>
            </div>
            <div class="p-7-right">
                <div class="p-7-right-2" v-for="(item,i) of p73" :key="i">
                    <div class="p-7-right-img">
                        <img :src="item.p2img_url" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 分类 -->
        <div v-for="(item,i) of module" :key="i">
            <!-- 标题 -->
            <div class="title">
                <div class="title-div">
                    <a>{{item.title}}</a>
                </div>
            </div>
            <!-- 商品列表 -->
            <div class="p-list">
                <div class="products" v-for="(item,i) of list" :key="i">
                    <!-- 商品图片 -->
                    <div class="products-img">
                        <img :src="item.Pphoto_url" alt="">
                    </div>
                    <!-- 商品介绍 -->
                    <table>
                        <tbody>
                            <tr>
                                <td class="td-top" colspan="2">
                                    <a class="td-top-p-intro" href="javascript:;">{{item.intro}}</a>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-left"><p>￥{{item.price}}</p></td>
                                <td class="td-p-right"><p><a>{{item.customer}}</a>人想要</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- 商家信息与关注 -->
                    <div class="p-msg">
                        <div class="p-msg-left">
                            <div class="p-msg-left-img">
                                <img :src="Hphoto_url" alt="">
                            </div>
                            <p>丁晓瑞</p>
                        </div>
                        <div>
                            <div class="p-msg-right">
                                <a href="javascript:;" class="btn btn-focus">+ 关注</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
    </div>
</template>

<script>
	import Carousel from "../components/Carousel.vue"
	import search from "../components/search.vue"
    export default{
        data(){
            return {
               module:[
                    {
                        title:"酷炫电脑",
                    },
                    {
                        title:"手机一族",
                    },
                ],
                p71:[
                    {p2img_url:require("../../public/images/details/素材/1_0.png")},
                    {p2img_url:require("../../public/images/details/素材/1_3.png")},
                    
                ],
                p72:[
                    {p2img_url:require("../../public/images/details/素材/1_1.png")},
                    {p2img_url:require("../../public/images/details/素材/1_4.png")},
                ],
                p73:[
                    {p2img_url:require("../../public/images/details/素材/1_2.png")},
                    {p2img_url:require("../../public/images/details/素材/1_5.png")},
                ],
                list:[
                    { 
                        
                        intro:"华为【Nova4】1111111111111111111111111111111111111111111111111111111111111111",
                        price:"2000.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_0.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                    {
                        intro:"智能数码相机",
                        price:"2500.00",
                        customer:"12",
                        Hphoto_url:require("../../public/images/details/素材/0_0.png"),
                        Pphoto_url:require("../../public/images/details/素材/0_1.png")
                    },
                ]
            };
        },
		components: {
            Carousel,
            search
		}
    }
</script>
<style lang="stylus">
.p-7-img{
    width:1192px;
    height:550px;
    margin 0 auto;
    // border 1px solid red;
    margin-top:610px;
}   
.p-7-left{
    float:left;
    width:335px;
    height:100%;
    // border:1px solid green;
    background: linear-gradient(45deg, #c4e4ff, #91ccff);
}
.p-7-right{
    float :left;
    width:270px;
    height:100%;
    // border:1px solid yellow;
    margin-left:15px;
}
.p-7-right-2{
    width:100%;
    height:49%;
    // border:1px solid pink;
    margin-bottom:10px;
    background: linear-gradient(45deg, #c4e4ff, #91ccff);
}
.p-7-right-img{
    width:100%;
    height:100%;
    // border:1px solid red;
    margin 0 auto;
}
.p-7-right-img>img{
    width:270px;
    height:80%;
    margin-top:10%;
}
.title{
    width:1180px;
    height:68px;
    border-bottom:1px solid black;
    margin 0 auto;
    margin-top:60px;
    margin-bottom:30px;
}
.title-div{
    float:left;
    width:250px;
    height:100%;
    padding-bottom:19px;
    border-bottom:5px solid black;
}
.title-div>a{
    font-size:40px;
    font-weight:bold;
    float:left;
}
.p-list{
    width:1199px;
    height:672px;
    margin:0 auto;
    // border:1px solid red;
    padding-left:9px;
}
.products{
    width:228px;
    height:330px;
    background:#ffffff;
    margin-right:10px;
    margin-bottom:10px;
    float:left;
}
.products-img{
    margin:0 auto;
    width:150px;
    height:150px;
    // border:1px solid red;
    margin-top:20px;
}
.products-img>img{
    width:150px;
    height:150px;
}
table{
    width:180px;
    height:96px;
    // border:1px solid red;
    margin:0 auto;
}
.td-top{
    // border:1px solid green;
    height:30px;
    padding-bottom:37px;
}

.td-left{
    float:left;
}
.td-p-right{
    float:right;
    // width:50px;
}
.td-left>p{
    color:red;
    font-size:16px;
}
.td-p-right>p{
    color:#999999;
    font-size:12px;
}
.p-msg{
    width:100%;
    height:60px;
    // float:bottom;
    border-top:1px solid #f5f5f5;
}
.p-msg-left,.p-msg-right{
    width:49%;
    height:100%;
    // border:1px solid green;
    float:left;
}
.p-msg-left-img{
    width:30px;
    height:30px;
    margin-left:22px;
    margin-top:12px;
    float:left;
    border:1px solid black;
    border-radius:50%;
}
.p-msg-left>p{
    width:112px;
    line-height:56px;
}
.p-msg-right{
    float:right;
    padding-top:16px;
}
.btn-focus{
    width:70px;
    height:25px;
    color:#333333;
    font-size:12px;
    border:1px solid #333333;
    line-height:10px;
    float:right;
    margin-right:11px;
}
.btn-focus:hover{
    color:red;
    border:1px solid red;
}
.td-top-p-intro{
    width:180px;
    height:45px;
    overflow: hidden;  /*溢出隐藏*/
    text-overflow: ellipsis; /*以省略号...显示*/
    -webkit-line-clamp: 2;
    word-break:break-all;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    padding:0;
    color:#999999;
    font-size:12px;
}
.td-top-p-intro:hover{
    color:#999999;
}
</style>
