<template>
  <div>
    <el-container>
      <el-header><nav-header></nav-header></el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer><nav-footer></nav-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import NavFooter from "@/components/navfooter/navFooter.vue";
import NavHeader from "@/components/navheader/navHeader.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  props: {},
  components: {
    NavHeader,
    NavFooter,
  },
  set NavFooterup() {
    return {};
  },
});
</script>

<style scoped lang='scss'>
</style>