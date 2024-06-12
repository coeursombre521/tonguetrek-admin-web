export interface ApiException {
  correlationId: string;
  message: string;
  code: string;
  stack?: string;
}