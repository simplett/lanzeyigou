<template>
	<div>
		<!-- 页头 -->
		<my-header />
		<!-- 搜索 -->
		<search />
		<!--  -->
		<div class="Ordertext">
			<h1>填写并且核对信息</h1>
		</div>
		<div class="checked">选择收货地址</div>
		<div class="select-pro1">
			<div class="w-100" v-for="(item,i) of addressdata" :key="i">
				<addresses :addressdata="item"></addresses>
			</div>
			<div class="address-link">
				<button @click="dialogVisible = true" class="btn ">新增收货地址</button>
			</div>
		</div>
		<!-- 确认订单信息 -->
		<div class="checked">确认订单信息</div>
		<div class="select-pro">
			<div class="pro-name"><span>商家:丁晓瑞</span></div>
			<div class="pro-del">
				<img :src="image" alt="">
				<div class="Order-del">
					<span>
						<br>
						<span>{{pname}}</span>
						<br>
					</span>
				</div>
				<span style="color: #e61717;" class="subtotal">￥{{price}}</span>
				<div class="Order-num">
					<el-checkbox v-model="checked">是否参保</el-checkbox>
				</div>
				<div class="total">有货</div>
				<a href="#">删除</a>
			</div>
			<div class="price-zj">
				<div class="price-zj-1">
					<span >一件商品，商品总金额:&nbsp;&nbsp;￥{{price}}</span>
				</div>
				<div class="price-zj-2">
					<span>运费:&nbsp;&nbsp;&nbsp;￥{{yunfei}}</span>
				</div>
			</div>
		</div>
		<div class="account">
			<div class="price-total">
				<div class="price-t-1">
					<span>应付总额:￥{{yunfei+price}}</span>
					<span>寄送至:&nbsp;云南省昆明市五华区环城东路37号 </span>
					<span>
						收货人:丁晓瑞 &nbsp;130xxxx3456
						<button @click="buy(pid)" class="btn btn-danger">结算</button>
					</span>
				</div>

			</div>
		</div>
		<div class="quality">品质保障</div>
		<div class="q-s">
			<div class="q-s-txt">
				<div class="txt-btn">店铺热销</div>
				<img src="../../public/images/logo.png">
				<img src="../../public/images/logo.png">
			</div>
			<img src="../../public/images/banner1.png">
		</div>
		<my-foot />
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>这是一段信息</span>
			<el-input v-model="names" placeholder="姓名"></el-input>
			<hr>
			<el-input v-model="add" placeholder="收货地址"></el-input>
			<hr>
			<el-input v-model="tall" placeholder="联系方式"></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="add_address()">确 定</el-button>
			</span>
		</el-dialog>
		<reg-login />
	</div>
</template>
<script>
	import addresses from "../components/address/addresslist.vue"
	export default {
		data() {
			return {
				yunfei:10,
				pid:"",
				pname:"",
				price:"",
				image:"",
				names: "",
				add: "",
				tall: "",
				dialogVisible: false,
				checked: true,
				addressdata: [{
					name: "我是你爸爸",
					address: "云南省昆明市盘龙区环城东路50号",
					phone: "13114134005"
				}, {
					name: "我是你爸爸",
					address: "云南省昆明市盘龙区环城东路50号",
					phone: "13114134005"
				}, {
					name: "我是你爸爸",
					address: "云南省昆明市盘龙区环城东路50号",
					phone: "13114134005"
				}, {
					name: "我是你爸爸",
					address: "云南省昆明市盘龙区环城东路50号",
					phone: "13114134005"
				}, {
					name: "我是你爸爸",
					address: "云南省昆明市盘龙区环城东路50号",
					phone: "13114134005"
				}, ]
			};
		},
		components: {
			addresses
		},
		methods: {
			getRouterData() {
				// 只是改了query，其他都不变
				this.pid = this.$route.query.pid;
				console.log(this.pid);
			},
			open5() {
				this.$notify.error({
					title: '错误',
					message: '请您先登录'
				});
			},
			open6() {
				this.$notify({
					title: '失败',
					message: '很抱歉，此商品正在被下单或者已经被购买，请您重新刷新数据',
					type: 'warning'
				});
			},
			// orderajax(orderlist) {
			// 	var xhr=new XMLHttpRequest;
			// 	//4.绑定监听，获取响应
			// 	xhr.onreadystatechange=function (){
			// 		if(xhr.readyState==4 && xhr.status==200){
			// 			var result=xhr.responseText;
			// 			console.log(result);
			// 		}
			// 	}
			// 	//2.打开连接，创建请求
			// 	xhr.open("get","http://10.2.57.31:8080/alipay/index?orderlist="+orderlist,true);
			// 	
			// 	//3.发送请求
			// 	//3.1设置请求头信息
			// 	// xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			// 	//创建请求主体
			// 	// var formdata="orderlist="+orderlist;
			// 	xhr.send(null);
			// },
			//#############################################################################################################
			//未完成
			buy(pid) {
				var token = localStorage.getItem("token");
				if (token) {
					this.axios
						.get("/Order", {
							params: {
								pid,
								type: "start",
								token
							}
						}).then(result => {
							console.log("购买之后的数据", result);
							if (result.data.status == 1) {
								// this.orderajax(result.data.orderlist)
								window.location.href = 'http://47.94.230.26:8080/store-0.0.1-SNAPSHOT/alipay/pay?orderlist=' + result.data.orderlist;
							} else if (result.data.status == 0) {
								this.open6();
							}
						})
				} else {
					this.open5()
				}
			},
			add_address() {
				if (this.names && this.add && this.tall) {
					this.addressdata.push({
						name: this.names,
						address: this.add,
						phone: this.tall
					});
					this.dialogVisible = false;
					this.names="";
					this.tall="";
					this.add="";
				} else {
					this.$message('信息填写不完整，请重新填写')
				}

			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			load(){
				this.axios
					.get("/Search", {
						params: {
							type: "goods",
							pid: this.pid
						}
					})
					.then(result => {
						console.log("###################################这是商品详情的第一次请求",result.data);
						var {
							pimages,
							pid,
							pname,
							price,
						} = result.data;
						this.pname=pname;this.price=price;
						var otherimage ="";
						var imagereg=/;/;
							if(imagereg.test(pimages))
							{
								var i = pimages.split(";");
								otherimage=i[0];
							}else{
								otherimage=pimages;
							}
							
						this.image = otherimage;
			})
			}
		},
		created(){
			this.getRouterData();
			this.load();
		}
	}
</script>
<style scoped>
	.Ordertext {
		width: 1180px;
		height: 45px;
		margin: 0 auto;
		text-align: left;
		font-size: 16px;
		color: #000;
		font-weight: bold;
	}

	.checked {
		width: 1180px;
		height: 50px;
		line-height: 50px;
		padding: 0;
		margin: 0 auto;
		font-weight: bold;
		background-color: #e5e5e5;
	}

	.select-pro1 {
		width: 1180px;
		/* height: 130px; */
		background-color: #fff;
		margin: 0 auto;
		/* margin-bottom: 20px; */
	}

	.select-pro {
		width: 1180px;
		height: 310px;
		background-color: #fff;
		margin: 0 auto;
		margin-bottom: 20px;
	}

	.select-pro>.pro-name {
		text-align: left;
	}

	.select-pro>.pro-del {
		text-align: left;
		height: 160px;
		width: 1150px;
		margin: 0 auto;
		background-color: #f8f5f5;
	}

	.select-pro>.price-zj {
		width: 300px;
		height: 110px;
		float: right;
		margin-right: 20px;
		margin-top: 15px;
	}

	.select-pro>.price-zj>.price-zj-1,
	.select-pro>.price-zj>.price-zj-2 {
		margin: 20px 10px;
		text-align: right;
	}

	.select-pro>.price-zj>.price-zj-1>span,
	.select-pro>.price-zj>.price-zj-2>span {
		font-size: 16px;
	}

	.select-pro>.pro-name>span {
		padding-left: 30px;
	}

	.select-pro>.pro-del>img {
		width: 100px;
		height: 100px;
		float: left;
		/* border:1px solid red; */
		margin: 38px 30px;
	}

	.select-pro>.pro-del>.Order-del {
		float: left;
		width: 350px;
		height: 120px;
		/* border:1px solid red; */
		margin: 28px 10px;
	}

	.select-pro>.pro-del>.subtotal {
		float: left;
		width: 50px;
		height: 30px;
		font-size: 20px;
		font-weight: bold;
		/* border:1px solid red; */
		margin: 60px 80px;
	}

	.select-pro>.pro-del>.Order-num {
		margin: 65px 30px;
		float: left;
	}

	.select-pro>.pro-del>.Order-num>.num-input {
		width: 42px;
		height: 18px;
		line-height: 18px;
		padding: 0;
	}

	.select-pro>.pro-del>.Order-num>a {
		width: 16px;
		height: 18px;
		line-height: 18px;
		padding: 0;
		border: 1px solid #cacbcb;
		color: #666;
		margin: 0;
	}

	.select-pro>.pro-del>.total {
		float: left;
		width: 50px;
		height: 30px;
		margin: 65px 50px;
	}

	.select-pro>.pro-del>a {
		float: left;
		margin: 65px 20px;
	}

	.account {
		width: 1180px;
		height: 155px;
		border: 1px solid #ddd;
		margin: 0 auto;
		margin-top: 20px;
		background-color: #fff;
	}

	.account>.price-total {
		width: 400px;
		float: right;
		height: 155px;
		padding: 0;
		/* border:1px solid red; */
	}

	.account>.price-total>.price-t-1 {
		width: 100%;
		height: 150px;
		font-size: 16px;
		text-align: right;
	}

	.account>.price-total>.price-t-1>span {
		float: left;
		padding-top: 20px;
	}

	.account>.price-total>.price-t-1>span>a {
		background-color: #e61717;
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		padding: 0 2px;
		color: #fff;
		margin-left: 40px;
	}

	.quality {
		width: 1180px;
		height: 50px;
		line-height: 50px;
		padding: 0;
		font-weight: bold;
		border: 1px solid #ddd;
		margin: 0 auto;
		margin-top: 20px;
		background-color: #e5e5e5;
		color: #666;
	}

	.q-s {
		width: 1180px;
		height: 710px;
		/* border:1px solid red; */
		margin: 0 auto;
	}

	.q-s>.q-s-txt {
		width: 430px;
		height: 708px;
		float: left;
	}

	.q-s>.q-s-txt>img {
		width: 100%;
		height: 310px;
		margin: 5px 0;
	}

	.q-s>.q-s-txt>.txt-btn {
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding: 0;
		background-color: #666;
		color: #fff;
	}

	.q-s>img {
		float: left;
	}

	.address-link {
		text-align: center;
		height: 80px;
		line-height: 80px;
		margin-top: 50px;
		margin-bottom: 50px;
	}
</style>
