<template>
  <div class='goods'>
    <div class='left-menu' ref="menuWrapper">
      <el-menu>
        <el-menu-item index="" class="left_menu" v-for='item in categoriesArr'>
          <span>{{item.category_name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class='right-menu' ref="foodWrapper">
      <el-menu>
        <li index="" v-for='item in dishesArr' class='food-item'>
          <img :src="item.image_url" class='img'>
          <div class='m-name'>{{item.dish_name}}</div>
          <div class='price'>$ {{item.price}}</div>
          <!-- <div class='num'>月销量: {{item.num}}</div> -->
          <div class='cc-wrapper'>
            <cartcontrol :food="item"></cartcontrol>
          </div>
        </li>
      </el-menu>
    </div>
    <!-- <div class='showSth' @click='showSelect'>showSomething</div> -->
    <shopcart :foods="dishesArr" :seller='seller'></shopcart>
  </div>
</template>

<script>
import shopcart from './shopcart'
import cartcontrol from './cartcontrol'
import BScroll from 'better-scroll'
var axios = require('axios');

export default {
  name: 'order',
  data () {
    return {
      categoriesArr : [],
      dishesArr : []
    }
  },
  components: {
    shopcart,
    cartcontrol
  },
  props: ['seller'],
  //test
  created() {
      this.$nextTick(()=>{
          this._initScroll();
      });
  },
  mounted () {
      axios.get('/api/v1/menu', {
          params: {
            restaurant_id:this.seller.rid
          }
      }).then((response)=>{
          var menu = response.data.data;
          this.categoriesArr = menu;
          for (var type of menu) {
              this.dishesArr = this.dishesArr.concat(type.dishes)
          }
          console.log(this.dishesArr)
          for (var item of this.dishesArr) {
            item.select = false;
            item.count = 0;
          }
      }).catch((err) => {
          console.log(err)
      });
  },
  methods : {
    showSelect() {
        console.log(this.dishesArr[0].select)
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {})
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {})
    }
  }
  // computed: {
  //   selectFoods() {
  //     let foods = [];
  //     this.goods.forEach((good) => {

  //     });
  //   }
  // }
}
</script>

<style>
.goods{
  display: flex;
  position:  absolute;
  top: 109px;
  height: 580px;
  /*bottom: 46px;*/
  width: 100%;
  overflow: hidden;
}
.left-menu {
  flex: 0 0 80px;
  width: 115px;
  height: 530px;
  background-color: #f3f5f7;
}
.right-menu {
  height: 530px;
  flex: 1;
  overflow: hidden;
}
.food-item {
  position: relative;
  height: 100px;
  border-top: 1px solid silver;
  box-shadow: 2px 2px 1px #888888;
}
.icon {
  position: absolute;
  height: 80px;
  width: 80px;
}
.m-name {
  position: absolute;
  left: 100px;
  top: 20px;
  font-weight: bold;
}
.price {
  position: absolute;
  left: 100px;
  top: 55px;
  font: 20px;
  color: red;
}
.num {
  position: absolute;
  left: 150px;
  top: 50px;
}
.cc-wrapper {
  position: absolute;
  /*background-color: black;*/
  height: 50px;
  width: 90px;
  right: 0;
  top: 50px;
}
.img {
  position: absolute;
  width: 60px;
  height: 80px;
  top: 10px;
}
.left_menu {
  border-top: 1px solid silver;
}
</style>
