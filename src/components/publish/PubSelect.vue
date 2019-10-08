<template>
	<div class="publish-a">
		<div class="pub-select" id="select">
			<el-radio v-model="radio" label="1">全新</el-radio>
			<el-radio v-model="radio" label="2">非全新</el-radio>
		</div>
		<!-- 商品信息填写 -->
		<div class="pub-proMsg">
			<div class="proMsg">
				<el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
			</div>
		</div>
	</div>
</template>
<script>
	let id = 0;
	export default {
		data() {
			return {
				value:"",
				radio: '1',
				props: {
					lazy: true,
					lazyLoad(node, resolve) {
						const {
							level
						} = node;
						setTimeout(() => {
							const nodes = Array.from({
									length: level + 1
								})
								.map(item => ({
									value: ++id,
									label: `服饰${id}`,
									leaf: level >= 2
								}));
							// 通过调用resolve将子节点数据返回，通知组件数据加载完成
							resolve(nodes);
						}, 1000);
					}
				},
				
			}
		},
		watch:{
			value(){
				console.log(this.value,"11111111111111111111111111111111111111111111111111111111111111");
			}
		},
		methods: {
			handleChange()
			{
				
			},
			getVuexData() {
				var data = this.$store.state.options;
				console.log(data, "5555%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
				for (var item of data) {
					this.options = data
				}
			}
		},
		created() {
			this.getVuexData();
		}
	}
</script>
<style scoped>
	.el-cascader-menu__wrap {
		height: 300px !important;
	}

	.publish-a {
		background-color: #f5f5f5;
	}

	div#select,
	.pub-details {
		width: 1180px;
		height: 50px;
		line-height: 50px;
		vertical-align: -webkit-baseline-middle;
		margin: 0 auto;
		font-size: 20px;
		font-weight: bold;
		border: 1px solid #e5e5e5;
		background-color: #fafafa;
	}

	div#select>.el-select,
	div#select>.el-select>.el-input,
	div#select>.el-select>.el-input>input.el-input__inner {
		width: 217px;
		height: 30px;
	}

	div#select>.el-select>.el-input>.el-input__suffix>.el-input__suffix-inner>.el-input__icon {
		height: 40px !important;
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

	.el-cascader {
		padding-top: 30px;
	}

	/*************  按钮样式 ****************/
	button {
		padding: 0;
		margin: 0;
		font-size: 20px;
	}

	.publish-a>button {
		background-color: #ccc;
		color: #fff;
		height: 50px;
		line-height: 50px;
		width: 200px;
		font-size: 20px;
		border: 0;
		margin: 25px 0;
		padding: 0;
	}

	.publish-a>button:hover {
		background-color: #e61717;
		color: #fff;
	}
</style>
