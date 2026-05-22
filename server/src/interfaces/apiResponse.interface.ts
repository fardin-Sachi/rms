export interface SuccessResponse<T> {
  success: true;
  message?: string;
  data?: T;
  meta?: Record<string, unknown>;
}

export interface ErrorResponse {
  success: false;
  message?: string;
  errors?: unknown;
  stack?: string;
}
