export interface Error {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
  subErrors: any[];
}
