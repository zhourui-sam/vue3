//公共类型

export interface Rules {
  message: string,
  trigger: string,
  required?: boolean,
  min?: number,
  max?: number,
  type?: string,
  
}