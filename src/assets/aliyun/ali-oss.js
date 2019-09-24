let OSS = require('ali-oss')

/**
 *  [accessKeyId] {String}：通过阿里云控制台创建的AccessKey。
 *  [accessKeySecret] {String}：通过阿里云控制台创建的AccessSecret。
 *  [bucket] {String}：通过控制台或PutBucket创建的bucket。
 *  [region] {String}：bucket所在的区域， 默认oss-cn-hangzhou。
 */
let client = new OSS({
   region: '<oss region>',
  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
  accessKeyId: '<Your accessKeyId>',
  accessKeySecret: '<Your accessKeySecret>',
  bucket: '<Your bucket name>'
})
/**
 *  上传文件，大小不能超过5GB
 * @param {string} ObjName OSS的储存路径和文件名字
 * @param {string} fileUrl 本地文件
 *
 * @retruns Promise
 */
export const put = async (ObjName, fileUrl) => {
  try {
    let result = await client.put(`AAA/${ObjName}`, fileUrl)
    // AAA为文件夹， ObjName为文件名字,可以只写名字，就直接储存在 bucket 的根路径
    console.log(result)
    return result
  } catch (e) {
    console.log(e)
  }
}

