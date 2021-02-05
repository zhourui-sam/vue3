<template>
  <!--<div class="about">
    {{num}}
  </div>-->
  <div>
    <child v-model:name="name" @send="send"></child>
    <!--父组件给子组件传值都添加v-model,v-model可以让子组件直接修改父组件传过去的值,没有v-model则不能修改-->
  </div>
</template>


<script lang="ts">
import Child from '@/components/Child.vue'
import {defineComponent, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
export default defineComponent({
  name: 'about',
  components: { Child },
  setup() {
    let route = useRoute()  //等同于this.$route
    let num = ref<number>(0)
    let name = ref<string>('Sam')
    onMounted(() =>{
      num.value = Number(route.query.num)
    })
    let send = (val:number) =>{
      console.log(val)
    }
    return {
      num,
      name,
      send
    }
  },
})
</script>