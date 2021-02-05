<template>
  <!--<div class="about">
    {{num}}
  </div>-->
  <div>
    <child :name="name" @send="send"></child>
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
    let send (val:number) =>{

    }
    return {
      num,
      name
    }
  },
})
</script>