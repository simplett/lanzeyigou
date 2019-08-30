<template>
    <div class="basicInfo">
      <el-upload class="avatar-content"
        v-loading="fileLoading"
        accept="image/*"
        drag action="https://zxcity-app.oss-cn-hangzhou.aliyuncs.com"
        :show-file-list="false"
        :data="ossParams"
        :before-upload="checkParams"
        :on-progress="progress"
        :on-error="uploadErr"
        :on-success="uploadSuccess"
        :on-remove="fileListRemove"
        multiple
        >
      </el-upload>
      <div v-for="(item,index) in fileList" :key="index" class="imgDiv">
        <img :src="item.imgUrl" alt="">
        <p>{{item.progress}}</p>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        url: ''
      },
      fileList: [],
      fileLoading: false,
      ossParams: {
        expireTime: '',
        key: '',
        dir: ''
      }
    }
  },
  methods: {
    // 图片上传前检测参数变化
    checkParams (file) {
      var _this = this
      var promise = new Promise((resolve, reject) => {
        axios.get('https://share.zxtest.izxcs.com/zxcity_restful/ws/oss/ossUpload', {})
          .then(function (response) {
            var params = response.data
            _this.ossParams = params
            _this.ossParams.name = file.name
            _this.ossParams.OSSAccessKeyId = params.accessid
            _this.ossParams.success_action_status = '200'
            _this.ossParams.key = params.dir + '/' + _this.getUUID()
            var obj = {
              name: _this.ossParams.name,
              key: _this.ossParams.key,
              host: _this.ossParams.host,
              progress: 0,
              imgUrl: ''
            }
            _this.fileList.push(obj)
            // _this.fileLoading = true
            resolve()
          })
          .catch(function (error) {
            console.log(error, '错误')
            reject(error)
          })
      })
      return promise
    },
    // 上传中
    progress (event, file, fileList) {
      console.log('上传中...')
      console.log(file)
      console.log(fileList)
      this.fileList.forEach((item, index) => {
        if (item.name === file.name) {
          item.progress = parseInt(file.percentage)
        }
      })
    },
    // 上传失败提示
    uploadErr (res) {
      this.$message.error('上传出错！')
    },
    // 上传成功后上传到file表
    uploadSuccess (response, file, fileList) {
      console.log('上传成功')
      this.fileList.forEach((item, index) => {
        if (item.name === file.name) {
          item.imgUrl = item.host + '/' + item.key
          item.progress = 100
        }
      })
    },
    // 文件删除
    fileListRemove (file, fileList) {
      this.form.url = ''
    },
    // 随机名称
    getUUID () {
      return `${this.str4()}${this.str4()}-${this.str4()}-${this.str4()}-${this.str4()}-${this.str4()}${this.str4()}${this.str4()}`
    },
    str4 () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
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