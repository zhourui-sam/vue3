<template>
 <div id="footerbox">
  <div class="footercontainer"></div>
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
#footerbox{
  height: 330px;
  background: rgb(51, 51, 51);
  color: white;
}
.footercontainer{
  width: 1000px;
  height: 330px;
  background: salmon;
}
</style>