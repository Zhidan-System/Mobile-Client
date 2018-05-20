<template>
<div class="father">
  <div class='shopcart'>
  	<div class='content'>
  		<div class='content-left'>
  			<div class='logo-wrapper' @click="toggleList">
  				<div class='logo'>购物车</div>
  			</div>
  			<div class='t-price'>{{total}}</div>
  		</div>
  		<div class='content-right'>
  			<router-link to="/checkin">去结算</router-link>
  		</div>
  		<div class="shopcart-list" v-show="listShow" transition="fold">
  			<div class="list-header">
  				<h1 class="title">购物车</h1>
  				<span class="empty">清空</span>
  			</div>
  			<div class="list-content">
  				<el-menu>
  					<el-menu-item class="food" v-for="food in selectFoods">
  						<span class="name">{{food.text}}</span>
  						<div class="price">
  							<span>{{food.cost*food.count}}</span>
  						</div>
  						<div class="cc-wrapper">
  							<cartcontrol :food="food"></cartcontrol>
  						</div>
  					</el-menu-item>
  				</el-menu>
  			</div>
  		</div>
  	</div>
  </div>
  <div class="list-mask" v-show="listShow"></div>
 </div>
</template>

<script>
import cartcontrol from './cartcontrol'

export default {
  name: 'shopcart',
  props: ["selectFoods"],
  data() {
  	return {
  		selectFoods: selectFoods,
  	  	fold: false,
  	  	total: 0
  	  }
  },
  // props: {
  // 	selectFoods: {
  // 		type: Array,
  // 		default() {
  // 			return [
	 //  			{text: '青椒肉丝', cost: 10, count: 0},
		//         {text: '小鸡炖蘑菇', cost: 10, count: 0},
		//         {text: '家常豆腐', cost: 10, count: 0},
		//         {text: '酸辣土豆丝', cost: 10, count: 0},
		//         {text: '干炒牛河', cost: 10, count: 0},
		//         {text: '红烧狮子头', cost: 10, count: 0},
		//         {text: '蒜蓉生菜', cost: 10, count: 0},
		//         {text: '香辣小龙虾', cost: 10, count: 0}
  // 			];
  // 		}
  // 	}
  // },
  computed: {
  	totalPrice() {
  		let total = 0;
  		this.selectFoods.forEach(() => {
  			total += food.price * food.count;
  		})
  	},
  	listShow() {
  		return this.fold;
  	}
  },
  components: {
  	cartcontrol
  },
  methods: {
  	toggleList() {
  		console.log("test");
  		this.fold = !this.fold;
  	}
  }
}
</script>

<style>
.father {
	position: fixed;
	top: 550px;
	height: 60px;
	width: 100%;
	bottom: 0;
	/*z-index: 50px;*/
}
.shopcart {
	position: fixed;
	top: 550px;
	height: 60px;
	width: 100%;
	bottom: 0;
	/*z-index: 50px;*/
	background-color: red;
}
.logo-wrapper {
	position: absolute;
	width: 90px;
	height: 90px;
	background-color: blue;
	top: -30px;
}
.t-price {
	position: absolute;
	left: 100px;
	top: 15px;
}
.content-right {
	position: absolute;
	height: 60px;
	width: 130px;
	background-color: #999999;
	right: 0;
}
.shopcart-list {
	position: absolute;
	background-color: yellow;
	height: 340px;
	bottom: 60px;
	left: 0;
	z-index: 20;
	width: 100%;
	overflow: hidden;

}
.list-header {
	height: 50px;
}
.list-content {
	height: 150px;
	overflow: hidden;
}
.list-mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 210px;
	z-index: 40;
	background-color: gray;
}
.food {
	height: 40px;
}
</style>
