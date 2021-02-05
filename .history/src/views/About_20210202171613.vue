<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
export default defineComponent({
  name: 'about',
  setup() {
    let route = useRoute()  //等同于this.$route
    let num = ref<number>(0)
    onMounted(() =>{
      num.value = Number(route.query.num)
    })
    return {
      num,
    }
  },
})
</script>