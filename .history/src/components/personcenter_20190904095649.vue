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
	
	</el-form>
</div>
</template>
<script>
  export default {
      data(){
		   return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: '',
					restaurants: [],
					state: ''
				}
			}
	  },
		methods: {
			onSubmit() {
				console.log('submit!');
			},
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