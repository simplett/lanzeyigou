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
                    <!-- 头像 -->
                    <div class="intro-img">
                        <img src="" alt="">
                    </div>
                    <!-- 姓名、介绍 -->
                    <div class="intro-msg">
                        <h2>丁晓瑞</h2>
                        <el-autocomplete
                            popper-class="my-autocomplete"
                            v-model="state"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入内容"
                            @select="handleSelect">
                            <i
                                class="el-icon-edit el-input__icon"
                                slot="suffix"
                                @click="handleIconClick">
                            </i>
                            <template slot-scope="{ item }">
                                <div class="name">{{ item.value }}</div>
                                <span class="addr">{{ item.address }}</span>
                            </template>
                            </el-autocomplete>
                    </div>
                </div>
                <!-- 右边的电话号码和邮箱 -->
                <div class="intro-pho-em">
                    <div class="pho-em">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
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
    background:#f2f2f2;
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
    // border:1px solid #fcc;
}
.intro-pho-em{
    width:50%;
    height:177px;
    float:right;
    border:1px solid #fcc;    
}
.intro-img{
    width:136px;
    height:136px;
    float:left;
    // border:1px solid red;   
    border-radius:50%; 
    margin-left:10px;
    margin-top:20px;
    background:#bfbfbf;
}
.intro-msg{
    width:50%;
    height:177px;
    float:right;
    border:1px solid #ccf;
}
.pho-em{
    width:60%;
    height:177px;
    margin:0 auto;
    boder:1px solid red;
}
</style>
