<template>
	<view>
		<home v-if="PageCur=='home'"></home>
		<mall v-if="PageCur=='mall'"></mall>
		<publish v-if="PageCur=='publish'"></publish>
		<notice v-if="PageCur=='notice'"></notice>
		<my v-if="PageCur=='my'"></my>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/home' + [PageCur=='home'?'-active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='home'?'text-red':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="mall">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/mall' + [PageCur == 'mall'?'-active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mall'?'text-red':'text-gray'">商城</view>
			</view>
			<view class="action text-gray add-action" @click="NavChange" data-cur="publish">
				<button class="cu-btn cuIcon-add bg-gradual-red shadow"></button>
				发布
			</view>
			<view class="action" @click="NavChange" data-cur="notice">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/notice' + [PageCur == 'notice'?'-active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='notice'?'text-red':'text-gray'">消息</view>
			</view>
			<view class="action" @click="NavChange" data-cur="my">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/my' + [PageCur == 'my'?'-active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='my'?'text-red':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
