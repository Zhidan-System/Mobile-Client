<template>
  <div class="cartcontrol">
<!--     <div class="cart-minus" @click="minus">-</div>
    <div class="cart-count">{{message}}</div>
    <div class="cart-add" @click="add">+</div> -->
    <!-- <el-input-number class="cart-count2" v-model="num1" @change="handleChange" :min="0" :max="9" label="描述文字" size="mini"></el-input-number> -->
    <!-- <el-button class="b-minus" @click="minus" size="medium" circle></el-button> -->
    <button class="b-minus" @click="minus">-</button>
    <!-- <span class='minus'>-</span> -->
    <span class="number">数量: {{num1}}</span>
    <button class="b-plus" @click="add">+</button>
    <!-- <el-button class="b-plus" @click="add" size="medium" circle></el-button> -->
    <!-- <span class="plus">+</span> -->
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'cartcontrol',
  model: {
    prop: 'num1'
  },
  props: ['food'],
  created () {
    // console.log('cartcontrol-test: ')
    num1 : this.food.count;
  },
  mounted () {
    // this.food.count = this.num1;
    num1 : this.food.count;
  },
  methods: {
      add (event) {
        // if (!event._constructed) {
        //   return;
        // }
        this.food.count++;
        console.log("add one item");
        this.food.select = true;
        this.num1 = this.food.count;
     },
     minus (event) {
        // if (!event._constructed) {
        //   return;
        // }
       if (this.food.count > 0) {
          this.food.count--;
       }
       if (this.food.count < 1) {
         this.food.select = false;
       }
       this.num1 = this.food.count;
     }
  },
  data () {
    return {
        num1 : this.food.count
    }
  },
  watch: {
    num1(curValue, oldValue) {
      console.log('curValue')
      console.log (curValue)
    }
  }
}
</script>

<style>
.cartcontrol {
  position: relative;
  width: 80px;
  height: 50px;
  top: 15px;
  left: -50px;
}
.minus {
  /*background-color: red;*/
  position: absolute;
  left: 19px;
  /*top: -15px;*/
  z-index: 10;
  /*left: px;*/
}
.b-minus {
  position: absolute;
  left: 10px;
  z-index: 9;
  background: white;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  font-size: 20px;
}
.number {
  position: absolute;
  width: 100px;
  left: 43px;
  top: -45px;
}
.plus {
  position: absolute;
  left: 61px;
  /*top: -15px;*/
  z-index: 10;
  /*left: 20px;*/
}
.b-plus {
  position: absolute;
  left: 56px;
  z-index: 9;
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  font-size: 20px;
}
</style>
