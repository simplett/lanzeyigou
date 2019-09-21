<template>
	<div>
	<div class="pro-ad1 w-100 text-center">
		<!-- <a type="button">{{addressdata.name}}</a> -->
		<tr style="height: 80px;" class="text-center w-100 text-left">
			<td class="td-name">{{addressdata.name}}</td>
			<td class="td-phone">{{addressdata.phone}}</td>
			<td class="td-address">{{addressdata.address}}</td>
			<td class="td-btn"><button class="mr-5 float-md-right btn btn-danger">修改地址</button></td>
		</tr>
		</div>
		<hr>
		<!-- <b class="mx-4">{{addressdata.name}}</b><b class="mx-4">{{addressdata.address}}</b><b class="mx-4">{{addressdata.phone}}</b> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		name: "address",
		props: {
			addressdata: {
				default: 111
			}
		}
	}
</script>

<style>
	.td-address,
	.td-btn,
	.td-name,
	.td-phone {
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		padding: 0px 5px;
	}

	.td-address {
		width: 360px;
	}

	.td-btn {
		width: 60px;

	}

	.td-name {
		width: 242px;
	}

	.td-phone {
		width: 242px;
	}

	.pro-ad1 {
		vertical-align: middle;
		height: 80px;
		line-height: 80px;
		text-align: left;
		padding: 0px 20px;
	}
</style>
