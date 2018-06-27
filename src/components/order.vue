<template>
  <div class='goods'>
    <div class='left-menu'>
      <el-menu>
        <el-menu-item v-for='item in categoriesArr'>
          <span>{{item.category_name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class='right-menu'>
      <el-menu>
        <el-menu-item v-for='item in dishesArr' class='food-item'>
          <div class='icon'></div>
          <div class='m-name'>{{item.dish_name}}</div>
          <div class='price'>$ {{item.price}}</div>
          <!-- <div class='num'>月销量: {{item.num}}</div> -->
          <div class='cc-wrapper'>
            <cartcontrol :food="item"></cartcontrol>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- <div class='showSth' @click='showSelect'>showSomething</div> -->
    <shopcart :foods="dishesArr" :seller='seller'></shopcart>
  </div>
</template>

<script>
import shopcart from './shopcart'
import cartcontrol from './cartcontrol'
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
          // console.log('categoriesArr')
          // console.log(this.categoriesArr)
          // console.log('dishesArr')
          // console.log(this.dishesArr)
          for (var item of this.dishesArr) {
            item.select = false;
            item.count = 0;
          }
      // console.log('count')
      // console.log(this.dishesArr[1].count)
      }).catch((err) => {
          console.log(err)
      });
  },
  methods : {
    showSelect() {
        console.log(this.dishesArr[0].select)
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
  height: 510px;
  /*bottom: 46px;*/
  width: 100%;
  overflow: hidden;
}
.left-menu {
  flex: 0 0 80px;
  width: 115px;
  height: 450px;
  background-color: #f3f5f7;
}
.right-menu {
  height: 450px;
  flex: 1;
  overflow: hidden;
}
.food-item {
  position: relative;
  height: 100px;
  border-color: black;
}
.icon {
  position: absolute;
  height: 80px;
  width: 80px;
}
.m-name {
  position: absolute;
  left: 100px;
}
.price {
  position: absolute;
  left: 100px;
  top: 50px;
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
</style>
