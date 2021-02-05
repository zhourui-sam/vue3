<template>
 <div id="footerbox">
  <div class="footercontainer">
    <div class="footercontaintop"></div>
    <div class="footercontainbottom"></div>
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
#footerbox{
  height: 330px;
  background: rgb(51, 51, 51);
  color: white;
  display: flex;
  justify-content: center;
}
.footercontainer{
  width: 1000px;
  height: 330px;
  background: salmon;
}
.footercontaintop{
  width: 1000px;
  height: 162px;
  display: flex;
  justify-content: space-around;
}
.footercontainbottom{
  width: 1000px;
  height: 117px;
  margin-top: 20px;
}
</style>