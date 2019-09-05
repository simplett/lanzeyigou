<template>
<div>
    <my-header/>
    <!-- 搜索 -->
    <search/>
    <!-- 个人中心 -->
    <div class="bg-green">
        <div class="p-c-body">
            <div class="person-list">
				<ul class="nav nav-tabs pt-4">
				<!-- 个人中心 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab1">
						<img src="../../public/images/usercenter/fangzi.png" alt="">个人中心</a>
					</li>
				<!-- 收藏 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link " href="#tab2"><img src="../../public/images/usercenter/shoucang.png" alt="">收藏</a>
					</li>
				<!-- 关注 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab3"><img src="../../public/images/usercenter/shoucang.png" alt="">关注</a>
					</li>
				<!-- 聊天 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab4"><img src="../../public/images/usercenter/liaotian.png" alt="">聊天</a>
					</li>
				<!-- 评论 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab5"><img src="../../public/images/usercenter/pinglun.png" alt="">评论</a>
					</li>
				<!-- 账号中心 -->
					<li class="nav-item">
						<a data-toggle="tab" class="nav-link" href="#tab6"><img src="../../public/images/usercenter/zhanghao.png" alt="">交易记录</a>
					</li>
				</ul>
            </div>
			<div class="tab-content">
                <div id="tab1" class="tab-pane active">
                    <div class="intro pt-3">
                    <span>《钢铁侠》（Iron Man）是由美国漫威电影工作室出品的一部科幻冒险电影，改编自同名系列漫画，由乔恩·费儒执导，小罗伯特·唐尼及格温妮斯·帕特洛、杰夫·布里吉斯等主演。该作也是“漫威电影宇宙”系列的首部电影。该片于2008年5月2日在美国上映，2008年4月30日在中国大陆上映。影片讲述了托尼·史塔克在遇难后改进了盔甲的功能，化身“钢铁侠”，以一个义务警察的身份保护了这个世界和平的故事。 </span>
                </div>
                    <div class="hero">
                        <img src="钢铁侠.jpg" alt="">
                    </div>

                </div>
                <div id="tab2" class="tab-pane">
                    <div class="intro pt-3">
                    <span>黑寡妇（Black Widow）是美国漫威漫画旗下超级英雄，初次登场于《悬疑故事》第52期（1964年4月），由编辑斯坦·李、编剧唐·里克以及漫画家唐·赫克联合创造。本名娜塔莎·罗曼诺夫（Natasha Romanoff），1928年出生于前苏联的斯大林格勒，自幼被苏联情报人员传授各种格斗与暗杀技巧，身体经苏联政府秘密机构“红房”改造后，强化了各项体能并延缓了衰老速度，成为苏联在冷战时期的王牌特工，代号“黑寡妇”，起初被苏联派往美国从事间谍活动，窃取美国政府秘密科技，后经鹰眼劝说背叛“红房”，加入复仇者联盟，并获得美国国籍。 </span>
                </div>
                    <div class="hero">
                        <img src="黑寡妇.jpg" alt="">
                    </div>


                </div>
                <div id="tab3" class="tab-pane">
                    <div class="intro pt-3">
                    <span>《奇异博士》是由美国漫威影业制作，迪士尼影业公司出品的奇幻动作电影，由斯科特·德瑞克森执导,，本尼迪克特·康伯巴奇、蒂尔达·斯文顿、切瓦特·埃加福特、瑞秋·麦克亚当斯、麦斯·米科尔森、本尼迪特·王联合主演。该片讲述了神经外科医生史蒂芬·斯特兰奇在一次车祸中失去了双手的能力，最后在古一法师的帮助下让他成为了拥有超凡魔力的奇异博士。该片于2016年11月4日在中国、美国同步上映。 </span>
                </div>
                    <div class="hero">
                        <img src="奇异博士.jpg" alt="">
                    </div>

                </div>
                <div id="tab4" class="tab-pane">
                    <div class="intro pt-3">
                        <span>《美国队长（Captain America）是美国漫威漫画旗下超级英雄，初次登场于《美国队长》（Captain America Comics）第1期（1941年3月），由乔·西蒙和杰克·科比联合创造，被视为美国精神的象征。本名史蒂夫·罗杰斯（Steve Rogers），1918年7月4日出生于美国纽约布鲁克林区，原本是一名身体瘦弱的年轻人，在接受美国政府的改造后，成为各项体能都远超常人的“超级战士”，并被美国政府赋予了由世界上最坚硬的金属之一振金制成的盾牌，从此史蒂夫以美国队长的身份，在二战中立下赫赫战功。
后来在二战尾声的一次行动中，美国队长与宿敌红骷髅展开激战，并掉入大海之中被冰封近70年，直到被神盾局发现并解冻后才加入了复仇者联盟，此后在美国队长的领导下，复仇者联盟出生入死，赢得一次又一次近乎不可能的胜利。
在2014年的漫画中，原美国队长史蒂夫·罗杰斯因遭反派铁钉（Iron Nail）的袭击导致血清流失而快速衰老，他选择由猎鹰（Falcon）山姆·威尔逊（Sam Wilson）继任美国队长。 </span>
                    </div>
                    <div class="hero">
                        <img src="美国队长.jpg" alt="">
                    </div>

                </div>
                <div id="tab5" class="tab-pane">
                    <div class="intro pt-3">
                        <span>《雷神》（Thor）是漫威影业出品的一部科幻动作电影，取材自漫威漫画，是漫威电影宇宙的第四部电影。由肯尼思·布拉纳执导，克里斯·海姆斯沃斯，汤姆·希德勒斯顿，娜塔丽·波特曼等主演。影片讲述了被放逐到地球的索尔·奥丁森学习如何成为一个真正英雄的故事。 </span>
                    </div>
                    <div class="hero">
                        <img src="雷神.jpg" alt="">
                    </div>

                </div>
                <div id="tab6" class="tab-pane">
                    <div class="intro pt-3">
                        <span>浩克（Hulk）是美国漫威漫画旗下超级英雄，初次登场于《不可思议的浩克》（The Incredible Hulk）第一期（1962年5月），由斯坦·李和杰克·科比联合创造。本名罗伯特·布鲁斯·班纳（Robert Bruce Banner），是世界著名的物理学家，在一次意外中被自己制造出的伽马炸弹（Gamma Bomb）的放射线大量辐射，身体产生异变，后每当他情绪激动心跳加速的时候，就会变成名为浩克的绿色怪物。由于变身后往往不受控制，所以为了不伤害身边的人，班纳游走于世界各地寻找控制愤怒的方法，即便如此班纳的浩克身份还是时常会造成毁灭性的破坏，因此常成为警方与有关单位追捕的对象。 [1]
因为大陆方面观众有需要商业效应的传统，所以中文译名常称浩克为绿巨人。浩克皮肤的主要颜色是绿色。在过去四十年中，浩克几乎与漫威漫画中每一个英雄和反派交战过。</span>
                    </div>
                    <div class="hero">
                        <img src="绿巨人.jpg" alt="">
                    </div>

                </div>
                <div id="tab7" class="tab-pane">
                    <div class="intro pt-3">
                        <span>鹰眼（Hawkeye）是美国漫威漫画旗下超级英雄，初次登场于《悬疑故事》（Tales of Suspense）第57期（1964年9月），由斯坦·李和唐·海克联合创造。本名克林顿·弗朗西斯·巴顿（Clinton Francis Barton），小名克林特（Clint），曾化名为歌利亚（Goliath）与浪人（Ronin），是个在马戏团长大的孤儿，师从剑客（Swordsman）和捷射（Trick Shot），天赋异常，小时候便获得“鹰眼“和“世界最佳狙击手”的称号，因在某次演出时看到钢铁侠救人的一幕后，决定利用自己的能力成为超级英雄，后加入复仇者联盟，成为其中重要的一员。</span>
                    </div>
                    <div class="hero">
                        <img src="鹰眼.jpg" alt="">
                    </div>

                </div>
            </div>
            <!-- 个人信息 -->
            <div class="person-msg">
                <!-- 左边的头像、用户姓名和个人介绍 -->
                <div class="intro-img-msg">
                    <!-- 头像 -->
                    <div class="intro-img">
                        <img src="../../public/images/喜欢小banner.png" alt="">
                    </div>
                    <!-- 姓名、介绍 -->
                    <div class="intro-msg">
                        <h3>丁晓瑞</h3>
						<div class="intro-input">
							<el-input v-model="input" placeholder="请输入内容"></el-input><i class="el-icon-edit"></i>	
						</div>
                        
                    </div>
                </div>
                <!-- 右边的电话号码和邮箱 -->
                <div class="intro-pho-em">
                    <div class="pho-em">
                        <ul>
                            <li><p></p></li>
                            <li><img src="" alt=""><p>绑定手机</p></li>
                            <li><p></p></li>
                            <li><img src="" alt=""><p>绑定邮箱</p></li>
                        </ul>
                    </div>
                </div>
            </div>
			<!-- 广告 -->
            <div class="p-c-body-gg">

            </div>
			<!-- 内容 -->
            <div class="content">
				<!-- 个人中心 -->
				<!-- <personcenter/> -->
				<!-- 关注 -->
				<!-- <collect/> -->
				<Comment/>
            </div>
        </div>
	</div>
</div>
</template>

<script>
	import search from "../components/search.vue"
	import collect from "../components/collect.vue"
	import Comment from "../components/Comment.vue"
	export default {
        data(){
            return {
				activeName: '1',
				input: ''
            };
        },
         methods: {
            
        },
        components:{
            search,collect,Comment
        }
    }
</script>
<style scoped>
.bg-green{
    width:100%;
    height:177px;
    background:#ccffcc;
    position:relative;
}
.p-c-body{
    width:1180px;
    /* // height:500px; */
    margin:0 auto;
    /* // border:1px solid red; */
}
.person-list{
    width:22%;
    height:700px;
    float:left;
    background:#f5f5f5;
    border:1px solid #c0c0c0;
    /* // margin-top:-50px; */
}
.person-msg{
    width:55%;
    height:177px;
    float:left;
    /* // border:1px solid green; */
    background:#f2f2f2;
}
.p-c-body-gg{
    width:20%;
    height:177px;
    float:left;
    border:1px solid red;
}
.content{
    width:75%;
    height:500px;
    float:left;
    /* // border:1px solid yellow; */
    padding-left:10px;
}
.intro-img-msg{
    width:50%;
    height:177px;
    float:left;
    /* // border:1px solid #fcc; */
}
.intro-pho-em{
    width:50%;
    height:177px;
    float:right;
    /* // border:1px solid #fcc;     */
}
.intro-img{
    width:136px;
    height:136px;
    float:left;  
    margin-left:10px;
    margin-top:20px;
    /* // background:#bfbfbf; */
}
.intro-img img{
    width:100%;
    height:100%;
    /* // border:1px solid red;  */
    /* border-radius:50%;  */
}
.intro-msg{
    width:50%;
    height:177px;
    float:right;
    /* // border:1px solid #ccf; */
    padding-top:45px;
}
.pho-em{
    width:60%;
    height:177px;
    margin:0 auto;
    /* // boder:1px solid red; */
    
}
.el-input--suffix .el-input__inner {
    padding-right: 30px;
    border: 0px;
    background: #f2f2f2;
}
.tab-content{
	margin-top:20px;
}
.intro-input{
	width:150px;
	height:40px;
	/* // border:1px solid red; */
	margin-left:20px;
}
.el-input{
	width:85% !important;
	float:left;
}
.el-input__inner{
	border:0 !important;
	background:#f2f2f2 !important;
}
.el-icon-edit:before{
	padding-top:15px;
}
.intro-input>el-input>[class*=" el-icon-"], [class^=el-icon-]{
	margin-top:10px;
}
.nav-tabs,.nav-item{
	width:90%;
	margin:0 auto;
}
.nav-item{
	padding-left:0px;
	border-bottom:1px solid #c0c0c0;
	height:72px;
	line-height:72px;
}
.nav-link{
	padding-left:0px;
	padding-bottom:0px;
	float:left;
}
.nav-link>img{
	width:24px;
	height:24px;
	margin-right:10px;
}
a{
	color:#000000;
	font-size:22px;
	/* margin-left:10px; */
}
.nav-tabs .nav-link.active, 
.nav-tabs .nav-link.hover, 
.nav-tabs .nav-item.show .nav-link{
	color:#000000;
	/* background:#f2f2f2; */
	border:0px;
}
</style>
