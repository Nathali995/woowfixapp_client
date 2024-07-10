export interface IHttp {
    get(url: string, body?: any, responseType?: string): Promise<any>;
    post(url: string, body?: any, responseType?: string): Promise<any>;
    patch?(url: string, body?: any, responseType?: string): Promise<any>;
    put?(url: string, body?: any, responseType?: string): Promise<any>;
    delete?(url: string, body?: any, responseType?: string): Promise<any>;
    setHeaders(headerKey: string, headerValue: string): void;
  }