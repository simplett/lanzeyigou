<template>
	<div class="pro-ad1">
		<a type="button">{{addressdata.name}}</a>
		<span>
			<b class="mx-4">{{addressdata.name}}</b><b class="mx-4">{{addressdata.address}}</b><b class="mx-4">{{addressdata.phone}}</b>
			<button class="mr-5 float-md-right btn btn-danger">修改地址</button>
		</span>
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	name:"address",
	props:{
		addressdata:{
			default:111
		}
	}
}
</script>

<style>
	.pro-ad1{
		vertical-align: middle;
		height: 80px;
		line-height: 80px;
	}
	.pro-ad1>a,
	.pro-ad2>a {
		width: 100px;
		/* height: 80px;
		line-height: 80px; */
		text-align: center;
		padding: 0;
		background-color: #e5e5e5;
		color: #000;
		float: left;
		border: 0;
	}

	
	.pro-ad1>a:hover,
	.pro-ad2>a:hover {
		color: #fff;
		background-color: #e61717;
	}

	.pro-ad1,
	.pro-ad2 {
		text-align: left;
		padding: 20px;
	}

	.pro-ad1>span,
	.pro-ad2>span {
		vertical-align: middle;
		padding-left: 20px;
	}
</style>
