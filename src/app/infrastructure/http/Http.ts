import axios, {AxiosRequestHeaders} from 'axios';
import {IHttp} from 'src/app/infrastructure/http/IHttp';
import AsyncStorageImpl from 'src/app/infrastructure/storage/Storage';

export default class Http implements IHttp {
  
  private readonly storage = new AsyncStorageImpl();
  private headers: any = {};
  private readonly REQUEST_TIMEOUT: number = 30000;
  private token?: string = undefined;

  constructor() {}

  public setHeaders(headerKey: string, headerValue: string): void {
    this.headers[headerKey] = headerValue;
  }

  private getHeaders(): AxiosRequestHeaders {
    const headers: AxiosRequestHeaders = this.headers;
    return headers;
  }

  private async buildHeaders(): Promise<void> {
    try {
      this.token = undefined;
      if (!this.token) {
        this.token = await this.storage.get('StorageEnum.TOKEN');
      }
      if (this.token) {
        this.setHeaders('Authorization', 'Bearer ' + this.token!);
      }
      this.setHeaders('Content-type', 'application/x-www-form-urlencoded');
      this.setHeaders('charset', 'utf-8');
    } catch {
      return Promise.resolve();
    }
  }

  public async get(
    url: string,
    responseType: string = 'json',
    responseEncoding: string = 'utf-8'
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.get(url, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
        responseEncoding: responseEncoding as 'utf-8'
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async post(
    url: string,
    body?: any,
    responseType: string = 'json',
    responseEncoding: string = 'utf-8'
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.post(url, body, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
        responseEncoding: responseEncoding as 'utf-8'
      });

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async delete(
    url: string,
    responseType: string = 'json',
    responseEncoding: string = 'utf-8'
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.delete(url, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
        responseEncoding: responseEncoding as 'utf-8'
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async put(
    url: string,
    body?: any,
    responseType: string = 'json',
    responseEncoding: string = 'utf-8'
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.put(url, body, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
        responseEncoding: responseEncoding as 'utf-8'
      });

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async patch(
    url: string,
    body?: any,
    responseType: string = 'json',
    responseEncoding: string = 'utf-8'
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.patch(url, body, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
        responseEncoding: responseEncoding as 'utf-8'
      });

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}