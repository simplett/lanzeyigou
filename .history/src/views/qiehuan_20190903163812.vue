<template>
    <div @click="enter"  id="dian" v-bind:class="{ 'you' : flag, 'you2': !flag}">{{con}}</div> 
<!--     定义两个class，当开关打开对应you样式，开关关闭对应you2样式   -->
</template>
<script>
export default {
    data(){
    return{
      con:"+关注",
      flag:false//单位切换开关 
    }
  },
   methods:{
     enter:function(){
       this.flag=!this.flag;
       if(this.flag==true){
          this.con="已关注";
       }else if(this.flag==false){
          this.con="+关注";
       }
     },
   }
 
}
</script>
<style lang="stylus">
.you {
font-size:15px;
background:#42c02e;
height:38px;
width:100px;
float:right;
border-radius:30px;
margin:23px 0 23px 16px;
text-align:center;
line-height:35px;
color:white;
}
.you2 {
font-size:15px;
background:#bdbebd;
height:38px;
width:100px;
float:right;
border-radius:30px;
margin:23px 0 23px 16px;
text-align:center;
line-height:35px;
color:white;
}
</style>