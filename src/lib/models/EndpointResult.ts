import { AxiosError, type AxiosResponse } from "axios";
import type { ApiExceptionResponse } from "./ApiExceptionResponse";

export type EndpointResult<T> = ESuccess<T> | EError;

export class ESuccess<T> {
  readonly type = "success";
  constructor(public code: number, public body: T) {}
}

export class EError {
  readonly type = "error";
  constructor(
    public exception: Error,
    public code?: string,
    public body?: ApiExceptionResponse
  ) {}
}

export function handleResponse<T>(response: AxiosResponse<T> | any) {
  if (response instanceof AxiosError) {
    return new EError(
      response,
      response.code,
      response.response?.data
    ) 
  }
  else if (response instanceof Error) {
    return new EError(
      response,
      "_",
      {
        message: response.message,
        stack: response.stack
      }
    )
  }
  else {
    return new ESuccess<T>(
      response.code,
      response.data
    ) 
  }
}