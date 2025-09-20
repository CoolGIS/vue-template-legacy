import 'ky'
import { ZodType } from 'zod'

// 扩展 ky 的类型，识别自定义 context
declare module 'ky' {
  interface Options {
    zodSchema?: ZodType
  }
  interface NormalizedOptions {
    zodSchema?: ZodType
  }
}
