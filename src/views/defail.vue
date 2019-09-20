<template>
   <div>
       <my-header/>
       <div class="pay-div">
            <img src="../../public/images/defail.png" alt="">
       </div>
   </div> 
</template>
<script>
export default {
    data() {
      return {
		  alipay:{
			charset:"",
		  out_trade_no:"",
		  method:"",
		  total_amount:"",
		  sign:"",
		  trade_no:""  
		  }
		  
      };
    },
	methods:{
		out_trade_no(){
			this.axios
				.get("/Order", {
					params: {
						type:"finish",
						orderlist:this.alipay.out_trade_no
					}
				}).then(result=>{
					console.log(result)
				})
		},
		getRouterData() {
			// 只是改了query，其他都不变
			this.alipay.charset = this.$route.query.charset;
			this.alipay.out_trade_no = this.$route.query.out_trade_no;
			this.alipay.method = this.$route.query.method;
			this.alipay.total_amount = this.$route.query.total_amount;
			this.alipay.sign = this.$route.query.sign;
			this.alipay.trade_no = this.$route.query.trade_no;
			console.log(this.alipay);
		},
	},
	created(){
		this.getRouterData();
		this.out_trade_no();
	}
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