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
	
		<el-form-item label="活动性质">
			<el-checkbox-group v-model="form.type">
			<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
			<el-checkbox label="地推活动" name="type"></el-checkbox>
			<el-checkbox label="线下主题活动" name="type"></el-checkbox>
			<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="特殊资源">
			<el-radio-group v-model="form.resource">
			<el-radio label="线上品牌商赞助"></el-radio>
			<el-radio label="线下场地免费"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="活动形式">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button>取消</el-button>
		</el-form-item>
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