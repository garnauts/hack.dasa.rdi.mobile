import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  public get(url, params) : Observable<any> {
    return this.http.get(url, {params: params})
    .map(this.success)
    .catch(this.error);
  }

  public post(url, params) : Observable<any> {
    return this.http.post(url, params)
    .map(this.success)
    .catch(this.error);
  }

  public put(url, params) : Observable<any> {
    return this.http.put(url, params)
    .map(this.success)
    .catch(this.error);
  }

  public delete(url, params) : Observable<any> {
    return this.http.request('DELETE', url, {
      body: params
    })
    .map(this.success)
    .catch(this.error);
  }

  private success(response: any) {    
    return response;    
  }

  private error(error: any) {
    return Observable.throw(error);
  }

}