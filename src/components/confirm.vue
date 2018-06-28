<template>
  <div class="total">
  	<div class="totalText">总价: {{total}}</div>
  </div>
</template>

<script>
var axios = require('axios');

export default {
  name: 'confirm',
  data() {
  	return {
  		postData : this.$route.query.post_data,
  		total : this.$route.query.post_data.total_price
  	}
  },
  mounted() {
  	axios.post('/api/v1/order', this.postData).then((response)=>{
  		console.log('post success');
  		console.log(response);
  	}).catch((err)=>{
  		console.log('post failed');
  		console.log(err);
  	});
  }
}

</script>

<style>
.total {
	width: 375px;
	height: 40px;
	border: 1px solid silver;
}
</style>
