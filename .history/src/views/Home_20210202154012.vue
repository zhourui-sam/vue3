<template>
  <div>
    <!--{{num}} --- {{str}} --- {{obj}}-->
    <!--{{data.name}} --- {{data.age}}-->
    {{name}} --- {{age}}
    {{num}}
    <button @click="update">改变值</button>
  </div>
</template>

<script lang="ts">
//按需引入
import {defineComponent, ref, reactive, toRefs, watch, watchEffect} from 'vue'

interface Obj {
  name: string,
  age: number
}
interface Data {
  name: string
  age: number
}


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
    //reactive
    //泛型
    let num = ref<number>(0)
    // let str = ref<string>('333')
    // let obj = ref<Obj>({
    //   name: 'Jack',
    //   age: 20
    // })

    //只要用ref或者用reactive定义的数据变化时 就会执行watchEffect
    watchEffect(() => {
      
    })

    //reactive定义对象类型的数据
      let data: Data = reactive<Data> ({
        name: 'sam',
        age: 18
      })

      let update = ():void => {
        num.value ++,
        data.name = 'jack'
      }

    //所有定义的数据和方法都必须return
    return {
      num,
      // str,
      // obj
      ...toRefs(data),
      // data,
      update
    }
  }
})
</script>

<style scoped lang="scss">
  
</style>