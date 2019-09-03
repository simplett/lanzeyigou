<template>
<div>
    <my-header/>
    <!-- 搜索 -->
    <search/>
    <!-- 个人中心 -->
    <div class="bg-green">
        <div class="p-c-body">
            <div class="person-list">
                <!-- 个人中心 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/fangzi.png" alt="">
                    <p>个人中心</p>
              </div>
              <!-- 收藏与关注 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/shoucang.png" alt="">
                    <p>收藏与关注</p>
              </div>
              <!-- 聊天 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/liaotian.png" alt="">
                    <p>聊天</p>
              </div>
              <!-- 评论 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/pinglun.png" alt="">
                    <p>评论</p>
              </div>
              <!-- 账号中心 -->
              <div class="person-list-5">
                  <img src="../../public/images/usercenter/zhanghao.png" alt="">
                    <p>账号中心</p>
              </div>
            </div>
            
            <div class="person-msg">
                <!-- 左边的头像、用户姓名和个人介绍 -->
                <div class="intro-img-msg">
                    <!-- 头像 -->
                    <div class="intro-img">
                        <img src="../../public/images/喜欢小banner.png" alt="">
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
                            <li><p>{{phone}}</p></li>
                            <li><img src="" alt=""><p>绑定手机</p></li>
                            <li><p>{{email}}</p></li>
                            <li><img src="" alt=""><p>绑定邮箱</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="p-c-body-gg">

            </div>
            <div class="content">
                <div class="content-title">
                    <div>
                        <img src="../../public/images/usercenter/shoucang.png" alt="">
                        <p>收藏与关注</p>
                    </div>
                </div>
                <!--  -->
                <div class="content-b">
                    <div class="g-l-p">
                        <div class="g-l-p-title">
                            <!-- 头像 -->
                            <div class="g-l-hp">
                                <img src="../../public/images/喜欢小banner.png" />
                            <!-- 用户名 -->
                                <p>qwe</p>
                            </div>
                            <div class="g-l-right">
                                <a class="btn g-l-right-btn-focus">已关注</a>
                            </div>
                            <p class="p-introduce">流浪狗收容所求收养哈士奇</p>
                            <div class="g-l-product">
                                <img src="../../public/images/details/素材/0_0.png"/>
                            </div>
                            <div class="g-l-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img class="td-right" src="../../public/images/浏览眼睛.png" />
                                                <p class="td-right">12人浏览</p>
                                            </td>
                                            <td>
                                                <span>12人想要</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="td-right td-red">￥1200.00</p>
                                            </td>
                                            <td>
                                                <a class="btn td-btn-focus">我想要</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        data(){
            return {
                restaurants: [],
                state: '',
                activeName: '1'
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
    }
</script>
<style lang="stylus">
.bg-green{
    width:100%;
    height:177px;
    background:#ccffcc;
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
    height:700px;
    float:left;
    background:#f5f5f5;
    border:1px solid #c0c0c0;
    // margin-top:-50px;
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
    // border:1px solid yellow;
    padding-left:10px;
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
    // border:1px solid #fcc;    
}
.intro-img{
    width:136px;
    height:136px;
    float:left;  
    margin-left:10px;
    margin-top:20px;
    // background:#bfbfbf;
}
.intro-img img{
    width:100%;
    height:100%;
    // border:1px solid red; 
    border-radius:50%; 
}
.intro-msg{
    width:50%;
    height:177px;
    float:right;
    // border:1px solid #ccf;
    padding-top:45px;
}
.pho-em{
    width:60%;
    height:177px;
    margin:0 auto;
    // boder:1px solid red;
    
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
.content-title{
    width:100%;
    height:60px;
    background:#c0c0c0;

}
.content-title>div{
    width:250px;
    height:100%;
    // border:1px solid red;
    float:left;
    // padding-left:0;
}
.content-title>div>img{
    margin:20px;
    float:left;
    margin-left:30px; 
}
.content-title>div>p{
    font-size:26px;
    font-weight:bold;
    float:left;
    padding:0;
    line-height:60px;
}

.content-b{
    width:100%;
    height:90%;
    // border:1px solid red;
    padding-top:10px;
}
.person-list-5{
    width:90%;
    height:72px;
    // padding-left:20px;
    padding-top:30px;
    margin:0 auto;
    border-bottom:1px solid #c0c0c0;
}
.person-list-5>img,.person-list-5>p{
    float:left;
}
.person-list-5>img{
    width:24px;
    margin-right:20px;
}
.person-list-5>p{
    font-size:22px;
    padding:0;
    line-height:100%;
}
.person-list-a-2{
    width:85%;
    height:42px;
    // border:1px solid red;
    margin:0 auto;
    margin-top:5px;
    margin-bottom:40px;
    // padding-bottom:10px;
}
.person-list-a-2>div{
    // border:1px solid red;
    padding-left:0;
}
.person-list-a-2>div a{
    float:left;
}
.g-l-p{
    width:280px;
    height:420px;
    /* border: 1px solid green; */
    background: #FFFFFF;
    margin-bottom: 22px;
    margin-right: 22px;
    float: left;
}
.g-l-p-title{
    width:240px;
    height:380px;
    /* border: 1px solid yellow; */
    margin: 0 auto;
}
.g-l-hp{
    width:100%;
    height:70px;
    /* border: 1px solid red; */
    float: left;
    border-bottom: 1px solid #f5f5f5;
    /* border-radius:50%; */
    margin-top:10px;
}
.g-l-hp>img{
    float: left;
    width: 40px;
    /* margin-left:20px; */
    margin-top: 20px;
    margin-bottom:10px;
    border-radius: 50%;
}
.g-l-right{
    float: right;
    margin-top: -38px;
    /* margin-right:20px; */
    /* border: 1px solid red; */
    width:50px;
    height:20px;
}
/* .g-l-right>a{
    color:red;
    font-weight: bold;
    margin-top: -10px;
    font-size: 14px;
    margin-left: -14px;
} */
.g-l-hp>p{
	margin-top: 25px;
	width: 100px;
}
.g-l-product{
    width: 100%;
    height: 200px;
    /* border: 1px solid red; */
    background:#f2f2f2;
    margin-top:10px;
}
.g-l-product>img{
    width: 100%;
    height:100%;
}
/* .g-l-p-title>p{
    margin: 0;
} */
.g-l-table{
    width: 100%;
    height:80px;
    /* border:1px solid green; */
}
.g-l-table>table{
    width: 100%;
    height:80px;
    /* border:1px solid green; */
    padding:0;
    margin:0;
}
p,span{
    padding:0;
    margin:0;
    font-size:12px;
}
.td-right{
    float: left;
    margin-left:7px;
}
td>img{
    margin-top: 3%;
}
td>span{
    color:#999999;
    margin-left: 30%;
}
.td-red{
    color:red;
    font-weight: bold;
    font-size:11px;
}
.g-l-right-btn-focus{
    width:60px;
    height:25px;
    font-size:12px;
    line-height:25px;
    margin-top: -20px;
    padding:0px;
    color:#ffffff !important;
    border:0;
    border-radius:0;
    background:red;
}
.td-btn-focus{
    width:90px;
    height:25px;
    font-size:11px;
    line-height:10px;
    margin-top: 10px;
    margin-left: 10%;
    border: 1px solid black;
}
.td-btn-focus:hover{
    color:#fff;
    border:0;
    background: #e31c1c;
}
</style>
