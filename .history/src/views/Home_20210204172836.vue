<template>
  <div>home</div>
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
      })
    })
    return {};
  },
});
</script>

<style scoped lang='scss'>
</style>