<template>
 <div>
  <el-container>
    <el-header><nav-header></nav-header></el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
 </div>
</template>

<script>
import NavHeader from '@/components/navheader/navHeader.vue'
import {defineComponent} from 'vue'
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
      NavHeader

   },
   setup() {
   return {}
   }
 })
</script>

<style scoped lang='scss'>

</style>