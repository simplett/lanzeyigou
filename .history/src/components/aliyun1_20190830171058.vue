<template>
  <div class="page">
    <div class="oss_file">
      <input type="file" :id="id"  @change="doUpload"/>
        <div>
          <p>
            上传进度：{{percentage}}
            {{percentage===1?"success!":(percentage===0?'waiting...':'uploading')}}
          </p>
        <div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'elOss',
    data () {
      return {
        region: 'oss-cn-hangzhou',
        bucket: '',//这里需要填入自己的bucket，申请完阿里云之后获得
        id: 'upload',
        baseurl:'',
        percentage: 0,
        url:'',
        urls:[]
      }
    },
    mounted() {
      this.getbaseurl();

    },
    methods:{
      getbaseurl(){ //文件夹命名
        var date=new Date;
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        month =(month<10 ? "0"+month:month);
        var mydate = date.getDate();
        mydate =(mydate<10 ? "0"+mydate:mydate);
        this.baseurl = 'img/'+year+'/'+year+month+'/'+year+month+mydate+'/';
      },
      btnclick(){
        var btn = document.getElementById(this.id);
        btn.click()
      },
      doUpload () {
        const _this = this
        const urls = [];
        const client = new OSS.Wrapper({
          region: _this.region,
          accessKeyId: '',//填入自己的id
          accessKeySecret: '',//填入自己的id
          bucket: _this.bucket
        })
        _this.percentage = 0;
        const files = document.getElementById(_this.id)
        if (files.files) {
          const fileLen = document.getElementById(_this.id).files;
          var file = fileLen[0];
          if(file) {
            if (!file.type.match('image.*')) {
              this.$message.error('请上传图片格式的文件');
              return;
            }
          }
          let resultUpload = ''
          for (let i = 0; i < fileLen.length; i++) {
            const file = fileLen[i]
            // 随机命名
            let random_name = this.baseurl+this.random_string(6) + '_' + new Date().getTime() + '.' + file.name.split('.').pop()
            // 上传
            client.multipartUpload(random_name, file, {
              progress: function* (percentage, cpt) {
                // 上传进度
                _this.percentage = percentage
              }
            }).then((results) => {
              // 上传完成
              var client = new OSS({ //这里是设置图片预览地址
                region: _this.region,
                accessKeyId: '',
                accessKeySecret: '',
                bucket: _this.bucket
              });
              var signUrl = client.signatureUrl(random_name, {expires: 6000, 'process' : 'image/resize,w_300'});
             console.log(signUrl)
            }).catch((err) => {
              this.$message.error(err);
            })
          }
        }

      },
      // 随机生成文件名
      random_string(len) {
        len = len || 32;
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var maxPos = chars.length;
        var pwd = '';
        for (let i = 0; i < len; i++) {
          pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
      }
    },
    watch:{
      url(val){
        if(val){
          this.urls.push(val);
        }
      }
    }
  }
</script