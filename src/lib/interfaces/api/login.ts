export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResult {
  id: string;
  accessToken: string;
  refreshToken: string;
}