<template>
    <div class="msg"> 
        <div class="msg-time">
            <p>{{time|tosubstring()}}</p>
        </div>
        <div class="chat-msg-b">
            <div class="chat-msg-img">
                <img src="../../../public/images/usercenter/liaotian.png">
            </div>
            <div class="back-img">
                <p>{{info}}</p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        name:"say_a",
        props:{
            info:{default:111},
            time:{default:111}
        },
        filters:{
            tosubstring(vuale)
            {
                return vuale.substr(2, 6)
            }
        }
	}
</script>

<style>
.chat-msg-a,
.chat-msg-b{
    width: 100%;
	/* height:80px; */
    /* border:1px solid red; */
	margin-top:20px;
}
.chat-msg>.chat-msg-b{
	float:right;
}
.chat-msg>.chat-msg-b>img{
    width: 50px;height:50px;
    float: right;
    margin:15px;
}
.chat-msg-a>.msg-list{
    float: left;
    width:490px;
	/* height:80px; */
    /* border:1px solid #dae8ba; */
    margin-top:20px;
	/* border:1px solid red; */
	padding:0;
}
.back-img{
	/* width:150px; */
	/* height:100%; */
	float: left;
	/* background-position: center; */
	background:#f6f6f6;
	border-radius:5px;
	background-size: cover; 
	-moz-background-size: cover; 
	margin-top:10px;
	/* display: inline; */
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
