<template>
	<div>
		<div class="content-title">
			<div>
				<img src="../../public/images/usercenter/shoucang.png" alt="">
				<p>收藏</p>
			</div>
		</div>
		<div class="content-b">
			<el-container>
				<!-- 侧边栏 -->
				<el-aside>
					<!-- 姓名 -->
					<div class="chat-a">
						<p>丁小瑞</p>
					</div>
					<!-- 聊天列表 -->
					<!-- <div class="chat-list-a">

					</div> -->
					<div class="chat-list">
						<!-- 聊天朋友列表 -->
						<div @click="Tomsg(item[2])" v-for="(item,i) in summsg" :key="i">
							<peoplelist></peoplelist>
						</div>


					</div>
				</el-aside>
				<el-main>
					<!-- 信息框 -->
					<div class="chat-b">
						<p>小螺号</p>
					</div>
					<div class="chat-msg">
					<!-- 	<component v-for="(item,index) in summsg[msguser][0]" :is="summsg[msguser][1].user" :key="index" :info="summsg[msguser][1].msg[index]" :time="summsg[msguser][0][index]"></component> -->
					</div>
					<div class="msg-input">
						<input class="m-input" type="text">
						<a href="javascript:;" class="btn btn-success">发送</a>
					</div>
				</el-main>
			</el-container>
		</div>
	</div>
</template>
<script>
	import you from "./chat/say_a.vue"
	import me from "./chat/say_b.vue"
	import peoplelist from "./chat/peoplelist.vue"

	export default {
		components: {
			peoplelist,
			me,
			you
		},
		data() {
			return {
				msguser: "00",
				msg: "",
				uid: "",
				summsg: {
					"00": [
						["2019-05-45"],
						[
							[{
								"user": "you"
							}, {
								"msg": "61651631"
							}]
						],"00"
					],
					"22": [
						["2019-05-45","123131"],
						[
							[{
								"user": "you"
							}, {
								"msg": "61651631"
							}]
						],"22"
					]
				}
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
			Tomsg(uid) {
				this.msguser = uid;
				console.log(uid);
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
									var summessage={};
									if (msg) {
										summessage = msg.reduce(
											(prev, elem) => {
												console.log(JSON.parse(elem.message));
												var mymsg = JSON.parse(elem.message);
												if (prev[mymsg.suid] === undefined) {
													prev[mymsg.suid] = [
														[]
													];
													prev[mymsg.suid][0] = [];
													prev[mymsg.suid][1] = [];
													prev[mymsg.suid][2] = '';
													prev[mymsg.suid][0].unshift(mymsg.time);
													prev[mymsg.suid][1].unshift({
														"user": "you",
														"msg": mymsg.message
													})
													prev[mymsg.suid][2] = mymsg.suid;
												} else {
													prev[mymsg.suid][0].unshift(mymsg.time);
													prev[mymsg.suid][1].unshift({
														"user": "you",
														"msg": mymsg.message
													})
												}
												return prev;
											}, {}
										);
										console.log("########################这是数据",summessage)
										for(var item in summessage)
										{
											if(this.summsg[item]==undefined)
											{
												this.summsg[item] = [
													[]
												];
												console.log("@@@@@@@@@@@@@@@@@@@@@@@@@",item[0],item[1],item[2],item);
												this.summsg[item][0] = [];
												console.log("&&&&&&&&&&&&&&&&&&&&&",summessage[item][0]);
												this.summsg[item][1] = [];
												this.summsg[item][2] = '';
												this.summsg[item][0]=[...summessage[item][0]]
												this.summsg[item][1]=[[...summessage[item][1]]]
												this.summsg[item][2] = summessage[item][2];
											}else{
												this.summsg[item][0]=[...this.summsg[item][0],...summessage[item][0]]
												this.summsg[item][1]=[[...this.summsg[item][1],...summessage[item][1]]]
												this.summsg[item][2] = summessage[item][2];
											}
										}
										
										console.log(this.summsg, "###################这是this.summsg############################");
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
	.content-title {
		width: 100%;
		height: 60px;
		background: #c0c0c0;
		margin-top: 10px;
	}

	.content-title>div {
		width: 250px;
		height: 100%;
		float: left;
	}

	.content-title>div>img {
		margin: 20px;
		float: left;
		margin-left: 30px;
	}

	.content-title>div>p {
		font-size: 26px;
		font-weight: bold;
		float: left;
		padding: 0;
		line-height: 60px;
	}

	.content-b {
		width: 100%;
		height: 90%;
		padding-top: 10px;
	}

	.el-header {
		background-color: #ccc;
		color: #323232;
		text-align: left;
		line-height: 60px;
		margin: 10px 0 20px;
		font-size: 26px;
		font-weight: bold;
		float: left;
		padding: 0;
	}

	aside.el-aside {
		width: 255px !important;
	}

	.el-aside {
		background-color: #cbe198;
		color: #333;
		text-align: center;
		line-height: 200px;
		width: 255px;
		/* height:430px; */
		margin: 0 10px;
	}

	.el-main {
		background-color: #cbe198;
		color: #333;
		position: relative;
		text-align: center;
		line-height: 160px;
	}

	.el-header>div>img {
		margin: 20px;
		float: left;
		margin-left: 30px;
	}

	main.el-main {
		padding: 0;
	}

	.chat-a,
	.chat-b,
	.chat-a>p {
		width: 100%;
		height: 40px;
		background-color: #add597;
		font-size: 20px;
		line-height: 40px;
	}

	.chat-b {
		position: relative;
	}

	.chat-a>p {
		/* position: fixed;
    top:0;left:0; */
		color: #fff;
		/* z-index: 2; */
	}

	.chat-b>p {
		color: #000;
		font-size: 20px;
	}

	.chat-list,
	.chat-msg {
		width: 100%;
		/* height: 385px; */
		min-height: 385px;
		border: 1px solid rosybrown;
	}

	/* .chat-list-a{
    width:100%;height:70px;
    background-color: #80c26a;
    margin: 2px 0 10px;
} */
	.chat-msg>.chat-msg-a,
	.chat-msg>.chat-msg-b {
		width: 100%;
		height: 80px;
		/* border:1px solid red; */
		margin-top: 10px;
	}

	.chat-msg>.chat-msg-b {
		float: right;
	}

	.chat-msg>.chat-msg-b>img {
		width: 50px;
		height: 50px;
		float: right;
		margin: 15px;
	}

	.chat-msg-a>.msg-list {
		float: left;
		width: 490px;
		/* height:80px; */
		/* border:1px solid #dae8ba; */
		margin-top: 10px;
		/* border:1px solid red; */
		padding: 0;
	}

	.back-img {
		/* width:150px; */
		height: 100%;
		float: left;
		background: url('../../public/images/chatleft.png') center center no-repeat;
		/* background-position: center; */
		background-size: cover;
		-moz-background-size: cover;
		margin-top: -20px;
		/* display: inline; */
	}

	.back-img-right {
		float: right;
		/* width:150px; */
		height: 100%;
		background: url('../../public/images/chatright.png') center center no-repeat;
		/* background-size:100% 100%;  */
		/* background-position: center; */
		background-size: cover;
		-moz-background-size: cover;
		/* margin-top:-20px; */
	}

	.back-img>p,
	.back-img-right>p {
		/* border:1px solid yellowgreen; */
		height: 80px;
		padding: 0;
		line-height: 80px;
		/* padding-left:20px; */
		max-width: 200px;
		overflow: hidden;
	}

	.back-img>p {
		padding-left: 40px;
		padding-right: 40px;
	}

	.back-img-right>p {
		padding-right: 40px;
		padding-left: 20px;
	}

	.chat-msg>.chat-msg-b>.msg-list {
		float: right;
		width: 490px;
		/* height:80px; */
		/* border:1px solid #dae8ba; */
		/* margin:0 10px; */
	}

	.chat-msg-img {
		width: 50px;
		height: 50px;
		float: left;
		margin: 15px;
		border-radius: 50%;
		/* border:1px solid fuchsia; */
		/* padding:0; */
	}

	.chat-msg-img-right {
		width: 50px;
		height: 50px;
		float: right;
		margin: 15px;
		border-radius: 50%;
		/* border:1px solid fuchsia; */
		/* padding:0; */
	}

	.chat-msg-img>img,
	.chat-msg-img-right>img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		/* padding:0; */
		line-height: 100%;
		/* border:1px solid greenyellow; */
		margin-top: -115px;
	}

	.msg-input {
		/* width: 100%; */
		height: 50px;
		/* float:left; */
		position: fixed;
		/* border:1px solid red; */
		background: #add597;
		/* position: relative; */
		margin-bottom: 0px;
	}

	.m-input {
		/* width: 80%; */
		height: 70%;
		/* margin-left: 20px; */
		/* margin-top: 30px; */
		float: left;
		background: #ffffff;
		border-radius: 5px;
		border: 0;
	}

	.btn-success {
		width: 80px;
		height: 40px;
		border-radius: 10px;
		padding: 0;
		line-height: 40px;
		margin-top: -50px;
	}

	.el-container {
		height: 508px;
		width: 100%;
		position: relative;
	}
</style>
