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
    width:;
    height:;
    margin 0 auto;
}   
</style>
