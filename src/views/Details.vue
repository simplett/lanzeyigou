<!--商品详情页面-->
<template>
    <div class="details">
        <!-- 页头 -->
        <div class="logo-icon">
            <div class="logo">
                <img src="../../public/images/details/logo.png" alt="蓝沢logo">
            </div>
            <div class="search">
                <input type="text" placeholder="蓝沢搜索：请输入关键字">
                <img src="../../public/images/details/search.png" alt="">
            </div>
        </div>
        <!-- 广告图片 -->
        <div class="det-img">
            <img src="../../public/images/details/1-1.png">
        </div>
        <!-- 商品详情 -->
        <div class="det-pro"> 
            <!-- 商品图片展示 -->
            <div class="pro-img">
                <div class="l-img">
                    <img src="../../public/images/details/1_0.png" 
                    style="width:100%;height:100%;">
                </div>
                <div class="s-img">
                    <!-- 小图片 -->
                    <div class="pro-list">
                        <ul>
                            <li><a href="#">
                                <img src="../../public/images/details/1_0.png"></a></li>
                            <li><a href="#">
                                <img src="../../public/images/details/1_0.png"></a></li>
                            <li><a href="#">
                                <img src="../../public/images/details/1_0.png"></a></li>
                            <li><a href="#">
                                <img src="../../public/images/details/1_0.png"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 商品详情信息介绍 -->
            <div class="pro-detail">
                <div class="detail-text" style="margin-right:20px;">
                    <!-- 商品信息 -->
                    <div class="info-text">
                        <div class="pname">
                           化妆品拍摄美妆高端拍摄
                        </div><br>
                        <div class="x-price">
                            售&nbsp;价 :￥<b style="color:red;font-size:18px;">300.00</b>
                        </div><br>
                        <div class="y-price">来&nbsp;自 :蓝沢易购</div>
                    </div>
                    <hr style="margin:0">
                    <!-- 商品发布地 -->
                    <div class="pro-address">
                        <div class="address">所在地 : 广东东莞</div><br>
                        <div>联系方式 : 
                            <a href="#"><img src="../../public/images/details/lianxi.png" 
                            style="margin-left:10px;"></a></div><br>
                        <div>交易方式 : 
                            <a href="#"><img src="../../public/images/details/pay.png"
                            style="margin-left:10px;"></a>
                        </div><br>
                        <button class="btn btn-danger buy-btn">立即购买</button><br>
                        <br>
                        <button class="share" style="margin-right:20px;">收藏(3)</button>
                        <button class="zan">点赞(12)</button>
                    </div>
                </div>
            </div>
            <!-- 发布者信息 -->
            <div class="pro-people">
                <div class="people-text">
                    <div class="peo-text">
                        <!-- 发布者头像 -->
                        <div class="peo-img">
                            <img src="../../public/images/details/1-1.png" 
                            style="width:100%;height:100%;border-radius:50%;"> 
                        </div>
                        <!-- 发布者详情信息 -->
                        <div class="peo-detail">
                            <div class="name">
                                丁晓瑞
                                <a href="#" style="button" class="btn btn-danger">关注</a>
                            </div><br>
                            <div class="peo-address">
                                云南昆明
                                </div><br>
                            <div class="time">信用分:100分</div>
                        </div>
                    </div>
                    <div style="margin:20px;font-size:16px;
                        text-align:left;"><b>转卖单数&nbsp;:&nbsp;12单</b></div>
                    <div style="text-align:left;margin:0 20px;">评价指数&nbsp;:&nbsp;35人评价</div>
                    <div  style="text-align:left;margin:20px">性价比&nbsp;:&nbsp;4.7</div>
                    <hr style="margin:0;">
                    <div style="color:#999;text-align:left;margin:20px 20px 0">
                        宝贝浏览次数&nbsp;:&nbsp;<span style="color:#333">67次</span></div>
                    <div style="color:#999;text-align:left;margin:2px 20px">
                        最近编辑时间&nbsp;:&nbsp;<span style="color:#333">2019-08-27 &nbsp; 10:28</span></div>
                    <div style="margin:20px 20px 0;
                    text-align:left;font-size:20px"><b>宝贝介绍：</b></div>
                    <div style="text-align:left;margin:0 20px;">高端美妆洗发水，刚拿的好货，有感兴趣的亲亲请留言哦!</div>
                </div>
            </div>
        </div>
        <!-- 商品留言评价 -->
        <div class="title">
            <ul class="title-nav nav-tabs">
                <li class="nav-item1">
                    <a href="#tab1" data-toggle="tab"
                     class="nav-link active">留言</a>
                </li>
                <li class="nav-item2">
                    <a href="#tab2" data-toggle="tab" class="nav-link">商家其他发布(7)</a>
                </li>
            </ul>
            
            <div class="tab-content">
                <!-- 留言页面 -->
                <div id="tab1" class="tab-pane active">
                    <!-- 警示区域 -->
                    <div>如果遇到以下情况可能会是诈骗行为:
                        <span  style="color:#f00;font-size:14px;">
                            1、宝贝价格异常低;
                            2、卖家要求其他方式沟通;
                            3、卖家要求直接汇款。
                        </span>
                        <b>寻求防骗经验</b>
                    </div>
                    <!-- 留言区域 -->
                    <div class="title-text">
                        <input type="text">
                    <button class="btn" >留言</button>
                    </div>
                    <hr style="color:#f4f4f4;margin-bottom:0px;">
                    <div class="title-msg">
                        <div style="text-align:left;font-size:20px;
                        margin-bottom:10px;"><b>全部留言</b></div>
                        <div class="msg">
                            <!-- 多个客户留言区域 -->
                            <div class="msg-img">
                                <img src="../../public/images/details/1-1.png">
                            </div>
                            <div class="msg-text">
                                <div class="msg-name">
                                    <b style="margin-right:30px;">宇宙无敌小丸子</b>
                                    <span>1小时前</span>
                                </div>
                                <div class="msg-info">
                                    <span>
                                        喜欢好久的商品了，在某宝上面看好久了，妈耶，但是太贵了，
                                        今天在这里看到，还么便宜，爱了！
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 用户留言显示结束 -->
        <!-- ****************************************** -->
        <!-- 该部分为商家发布的其他商品展示移动至22222222222222位置 -->
                        <div class="pro-show">
                            <div class="pro-item">
                                <div class="item-detail">
                                    <div class="item-img">
                                        <div class="img-icon"><img src="../assets/logo.png"></div>
                                        <div class="item-name">
                                            <span style="font-size:14px;
                                            color:#333;margin-top:20px;">李希</span><br>
                                            <span style="color:#999;">1小时前</span>
                                        </div>
                                    </div>
                                    <hr style="margin:0">
                                    <div class="product">
                                        <span style="margin:10px;">
                                            高端产品，廉价出售
                                            大牌产品高价入手低价出货</span>
                                        <div class="product-img">
                                            <img src="../../public/images/details/1_0.png"
                                            style="width:100%;height:100%;">
                                        </div>
                                    </div>
                                    <div class="pro-price">
                                        <span style="color:red;">
                                            <b>￥3569.00</b></span>
                                        <span style="color:#999;
                                        margin-left:60px;"> 云南&nbsp;&nbsp;昆明</span>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-item">
                                <div class="item-detail">
                                    <div class="item-img">
                                        <div class="img-icon"><img src="../assets/logo.png"></div>
                                        <div class="item-name">
                                            <span style="font-size:14px;
                                            color:#333;margin-top:20px;">李希</span><br>
                                            <span style="color:#999;">1小时前</span>
                                        </div>
                                    </div>
                                    <hr style="margin:0">
                                    <div class="product">
                                        <span style="margin:10px;">
                                            高端产品，廉价出售
                                            大牌产品高价入手低价出货</span>
                                        <div class="product-img">
                                            <img src="../../public/images/details/1_0.png"
                                            style="width:100%;height:100%;">
                                        </div>
                                    </div>
                                    <div class="pro-price">
                                        <span style="color:red;">
                                            <b>￥3569.00</b></span>
                                        <span style="color:#999;
                                        margin-left:60px;"> 云南&nbsp;&nbsp;昆明</span>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-item">
                                <div class="item-detail">
                                    <div class="item-img">
                                        <div class="img-icon"><img src="../assets/logo.png"></div>
                                        <div class="item-name">
                                            <span style="font-size:14px;
                                            color:#333;margin-top:20px;">李希</span><br>
                                            <span style="color:#999;">1小时前</span>
                                        </div>
                                    </div>
                                    <hr style="margin:0">
                                    <div class="product">
                                        <span style="margin:10px;">
                                            高端产品，廉价出售
                                            大牌产品高价入手低价出货</span>
                                        <div class="product-img">
                                            <img src="../../public/images/details/1_0.png"
                                            style="width:100%;height:100%;">
                                        </div>
                                    </div>
                                    <div class="pro-price">
                                        <span style="color:red;">
                                            <b>￥3569.00</b></span>
                                        <span style="color:#999;
                                        margin-left:60px;"> 云南&nbsp;&nbsp;昆明</span>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-item">
                                <div class="item-detail">
                                    <div class="item-img">
                                        <div class="img-icon"><img src="../assets/logo.png"></div>
                                        <div class="item-name">
                                            <span style="font-size:14px;
                                            color:#333;margin-top:20px;">李希</span><br>
                                            <span style="color:#999;">1小时前</span>
                                        </div>
                                    </div>
                                    <hr style="margin:0">
                                    <div class="product">
                                        <span style="margin:10px;">
                                            高端产品，廉价出售
                                            大牌产品高价入手低价出货</span>
                                        <div class="product-img">
                                            <img src="../../public/images/details/1_0.png"
                                            style="width:100%;height:100%;">
                                        </div>
                                    </div>
                                    <div class="pro-price">
                                        <span style="color:red;">
                                            <b>￥3569.00</b></span>
                                        <span style="color:#999;
                                        margin-left:60px;"> 云南&nbsp;&nbsp;昆明</span>
                                    </div>
                                </div>
                            </div>
                        </div>
        <!-- *********************************************** -->
                    </div>
                </div>
                <!-- 商家发布其他商品页面 -->
                <div id="tab2" class="tab-pane">
                    222222222222222222222222222
                </div>
                <!-- 商品显示结束 -->
            </div>
        </div>
        <!-- 页尾 -->
        <div></div>
        
    </div>
</template>
<script>

</script>
<style scoped>
/* ********************************************************** */
/* 商家发布商品其他信息 */
.pro-show{
    width:1120px;height:400px;
    /* border:1px solid red; */
    background:#e5e5e5;
     
}
.pro-show>.pro-item{
    width:280px;height:379px;
    float: left;
}
.pro-show>.pro-item>.item-detail{
    width:240px;height:339px;
    background:#fff;
    margin:20px auto;
}
/* 发布者信息 */
.pro-show>.pro-item>.item-detail>.item-img{
    width: 240px;height:70px;
    /* border:1px solid yellow; */
}
.pro-show>.pro-item>.item-detail>.item-img>.img-icon{
    width:40px;height:40px;
    margin:15px 10px;
    border-radius: 50%;
    float: left;
}
.pro-show>.pro-item>.item-detail>.item-img>.item-name{
    width:150px;height:70px;
    text-align: left;
    float: left;
    padding: 10px ;
}
.pro-show>.pro-item>.item-detail>.item-img>span{
     margin: 10px auto;
}
.pro-show>.pro-item>.item-detail>.item-img>.img-icon>img{
    width:40px;height:40px;
    border-radius: 50%;
}
/* 商品展示 */
.pro-show>.pro-item>.item-detail>.product{
    width: 240px;height:220px;
}
/* 商品图片 */
.pro-show>.pro-item>.item-detail>.product-img{
    width: 240px;height:200px;
    margin:0;
}
/* 底部价格以及位置 */
.pro-show>.pro-item>.item-detail>.pro-price{
    margin: 10px auto;
}
/* ********************************************************** */
    .details{
        background-color: #f5f5f5;
    }
     /* *************************搜索栏宽高************** */
    .logo-icon{
        width:1180px;
        height:110px;
        margin:0 auto;
        /* border:1px solid red; */
        position: relative;
    }
    .logo{
        /* logo图片的宽高 */
        float:left;
        width:285px;
        height:100px;
        line-height: 100px;
        position: absolute;
        padding-left: 30px;
        margin-top: 5px;
        /* border:1px solid blue; */
    }
    .search{
        width:500px;height:70px;
        line-height: 70px;
        /* position: absolute; */
        float: right;
        /* border:1px solid yellow; */
        margin-top: 30px;
        margin-right:130px;
    }
    .search>input{
        /* 搜索框的宽高 */
        height:50px;
        width:100%;
        float: right;
        vertical-align: middle;
        border-radius: 5px;
    }
    /* 放大镜 */
    .search>img{
        float: right;
        margin-top:-33px;
        margin-right:20px;
    }
    /* ******************广告图片div************************ */
    .det-img{
        width:1180px;height:150px;
        margin:0 auto;
        margin-bottom: 30px;
    }
    /* 广告图片宽高 */
    .det-img>img{
        width:100%;height:100%;
    }
    /************************** 商品详情********************* */
    .det-pro{
        margin-top: 20px;
        width:1180px;height:500px;
        margin: 0 auto;
    }
    /* 商品详情左侧图片 */
    .det-pro>.pro-img{
        float: left;
        width: 450px;height:100%;
        /* border:1px solid yellow; */
    }
    /* 左侧图片大图 */
    .det-pro>.pro-img>.l-img{
        width: 90%;height:70%;
        margin: 10px 5%;/*图片距离外边框的距离*/
        /* 大图背景颜色设置 */
        /* background-color: #ddd; */
    }
    /* 装小图片的div */
    .det-pro>.pro-img>.s-img{
        width:100%;height:80px;
        /* border:1px solid black; */
        position: relative;
        margin: 0 0 10px;
    }
    /* 小图列表 */
    .s-img>.pro-list>ul>li{
        list-style: none;
        width:70px;height:80px;
        /* border:1px solid red; */
        float: left;
        /* 小图片之间的间隔 */
        margin-right:10px;
        text-align: center;
        vertical-align:middle;
    }
    /* 小图所占宽高 */
    .pro-list ul li img{
        width:70px;height:80px;
    }
    /* 商品详情介绍 */
    .det-pro>.pro-detail{
        float: left;
        text-align: left;
        width: 30%;height:100%;
        /* border:1px solid red; */
    }
    .det-pro>.pro-detail>.detail-text,
    .det-pro>.pro-people>.people-text{
        width:100%;height:478px;
        margin:10px 0; 
        background: #fff;
    }
    .det-pro>.pro-people{
        float: left;
        width: 30%;height:100%;
        margin-left: 20px;
    }
    .det-pro>.pro-detail>.detail-text>.info-text{
        width:300px;height:150px;
        font-size: 16px;
        color:#333;
        padding-left: 70px;
    }
    .det-pro>.pro-detail>.detail-text>.info-text>.pname,
    .det-pro>.pro-detail>.detail-text>.pro-address>.address{
        height: 35px;
        line-height: 35px;
        padding-top: 10px;
    }
    .det-pro>.pro-detail>.detail-text>.pro-address{
        width: 300px;
        height: 328px;
        font-size: 16px;
        color:#333;
        padding-left: 70px;
    }
    /* 交易方式按钮样式 */
    button.ex-style{
        width:100px;height:30px;
        text-align:center;
        border-radius:3px;
    }
    /* 立即购买按钮样式 */
    button.buy-btn{
        color:#fff;
        font-size:20px;
        width:201px;height:40px;
        border:0;
        margin:20px 30px 30px 0;
        
    }
    /* 赞和分享的按钮样式 */
    button.share,
    button.zan{
        width:86px;height:30px;
        background:#f1f1f1;
        border-radius:3px;
    }
    .pro-people>.people-text>.peo-text{
        width:100%;height:134.8px;
         margin: 0 auto;
         /* float: left; */
    }
    .pro-people>.people-text>.peo-text>.peo-img{
        width:30%;height:104.19px;
        margin: 20px 10px;
        border-radius: 50%;
        float: left;
    }
    .pro-people>.people-text>.peo-text>.peo-detail{
        width:224.56px;height:134.8px;
        float: left;
        text-align: center;
        vertical-align: -webkit-baseline-middle;
    }
    .pro-people>.people-text>.peo-text>.peo-detail>.name{
        font-size:18px;
        height:24px;
        color:#666;
        text-align:left;
        margin-top:20px;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .pro-people>.people-text>.peo-text>.peo-detail>.name>a.btn{
        margin-right: 40px;
        border:0;
        color:#fff;
        font-size:14px;
    }
    .pro-people>.people-text>.peo-text>.peo-detail>.peo-address,
    .pro-people>.people-text>.peo-text>.peo-detail>.time{
        font-size:16px;
        color:#333;
        text-align: left;
        height:24px;
        margin-top: -10px;
    }
    /* **********************商品留言区域************************ */
    .title{
        width:1180px;height:800px;
        margin: 50px auto;
    }
    .title-nav{
        list-style: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
    }
    /* 留言框按钮的颜色设置 */
    .title-nav>.nav-item1{
        width:160px;height:40px;
        font-size:20px;
        background:#fff;
    }
    .title-nav>.nav-item1>a.active{
        width:160px;height:40px;
        background-color: #e61717;
        color: #fff;
    }
    /* 商品发布框按钮的颜色设置 */
    .title-nav>.nav-item2{
        width:267px;height:40px;
        font-size:20px;
        background:#fff;
        border-right-width: 1px solid #ddd;
    }
    .title-nav>li>a{
        color:#000;
        text-decoration: none;
        text-align: center;
    }
    
    .title-nav>.nav-item2:hover{
        background:#e61717;
        width:267px;height:40px;
    }
    /* 鼠标移入时候颜色改变 */
    .title-nav>li>a:hover{
        color:#fff;
    }
    /* 留言页面样式 */
    .tab-content{
        width:1180px;height:584px;
        padding: 0;
        margin:0;
    }
    .tab-content>#tab1{
        width:100%;
        height:760px;
        border-top-width: 1px solid #333;
        background-color: #fff;
    }
    .title-text{
        width:100%;height:200px;
        margin-bottom: 20px;
    }
    .title-text>input{
        width:1120px;height:100px;
        margin:20px auto;
        border:1px solid #ccc;
        border-radius:3px;
        background:#f4f4f4; 
    }
    .title-text>button{
        width:160px;height:50px;
        border:0.5px solid #ddd;
        color:#000;
        font-size:20px;
        float: right;
        margin-right:29px;
    }
    /* 已有留言模块 */
    .title-msg{
        width:1120px;
        height:500px;
        margin:0 auto;
    }
    .title-msg>.msg{
        width:100%;
        height:100px;
        border-bottom:1px solid #b8b1b1;
    }
    .title-msg>.msg>.msg-img{
        width:10%;height:100px;
        float: left;
        border-radius: 50%;
    }
    .title-msg>.msg>.msg-img>img{
        width: 80px;height:80Px;
        border-radius: 50%;
    }
    .title-msg>.msg>.msg-text{
        width:90%;height:100px;
        float: left;
    }
    .title-msg>.msg>.msg-text>.msg-name,
    .title-msg>.msg>.msg-text>.msg-info{
        text-align: left;
        margin-left: 10px;
        margin-top:10px;
    }
</style>