<template>
    <div class="g-l-p">
        <div class="g-l-p-title">
            <!-- 头像 -->
            <div class="g-l-hp">
                <img :src="item.image" :data-uid="item.uid" />
            <!-- 用户名 -->
                <p>{{item.nickname}}</p>
            </div>
            <div class="g-l-right">
                <a class="btn g-l-right-btn-focus" @click="concern(item.uid)" :data-uid="item.uid">+ 关注</a>
            </div>
            <p class="p-introduce">{{item.pname}}</p>
            <div class="g-l-product">
                <img :src="item.pimages" :data-pid="item.pid" alt />
            </div>
            <div class="g-l-table">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img class="td-right" src="../../public/images/浏览眼睛.png" />
                                <p class="td-right">{{item.watched}}人浏览</p>
                            </td>
                            <td>
                                <span>12人想要</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="td-right td-red">￥{{item.price}}</p>
                            </td>
                            <td>
                                <a :data-pid="item.uid" class="btn td-btn-focus">我想要</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
.g-l-p{
    width:280px;
    height:420px;
    /* border: 1px solid green; */
    background: #FFFFFF;
    margin-bottom: 22px;
    margin-right: 22px;
    float: left;
}
</style>