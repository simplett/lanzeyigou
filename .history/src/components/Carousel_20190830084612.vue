<template>
	<!-- 轮播图 -->
	<div class="max-lunbotu">
		<div id="demo1" class="carousel lbt-out-1" data-ride="carousel">
			<!-- 1.轮播图片carousel-inner-->
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="w-100" src="../../public/images/首页页头背景.jpg" />
				</div>
				<div class="carousel-item">
					<img class="w-100" src="../../public/images/banner1.png" />
				</div>
				<div class="carousel-item">
					<img class="w-100" src="../../public/images/首页页头背景.jpg" />
				</div>
				<div class="carousel-item">
					<img class="w-100" src="../../public/images/首页页头背景.jpg" />
				</div>
			</div>
		</div>
		<div class="lunbotu-out"></div>
		<div class="lunbotu">
			<div id="demo" class="carousel lbt-1" data-ride="carousel">
				<!-- 1.轮播图片carousel-inner-->
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="w-100" src="../../public/images/首页页头背景.jpg" />
					</div>
					<div class="carousel-item">
						<img class="w-100" src="../../public/images/banner1.png" />
					</div>
					<div class="carousel-item">
						<img class="w-100" src="../../public/images/首页页头背景.jpg" />
					</div>
					<div class="carousel-item">
						<img class="w-100" src="../../public/images/首页页头背景.jpg" />
					</div>
				</div>
				<!-- 2.左右箭头-->
				<a data-slide="prev" href="#demo" class="carousel-control-prev">
					<span class="carousel-control-prev-icon"></span>
				</a>
				<a data-slide="next" href="#demo" class="carousel-control-next">
					<span class="carousel-control-next-icon"></span>
				</a>
				<!-- 3.轮播指示器-->
				<ul class="carousel-indicators">
					<li data-target="#demo" data-slide-to="0" class="active"></li>
					<li data-target="#demo" data-slide-to="1"></li>
					<li data-target="#demo" data-slide-to="2"></li>
					<li data-target="#demo" data-slide-to="3"></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default
	{
		
	}
</script>

<style scoped>
	.max-lunbotu{
		position: relative;
	}
	.lunbotu-out{
	    width:100%;
		opacity: 0.6;
	    height: 600px;
		position: absolute;
	    background-color: transparent;
	    background-repeat:  no-repeat;
	    background-size: 100% 100%;
	    -webkit-filter: blur(10px);
	    -moz-filter: blur(10px);
	    -o-filter: blur(10px);
	    -ms-filter: blur(10px);
	    filter: blur(10px);
	}
	.lunbotu{
	    width:100%;
		position: absolute;
	    height: 600px;
	}
	.lbt-1{
	    width: 1180px;
	    height: 600px;
		left: 50%;
		margin-left: -560px;
	    position: absolute;
	}
	.lbt-out-1{
	    margin: 0 auto;
	    width: 100%;
	    height: 600px;
	    margin-top: 0px;
	    position: absolute;
	}
	.carousel-control-prev,
	.carousel-control-next{
	    width:4%;height:20%;
	    top: 40%;
	    background-color:#aaa;
	    border-radius: 0.25rem;
	}
	.carousel-indicators li{
	    width:0.8rem;height:0.8rem;
	    background:rgba(f, f, f, .8);
	    border-radius: 50%;
	    margin-right:6px;
		margin-left:6px;
		opacity: 0.8;
	}
	.carousel-indicators .active{
		background:#ffffff;

	}
	img.w-100{
	    width: 100%;
	    height:585px;
	    margin-top: 5px;
	}
</style>
