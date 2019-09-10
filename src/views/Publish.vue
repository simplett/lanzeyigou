<template>
	<div>
		<div class="publish">
			<!-- 导航栏 -->
			<my-header />
			<!-- 搜索栏 -->
			<search />
			<hr style="margin:0 auto;color:#ccc;
        width:1180px;height:2px;">
			<!-- 商品发布步骤导航 -->
			<div id="myapp">
				<!-- 步骤条线圆 -->
				<div class="step">
					<!-- 线 -->
					<div class="step-line1-success"></div>
					<div class="step-line2"></div>
					<!-- 圆 -->
					<div class="step-icon1">
						<img src="../../public/images/publish/11.png">
					</div>
					<div class="step-icon2">
						<img src="../../public/images/publish/22.png">
					</div>
					<div class="step-icon3">
						<img src="../../public/images/publish/33.png">
					</div>
					<!-- 步骤条文字 -->
					<div class="text1-success">商品类型选择</div>
					<div class="text2">填写商品信息</div>
					<div class="text3">发布成功</div>
				</div>
			</div>
			<!-- *********************第一步*********************** -->
			<PubSelect></PubSelect>
			<!-- ********************第二步********************** -->
			<PublishDel></PublishDel>
			<!-- **********************第三步************************* -->
			<Success></Success>
		</div>
	</div>
	</div>
</template>
<script scoped>
	import PubSelect from "../components/publish/PubSelect.vue"
	import PublishDel from "../components/publish/PublishDel.vue"
	import Success from "../components/publish/Success.vue"
	import search from "../components/search.vue"
	let id = 0;
	export default {
		data() {
			return {
					codeidlist: [],
					// showdata:false,
					codeid: [],
					tableData: [{
						date: '服装服饰',
					}, {
						date: '饰品首饰',
					}, {
						date: '家用电器',
					}, {
						date: '宠物用品',
					}, {
						date: '日用百货',
					}, {
						date: '左图右史',
					}, {
						date: '美容护肤',
					}, {
						date: '健康养生',
					}],
					active: 0,
					value: ''
				}
		},
		components: {
			search,
			PubSelect,
			PublishDel,
			Success
		},
		methods: {
			
			getVuexData() {
				// 只是改了query，其他都不变
				var myvuexdata = this.$store.state.productlist;
				for (var item of myvuexdata) {
					this.codeid.push(item.name)
				}
				console.log(this.codeid);
			},
			changeList(number) {
				this.showdata = true;
				this.codeidlist = this.codeid[number]

			}
		},
		created() {
			this.getVuexData();
		}

	}
</script>
<style>
	/* ************************固定不变的背景，导航***************** */
	/* 背景色 */
	.publish {
		background-color: #f5f5f5;
	}

	/* 步骤条 */
	#myapp {
		width: 1180px;
		height: 80px;
		margin: 0 auto;
		background-color: #fff;
		margin-bottom: 30px;
	}

	/* 大边框 */
	.step {
		width: 812px;
		height: 100%;
		margin: 0 auto;
		margin-top: 20px;
		border: 1px solid #fff;
	}

	/* 线条默认样式 */
	.step-line1,
	.step-line2 {
		border: 2px solid #e6e6e6;
		width: 370px;
		height: 1px;
		margin-top: 20px;
		margin-left: 25px;
		z-index: 3;
		float: left;
	}

	/* 步骤默认样式 */
	.step-icon1,
	.step-icon2,
	.step-icon3 {
		width: 46px;
		height: 46px;
		border-radius: 50%;
		background-color: #e6e6e6;
		float: left;
		margin-top: -25px;
		padding: 7px;
	}

	.step-icon2 {
		margin-left: 330px;
		margin-right: 330px;
	}

	.step-icon3 {
		float: right;
	}

	/* 文字默认样式 */
	.text1,
	.text2,
	.text3 {
		float: left;
		width: 100px;
		height: 20px;
		font-size: 14px;
		font-family: Arial, Helvetica, sans-serif;
		color: #000;
		font-weight: bold;
		text-align: center;
		margin-top: 10px;
	}

	.text1,
	.text1-success {
		margin-left: -30px;
	}

	.text2,
	.text2-success {
		margin-left: 280px;
	}

	.text3,
	.text3-success {
		float: right;
		margin-right: -30px;
	}

	/* 第一步成功之后线条的样式的样式 */
	.step-line1-success,
	.step-line2-success {
		border: 2px solid #e61717;
		width: 370px;
		height: 1px;
		margin-top: 20px;
		margin-left: 25px;
		z-index: 3;
		float: left;
	}

	/* 第一步成功之后文字的样式的样式 */
	.text1-success,
	.text2-success,
	.text3-success {
		float: left;
		width: 100px;
		height: 20px;
		font-size: 14px;
		font-family: Arial, Helvetica, sans-serif;
		color: #e61717;
		font-weight: bold;
		text-align: center;
		margin-top: 10px;
	}

	/* 信息编写详细信息填写页 */
	.pub-proMsg,
	.pub-delMsg {
		width: 1180px;
		height: 400px;
		margin: 0 auto;
		background-color: #fff;
	}

	.pub-proMsg>.proMsg {
		width: 515px;
		height: 400px;
		margin: 0 auto;
	}
</style>
