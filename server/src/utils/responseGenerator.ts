class ResponseData {
  status: number;
  message: string;
  details?: Record<string, unknown>;
  error?: unknown;
  data?: unknown;

  constructor(
    status: number,
    message: string,
    data?: unknown,
    error?: unknown,
    othersInfo?: Record<string, unknown>
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.error = error;
    this.details = othersInfo;
  }
}

export default ResponseData;
