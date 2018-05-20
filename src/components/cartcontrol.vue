<template>
  <div class="cartcontrol">
    <div class="cart-minus" @click="minus">-</div>
    <div class="cart-count">{{food.count}}</div>
    <div class="cart-add" @click="add">+</div>
  </div>
</template>

<script>

export default {
  name: 'cartcontrol',
  props: {
  	food:{
      count: 0
    }
  },
  created() {
    console.log('cartcontrol-test: ')
  },
  methods: {
    add() {
      this.food.count++;
      console.log("add one item");
    },
    minus() {
      if (this.food.count > 0)
        this.food.count--;
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
