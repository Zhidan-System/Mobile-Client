<template>
  <div>
    <v-header :seller='seller'></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header'
import order from './components/order'

export default {
  name: 'App',
  components: {
    'v-header': header,
    order
  },
  data() {
    return {
      //商家信息
      seller: {
        name: '那里特色川菜',
        time: '营业时间:10:00-18:00'
      }
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
