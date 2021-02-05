<template>

</template>

<script lang="ts">
//按需引入
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: '',
  props: {

  },
  components: {

  },
  //所有逻辑都在setup里面
  //setup相当于beforeCreate和Created这两个生命周期
  setup() {
    //定义数据
    //ref 只能定义单个数据
    //泛型
    let num = ref<num>
  }
})
</script>

<style scoped lang="scss">
  
</style>