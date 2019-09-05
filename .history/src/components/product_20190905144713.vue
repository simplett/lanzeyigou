<template>
    <div class="g-l-p">
        <div class="g-l-p-title">
            <!-- 头像 -->
            <div class="g-l-hp">
                <img :src="item.image" :data-uid="item.uid" />
            <!-- 用户名 -->
                <p>{{item.nickname}}</p>
            </div>
            <div class="g-l-right">
                <a class="btn g-l-right-btn-focus" @click="concern(item.uid)" :data-uid="item.uid">+ 关注</a>
            </div>
            <p class="p-introduce">{{item.pname}}</p>
            <div class="g-l-product">
                <img :src="item.pimages" :data-pid="item.pid" alt />
            </div>
            <div class="g-l-table">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img class="td-right" src="../../public/images/浏览眼睛.png" />
                                <p class="td-right">{{item.watched}}人浏览</p>
                            </td>
                            <td>
                                <span>12人想要</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="td-right td-red">￥{{item.price}}</p>
                            </td>
                            <td>
                                <a :data-pid="item.uid" class="btn td-btn-focus">我想要</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
	  return 
  }
</script>
<style scoped>
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
</style>