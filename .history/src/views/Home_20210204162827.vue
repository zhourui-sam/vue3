<template>
  <div>home</div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import api from "@/http/api";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    onMounted(() => {
      api.slideshow().then(res: Axiosresponse<any> => {
        console.log(res.data)
      })
    })
    return {};
  },
});
</script>

<style scoped lang='scss'>
</style>