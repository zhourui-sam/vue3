<template>
 <div id="topbox">
  <img src="@/assets/logo.jpg" class="logo">
  <div class="topMiddle">
    <div class='routerbox'>首页</div>
    <div class='routerbox'>旅游攻略</div>
    <div class='routerbox'>酒店</div>
    <div class='routerbox'>国内机票</div>
  </div>
  <div class='topRight'>登录 / 注册</div>
 </div>
</template>

<script>
import {defineComponent} from 'vue'
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
   setup() {
   return {}
   }
 })
</script>

<style scoped lang='scss'>
#topbox{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo{
  width: 156px;
  height: 43px;
}
.topMiddle{
  width: 723px;
  height: 60px;
  display: flex;
  margin-left: 10px;
}
.routerbox{
  font-size: 18px;
  height: 60px;
  padding: 0 20px;
  line-height: 60px;
}
.routerbox:hover{
  cursor: pointer;
  border-bottom: 5px solid rgb(64, 158, 255);
  color: rgb(64, 158, 255);
}
</style>