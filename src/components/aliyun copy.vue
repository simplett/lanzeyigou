<!-- <template>
	<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :http-request="uploadFile"
	 :on-change="handleChange" list-type="picture-card" :file-list="fileList3">
		<el-button size="small" type="primary">点击上传</el-button>
		<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
</template>
<script>
	// 调用后台接口返回过来的授权参数AccessKeyId、AccessKeySecret、SecurityToken
	let client = new OSS({
	    accessKeyId: data.AccessKeyId,
	    accessKeySecret: data.AccessKeySecret,
	    stsToken: data.SecurityToken,
	    region: 'oss-cn-shenzhen', // oss地区
	    bucket: '<OSS保存文件的文件名>'
	})
	 
	// 拿到上传的文件
	const f = this.file.raw
	 
	// 定义上传文件的名字+后缀
	const storeAs = 'product/' + Date.parse(new Date()) + suffix
	 
	// 调用上传接口
	client.multipartUpload(storeAs, f).then(function (response) {
	    if (response.res.status === 200) {
	       console.log('上传了')
	    }
	  }).catch(function (err) {
	       console.error('error: ', err)
	  })
	export default {
		data() {
			return {
				fileList3: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}]
			};
		},
		methods: {
			handleChange(file, fileList) {
				this.fileList3 = fileList.slice(-3);
			}
		}
	}
</script>
 -->