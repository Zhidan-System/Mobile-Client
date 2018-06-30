<template>
  <div>
    <v-header1 :seller='seller'></v-header1>
    <router-view :seller='seller'></router-view>
  </div>
</template>

<script>
import header1 from './components/header1'
import order from './components/order'
var axios = require('axios')

export default {
  name: 'App',
  components: {
    'v-header1': header1,
    order
  },
  data () {
    return {
      //商家信息
      seller: {
        rname: 'XX餐馆',
        rtime: '营业时间:10:00-18:00',
        rid: this.$route.params.rid,
        did: this.$route.params.did,
        img: "",
        data: {}
      }
    };
  },
  mounted () {
    axios.get('/api/v1/restaurant', {
        params: {
            restaurant_id: 1
        }
    }).then((response) => {
        console.log('get success')
        console.log(response.data.data)
        var data = response.data.data;
        this.seller.data = data;
        this.seller.img = data.image_url;
        this.seller.rtime = data.date;
        this.seller.rname = data.restaurant_name;
        // console.log('this.seller.rname')
        // console.log(this.seller.rname)
    }).catch((err) => {
        console.log('get err')
        console.log(err)
    })
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
