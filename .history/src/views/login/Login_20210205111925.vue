<template>
 <div>
    <img src='`http://157.122.54.189:9095${data[0].url}`' class="img">
 </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
import api from "@/http/api";
import {AxiosResponse} from 'axios'

 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
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
   }
 })
</script>

<style scoped lang='scss'>
.img{
  width: 100%;
  height: 600px;
}
</style>