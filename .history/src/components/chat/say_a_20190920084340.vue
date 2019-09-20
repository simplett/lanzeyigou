<template>
	<div class="msg_you">
		<a style="display: table;"></a>
		<div class="time">
			<div class="lanze-time text-center">
				{{time|tosubstring()}}
			</div>

		</div>
		<div class="mt-3">
			<div class="lanze-chat-msguser-img float-left">
				<img src="../../../public/images/usercenter/liaotian.png">
			</div>
			<div class="lanze-msg bg-warning float-left">
				<p>{{info}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "say_a",
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
		margin: 5px;
		max-width: 500px;
		word-wrap: break-word;
		word-break: break-all;
		margin-bottom: -20px;
	}

.back-img>p{
 /* border:1px solid yellowgreen; */
	/* height:80px; */
	padding:0;
	line-height:20px;
	/* padding-left:20px; */
	max-width:500px;
	overflow: hidden;
    word-wrap:break-word;
    word-break:break-all;
	padding-left:20px;
	padding-right:20px;
    padding-top:10px;
}
.chat-msg>.chat-msg-b>.msg-list{
    float: right;
    width:490px;
	/* height:80px; */
    /* border:1px solid #dae8ba; */
    /* margin:0 10px; */
}

.msg-input{
	width:100%;
	height:150px;
	float:left;
	/* border:1px solid red; */
	background: #add597;
	position: relative;
	bottom:-127px;
}
.m-input{
	width:80%;
	height:70%;
	margin-left:20px;
	margin-top:30px;
	float: left;
	background: #ffffff;
	border-radius:5px;
	border:0;
}
.btn-success{
	width:80px;
	height:40px;
	border-radius:10px;
	padding:0;
	line-height:40px;
	margin-top:-50px;
}
.el-container{
	height:508px;
}
.msg{
    width:100%;
    margin-bottom: 20px;
}
.msg-time{
    width:100%;
    height:20px;
    text-align: center;
    /* border: 1px solid red; */
}
.msg-time p{
    font-size: 12px;
    height:20px;
    line-height:20px;
    padding:0;
    margin-bottom:0; 
}
</style>
