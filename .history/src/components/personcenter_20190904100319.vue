<template>
<div>
	<!-- 个人中心 -->
	<el-form ref="form" :model="form" label-width="80px">
	<!-- 昵称 -->
		<el-form-item label="昵称">
			<el-autocomplete
				popper-class="my-autocomplete"
				v-model="state"
				:fetch-suggestions="querySearch"
				placeholder="丁晓瑞"
				>
			</el-autocomplete>
		</el-form-item>
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
		<template>
			<div class="block">
				<span class="demonstration">默认</span>
				<el-date-picker
				v-model="birthTime"
				type="date"
				placeholder="选择日期">
				</el-date-picker>
			</div>
		</template>
	<!-- 邮箱 -->
	<!--  -->
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
					restaurants: [],
					state: '',
					intro:'',
					sex:'',
					birthTime: '',
				}
			}
	  },
		methods: {
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
				return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
		}
  }
</script>
<style lang="stylus">

</style>