<template>
 <div>
  <button @click="update">修改父组件的值</button>
 </div>
</template>

<script lang="ts">
  import {defineComponent, ref, getCurrentInstance} from 'vue'
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
      let num = ref<number>(100)
      let instance = getCurrentInstance()//通过getCurrentInstance()方法才能直接修改props中父组件传过来的值
      let update = () => {

      }
      console.log(ctx)
      ctx.emit('send', num.value)
      return {
        num,
        update,
      }
    }
  })
</script>

<style scoped lang='scss'>

</style>