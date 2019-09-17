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
				uid: "",
				summsg: []
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
				var time = 5000;
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
								var status = result.data.status;
								if (status == 1) {
									var msg = result.data.data;
									if (msg) {
										this.summsg = msg.reduce(
											(prev, elem) => {
												console.log(JSON.parse(elem.message));
												var mymsg=JSON.parse(elem.message);
												if (prev[mymsg.suid] === undefined) {
													prev[mymsg.suid] = [[]];
													prev[mymsg.suid][0]=[];
													prev[mymsg.suid][1]=[]
													prev[mymsg.suid][0].unshift(mymsg.time);
													prev[mymsg.suid][1].unshift(mymsg.message)
												} else {
													prev[mymsg.suid][0].unshift(mymsg.time);
													prev[mymsg.suid][1].unshift(mymsg.message)
												}
												return prev;
											}, {}
										)
										console.log(this.summsg, "###############################################");
									}
									var count = result.data.count;
									if (count == 0 && time >= 5000) {
										time += (time < 10000) ? 500 : 0;
										if (time == 10000) {
											time = 5000;
										}
										console.log("##################11111", time)
									} else {
										time = 5000;
										console.log("##################", time)
									}
								}


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
