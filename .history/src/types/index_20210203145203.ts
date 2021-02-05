//公共类型

export interface Rules {
  message: string,
  required?: boolean,
  min?: number,
  max?: number,
  type?: string,
  trigger: string,
  validator: any,
}