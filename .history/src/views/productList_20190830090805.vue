--<template>
    <div>
        <!-- 页头 -->
        <my-header/>
        <!-- 搜索 -->
        <search/>
        <!-- 这是轮播 -->
		<Carousel/>
        <!--  -->
        <div class="p-7-img">
            <div class="p-7-left">

            </div>
            <div class="p-7-right">
                <div class="p-7-right-2">

                </div>
                 <div class="p-7-right-2">

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
    width:1180px;
    height:550px;
    margin 0 auto;
    border 1px solid red;
    margin-top:610px;
}   
.p-7-left{
    float:left;
    width:335px;
    height:100%;
    border:1px solid green;
}
.p-7-right{
    float :left;
    width:270px;
    height:100%;
    border:1px solid yellow;
    margin-right:15px;
    margin-bottom:10px;
}
.p-7-right-2{
    width:100%;
    height:50%;
    border:1px solid pink;
}
</style>
