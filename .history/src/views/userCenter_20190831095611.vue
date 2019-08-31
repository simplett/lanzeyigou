<template>
<div>
    <my-header/>
    <!-- 搜索 -->
    <search/>
    <!-- 个人中心 -->
    <div class="bg-green">
        <div class="p-c-body">
            <div class="person-list">

            </div>
            <div class="person-msg">

            </div>
            <div class="content">

            </div>
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
.p-c-body{
    width:1180px;
    // height:500px;
    margin:0 auto;
    border:1px solid red;
}
.person-list{
    width:200px;
    height:500px;
    background:silver;
    float:left;
}
.person-msg{
    width:670px;
    height:117px;
    float:left;
    border:1px solid green;
}
.content{
    width:83%;
    height:500px;
    float:left;
    border:1px solid yellow;
}
</style>
