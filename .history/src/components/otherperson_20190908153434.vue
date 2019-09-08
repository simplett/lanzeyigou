<template>
    <div>

	</div>
</template>
<script >
import ossClient from '../assets/client.js';
export default {
    data () {
        return {
           
    },
    methods: {
		
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