--<template>
    <div>
        <!-- 页头 -->
        <my-header/>
        <!-- 搜索 -->
        <search/>
        <!-- 这是轮播 -->
		<Carousel/>
        <!--  -->
        <div class="">
            <div></div>
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
    
</style>
