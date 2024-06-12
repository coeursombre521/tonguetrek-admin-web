
import axios from 'axios';
import type { LoginData, AuthResult } from '$lib/interfaces/api/login';

import { PUBLIC_API_BASE_URL, PUBLIC_API_VERSION } from '$env/static/public';
import { AUTH_REFRESH_TOKEN_KEY } from './authStoreService';

const baseUrl = `https://${PUBLIC_API_BASE_URL}/${PUBLIC_API_VERSION}`

export const login = async (data: LoginData): Promise<AuthResult> => {
  const response = await axios.post(`${baseUrl}/login`, data);
  return response.data;
}

export const refreshToken = async(): Promise<AuthResult> => {
  const response = await axios.get(`${baseUrl}/refresh-token`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_REFRESH_TOKEN_KEY)}`
    },
  });
  return response.data;
}
