<template>
<div class="father">
  <div class='shopcart'>
  	<div class='content'>
  		<div class='content-left'>
  			<div class='logo-wrapper' @click="toggleList();clickLogo()">
  				<div class='logo'>购物车</div>
  			</div>
  			<div class='t-price'>$ {{total}}</div>
  		</div>
  		<div class='content-right'>
  			<div class="goTo">
  			<router-link :to="{path: '/checkin',query: {foods: selectFoods, totalPrice: total}}" :selectFoods="selectFoods" :seller="seller">去结算</router-link>
  		</div>
  		</div>
  		<div class="shopcart-list" v-show="listShow" transition="fold">
  			<div class="list-header">
  				<div class="title-wrapper">
  					<div class="title">已选菜品</div>
  				</div>
  				<el-button class="empty" type="warning" icon="el-icon-delete" @click="clearList" plain></el-button>
  			</div>
  			<div class="list-content">
  				<el-menu>
  					<li index="" class="food2" v-for="food in selectFoods">
  						<span class="name2">{{food.dish_name}}</span>
  						<div class="price2">
  							<span>{{food.price}} x {{food.count}}</span>
  						</div>
  						<div class="cc-wrapper2">
  							<cartcontrol :food="food"></cartcontrol>
  						</div>
  					</li>
  				</el-menu>
  			</div>
  		</div>
  	</div>
  </div>
  <!-- <div class="list-mask" v-show="listShow"></div> -->
 </div>
</template>

<script>
import cartcontrol from './cartcontrol'

export default {
  name: 'shopcart',
  props: ["foods", "seller"],
  data() {
  	return {
  		selectFoods: [],
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
  		this.total = this.totalPrice;
  		this.fold = !this.fold;
  		console.log('this.selectFoods')
  		console.log(this.selectFoods)
  	},
  	clickLogo() {
  		console.log('clickLogo')
  	},
  	clearList() {
  		this.selectFoods = []
  	}
  	// computeTotal() {
  	// 	this.selectFoods = [];
  	// 	for (var item of this.foods) {
   //         if (item.select == true) {
   //         	  this.selectFoods = this.selectFoods.concat(item);
   //         }
   //      }
  	// 	this.total = this.totalPrice;
  	// }
  }
}
</script>

<style>
.father {
	position: absolute;
	/*top: 550px;*/
	height: 60px;
	width: 100%;
	bottom: 0;
	/*z-index: 50px;*/
}
.shopcart {
	position: absolute;
	top: -10px;
	height: 60px;
	width: 100%;
	bottom: 0;
	z-index: 50;
	border-top: bold 1px black;
	/*background-color: white;*/
	background-color: #1D592D;
}
.logo {
	position: absolute;
	left: 16px;
	top: 27px;
}
.logo-wrapper {
	position: absolute;
	width: 80px;
	height: 80px;
	background-color: gray;
	top: -30px;
	left: 10px;
	border-radius: 40px;
	box-shadow: 4px 4px 2px #333333;
	z-index: 1;
	/*border: 2px solid black;*/
}
.t-price {
	position: absolute;
	left: 100px;
	top: 15px;
	color: red;
	font-size: 25px;
	font-weight: bold;
}
.content {
	height: 60px;
	border: black;
	border: 1px solid silver;
}
.content-right {
	position: absolute;
	height: 60px;
	width: 130px;
	background-color: orange;
	/*box-shadow: 4px 4px 2px #444444;*/
	/*background-color: #999999;*/
	right: 0;
}
.shopcart-list {
	position: absolute;
	background-color: white;
	height: 510px;
	bottom: 60px;
	left: 0;
	z-index: -1;
	width: 100%;
	overflow: hidden;
}
.list-header {
	height: 50px;
	/*background-color: gray;*/
}
.list-content {
	height: 470px;
	width: 373px;
	overflow: hidden;
	top: -10px;
	border: 1px solid silver;
	border-top: 0px;
}
.list-mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 210px;
	z-index: 40;
	/*background-color: gray;*/
}
.food2 {
	position: relative;
	height: 60px;
	border-top: 1px solid silver;
}
.name2 {
  position: absolute;
  top: 20px;
  left: 10px;
}
.price2 {
  position: absolute;
  left: 100px;
  top: 20px;
}
.cc-wrapper2 {
  position: absolute;
  /*background-color: black;*/
  height: 50px;
  width: 90px;
  right: 20px;
  /*top: -40px;*/
}
.title-wrapper {
	background-color: #f3f5f7;
	border: 2px solid silver;
	width: 371px;
	height: 50px;
	/*left: 20px;*/
	/*position: absolute;*/
	top: -2px;
}
.title {
	position: relative;
	left: 10px;
	top: 15px;
}
.empty {
	position: absolute;
	background-color: green;
	width: 60px;
	height: 30px;
	right: 40px;
	z-index: 3;
	top: 10px;
}
.goTo {
	position: relative;
	width: 100px;
	height: 20px;
	left: 36px;
	top: 17px;
}
</style>
