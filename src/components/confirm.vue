<template>
  <div class="total">
  	<div class="paySuccess">点餐成功!</div>
  	<div class="orderId">订单号: {{order_id}}</div>
    <div class="totalText">总价: {{total}}</div>
  </div>
</template>

<script>
var axios = require('axios')

export default {
  name: 'confirm',
  data () {
      return {
          postData: this.$route.query.post_data,
          total: this.$route.query.post_data.total_price,
          order_id: 0
      }
  },
  mounted () {
      axios.post('/api/v1/order', this.postData).then((response) => {
          console.log('post success')
          console.log(response)
          this.order_id = response.data.data.order_id;
      }).catch((err) => {
          console.log('post failed')
          console.log(err)
      })
  }
}

</script>

<style>
.total {
	top: 430px;
	position: relative;
    width: 373px;
    height: 40px;
    border: 1px solid silver;
}
.paySuccess {
	position: absolute;
	top: -250px;
	left: 100px;
	font-size: 40px;
	color: red;
	font-weight: bold;
}
.orderId {
	position: absolute;
	left: 20px;
	top: 5px;
	font-size: 20px;
}
.totalText {
	position: absolute;
	right: 20px;
	top: 5px;
	font-size: 20px;
}
</style>
