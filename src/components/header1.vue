<template>
  <div class='header1'>
    <div class='content-wrapper'>
        <div class='avatar'>
            <!-- <img width='64' :src='seller.avatar'> -->
        </div>
        <div class='headerContent'>
            <img :src="seller.img" class="headImg">
            <div class='headName'>{{seller.name}}</div>
            <div class='headTime'>{{seller.rtime}}</div>
            <div class='headId'>餐厅号: {{seller.rid}}</div>
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
  }
}
</script>

<style>
.header1 {
    height: 100px;
    /*background-color: #f3f5f7;*/
    background-color: #2E4835;
    width: 375px;
    margin: 0px;
    padding: 0px;
    border: 1px solid silver;
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
</style>
