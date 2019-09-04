<template>
<div>
	<!-- 个人中心 -->
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
		<el-form-item label="电话号码">
			<div class="intro-input">
				<el-input v-model="input" placeholder="123456789"></el-input><i class="el-icon-edit"></i>	
			</div>		
		</el-form-item>		
	</el-form>
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
<style lang="stylus">
.intro-input{
	width:150px;
	height:40px;
	// border:1px solid red;
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