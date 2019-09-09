<template>
    <div>
		<my-header />
		<!-- 搜索 -->
		<search />	
		<!-- 用户介绍 -->
	</div>
</template>

<script >
import search from "../components/search.vue"
export default {
    data () {
        return {}
	},
    components:{
		search
    }
	
}
</script>
<style lang="stylus" scoped>

</style>