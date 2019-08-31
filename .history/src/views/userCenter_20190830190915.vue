<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
        <!-- 页头 -->
        <my-header/>
        <!-- 搜索 -->
        <search/>
        <!-- 这是轮播 -->
		<Carousel/>
        <!--  -->
        <!-- 7个图片 -->
        <div class="p-7-img">
            <!-- 最左边的大的div -->
            <div class="p-7-left">

            </div>
            <!-- 右边3个div -->
            <div class="p-7-right">
                <div class="p-7-right-2">
                    <div class="p-7-right-img">
                        <img src="../../public/images/素材/1_0.png" alt="">
                    </div>
                </div>
                 <div class="p-7-right-2">

                </div>
            </div>
             <div class="p-7-right">
                <div class="p-7-right-2">

                </div>
                 <div class="p-7-right-2">

                </div>
            </div>
             <div class="p-7-right">
                <div class="p-7-right-2">

                </div>
                 <div class="p-7-right-2">

                </div>
            </div>
        </div>
        <!-- 分类 -->
        <div v-for="(item,i) of module" :key="i">
            <!-- 标题 -->
            <div class="title">
                <div class="title-div">
                    <a>{{item.title}}</a>
                </div>
            </div>
            <!-- 商品列表 -->
            <div class="p-list">
                <div class="products" v-for="(item,i) of list" :key="i">
                    <!-- 商品图片 -->
                    <div class="products-img">
                        <img :src="item.Pphoto_url" alt="">
                    </div>
                    <!-- 商品介绍 -->
                    <table>
                        <tbody>
                            <tr>
                                <td class="td-top" colspan="2">
                                    <a href="javascript:;">{{item.intro}}</a>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-left"><p>￥{{item.price}}</p></td>
                                <td class="td-p-right"><p><a>{{item.customer}}</a>人想要</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- 商家信息与关注 -->
                    <div class="p-msg">
                        <div class="p-msg-left">
                            <div class="p-msg-left-img">
                                <img :src="Hphoto_url" alt="">
                            </div>
                            <p>丁晓瑞</p>
                        </div>
                        <div>
                            <div class="p-msg-right">
                                <a href="javascript:;" class="btn">+ 关注</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return {
		components: {
            Carousel,
            search
		}
    }
</script>
<style lang="stylus">

</style>
