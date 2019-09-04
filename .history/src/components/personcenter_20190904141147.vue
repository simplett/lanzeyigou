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
				<span class="demonstration">默认</span>
				<el-date-picker
				v-model="birthTime"
				type="date"
				placeholder="选择日期">
				</el-date-picker>
			</div>
		</el-form-item>	
	<!-- 邮箱 -->
	<div class="intro-input">
		<el-input v-model="input" placeholder="1111199@qq.com"></el-input><i class="el-icon-edit"></i>	
	</div>	
	<!-- 电话号码 -->
	<div class="intro-input">
		<el-input v-model="input" placeholder="@"></el-input><i class="el-icon-edit"></i>	
	</div>		
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

</style>