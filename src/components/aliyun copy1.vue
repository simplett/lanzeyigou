<template>
    <div>
        <Form :model="formItem" ref="formItem" :rules="ruleInline" label-position="left" :label-width="90">
 
 
            <FormItem label="需求标题 : " prop="value1">
                <Input v-model="formItem.d_title" size="large" placeholder="请输入需求标题" class="input_width"></Input>
            </FormItem>
 
 
            <FormItem label="需求提出者 : " prop="d_create_user">
                <Input v-model="formItem.d_create_user" size="large" placeholder="请输入需求提出者" class="input_width"></Input>
            </FormItem>
 
 
            <FormItem label="需求描述 : " prop="fc_desc">
                <Input v-model="formItem.d_content" type="textarea" :rows="4" style="width:400px;"
                       placeholder="请输需求描述"></Input>
            </FormItem>
 
            <FormItem label="上传附件 : " prop="de_enclosure">
                <div class="uploadMainBox" v-for="uploadItem in uploadData">
 
                    <template v-if="uploadItem.type == 'add'">
                        <div class="uploadBox">
                            <input type="file" @change="doUpload" ref="inputFile"/>
                            <Icon type="ios-plus-empty" class="uploadIcon" style="margin-top:0px;"></Icon>
                        </div>
                    </template>
 
                    <template v-if="uploadItem.type != 'add'">
                        <div class="uploadBox">
                            <div class="imagePreview">
                                <img :src="uploadItem.result" style="width:100px;height:100px;border-radius:5px;"
                                     @click="$refs.inputFile.click()"/>
                            </div>
                        </div>
                    </template>
                </div>
            </FormItem>
 
 
            <FormItem>
                <Button type="primary" size="large" :loading="modal_loading" @click="submit('formItem')"
                        style="margin-top: 100px">提交
                </Button>
                <Button type="ghost" size="large" @click="handleReset('formItem')"
                        style="margin-left: 8px; margin-top: 100px">重置
                </Button>
            </FormItem>
        </Form>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        mounted() {
 
        },
        methods: {
 
            /**
             * 提交数据
             * @param name
             */
            submit(name) {
 
 
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let temp = {};
 
                        var url = this.ServerIp + this.API.addDemand;
                        var that = this;
                        var params = {};
                        params.d_title = this.formItem.d_title;
                        params.de_enclosure = this.uploadData.splice(1);
                        params.d_create_user = this.formItem.d_create_user;
                        params.d_content = this.formItem.d_content;
 
                        this.modal_loading = true;
                        console.log(params);
 
                        this.$http({
                            method: 'post',
                            url: url,
                            data: params,
                        }).then((res) => {
                            this.modal_loading = false;
 
                            if (res.data.success) {
                                that.$Message.success('需求新增成功');
                                this.$refs[name].resetFields();
                                //路由跳转
                                // this.$router.push({path: '/forumCategoryList'});
                                that.$router.go(-1);
                            } else {
                                that.$Message.error(res.data.result);
                            }
 
 
                        });
 
                    }
 
 
                });
 
 
            },
 
            /**
             * 上传附件
             * @param name
             */
            doUpload(files) {
 
 
                var that = this;
 
                this.$Spin.show();
                this.uploadEnclosure(files, function (err, data) {
 
                    that.$Spin.hide();
 
                    if (!err) {
                        that.$Message.error("上传附件失败");
                        return;
                    }
 
                    if (data.url != undefined) {
                        console.log(data.url);
                        that.formItem.de_enclosure = data.url;
 
                    } else {
                        console.log(that.IMAGE_SERVER + data.name);
                        that.formItem.de_enclosure = that.IMAGE_SERVER + data.name;
                    }
 
                    that.questionImageIsShow = true;
 
                    console.log(that.formItem.de_enclosure);
 
                    //判断上传文件类型
                    var filextension = that.formItem.de_enclosure.substring(that.formItem.de_enclosure.lastIndexOf("."), that.formItem.de_enclosure.length);
                    filextension = filextension.toLowerCase();
 
                    if ((filextension != '.jpg') && (filextension != '.gif') && (filextension != '.jpeg')
                        && (filextension != '.png') && (filextension != '.bmp') && (filextension != '.txt')
                        && (filextension != '.docx')) {
                        alert("对不起，系统仅支持jpg,gif,jpeg,png,bmp,docx,txt格式的文件。");
                        return
                    }
                    that.uploadData.push({
                        type: "image",
                        result: that.formItem.de_enclosure
                    });
 
                    // alert(that.formItem.de_enclosure.substring(that.formItem.de_enclosure.lastIndexOf("."),that.formItem.de_enclosure.length));
                    // return;
                });
 
 
            },
 
 
            /**
             * 重置输入框
             * @param name
             */
            handleReset(name) {
                this.$refs[name].resetFields();
            }
            
        },
 
        data() {
            return {
                uploadData: [
                    {
                        type: "add",
                        result: ""
                    }
                ],
                modal_loading: false,
                questionImageIsShow: false,
                formItem: {
                    d_title: "",
                    de_enclosure: "",
                    d_content: "",
                    d_create_user: "",
                    d_id: ""
                },
                fc_path: "",
                ruleInline: {
                    d_title: [
                        {required: true, message: '标题不能为空', trigger: 'blur'},
                    ]
                },
                value1: [],
                forumData: [],
 
 
            }
        }
    }
</script>

<style>
    .uploadBox {
        width: 100px;
        height: 100px;
        line-height: 60px;
        border-radius: 4px;
        position: relative;
        /*box-shadow: 0 1px 1px rgba(0, 0, 0, .2);*/
    }
 
    .uploadIcon {
        line-height: 60px;
 
    }
 
    .uploadMainBox {
        float: left;
        margin-right: 10px;
    }
</style>