<template>
   <div>
       <my-header/>
       <div class="pay-div">
            <img src="../../public/images/paysuccess.png" alt="">
       </div>
   </div> 
</template>
<script>
export default {
    data() {
      return {
      };
    },
}
</script>
<style scoped>
.pay-div{
    width:800px;
    height:400px;
    margin:0 auto;
    /* border:1px solid red; */
    margin-top:10%;
}
.pay-div>img{
    width:100%;
    height:100%;
    /* background: firebrick; */
}
</style>