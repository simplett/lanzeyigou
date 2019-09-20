<template>
	<div class="msg_you">
		<a style="display: table;"></a>
		<div class="time">
			<div class="lanze-time text-center">
				{{time|tosubstring()}}
			</div>

		</div>
		<div class="mt-3">
			<div class="lanze-chat-msguser-img float-right">
				<img src="../../../public/images/usercenter/liaotian.png">
			</div>
			<div class="lanze-msg bg-warning float-right">
				<p>{{info}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "say_b",
		props: {
			info: {
				default: 111
			},
			time: {
				default: 111
			}
		},
		filters: {
			tosubstring(vuale) {
				return vuale.substr(2, 6)
			}
		}
	}
</script>

<style scoped>
	.msg_you {
		width: 100%;
		margin: 5px auto;
		zoom: 1;
		overflow: hidden;
	}

	.time {
		width: 100%;
		height: 20px;
	}

	.lanze-time {
		font-size: 12px;
		height: 20px !important;
		line-height: 20px !important;
		/* margin: auto auto!important; */
	}

	.lanze-chat-msguser-img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
		/* border: 1px solid red; */
		line-height: 35px;
	}

	.lanze-chat-msguser-img>img {
		width: 100%;
		height: 100%;
	}

	.lanze-msg {
		text-align: left !important;
		border-radius: 15px;
		line-height: 35px;
		padding: 5px;
		max-width: 500px;
		word-wrap: break-word;
		word-break: break-all;
		margin-bottom: -20px;
	}

	.lanze-msg:after {
		content: '';
		display: table;
		height: 0;
		font-size: 0;
		clear: both;
		overflow: hidden;

	}
</style>