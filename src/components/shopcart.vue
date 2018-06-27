<template>
<div class="father">
  <div class='shopcart'>
  	<div class='content'>
  		<div class='content-left'>
  			<div class='logo-wrapper' @click="toggleList">
  				<div class='logo'>购物车</div>
  			</div>
  			<div class='t-price'>$ {{total}}</div>
  		</div>
  		<div class='content-right'>
  			<router-link :to="{path: '/checkin',query: {foods: selectFoods, totalPrice: total}}" :selectFoods="selectFoods" :seller="seller">去结算</router-link>
  		</div>
  		<div class="shopcart-list" v-show="listShow" transition="fold">
  			<div class="list-header">
  				<h1 class="title">购物车</h1>
  				<span class="empty">清空</span>
  			</div>
  			<div class="list-content">
  				<el-menu>
  					<el-menu-item class="food2" v-for="food in selectFoods">
  						<span class="name2">{{food.dish_name}}</span>
  						<div class="price2">
  							<span>{{food.price*food.count}}</span>
  						</div>
  						<div class="cc-wrapper2">
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
  props: ["foods", "seller"],
  data() {
  	return {
  		selectFoods: ['test'],
  	  	fold: false,
  	  	total: 0
  	  }
  },
  computed: {
  	totalPrice() {
  		let total = 0;
  		this.selectFoods.forEach((food) => {
  			total += food.price * food.count;
  		});
  		return total;
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
  		this.selectFoods = [];
  		for (var item of this.foods) {
           if (item.select == true) {
           	  this.selectFoods = this.selectFoods.concat(item);
           }
        }
    //     console.log('selectFoods');
  		// console.log(this.selectFoods);
  		// console.log('this.totalPrice')
  		// console.log(this.totalPrice);
  		this.total = this.totalPrice;
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
.food2 {
	height: 60px;
}
.name2 {
  position: absolute;
}
.price2 {
  position: absolute;
  left: 100px;
}
.cc-wrapper2 {
  position: absolute;
  /*background-color: black;*/
  height: 50px;
  width: 90px;
  right: 0;
  /*top: -40px;*/
}
</style>
