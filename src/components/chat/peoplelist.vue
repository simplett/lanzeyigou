<template>
	<div class="chat-list-b">
		<div class="list-img">
			<img class="list-i" src="../../../public/images/usercenter/liaotian.png">
		</div>
		<div class="list-text">
			<p class="list-name text-left">qwe</p>
			<p class="list-time">14:53</p>
		</div>
	</div>
</template>

<script>
	export default {
name:"peoplelist"
	}
</script>

<style>
	.chat-list-b {
		width: 100%;
		height: 50px;
		background-color: #cbe198;
		border: 2px solid #d8e7b5;
		border-left-color: #cbe198;
		border-right-color: #cbe198;
		/* border:1px solid purple; */
		margin-bottom: 5px;
	}

	.list-img {
		/* margin:5px 10px; */
		width: 40px;
		height: 40px;
		float: left;
		/* border:1px solid rebeccapurple; */
		margin: 5px;
	}

	img.list-i {
		width: 100%;
		height: 100%;
		margin-top: -161px;
	}

	.list-text {
		width: 170px;
		height: 50px;
		float: left;
		/* border:1px solid yellow; */
	}

	/* .chat-list-b>div.list-text>p{
	    line-height: 20px;
	    float: left;
	    font-size:18px;
	} */
	.list-name {
		/* margin-top:-74px; */
		height: 50px;
		width: 50%;
		float: left;
		padding: 0;
		line-height: 30px;
		margin-left: 0;
		/* border:1px solid red; */
	}

	.chat-list-b>div.list-text>.list-time {
		float: right;
		/* margin-top:-25px; */
		margin-right: 5px;
		height: 50px;
		line-height: 50px;
		padding: 0;
		font-size: 12px;
	}
</style>
