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
                         <el-row class="demo-avatar demo-basic">
                        <el-col span="12">
                            <div class="demo-basic--circle">
                                <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                            </div>
                        </el-col>  
                    </el-row>
                    </div>
                   
                    <!-- 姓名、介绍 -->
                    <div class="intro-msg">
                        <h3>丁晓瑞</h3>
                        <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入您的个人签名"
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
                            <li><img src="" alt=""><p>绑定手机</p></li>
                            <li></li>
                            <li><img src="" alt=""><p>绑定邮箱</p></li>
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
            return {
                restaurants: [],
                state: '',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                sizeList: ["large"]
            };
        },
         methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            },
            handleIconClick(ev) {
                console.log(ev);
            }
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
    padding-top:35px;
}
.pho-em{
    width:60%;
    height:177px;
    margin:0 auto;
    boder:1px solid red;
    padding-top:30px;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.el-input--suffix .el-input__inner {
    padding-right: 30px;
    border: 0px;
    background: #f2f2f2;
}
</style>
