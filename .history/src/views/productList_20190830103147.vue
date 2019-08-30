--<template>
    <div>
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
                <div class="p-7-right-2">
                    <div class="p-7-right-img">
                        <img src="../../public/images/素材/1_0.png" alt="">
                    </div>
                </div>
                 <div class="p-7-right-2">

                </div>
            </div>
             <div class="p-7-right">
                <div class="p-7-right-2">

                </div>
                 <div class="p-7-right-2">

                </div>
            </div>
             <div class="p-7-right">
                <div class="p-7-right-2">

                </div>
                 <div class="p-7-right-2">

                </div>
            </div>
        </div>
        <!-- 酷炫电脑 -->
        <!-- 标题 -->
        <div class="title">
            <div class="title-div">
                <a>酷炫电脑</a>
            </div>
        </div>
        <!-- 酷炫电脑-商品列表 -->
        <div class="p-list">
            <div class="products">
                <!-- 商品图片 -->
                <div class="products-img">
                    <img src="../../public/images/素材/1_0.png" alt="">
                </div>
                <!-- 商品介绍 -->
                <table>
                    <tbody>
                        <tr>
                            <td class="td-top" colspan="2">
                                <a href="javascript:;">华为【Nova4】手机</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-left"><p>￥2000.00</p></td>
                            <td class="td-right"><p><a>12</a>人想要</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="products">

            </div>
            <div class="products">

            </div>
            <div class="products">

            </div>
            <div class="products">

            </div>

        </div>
    </div>
</template>

<script>
	import Carousel from "../components/Carousel.vue"
	import search from "../components/search.vue"
    export default{
        data(){
            return {};
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
    height:324px;
    background:#ffffff;
    margin-right:10px;
    float:left;
}
.products-img{
    margin:0 auto;
    width:150px;
    height:150px;
    border:1px solid red;
    margin-top:20px;
}
.products-img>img{
    width:150px;
    height:150px;
}
table{
    width:180px;
    height:130px;
    border:1px solid red;
    margin:0 auto;
}
td{
    border:1px solid red;
}
.td-top{
    border:1px solid green;
    height:20px;
}
.td-top>a{
    padding:0;
    color:#999999;
    font-size:12px;
    overflow:hidden; //超出的文本隐藏
    text-overflow:ellipsis; //溢出用省略号显示
    // white-space:nowrap; //溢出不换行
}
.td-left{
    float:left;
}
.td-right{
    float:right;
    // width:50px;
}
.td-left>p{
    color:red;
    font-size:16px;
}
.td-right>p{
    color:#999999;
    font-size:12px;
}
</style>
