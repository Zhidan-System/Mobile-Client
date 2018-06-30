<template>
  <div class='goods'>
    <div class="info" v-show="showInfo" @click="hideInfo()">
      <div>
        <img :src="infoItem.image_url" class='info-img'>
        <div class='info-name'>{{infoItem.dish_name}}</div>
        <div class='info-price'>$ {{infoItem.price}}</div>
        <div class="info-flavor">口味：{{infoItem.flavor}}</div>
        <div class="infomation">详情介绍 : {{infoItem.description}}</div>
      </div>
    </div>
    <div class='left-menu' ref="menuWrapper" @click="refreshCount()">
      <el-menu>
        <el-menu-item index="" class="left_menu" :class="{'current':currentIndex===index}" v-for='(item,index) in categoriesArr'>
          <span>{{item.category_name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class='right-menu' ref="foodWrapper" @click="refreshCount()">
      <el-menu>
        <li index="" v-for="bigItem in categoriesArr" class="catgHead catg-hook">
            <div class="catgTitle">
              <div class="catName">{{bigItem.category_name}}</div>
            </div>
            <el-menu>
              <li index="" v-for='item in bigItem.dishes' class='food-item'>
                <img :src="item.image_url" class='img'>
                <div class='m-name' @click="clickInfo(item)">{{item.dish_name}}</div>
                <div class='price'>$ {{item.price}}</div>
                <div class='cc-wrapper'>
                  <cartcontrol :food="item" v-model="item.count"></cartcontrol>
                </div>
              </li>
            </el-menu>
         </li>
      </el-menu>
    </div>
    <!-- <div class='showSth' @click='showSelect'>showSomething</div> -->
    <shopcart :foods="dishesArr" :seller='seller' v-model="dishesArr"></shopcart>
  </div>
</template>

<script>
import shopcart from './shopcart'
import cartcontrol from './cartcontrol'
import BScroll from 'better-scroll'
var axios = require('axios')

export default {
  name: 'order',
  data () {
    return {
      categoriesArr: [],
      dishesArr: [],
      listHeight: [],
      scrollY: 0,
      fold: false,
      infoItem: {}
    }
  },
  components: {
    shopcart,
    cartcontrol
  },
  props: ['seller'],
  mounted () {
      axios.get('/api/v1/menu', {
          params: {
            restaurant_id:this.seller.rid
          }
      }).then((response) => {
          var menu = response.data.data;
          this.categoriesArr = menu;
          console.log('this.categoriesArr')
          console.log(this.categoriesArr)
          for (var type of menu) {
              this.dishesArr = this.dishesArr.concat(type.dishes)
          }
          console.log(this.dishesArr)
          for (var item of this.dishesArr) {
            item.select = false;
            item.count = 0;
          }
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          })
      }).catch((err) => {
          console.log(err)
      })
  },
  computed: {
      currentIndex() {
        for (var i=0; i<this.listHeight.length;i++) {
          var height1 = this.listHeight[i];
          var height2 = this.listHeight[i+1];
          if (!height2 || (this.scrollY>height1 && this.scrollY<height2)) {
              return i;
          }
        }
        return 0;
      },
      showInfo() {
        return this.fold;
      }
  },
  methods: {
    showSelect () {
      console.log(this.dishesArr[0].select)
    },
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {})

      this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          probeType: 3
      })

      this.foodScroll.on('scroll',(pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      var foodList = this.$refs.foodWrapper.getElementsByClassName('catg-hook');
      var height = 0;
      this.listHeight.push(height);
      for (var i=0; i < foodList.length; i++) {
        var item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
      // console.log('this.listHeight')
      // console.log(this.listHeight)
    },
    clickInfo(item) {
      // console.log("clickInfo")
      // console.log(item)
      this.infoItem = item
      this.fold = true;
    },
    hideInfo() {
      // console.log('hideInfo')
      this.fold = false;
    },
    refreshCount() {
      console.log('refreshCount')
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
  height: 470px;
  /*bottom: 46px;*/
  width: 100%;
  overflow: hidden;
}
.left-menu {
  flex: 0 0 80px;
  width: 100px;
  height: 430px;
  background-color: #f3f5f7;
}
.right-menu {
  height: 430px;
  width: 275px;
  flex: 1;
  overflow: hidden;
}
.food-item {
  position: relative;
  height: 100px;
  width: 275px;
  border-top: 1px solid silver;
  box-shadow: 2px 2px 1px #888888;
  z-index: 30;
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
  right: 0px;
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
  width: 100px;
}
.catgTitle {
  /*position: absolute;*/
  background-color: #f3f5f7;
  width: 275px;
}
.catgTitle {
  /*position: absolute;*/
  font-size: 15px;
}
.current {
    /*background-color: #f3f5f7;*/
    background-color: #D0D0CD;
}
.info {
  position: fixed;
  width: 200px;
  height: 250px;
  left: 100px;
  top: 200px;
  background-color: white;
  z-index: 100;
  border: 4px solid silver;
}
.info-img {
  position: relative;
  left: 40px;
  width: 120px;
  height: 120px;
}
.info-flavor, .info-price, .info-name, .infomation {
  position: relative;
  left: 20px;
}
</style>
