<template>
 <div id="topbox">
  <img src="@/assets/logo.jpg" class="logo">
  <div class="topMiddle">
    <div class='routerbox'>首页</div>
    <div class='routerbox'>旅游攻略</div>
    <div class='routerbox'>酒店</div>
    <div class='routerbox'>国内机票</div>
  </div>
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
  background: red;
}
.logo{
  width: 156px;
  height: 43px;
}
</style>