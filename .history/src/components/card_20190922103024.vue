<template>
	<div class="card-carousel-wrapper">
		<div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
		<div class="card-carousel">
			<div class="card-carousel--overflow-container">
				<div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
					<div class="card-carousel--card" v-for="(item,i) in items" :key="i"><img src="" />
					</div>
				</div>
			</div>
		</div>
		<div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentOffset: 0,
				windowSize: 3,
				paginationFactor: 220,
				items: [{
						img_url:require("")
					}
				]
			}
		},
		computed: {
			atEndOfList() {
				return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
			},
			atHeadOfList() {
				return this.currentOffset === 0;
			},
		},
		methods: {
			moveCarousel(direction) {
				// Find a more elegant way to express the :style. consider using props to make it truly generic
				if (direction === 1 && !this.atEndOfList) {
					this.currentOffset -= this.paginationFactor;
				} else if (direction === -1 && !this.atHeadOfList) {
					this.currentOffset += this.paginationFactor;
				}
			},
		}
	}
</script>

<style scoped>
	.card-carousel-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		/* margin: 20px 0 40px; */
		color: #666a73;
		width: 79%;
		height:100%;
		float:left;
	}
	
	.card-carousel {
		display: flex;
		justify-content: center;
		width:100%;
	}
	
	.card-carousel--overflow-container {
		overflow: hidden;
		width:100%;
	}
	
	.card-carousel--nav__left,
	.card-carousel--nav__right {
		display: inline-block;
		width: 15px;
		height: 15px;
		padding: 10px;
		box-sizing: border-box;
		border-top: 2px solid #42b883;
		border-right: 2px solid #42b883;
		cursor: pointer;
		margin: 0 10px;
		transition: transform 150ms linear;
	}
	
	.card-carousel--nav__left[disabled],
	.card-carousel--nav__right[disabled] {
		opacity: 0.2;
		border-color: black;
	}
	
	.card-carousel--nav__left {
		transform: rotate(-135deg);
	}
	
	.card-carousel--nav__left:active {
		transform: rotate(-135deg) scale(0.9);
	}
	
	.card-carousel--nav__right {
		transform: rotate(45deg);
	}
	
	.card-carousel--nav__right:active {
		transform: rotate(45deg) scale(0.9);
	}
	
	.card-carousel-cards {
		display: flex;
		transition: transform 150ms ease-out;
		transform: translatex(0px);
	}
	
	.card-carousel-cards .card-carousel--card {
		margin: 0 10px;
		cursor: pointer;
		box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
		background-color: #fff;
		border-radius: 4px;
		z-index: 3;
		margin-bottom: 2px;
		width:25%;
	}
	
	.card-carousel-cards .card-carousel--card:first-child {
		margin-left: 0;
	}
	
	.card-carousel-cards .card-carousel--card:last-child {
		margin-right: 0;
	}
	
	.card-carousel-cards .card-carousel--card img {
		vertical-align: bottom;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		transition: opacity 150ms linear;
		user-select: none;
		width:100%;
		height:200px;
	}
	
	.card-carousel-cards .card-carousel--card img:hover {
		opacity: 0.5;
	}
	
	h1 {
		font-size: 3.6em;
		font-weight: 100;
		text-align: center;
		margin-bottom: 0;
		color: #42b883;
	}
	/* cyrillic-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 200;
		src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wmhduz8A.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}

	/* cyrillic */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 200;
		src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wkxduz8A.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}

	/* greek-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 200;
		src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wmxduz8A.woff2) format('woff2');
		unicode-range: U+1F00-1FFF;
	}

	/* greek */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 200;
		src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlBduz8A.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}

	/* vietnamese */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 200;
		src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wmBduz8A.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 200;
		src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wmRduz8A.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 200;
		src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlxdu.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* cyrillic-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmhduz8A.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}

	/* cyrillic */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwkxduz8A.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}

	/* greek-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmxduz8A.woff2) format('woff2');
		unicode-range: U+1F00-1FFF;
	}

	/* greek */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlBduz8A.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}

	/* vietnamese */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmBduz8A.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* cyrillic-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lqDY.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}

	/* cyrillic */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qPK7lqDY.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}

	/* greek-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNK7lqDY.woff2) format('woff2');
		unicode-range: U+1F00-1FFF;
	}

	/* greek */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qO67lqDY.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}

	/* vietnamese */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qN67lqDY.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	
</style>
