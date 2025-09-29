import { z } from 'zod'

const BaseSchema = z.object({
  code: z.number(),
  message: z.string()
})

export function createCommonResponseSchema<T extends z.ZodRawShape>(schema: z.ZodObject<T>) {
  return BaseSchema.extend(schema.shape)
}
