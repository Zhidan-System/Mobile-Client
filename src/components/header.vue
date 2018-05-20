<template>
  <div class='header'>
    <div class='content-wrapper'>
    	<div class='avatar'>
    		<!-- <img width='64' :src='seller.avatar'> -->
    	</div>
    	<div class='content'>
    		<div class='name'>{{seller.name}}</div>
    		<div class='time'>{{seller.time}}</div>
    	</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header',
  props: {
  	seller: {
  		name: '那里特色川菜',
  		time: '营业时间:10:00-18:00'
  	}
  }
}
</script>

<style>
.header {
	height: 100px;
	background-color: #f3f5f7;
}
</style>
