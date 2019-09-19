<template>
<div>
	<div class="msg-time">
            <p>{{time|tosubstring()}}</p>
        </div>
		<div class="chat-msg-img-right">
			<img src="../../../public/images/usercenter/liaotian.png">
		</div>
		<div class="msg-list">
			<div class="back-img-right">
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
		}
	}
</script>

<style>
	.chat-msg-a,
	.chat-msg-b {
		width: 100%;
		/* height: 80px; */
		/* border:1px solid red; */
		margin-top: 20px;
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
		margin-top: 20px;
		/* border:1px solid red; */
		padding: 0;
	}


	.back-img-right {
		float: right;
		/* width:150px; */
		/* height: 100%; */
		/* background-size:100% 100%;  */
		/* background-position: center; */
		background-size: cover;
		background:#f6f6f6;
		border-radius:5px;
		-moz-background-size: cover;
		margin-top:10px;
		overflow: hidden;
		word-wrap:break-word;
		word-break:break-all;
		padding-top: 10px;
	}
	.back-img-right>p {
		/* border:1px solid yellowgreen; */
		/* height: 80px; */
		padding: 0;
		line-height:20px;
		/* padding-left:20px; */
		max-width: 500px;
		overflow: hidden;
		padding-right:20px;
		padding-left:20px;
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
		width: 100%;
		height: 150px;
		float: left;
		/* border:1px solid red; */
		background: #add597;
		position: relative;
		bottom: -127px;
	}

	.m-input {
		width: 80%;
		height: 70%;
		margin-left: 20px;
		margin-top: 30px;
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
	}
</style>
