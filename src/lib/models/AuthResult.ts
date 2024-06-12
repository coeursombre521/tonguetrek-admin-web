export class AuthResult {
  id: string;
  accessToken: string;
  refreshToken: string;
  
  constructor(id: string, accessToken: string, refreshToken: string) {
    this.id = id;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}