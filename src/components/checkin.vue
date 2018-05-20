<template>
  <div>
    <div class="header">订单详情</div>
    <div class="list-content">
  		<el-menu>
  			<li class="food" v-for="food in foods.selectFoods">
  				<div class="checkname">{{food.text}}</div>
  				<div class="checkcost">${{food.cost}}</div>
  				<div class="cc-wrapper">
  					<cartcontrol></cartcontrol>
  				</div>
  			</li>
  		</el-menu>
  	</div>
  	<div class="blank"></div>
  	<div class="free">优惠</div>
  	<div class="bottom">
  		<div class="totalPrice"></div>
  		<router-link to='/confirm'>确认订单</router-link>
  		<router-link to='/order'>返回</router-link>
  	</div>
  	<router-link to='/order'>返回</router-link>
  </div>
</template>

<script>
import cartcontrol from './cartcontrol'


export default {
  name: 'checkin',
  // props: ['selectFoods'],
  data() {
  	return {
  		text: "data测试",
  		foods: {
  			selectFoods: [
		        {text: '小鸡炖蘑菇', cost: 10, count: 0},
		        {text: '家常豆腐', cost: 10, count: 0},
		        {text: '酸辣土豆丝', cost: 10, count: 0},
		        {text: '干炒牛河', cost: 10, count: 0},
		        {text: '红烧狮子头', cost: 10, count: 0},
		        {text: '蒜蓉生菜', cost: 10, count: 0},
	        ]
  		}
  	}
  },
  components: {
  	cartcontrol
  }
}
</script>

<style>
.header {
	height: 40px;
	background: white;
}
.list-content {
	height: 200px;
	overflow: hidden;
}
.food, .free {
	height: 60px;
	background: #F3F5F7;
	width: 100%;
}
.blank {
	height: 60px;
}
.free {
	height: 50px;
	padding-top: 30px;
}
.checkname, .checkcost{
	left: 20px;
	position:  absolute;
}
.checkcost {
	position: relative;
	top: 30px;
}
.cc-wrapper {
	position: absolute;
	right: 0px;
	height: 30px;
	width: 60px;
	/*background-color: black;*/
}
.bottom {
	position: fixed;
	bottom: 0px;
	width: 100%;
	height: 60px;
	background: red;
	margin: 0;
	padding: 0;
}
</style>
