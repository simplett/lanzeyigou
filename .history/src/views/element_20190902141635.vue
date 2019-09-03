<template><div>
   <el-upload
  action="OSS上传路径，必填"
  list-type="picture-card"
  :before-upload="beforeUpload"
  :http-request="upLoad"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
</div>
</template>
<script>
import { client } from '../assets/oss.js';
export default {
  data () {
  return {
    dialogImageUrl: '',
    dialogVisible: false,
    dataObj: {}, //存签名信息
}
  },
  methods: {
    handleRemove(file, fileList) {
  console.log(file, fileList);
},
handlePictureCardPreview(file) {
  this.dialogImageUrl = file.url;
  this.dialogVisible = true;
},
/**
 * [beforeUpload 上传图片前执行获取秘钥]
* @return {[type]} [description]
 */
beforeUpload() {
  return new Promise((resolve, reject) => {
    //从后台获取第一步所需的数据
    //getOssToken 获取OSS秘钥的接口地址
    this.$axios.get(getOssToken, {}).then(response => {
      this.dataObj = response.data
      resolve(true)
    }).catch(err => {
      console.log(err)
      reject(false)
    })
  })
},
/**
* [upLoad 自定义上传图片]
* @param  {[type]} file [上传值]
* @return {[type]}      [description]
*/
upLoad(file) {
  const self = this
  let files = file.file,
      point = files.name.lastIndexOf('.'),
      suffix = files.name.substr(point),
      fileName = files.name.substr(0, point),
      date = Date.parse(new Date()),
      fileNames = `${fileName}_${date}${suffix}`;

  //fileNames上传文件的名称
  //file.file上传文件的内容
  client(this.dataObj).multipartUpload(fileNames, file.file).then(result => {
    //下面是如果对返回结果再进行处理，根据项目需要
    // console.log(result)
    self.$message({
      message: '上传成功',
      type: 'success'
    });
  }).catch(err => {
    self.$message.error('上传失败');
  })
}
}
}
</script>
<style scoped>
.imgDiv{
  display: block;
  float: left;
  width: 80px;
  height: 100px;
  border: 2px solid black;
}
img{
    display: block;
    width: 50px;
    height: 80px;
  }
  p{
    font-size: 14px;
    text-align: center;
  }
</style>