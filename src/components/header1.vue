<template>
	<div>
	  <div class='header1'>
	    <div class='content-wrapper' @click="clickHeadInfo()">
	        <div class='avatar'>
	            <!-- <img width='64' :src='seller.avatar'> -->
	        </div>
	        <div class='headerContent'>
	            <img :src="seller.img" class="headImg">
	            <div class='headName'>{{seller.rname}}</div>
	            <div class='headTime'>{{seller.rtime}}</div>
	            <div class='headId'>餐厅号: {{seller.rid}}</div>
	        </div>
	    </div>
	    <div class="res-info" v-show="ifShow" @click="closeInfo()">
	    	<img :src="seller.data.image_url" class='res-img'>
        	<div class='res-name'>餐厅号: {{seller.data.restaurant_id}}</div>
        	<div class='res-dname'>桌号: {{seller.data.desk_number}}</div>
        	<div class='res-manager'>电话: {{seller.data.manager_number}}</div>
        	<div class="res-infomation">介绍 : {{seller.data.description}}</div>
        	<div class="res-date">日期 : {{seller.data.date}}</div>
	    </div>
	</div>
  </div>
</template>

<script>

export default {
  name: 'header1',
  props: ['seller'],
  mounted() {
      // alert(this.seller.id)
  },
  methods: {
  	clickHeadInfo() {
  		console.log('clickHeadInfo')
  		console.log(this.seller.data)
  		this.flag = true;
  	},
  	closeInfo() {
  		console.log("close info")
  		this.flag = false;
  	}
  },
  data() {
  	return {
  		flag: false
  	}
  },
  computed: {
  	ifShow() {
  		return this.flag;
  	}
  }
}
</script>

<style>
.header1 {
    height: 100px;
    /*background-color: #f3f5f7;*/
    background-color: #2E4835;
    width: 373px;
    margin: 0px;
    padding: 0px;
    border: 1px solid silver;
}
.content-wrapper {
	height: 100px;
	width: 373px;
}
.headImg, .headName, .headTime, .headId {
    color: white;
}
.headImg {
      position: absolute;
      width: 60px;
      height: 80px;
      top: 10px;
      border: 1px solid black;
}
.headName {
    position: absolute;
    left: 80px;
    top: 20px;
}
.headTime {
    position: absolute;
    left: 80px;
    top: 50px;
}
.headId {
    position: absolute;
    left: 80px;
    top: 70px;
}
.res-info {
	position: absolute;
	height: 400px;
	width: 375px;
	background-color: white;
	z-index: 30;
	top: 110px;
}
.res-img {
	position: absolute;
	left: 130px;
	width: 100px;
	height: 100px;
}
.res-date, .res-infomation, .res-manager, .res-dname, .res-name {
	position: absolute;
	top: 100px;
	left: 20px;
}
.res-name {
	top : 120px;
}
.res-dname {
	top: 150px;
}
.res-manager {
	top: 180px;
}
.res-infomation {
	top: 210px;
}
.res-date {
	top: 240px;
}
</style>
