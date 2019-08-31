<template>
<div>
    <my-header/>
    <!-- 搜索 -->
    <search/>
    <!-- 个人中心 -->
    <div class="bg-green">
        <div class="person-list">

        </div>
        <div class="person-msg">

        </div>
    </div>
</div>
</template>

<script>

	import search from "../components/search.vue"
    export default{
        data(){
            return {}
        },
        components:{
            search
        }
    }
</script>
<style lang="stylus">
.bg-green{
    width:100%;
    height:117px;
    background:#cfc;
    position:relative;
}
.person-list{
    width:;
    height:;
    background:;
}
.person-msg{
    width:;
    height:100%;
}
</style>
