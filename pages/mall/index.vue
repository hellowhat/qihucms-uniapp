<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" :isBack="false"><block slot="backText">返回</block><block slot="content">商城</block></cu-custom>
		<view class="cu-bar search bg-gradual-red">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索商品" confirm-type="search"></input>
			</view>
		</view>
		<view class="mall-swiper">
			<swiper class="screen-swiper mall-swiper-box" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item style="border-radius: 10px;" v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
		</view>
		<view class="mall-categories">
			<view class="grid text-center col-5">
				<view class="maill-categories-item">
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
					<view>数码</view>
				</view>
				<view class="maill-categories-item">
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
				</view>
				<view class="maill-categories-item">
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
				</view>
				<view class="maill-categories-item">
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
				</view>
				<view class="maill-categories-item">
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
				</view>
				<view class="maill-categories-item">
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<style>
.mall-swiper{
	margin:10px;
	border-radius: 10px;
}
.mall-swiper-box{
	height:130px;
	min-height: 130px;
}
.cu-avatar{
	width: 45px;
	height: 45px;
}
.mall-categories{
	padding:10px;
}
.maill-categories-item{
	margin-bottom: 15px;
}
</style>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: true,
				towerStart: 0,
				direction: ''
			};
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
		}
	}
</script>