<template>
 <div>

 </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  export default defineComponent({
    name: '',
    props: {
      name: {
        type: String
      }
    },
    components: {

    },
    setup(props, ctx) {//setup有两个参数，第一个为props是props中接收的数据type为Readonly只读，不能修改
    //要想修改props中的值要用到第二个参数ctx里面是方法，emit等同于$emit可以修改props中的数据

    return {}
    }
  })
</script>

<style scoped lang='scss'>

</style>