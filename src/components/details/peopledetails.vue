<template>
	<div class="people-text">
		<div class="peo-text">
			<!-- 发布者头像 -->
			<div class="peo-img">
				<img @click="userrouter(proper.uid)" :src="proper.image" style="width:100%;height:100%;border-radius:50%;" />
			</div>
			<!-- 发布者详情信息 -->
			<div class="peo-detail">
				<div class="name mb-4">
					{{proper.nickname}}
					<a @click="guanzhu(proper.uid)" class="btn btn-danger ml-5">关注</a>
				</div>
				<div class="peo-address mb-3">
					<span>昆明</span>
					<span>{{proper.sex}}</span>
				</div>
				<div class="time mb-3">
					<span>注册时间:</span>
					<span>{{proper.create_time}}</span>
				</div>
			</div>
		</div>
		<div class="conten">
			<div>
				<div>
				<span>转卖0笔</span>
				<!-- <span>1人评价</span> -->
			</div>
			<div>
				<span>靠谱度</span>
				<span>10分</span>
			</div>
			<div>
				<span>性价比</span>
				<span>10分</span>
			</div>
			<a class="btn btn-danger" @click="userrouter(proper.uid)">查看详细</a>
			</div>
			<div class="qrcode" id="qrCode" ref="qrCodeDiv"></div>
			
		</div>
		<div class="introduce">
			<div class="visits">
				<span>宝贝浏览次数</span>
				<span style="color:#333">67次</span>
			</div>
			<div class="visits">
				<span>最近编辑时间</span>
				<span style="color:#333">2019-08-27</span>
			</div>
			<div class="myadd-introduce-describe">
				<p class="top-text">宝贝介绍</p>
				<p class="buttom-text">{{proper.p_description}}</p>
			</div>

		</div>
	</div>
</template>
<script>
	import QRCode from 'qrcodejs2'
	export default {
		data(){
			return{
				pid:1
			}
		},
		methods:{
			//生成二维码
			qrcode() {
				var data =this.pid;
				console.log(this.pid,"商品的id")
				var c = {
					"type":"product",
					"pid":data
				};
				c = JSON.stringify(c);
				console.log(c,"我是二维码的数据")
				document.getElementById("qrCode").innerHTML = "";
				setTimeout(() => {
				new QRCode(this.$refs.qrCodeDiv, {
				text: c,
				width: 100,
				height: 100,
				colorDark: "#ff0000", //二维码颜色
				colorLight: "#ffffff", //二维码背景色
				correctLevel: QRCode.CorrectLevel.H//容错率，L/M/H
				})
				}, 100)
			},
			userrouter(uid) {
				console.log(uid);
				this.$router.push({
					name: "otherperson",
					query: {
						uid
					}
				});
			},
		},
		props: {
			proper: {
				default: "111"
			}
		},
		name: "peopledetails",
		updated(){
			console.log(this.proper.pid,"*************************");
			this.pid=this.proper.pid;
			this.qrcode();
		}
	};
</script>
<style scoped>
	.people-text {
		width: 300px;
		float: left;
		height: 500px;
		background: #fff;
	}

	.peo-text {
		width: 100%;
		height: 110px;
		margin: 0 auto;
		border-bottom: 1px solid #e6e6e6;
	}

	.peo-img {
		width: 70px;
		height: 70px;
		margin: 20px 20px 0px 10px;
		border-radius: 50%;
		float: left;
	}

	.peo-detail {
		width: 200px;
		height: 110px;
		float: left;
		text-align: center;
		vertical-align: -webkit-baseline-middle;
	}

	.peo-detail>.name {
		font-size: 16px;
		height: 20px;
		line-height: 20px;
		color: #666;
		text-align: left;
		font-weight: bold;
		margin-top: 20px;
		margin-bottom: 10px !important;
	}

	.name>a.btn {
		margin-right: 10px;
		border: 0;
		color: #fff;
		font-size: 12px;
	}

	.peo-address,
	.time {
		font-size: 12px;
		color: #333;
		text-align: left;
		height: 16px;
		line-height: 16px;
		margin-bottom: 10px !important;
		overflow: hidden;
	}
.qrcode{
		float:left;
		height:100%;
		 /* border:1px solid red; */
		width:200px;
		display:flex;
		justify-content:center;
		align-items:center;
		
		
	}
	.conten {
		width: 100%;
		height: 148px;
		border-bottom: 1px solid #e6e6e6;
		text-align: left;
		padding-left: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.conten>div>div {
		text-align: left;
		height: 20px;
		line-height: 20px;
		font-size: 14px !important;
		margin-top: 10px;
	}

	.conten>div>a {
		width: 100px !important;
		color: #ffffff !important;
		text-align: center;
		margin-top: 26px;
		background: #dc3545 !important;
		padding: 0;
	}

	.introduce {
		width: 100%;
		height: 242px;
		overflow: hidden;
		text-overflow: ellipsis;
		/*以省略号...显示*/
		padding-left: 15px;
	}

	.visits {
		font-size: 14px;
		height: 25px;
		line-height: 25px;
		text-align: left;
		padding-top: 10px;
		margin-bottom: 10px;
	}

	.visits>span:nth-child(1) {
		color: #999;
	}

	.visits>span:nth-child(2) {
		color: #666;
		margin-left: 15px;
	}

	.top-text {
		text-align: left;
		font-size: 20px;
		color: #333;
		font-weight: bold;
		margin-top: 20px;
		margin-bottom: 0px;
	}

	.buttom-text {
		text-align: left;
		font-size: 12px;
		color: #666;
		margin-bottom: 0;
		margin-top: 10px;
	}
	.myadd-introduce-describe
	{
		height: 150px;
		overflow-x: hidden;
		overflow-y: auto;
		/* text-overflow: ellipsis; */
	}
</style>
