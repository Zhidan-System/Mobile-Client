<template>
  <div class='header'>
    <div class='content-wrapper'>
    	<div class='avatar'>
    		<!-- <img width='64' :src='seller.avatar'> -->
    	</div>
    	<div class='content'>
    		<div class='name'>{{seller.name}}</div>
    		<!-- <div class='time'>{{seller.time}}</div> -->
    		<div class='id'>餐厅号: {{seller.rid}}</div>
    	</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header',
  props: ['seller'],
  mounted() {
  	// alert(this.seller.id)
  }
}
</script>

<style>
.header {
	height: 100px;
	background-color: #f3f5f7;
}
</style>
