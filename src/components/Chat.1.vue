<template>
	<div>
		<hr>
		<input v-model="uid" type="text">
		<hr>
		<input v-model="msg" type="text">
		<hr>
		<button @click="sendmsg()">发送</button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				msg: "",
				uid: ""
			}
		},
		methods: {
			sendmsg() {
				var token = localStorage.getItem("token");
				if (token) {
					this.axios
						.get("/Chat", {
							params: {
								ruid: this.uid,
								token,
								type: "add",
								message: this.msg
							}
						}).then(result => {
							console.log("发送的聊天消息", result);

						})
				}
			},
			getsendmsg() {
				setInterval(() => {
					console.log("请求一次");
					var token = localStorage.getItem("token");
					if (token) {
						this.axios
							.get("/Chat", {
								params: {
									token,
									type: "get"
								}
							}).then(result => {
								console.log("收到的聊天消息", result);
							})
					}
				}, 10000)

			}
		},
		created() {
			this.getsendmsg()
		}
	}
</script>
<style scoped>

</style>
