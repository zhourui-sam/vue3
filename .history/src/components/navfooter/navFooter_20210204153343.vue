<template>
 <div id="footerbox">
  <div class="footercontainer">
    <div class="footercontaintop">
      <div class="footertext">
        <div class="footertexttitle">闲云旅游旅游网</div>
        <div class="footertextdetail">
          <div class="detailbox">上亿旅行者共同打造的"旅行神器"</div>
          <div class="detailbox"><div class="detailnumber">60,000</div>多个全球旅游目的地</div>
          <div class="detailbox"><div class="detailnumber">600,000</div>个细分目的地新玩法</div>
          <div class="detailbox"><div class="detailnumber">760,000,000</div>次攻略下载</div>
          <div class="detailbox"><div class="detailnumber">38,000</div>家旅游产品供应商</div>
        </div>
      </div>
      <div class="footertext">
        <div class="footertexttitle">关于我们</div>
        <div class="footertextdetail">
          <div class="detailbox">隐私政策 商标声明</div>
          <div class="detailbox">服务协议 游记协议</div>
          <div class="detailbox">商城平台服务协议</div>
          <div class="detailbox">网络信息侵权通知指引</div>
          <div class="detailbox">闲云旅游旅游网服务监督员</div>
          <div class="detailbox">网站地图加入闲云旅游</div>
        </div>
      </div>
      <div class="footertext">
        <div class="footertexttitle">旅行服务</div>
        <div class="footertextdetail">
          <div class="detailbox">旅游攻略 酒店预订</div>
          <div class="detailbox">旅游特价 国际租车</div>
          <div class="detailbox">旅游问答 旅游保险</div>
          <div class="detailbox">旅游指南 订火车票</div>
          <div class="detailbox">旅游资讯 APP下载</div>
        </div>
      </div>
      <div class="footertext">
        <img src="@/assets/1556522965.png" class='footerimg'>
        <div class="footertextdetail">关注我们</div>
      </div>
    </div>
    <div class="footercontainbottom">
      <div>京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved</div>
    </div>
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
  color: rgb(204, 204, 204);
  display: flex;
  justify-content: center;
}
.footercontainer{
  width: 1000px;
  height: 330px;
  margin-top: 30px;
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
  margin-top: 30px;
  border-top: 1px solid rgb(204, 204, 204);
  display: flex;
  justify-content: center;
  align-items: center;
}
.footertexttitle{
  font-size: 16px;
}
.footertextdetail{
  margin-top: 10px;
  text-align: center;
}
.detailbox{
  display: flex;
  height: 21px;
  line-height: 21px;
}
.detailnumber{
  color: rgb(255, 165, 0);
  margin-right: 5px;
}
.footerimg{
  width: 140px;
  height: 140px;
}
</style>