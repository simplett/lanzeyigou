<template>
    <el-upload
        class="upload"
        action=""
        :drag="true"
        :multiple="true"
        :file-list="images"
        :http-request="uploadHttp"
        :before-upload="beforeAvatarUpload"
        :on-remove="handleRemove"
        list-type="picture">
        <i class="el-icon-plus avatar-uploader-icon">上传图片</i>
        <div class="el-upload__tip" slot="tip">只能上传jpg/jpeg/png文件，且不超过500kb</div>
    </el-upload>
</template>
<script type="text/ecmascript-6">
import ossClient from '../assets/client.js';
export default {
    name: 'Upload',
    data () {
        return {
            images: [],
            uploadConf: {
                region: "oss-cn-beijing.aliyuncs.com",
                accessKeyId: "LTAIlbkoZl60gNWT",
                accessKeySecret: "CbVR0tmpKXqAIEXxavJDqad3lcIIez",
                bucket: "simplett-img",
                stsToken: "112"
            }
        };
    },
    methods: {
		/**
		 * 初始化
		 */
        async init () {
            //获取阿里云token  这里是后台返回来的数据
            const aliyun = {
                Region: "oss-cn-beijing.aliyuncs.com",
                AccessKeyId: 'LTAIlbkoZl60gNWT',
                AccessKeySecret: 'CbVR0tmpKXqAIEXxavJDqad3lcIIez',
                Bucket: 'simplett-img',
                SecurityToken: '112'
            };
            const {Region, AccessKeyId, AccessKeySecret, Bucket, SecurityToken} = aliyun && aliyun.data;
            this.uploadConf.region = Region;
            this.uploadConf.accessKeyId = AccessKeyId;
            this.uploadConf.accessKeySecret = AccessKeySecret;
            this.uploadConf.bucket = Bucket;
            this.uploadConf.stsToken = SecurityToken;
        },
 
        /**
         * 阿里云OSS上传
         */
        uploadHttp({ file }) {
            const { imgName } = 'ALIOSS_IMG_';
            const fileName = `${imgName}/${Date.parse(new Date())}`;  //定义唯一的文件名
            ossClient(this.uploadConf).put(fileName, file, {
                'ContentType': 'image/jpeg'
            }).then(({res, url, name}) => {
                if (res && res.status == 200) {
                    console.log(`阿里云OSS上传图片成功回调`, res, url, name);
                }
            }).catch((err) => {
                console.log(`阿里云OSS上传图片失败回调`, err);
            });
        },
 
		/**
		 * 图片限制
		 */
        beforeAvatarUpload (file) {
            const isJPEG = file.name.split('.')[1] === 'jpeg';
            const isJPG = file.name.split('.')[1] === 'jpg';
            const isPNG = file.name.split('.')[1] === 'png';
            const isLt500K = file.size / 1024 / 500 < 2;
            if (!isJPG && !isJPEG && !isPNG) {
                this.$message.error('上传图片只能是 JPEG/JPG/PNG 格式!');
            }
            if (!isLt500K) {
                this.$message.error('单张图片大小不能超过 500KB!');
            }
            return (isJPEG || isJPG || isPNG) && isLt500K;
        },
 
		/**
		 * 移除图片
		 */
        handleRemove (file, fileList) {
            console.log(`移除图片回调`,file, fileList);
        }
    }
};
</script>