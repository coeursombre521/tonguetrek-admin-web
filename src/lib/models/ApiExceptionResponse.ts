import type { ApiValidationItemResponse } from "./ApiValidationItemRespone"

export interface ApiExceptionResponse {
  correlationId?: string
  code?: string
  statusCode?: number
  message: string
  stack?: string
  cause?: string
  subErrors?: ApiValidationItemResponse[]
}