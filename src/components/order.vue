<template>
  <div class='goods'>
    <div class='left-menu'>
      <el-menu>
        <el-menu-item v-for='item in items'>
          <span>{{item.text}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class='right-menu'>
      <el-menu>
        <el-menu-item v-for='item in menu' class='food-item'>
          <div class='icon'></div>
          <div class='m-name'>{{item.text}}</div>
          <div class='price'>$ {{item.cost}}</div>
          <div class='num'>月销量: {{item.num}}</div>
          <div class='cc-wrapper'>
            <cartcontrol :food="item"></cartcontrol>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
    <shopcart :selectFoods="selectFoods"></shopcart>
  </div>
</template>

<script>
import shopcart from './shopcart'
import cartcontrol from './cartcontrol'

export default {
  name: 'order',
  data () {
    return {
      items: [
        {text: '热销菜品'},
        {text: '香爆热炒'},
        {text: '麻辣凉拌'},
        {text: '热汤'},
        {text: '主食'}
      ],
      menu: [
        {text: '青椒肉丝', cost: 10, count: 0},
        {text: '小鸡炖蘑菇', cost: 10, count: 0},
        {text: '家常豆腐', cost: 10, count: 0},
        {text: '酸辣土豆丝', cost: 10, count: 0},
        {text: '干炒牛河', cost: 10, count: 0},
        {text: '红烧狮子头', cost: 10, count: 0},
        {text: '蒜蓉生菜', cost: 10, count: 0},
        {text: '香辣小龙虾', cost: 10, count: 0}
      ],
      selectFoods: [
        {text: '小鸡炖蘑菇', cost: 10, count: 0},
        {text: '家常豆腐', cost: 10, count: 0},
        {text: '酸辣土豆丝', cost: 10, count: 0},
        {text: '干炒牛河', cost: 10, count: 0},
        {text: '红烧狮子头', cost: 10, count: 0},
        {text: '蒜蓉生菜', cost: 10, count: 0},
      ]
    }
  },
  components: {
    shopcart,
    cartcontrol
  },
  props: {}
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
  height: 130px;
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
