<template>
<div>
	<div class="content-title">
		<div>
			<img src="../../public/images/usercenter/fangzi.png" alt="">
			<p>个人中心</p>
		</div>
	</div>
	<!-- 个人中心 -->
	<div class="content-b">
		<el-form ref="form" :model="form" label-width="80px">
		<!-- 昵称 -->
			
		<!-- 个人简介 -->
			<el-form-item label="个人简介">
				<el-input v-model="form.intro"></el-input>
			</el-form-item>
		<!-- 性别 -->
			<el-form-item label="性别">
				<el-radio-group v-model="form.sex">
				<el-radio label="男"></el-radio>
				<el-radio label="女"></el-radio>
				</el-radio-group>
			</el-form-item>
		<!-- 出生日期 -->
			<el-form-item label="出生日期">
				<div class="block">
					<el-date-picker
					v-model="birthTime"
					type="date"
					placeholder="选择日期">
					</el-date-picker>
				</div>
			</el-form-item>	
		<!-- 邮箱 -->
			<el-form-item label="出生日期">
				<div class="intro-input">
					<el-input v-model="input" placeholder="1111199@qq.com"></el-input><i class="el-icon-edit"></i>	
				</div>		
			</el-form-item>	
		<!-- 电话号码 -->
			<el-form-item label="电话号码">
				<div class="intro-input">
					<el-input v-model="input" placeholder="123456789"></el-input><i class="el-icon-edit"></i>	
				</div>		
			</el-form-item>	
		<!-- 修改密码 -->
			<el-form-item label="修改密码">
				<div class="intro-input">
					<el-input v-model="input" placeholder="123456789"></el-input><i class="el-icon-edit"></i>	
				</div>		
			</el-form-item>		
		</el-form>
	</div>
</div>
</template>
<script>
  export default {
      data(){
		   return {
			    pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
				},
				form: {
					intro:'',
					sex:'',
					birthTime: '',
				}
			}
	  },
		methods: {
			
		}
  }
</script>
<style scoped>
.content-title{
    width:100%;
    height:60px;
    background:#c0c0c0;
	margin-top:10px;
}
.content-title>div{
    width:250px;
    height:100%;
    float:left;
}
.content-title>div>img{
    margin:20px;
    float:left;
    margin-left:30px; 
}
.content-title>div>p{
    font-size:26px;
    font-weight:bold;
    float:left;
    padding:0;
    line-height:60px;
}
.content-b{
    width:100%;
    height:90%;
    padding-top:10px;
}
.el-form{
	width:90%;
	height:100%;
	margin:0 auto;
}
.intro-input{
	width:150px;
	height:40px;
	/* // border:1px solid red; */
	margin-left:20px;
}
.el-input{
	width:85% !important;
	float:left;
}
.el-input__inner{
	border:0 !important;
	background:#f2f2f2 !important;
}
.el-icon-edit:before{
	padding-top:15px;
}
.intro-input>el-input>[class*=" el-icon-"], [class^=el-icon-]{
	margin-top:10px;
}
</style>