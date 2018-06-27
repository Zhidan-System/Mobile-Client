<template>
  <div>
    <div class="header">订单详情</div>
    <div class="list-content">
  		<el-menu>
  			<li class="food" v-for="food in selectFoods">
  				<div class="checkname">{{food.dish_name}}</div>
  				<div class="checkcost">${{food.price}}</div>
  			</li>
  		</el-menu>
  	</div>
  	<div class="blank"></div>
  	<div class="free">优惠</div>
  	<div class="bottom">
  		<div class="totalPrice">$ {{total}}</div>
  		<router-link to='/confirm'>确认订单</router-link>
  	</div>
  	<router-link to='/'>返回</router-link>
  </div>
</template>

<script>
import cartcontrol from './cartcontrol'
var axios = require('axios');

export default {
  name: 'checkin',
  data() {
  	return {
  		selectFoods : this.$route.query.foods,
  		total : this.$route.query.totalPrice,
  		postData : {
  			restaurant_id : this.seller.rid,
	  		total_price : this.total,
	  		desk_id : this.seller.did,
	  		tableware : "否",
	  		dish_list : this.selectFoods
  		}
  	}
  },
  components: {
  	cartcontrol
  },
  props: ['seller'],
  mounted() {
  		// alert('test')
  		this.postData.restaurant_id = this.seller.rid;
  		this.postData.total_price = this.total;
  		this.postData.desk_id = this.seller.did;
  		this.postData.tableware = "否";
  		this.postData.dish_list = this.selectFoods;
  		console.log('this.postData3: ')
  		console.log(this.postData)
  		axios.post('/api/v1/order', this.postData).then((response)=>{
  			console.log('post success')
  			console.log(response)
  		}).catch((err)=>{
  			console.log('post failed')
  			console.log(err)
  		});
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
