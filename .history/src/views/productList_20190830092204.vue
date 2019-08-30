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
        <div class="kx-title">
            <div>
                <a>酷炫电脑</a>
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
.kx-title{
    width:;
    height:;
}
</style>
