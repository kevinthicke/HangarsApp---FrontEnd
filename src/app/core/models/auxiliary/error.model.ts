export class Error {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
  subErrors: any[];

  constructor(status: string, message: string) {
    this.status = status;
    this.message = message;
  }
}
