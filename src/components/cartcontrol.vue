<template>
  <div class="cartcontrol">
    <div class="cart-minus" @click="minus">-</div>
    <div class="cart-count">{{message}}</div>
    <div class="cart-add" @click="add">+</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'cartcontrol',
  props: ['food'],
  created() {
    // console.log('cartcontrol-test: ')
  },
  methods: {
    add() {
      this.food.count++;
      this.food.select = true;
      // console.log("add one item");
      // console.log(this.food.dish_name);
      // console.log(this.food.count);
      this.message = this.food.count;
    },
    minus() {
      if (this.food.count > 0) {
        this.food.count--;
      }
      if (this.food.count < 1) {
        this.food.select = false;
      }
      this.message = this.food.count;
    }
  },
  data() {
    return {
        message : 0
    }
  }
}
</script>

<style>
.cartcontrol {
}
.cart-minus {
  /*background-color: red;*/
  position: absolute;
  height: 50px;
  width: 30px;
}
.cart-count {
  /*background: black;*/
  position: absolute;
  height: 50px;
  width: 30px;
  left: 30px;
}
.cart-add {
  /*background: blue;*/
  position: absolute;
  height: 50px;
  width: 30px;
  left: 60px;
}
</style>
