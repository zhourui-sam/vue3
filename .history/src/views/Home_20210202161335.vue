<template>
  <div>
    <!--{{num}} --- {{str}} --- {{obj}}-->
    <!--{{data.name}} --- {{data.age}}-->
    {{name}} --- {{age}}
    {{num}}
    <button @click="update">改变值</button>
    <input type="text" v-model="value">
    {{value}}
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
    let value = ref<string>('啊哈哈')
    // let str = ref<string>('333')
    // let obj = ref<Obj>({
    //   name: 'Jack',
    //   age: 20
    // })

    //watch 监听某一个或者某几个数据
    //可以写多个watch监听多个数据，也可以把watch的第一个参数写成数组的形式监听多个数据
    // watch(() => [value.value, num.value], (val, oldVal) => {
    //   console.log(oldVal)
    //   console.log(val)
    // })
    let stopWatch = watch(() => value.value, (val, oldVal) => {
      if (value.value === '111') stopWatch()
      console.log(value.value)
    })
    // watch(() => num.value, (val, oldVal) => {
    //   console.log(oldVal)
    //   console.log(val)
    // })


    //只要用ref或者用reactive定义的数据变化时 就会执行watchEffect

    // watchEffect(() => {
    //   console.log(num.value)
    // })
    let stopWatchEffect = watchEffect(() => {//watchEffect有返回值，返回一个停止监听的函数,当达到条件的时候停止监听
      if (num.value === 5) stopWatchEffect()
      console.log(num.value)
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
    //在template里使用的变量才需要return
    return {
      num,
      // str,
      // obj
      ...toRefs(data),
      // data,
      update,
      value,
    }
  }
})
</script>

<style scoped lang="scss">
  
</style>