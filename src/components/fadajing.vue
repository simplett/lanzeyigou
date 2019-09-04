<template>
  <div>
    <div class="move" @mouseover="over()" @mouseout="out()" @mousemove="move($event)">
      <div id="small">  //小图片以及遮罩层容器
        <div id="float"></div>  //遮罩层
        <img :src="item" id="smallimg">  //需要放大的图片
      </div>
    </div>
    <div id="big">
      <img :src="item">    //放大以后的图片
    </div>
  </div>
</template>

<script>
  var float,smallimg,big,bigImg,small,float_maxJL_t,float_maxJL_l,bigImg_maxJL_t,bigImg_maxJL_l;

  export default{
    props: {
      item: {
        type: String
      }
    },
    data() {
     return{
     }
    }, 

    mounted(){
      float = document.getElementById("float"); //左侧遮罩层
      smallimg = document.getElementById("smallimg"); //左边的小图
      big = document.getElementById("big"); //右侧可视区域
      bigImg = big.getElementsByTagName("img")[0]; //右侧大图
      small = document.getElementById("small");// 左侧的容器

      //得到右侧可视区的宽高
      var bigW = big.clientWidth;
      var bigH = big.clientHeight;

      //右侧大图的宽高
      var bigImgW = bigImg.offsetWidth;
      var bigImgH = bigImg.offsetHeight;

      //左侧的小图的宽高
      var smallImgW = smallimg.offsetWidth;
      var smallImgH = smallimg.offsetHeight;

      //左侧遮罩层的宽高
      float.style.width =  bigW/bigImgW * smallImgW + "px";   //175
      float.style.height = bigH/bigImgH * smallImgH/3*2 + "px";     

      //遮罩层运动的最大距离
      float_maxJL_l = small.clientWidth -float.offsetWidth-10;
      float_maxJL_t = small.clientHeight - float.offsetHeight-5;

      //右侧图片运动的最大距离
      bigImg_maxJL_l = bigImg.clientWidth - big.offsetWidth;
      bigImg_maxJL_t = bigImg.clientHeight - big.offsetHeight;

      big.style.display = "none";
      float.style.visibility ="hidden"; //鼠标未移入左侧区域使遮罩层以及右侧大图均不可见
    },

    methods: {
    //鼠标移入左侧区域使遮罩层以及右侧大图可见
      over: function () {
        float.style.visibility ="visible";
        big.style.visibility ="visible";
        big.style.display = "block";
      }, 

      //鼠标移出左侧区域使遮罩层以及右侧大图不可见
      out: function () {
        float.style.visibility ="hidden";
        big.style.display = "none";
      }, 

      //鼠标移动时遮罩层随鼠标的移动而移动
      move: function (ev) {
        var l = ev.clientX  - small.offsetLeft - float.offsetWidth/2;
        var t = ev.clientY  - small.offsetTop - float.offsetHeight/2;

        if( l < 0 ) l = 0;     // 超出左边界赋值为0
        if( t < 0 ) t = 0;     // 超出上边界赋值为0

        if( l > float_maxJL_l ) l = float_maxJL_l;  //限制其运动范围在容器之内
        if( t > float_maxJL_t ) t = float_maxJL_t;

        //求出来一个比例
        var scaleL = l/float_maxJL_l;
        var scaleT = t/float_maxJL_t;

         //遮罩层运动位置
        float.style.left = l + "px";
        float.style.top = t + "px"; 

         //右侧大图运动位置
        bigImg.style.left = -scaleL * bigImg_maxJL_l + "px";
        bigImg.style.top = -scaleT * bigImg_maxJL_t + "px";
      },
    },
  }
</script>

//css样式
<style lang="css" rel="stylesheet/css" scoped>
 /* @import 'src/assets/scss/variable.scss'; */
  #float {
    width: 120px;
    height: 120px;
    position: absolute;    
    background: $primary;
    border: 1px solid #ccc;
    opacity: 0.5;
    cursor:move ;
  }
  #big {
    position: absolute;  
    top: 260px;
    left: 37.6%;
    width: 350px;
    height: 500px;
    overflow: hidden;
    border: 1px solid #ccc;
    background: #ffffff;
    z-index: 1;
    visibility: hidden;
  }
  #small {
    position: relative;  
    z-index: 1;
    img{
      width:340px;
      height:320px;
    }
  }
  #big img {
    position: absolute;  
    z-index: 5;
    width:700px;
    height:700px;
  }
</style>