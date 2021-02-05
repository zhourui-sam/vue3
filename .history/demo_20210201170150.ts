//给所有变量和方法 方法的参数给类型 类型都是小写

//如果不给类型，ts会自动推导类型 从初始值推导
// let num: number = 10
// let str: string = '123'
// let bol: boolean = false

//undefined 和 null一般不直接给

//联合类型
// let n: number | string = 1

//常量类型
// let size: string = " " | "mini" | "medium" | "large"

//数组
// let arr : Array<number> = [1,2,3]
// let arr1 : number[] = [1,2,3]//第二种和第一种是一样的方式，数组里面的数据类型必须为给定的类型，不然会报错，建议用第二种

//对象
//可选属性,在属性名后面加?,可以有,也可以没有这个属性
// interface Obj {
//   name: string,
//   age: number,
//   sex?: '男' | '女'
// }

// let obj: Obj = {
//   name: 'jack',
//   age: 20,
//   sex: '男'
// }

interface Children {
  name: string
}

interface Obj {
  name: string,
  children: Children[]
}

let arr: Obj[] = [
  {
    name: '',
    children: [
      {
        name:''
      }
    ]
  }
]

let obj: Obj = {
  children: [
    {
      name: 'Tom'
    }
  ],
  name: 'Jack'
}

//函数
let fn = (num1: number, num2: number): void => {//函数和函数的参数都要给类型,如果函数没有返回值,函数返回的类型就是void
  console.log(num1)
  console.log(num2)
}

let fn1 = (num1: number, num2: number): number => {//如果有返回值,函数返回的类型就是返回值的类型
  return num1 + num2
}
let fn2 = (num1: number, num2: number,num3?: number): number => {//函数也有可选参数,但可选参数要写在最后
  return num1 + num2 + num3
}

let obj1: {name: string , age: number} = {
  name: 'Jack',
  age: 20
}