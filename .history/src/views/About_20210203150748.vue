<template>
  <!--<div class="about">
    {{num}}
  </div>-->
  <!--<div ref="dv">
    <child ref="child" v-model:name="name" @send="send"></child>
    {{name}}
    {{num}}
    父组件给子组件传值都添加v-model,v-model可以让子组件直接修改父组件传过去的值,没有v-model则不能修改
    操作dom元素或者实例,用ref给定一个实例变量名字然后要用let声明对应变量并return
  </div>-->
  <el-form ref="ruleForm" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item> 
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  <el-form>
</template>


<script lang="ts">
import Child from '@/components/Child.vue'
import {defineComponent, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {Rules} from '@/types/index'
import { ElMessage } from 'element-plus'

export interface Model {
  username: string,
  password: string
}
export interface Rule {
  username: Rules[],
  password: Rules[]
}

export default defineComponent({
  name: 'about',
  components: { Child },
  setup() {
    let form = ref<any>(null)
    let ruleForm = ref<Model>({
      username: '',
      password: ''
    })
    let rules = ref<Rule> ({
      username: [
        {
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }
      ],
    })
    let login = ():void => {
      form.value.validate((valid: boolean) => {
        if (valid) {
          ElMessage.success('登陆成功')
        }else {
          ElMessage.error('表单验证失败')
        }
      })
    }

    return {
      ruleForm,
      rules,
      login,
      form,
    }
    // let route = useRoute()  //等同于this.$route
    // let num = ref<number>(0)
    // let name = ref<string>('Sam')
    // let child = ref<any>(null)//获取实例ref的变量类型为<any>
    // let dv = ref<HTMLDivElement | null>(null)//获取dom元素ref的变量类型不为any,如:div则为HTMLDivElement,input则为HTMLInputElement
    // onMounted(() =>{
    //   // num.value = Number(route.query.num)
    //   console.log(child.value)
    // })
    // let send = (val:number) =>{
    //   console.log(val)
    // }
    // return {
    //   num,
    //   name,
    //   send,
    //   child,
    //   dv,
    // }
  },
})
</script>