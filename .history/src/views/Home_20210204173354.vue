<template>
  <div>
    <el-carousel style="height:600px">
      <el-carousel-item v-for="item in data" :key="item" style="height:600px">
        <img :src="`http://157.122.54.189:9095${item.url}`" class="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
import api from "@/http/api";
import {AxiosResponse} from 'axios'
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    let data = ref<any>(null)
    onMounted(() => {
      api.slideshow().then((res: AxiosResponse<any>) => {
        console.log(res.data)
        data.value = res.data
      })
    })
    return {
      data
    };
  },
});
</script>

<style scoped lang='scss'>
.img{
  width: 100%;
  height: 600px;
}
.el-card__body, .el-main {
    padding: 0 !important;
}
</style>