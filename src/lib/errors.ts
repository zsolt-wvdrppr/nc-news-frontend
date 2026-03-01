export class AppError extends Error {
  status?: number;
  type: string;

  constructor(message: string, status?: number) {
    super(message);
    this.type = "error";
    this.status = status;
    this.name = "ApiError";
  }
}
