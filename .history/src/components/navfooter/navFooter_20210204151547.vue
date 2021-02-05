<template>
 <div id="footerbox">
  <div class="footercontainer">
    <div class="footercontaintop">
      <div class="footertext">
        <div class="footertexttitle">闲云旅游旅游网</div>
        <div class="footertextdetail">
          <div>上亿旅行者共同打造的"旅行神器"</div>
          <div><div>60,000</div> 多个全球旅游目的地</div>
          <div><div>600,000</div> 个细分目的地新玩法</div>
          <div><div>760,000,000</div> 次攻略下载</div>
          <div><div>38,000</div> 家旅游产品供应商</div>
        </div>
      </div>
      <div class="footertext">
        <div class="footertexttitle">关于我们</div>
        <div class="footertextdetail"></div>
      </div>
      <div class="footertext">
        <div class="footertexttitle">旅行服务</div>
        <div class="footertextdetail"></div>
      </div>
      <div class="footertext">
        <div class="footertexttitle"></div>
        <div class="footertextdetail">关注我们</div>
      </div>
    </div>
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