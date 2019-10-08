<template>
    <div>
        <!-- 页头 -->
		<my-header />
		<!-- 搜索 -->
		<search />
        <div class="block">
            <el-timeline>
                <el-timeline-item  placement="top">
                    <el-card>
                        <h4>快递站点</h4>
                        <p>快递到达时间</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item  placement="top">
                    <el-card>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/3 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item  placement="top">
                    <el-card>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/2 20:46</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item  placement="top">
                    <el-card>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/2 20:46</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
        <my-foot />
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.block{
    width:900px;
    height:520px;
    margin:0 auto; 
    overflow: hidden;
}
</style>