<template>
	<div>
		<el-upload class="avatar-uploader"  list-type="picture-card" :show-file-list="false" :on-change="getFile">
			<img v-if="imageUrl" ref="phoUrl" :src="imageUrl" class="avatar">
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			
		</el-upload><button @click="getFile1()">在这里上传</button>
	</div>
</template>
<script>
	// import {
	// 	Toast
	// } from "mint-ui";
	export default {
		data() {
			return {
				// actionUrl: 'http://10.1.180.146:8080',
				imageUrl: '', //上传图片
				imagesbase64:[]
			};
		},
		methods: {
			getBase64(file) { //把图片转成base64编码
				return new Promise(function(resolve, reject) {
					let reader = new FileReader();
					let imgResult = "";
					reader.readAsDataURL(file);
					reader.onload = function() {
						imgResult = reader.result;
					};
					reader.onerror = function(error) {
						reject(error);
					};
					reader.onloadend = function() {
						resolve(imgResult);
					}
				})
			},
			getFile(file, fileList) { //上传头像
				this.getBase64(file.raw).then(res => {
					console.log("这是base64", res);
					var datas=res.split(",")[1]
					this.imagesbase64.push({"imagebase64":datas})
					console.log(this.imagesbase64)
				})
			},
			getFile1() {
				var base64image=JSON.stringify(this.imagesbase64);
				console.log("g=格式化后的数据",base64image)
				this.axios.get('/', {
					params: {
						"img": {iamge:base64image}
					}
				}).then(result => {
					if (result.body.status === 200) {
						this.imageUrl = result.body.data;
					} else {
						this.$notify({
							title: '失败',
							message: '很抱歉，上传失败',
							type: 'warning'
						});
					}
				})
			}
		},
		}
</script>
<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		width: 101px;
		height: 101px;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader .el-upload .el-upload__input {
		display: none;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}

	.avatar {
		width: 100px;
		height: 100px;
		display: block;
	}
</style>
