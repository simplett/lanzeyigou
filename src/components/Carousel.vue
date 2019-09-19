<template>
	<!-- 轮播图 -->
		<div class="lunbotu">
			<div id="demo" class="carousel lbt-1" data-ride="carousel">
				<!-- 1.轮播图片carousel-inner-->
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="w-100" :src="lunbo[0].lunbo_url" />
					</div>
					<div class="carousel-item">
						<img class="w-100" :src="lunbo[1].lunbo_url" />
					</div>
					<div class="carousel-item">
						<img class="w-100" :src="lunbo[2].lunbo_url" />
					</div>
				</div>
				
				<!-- 2.左右箭头-->
				<!-- 
				 -->
				<!-- 3.轮播指示器-->
				<ul class="carousel-indicators">
					<li data-target="#demo" data-slide-to="0" class="active"></li>
					<li data-target="#demo" data-slide-to="1"></li>
					<li data-target="#demo" data-slide-to="2"></li>
					<li data-target="#demo" data-slide-to="3"></li>
				</ul>
			</div>
		</div>
</template>
<script>
	export default
	{
		// name:"Carousel",
		props:["lunbo"]
	}
</script>

<style scoped>
	.lunbotu{
		max-width: 1180px;
		width: 100%;
		margin: 0 auto;
		/* height: 600px; */
		min-width: 1180px;
	}
	.lbt-1{
	    width: 100%;
		margin: 0 auto;
	    /* height: 600px; */
		/* left: 13%; */
		/* margin-left: -590px; */
	    /* position: absolute; */
		/* border-radius: 20px; */
		overflow: hidden;
		/* height: 600px; */
		margin:0 auto;
	}
	.lbt-out-1{
	    margin: 0 auto;
	    width: 100%;
	    /* height: 500px; */
	    margin-top: 0px;
	    position: absolute;
		-moz-filter: blur(10px);
	    -o-filter: blur(10px);
	    -ms-filter: blur(10px);
	    filter: blur(10px);
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
	    background:rgba(f, f, f,.8);
	    border-radius: 50%;
	    margin-right:6px;
		margin-left:6px;
	}
	.carousel-indicators .active{
		background:#ffffff;

	}
	img.w-100{
	    width: 100%;
	    /* height:600px; */
	    /* margin-top: 5px; */
	}
</style>
