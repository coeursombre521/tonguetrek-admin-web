import axios, { AxiosError, type AxiosResponse } from 'axios'
import type { ApiValidationItemResponse } from './ApiValidationItemRespone'
import { handleResponse, type EndpointResult } from './EndpointResult'

export interface SignInRequest {
  email: string
  password: string
}

export interface SignInResponse {
  id: string
  accessToken: string
  refreshToken: string
}

export class SignInModel {
  static async signIn(
    email: string,
    password: string
  ): Promise<EndpointResult<SignInResponse>> {
    try {
      const request: SignInRequest = {
        email,
        password
      }
      const response: AxiosResponse<SignInResponse> = await axios.post(
        'https://api.tonguetrek.fleurdejasmin.cafe/api/v1/auth/login',
        request
      )
      return handleResponse(response);
    }
    catch (error: any) {
      return handleResponse(error);
    }
  }
}