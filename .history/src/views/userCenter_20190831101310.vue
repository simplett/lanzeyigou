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
                <!-- 左边的头像、用户姓名和个人介绍 -->
                <div class="intro-img-msg">
                    <!--  -->
                    <div class="intro-img">

                    </div>
                    <div class="intro-msg">

                    </div>
                </div>
            </div>
            <div class="p-c-body-gg">

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
    height:177px;
    background:#cfc;
    position:relative;
}
.p-c-body{
    width:1180px;
    // height:500px;
    margin:0 auto;
    // border:1px solid red;
}
.person-list{
    width:22%;
    height:500px;
    background:silver;
    float:left;
}
.person-msg{
    width:55%;
    height:177px;
    float:left;
    // border:1px solid green;
}
.p-c-body-gg{
    width:20%;
    height:177px;
    float:left;
    border:1px solid red;
}
.content{
    width:75%;
    height:500px;
    float:left;
    border:1px solid yellow;
}
.intro-img-msg{
    width:50%;
    height:177px;
    float:left;
    border:1px solid #fcc;
}
.intro-img{
    width:50%;
    height:177px;
    float:left;
    border:1px solid red;    
}
.intro-msg{
    width:50%;
    height:177px;
    float:right;
    border:1px solid #ccf;
}
</style>
