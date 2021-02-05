<template>
 <div id="topbox">
  <img src="@/assets/logo.jpg" class="logo">
  <div>
    <div class='routerbox'></div>
    <div class='routerbox'></div>
    <div class='routerbox'></div>
    <div class='routerbox'></div>
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