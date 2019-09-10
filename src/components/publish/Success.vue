<template>
    <div class="publish-c">
        <div class="pub-success">
            <p class="pub-sucMsg"><b>宝贝发布成功！</b></p><br>
            <button style="margin-right:60px;">查看发布</button>
            <button>继续发布</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.publish-c{
    background-color: #f5f5f5;
}
.pub-success{
    width: 1180px;
    height:360px;
    text-align: center;
    vertical-align: -webkit-baseline-middle;
    padding: 0;
    margin: 0 auto;
    background-color: #fff;
}
.pub-success>.pub-sucMsg{
    font-size: 30px;
    color:#000;
    padding-top:115px;
    padding-bottom: 40px;
}
.pub-success>button{
    background-color: #e61717;
    width:140px;height:40px;
    border:5px;
    border-radius: 5px;
    color:#fff;
}
</style>