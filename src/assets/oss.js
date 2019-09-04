const OSS = require('ali-oss')

export function client() {
    //后端提供数据
    return new OSS({
        accessKeyId: "LTAIlbkoZl60gNWT",
        accessKeySecret: "CbVR0tmpKXqAIEXxavJDqad3lcIIez",
        stsToken: "data.securityToken",
        region: "oss-cn-beijing.aliyuncs.com", // oss地区
        bucket: "simplett-img"
    })
}