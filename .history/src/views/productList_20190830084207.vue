--<template>
    <div>
        <my-header/>
        <!-- 这是轮播 -->
		<Carousel/>
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
			Carousel
		}
    }
</script>
<style lang="stylus">
    
</style>
