<template>
  <div class="checkIn">
    <div class="c_header">
        <div class="hp">订单详情</div>
    </div>
    <div class="list-content2">
      <el-menu>
      <li class="food" v-for="food in selectFoods">
      <div class="checkname">{{food.dish_name}}</div>
      <div class="checkcost">${{food.price}} x {{food.count}}</div>
      </li>
      </el-menu>
      </div>
      <div class="free">
      <div class="freeText">优惠</div>
      </div>
      <div class="bottom">
      <div class="totalPrice">$ {{total}}</div>
      <div class="pay">
      <router-link class="payRT" :to="{path: '/confirm',query: {post_data: postData}}">支付</router-link>
      </div>
      </div>
      <!-- <router-link to='/'>返回</router-link> -->
  </div>
</template>

<script>
import cartcontrol from './cartcontrol'
var axios = require('axios');

export default {
  name: 'checkin',
  data () {
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
  mounted () {
      // alert('test')
      this.postData.restaurant_id = this.seller.rid;
      this.postData.total_price = this.total;
      this.postData.desk_id = this.seller.did;
      this.postData.tableware = "否";
      this.postData.dish_list = this.selectFoods;
      console.log('this.postData3: ');
      console.log(this.postData);
      // axios.post('/api/v1/order', this.postData).then((response)=>{
      //     console.log('post success');
      //     console.log(response);
      // }).catch((err)=>{
      //     console.log('post failed');
      //     console.log(err);
      // });
  }
}
</script>

<style>
.checkIn {
    position: relative;
    height: 470px;
    width: 375px;
}
.c_header {
    /*position: absolute;*/
    height: 40px;
    width: 375px;
    background: #F3F5F7;
    border: 1px solid silver;
}
.list-content2 {
    height: 200px;
    width: 375px;
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
    position: absolute;
    height: 50px;
    bottom: 62px;
}
.freeText {
    position: absolute;
    left: 20px;
    top: 10px;
}
.checkname, .checkcost{
    left: 20px;
    position:  absolute;
}
.checkname {
    position: relative;
    top: 10px;
}
.checkcost {
    position: relative;
    top: 15px;
}
.cc-wrapper {
    position: absolute;
    right: 0px;
    height: 30px;
    width: 60px;
    /*background-color: black;*/
}
.food {
    border-bottom: 1px solid silver;
}
.hp {
    position: relative;
    left: 20px;
    top: 10px;
}
.bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    /*background: white;*/
    background-color: #1D592D;
    margin: 0;
    padding: 0;
    border: 1px solid silver;
}
.pay {
    position: absolute;
    height: 60px;
    width: 130px;
    top: 0;
    right: 0;
    background-color: orange;
}
.payRT {
    position: absolute;
    left: 40px;
    top: 17px;
    font-size: 20px;
}
.totalPrice {
    position: absolute;
    font-size: 25px;
    left: 20px;
    top: 15px;
    font-weight: bold;
    color: red;
}
</style>
