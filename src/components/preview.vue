<template>
  <div id="preview" class="col pr-0">
    <div class="card bg-transparent mr-5 position-absolute">
      <img class="card-img-top" :src="imagesss[i]" alt="Card image cap" id="mImg" />
      <div id="mask" class="position-absolute d-none"></div>
      <div
        id="super-mask"
        class="position-absolute"
      ></div>
      <div
        id="div-lg"
        class="position-absolute d-none"
        :style="{'background-image':`url(${imagesss[i]})`,'background-position':bgposition}"
      ></div>
      <div class="card-body p-0 text-center">
        <img
          src="../../public/images/jt-left.png"
          class="btn float-left btn-light border-0 p-1"
          :class="{disabled:leftDisabled}"
          @click="move(-1)"
          id="btnLeft"
        />
        <div class="d-inline-block pt-2 mx-0 m-auto">
          <!-- <ul class="list-unstyled mb-0"> -->
          <ul class="list-unstyled mb-0" id="ulImgs" :style="ulStyle">
            <li v-for="(p,i) of imagesss" :key="i" class="float-left p-1" @mouseover="changei(i)">
              <div class="imageli">
                <img :src="p" />
              </div>
            </li>
          </ul>
        </div>
        <img
          src="../../public/images/jt-right.png"
          class="btn float-right btn-light border-0 p-1"
          :class="{disabled:rightDisabled}"
          @click="move(+1)"
          id="btnRight"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  porps:["imagesss"],
  data() {
    return {
      ulStyle: {
        //控制ul的样式
        width: 0,
        "margin-left": 0,
        transition: "margin-left 1.5s linear"
      },
      i: 0, //记录当前正在显示第几张图片
      times: 0 //记录左移的次数
    };
  },
//   props: ["lid"],
  computed: {
    bgposition() {
    //   var left = parseInt(this.maskStyle.left);
    //   var top = parseInt(this.maskStyle.top);
      return;
    },
    leftDisabled() {
      return this.times == 0;
    },
    rightDisabled() {
      return this.imagesss.length <= 4 || this.times == this.imagesss.length - 4;
    }
  },
  watch: {
    //监控
    times() {
      this.ulStyle["margin-left"] = -this.times * 80 + "px";
    },
    imagesss() {
      this.ulStyle.width = this.imagesss.length * 80 + "px";
    },
  },
  methods: {
    over_display(){
      
    },
    // setTimeout(() => {
    //           this.ulStyle.transition = "margin-left .5s linear";
    //         }, 50),
    move(i) {
      if (
        (i == -1 && this.leftDisabled == false) ||
        (i == 1 && this.rightDisabled == false)
      ) {
        this.times += i;
        if (this.times < 0) {
          this.times = 0;
        } else if (this.times > this.pics.length - 4) {
          this.times = this.pics.length - 4;
        }
      }
    },
    
    //当鼠标进入每个li时，修改data中i变量的值，为当前li的下标。
    changei(i) {
      this.i = i;
      //data中i改变，导致中图片的src和大图片的background-image自动同时变化。
    }
  }
};
</script>
<style lang="stylus">
.imageli{
    width: 70px !important;
    height: 80px;
    margin: auto 10px;
}
.imageli>img{
  width:70px;
  height:80px;
}
/*定制放大镜样式*/
#preview>.card>.card-body>div{
  width:350px;
  overflow:hidden;
}
#preview>.card>.card-body>div>ul{
  transition:all .5s linear;
}
#preview>.card>.card-body>div>ul>li{
  width:70px; height:80px;
  margin 0px 5px;
}
#preview>.card>.card-body>div>ul img{
   width:100%;
  height:100%;
}
#preview>.card>.card-body>div>ul img:hover{
  border:1px solid #e4393c;
}
#mask{
  width:176px; height:176px;
  background-color:#ffa;
  opacity:.5;
}
#super-mask{
  width:352px; height:352px;
}
#div-lg{
  width:400px; height:400px;
  left:354px;
  z-index:1000;
  border: 1px solid rgba(0, 0, 0, 0.125)
}.card-img-top{
  width 450px;
  height:400px;
}
</style>