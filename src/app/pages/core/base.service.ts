import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { tap } from 'rxjs/operators';

import { LoginModel } from '../login/loginModel';
import {API_BASE_URL} from '../../app.constants';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Expose-Headers': ['link', 'content-type'] })
};

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private isCheck: boolean = false; // 是否已经初始化完成baseservice

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.checkHealth().subscribe(
      _ => {
        this.isCheck = true;
        let cookie = this.cookieService.get('XSRF-TOKEN')
        httpOptions = {
          headers: new HttpHeaders({ 'x-xsrf-token': cookie })
        }
      }
    )
  }

  get(url, options?: object): Observable<any> {
    this.generateHeaders();
    Object.assign(httpOptions, options);
    return this.http.get(url, httpOptions)
  }

  post(url, data, options?): Observable<any> {
    this.generateHeaders();
    Object.assign(httpOptions, options);
    return this.http.post(url, data, httpOptions).pipe(
      tap(_ => {
        this.generateHeaders()
      })
    )
  }

  put(url, data, options?): Observable<any> {
    this.generateHeaders();
    Object.assign(httpOptions, options);
    return this.http.put(url, data, httpOptions)
  }

  patch(url, data, options?): Observable<any> {
    this.generateHeaders();
    Object.assign(httpOptions, options);
    return this.http.patch(url, data, httpOptions)
  }

  delete(url, options?): Observable<any> {
    this.generateHeaders();
    Object.assign(httpOptions, options);
    return this.http.delete(url, httpOptions)
  }

  download(param): Observable<any> {
    return this.http.post(`${API_BASE_URL}security/api/file/download`, param, { responseType: 'arraybuffer' })
  }

  generateHeaders() {
    let cookie = this.cookieService.get('XSRF-TOKEN');
    httpOptions = {
      headers: new HttpHeaders({ 'x-xsrf-token': cookie })
    }
  }

  /* 检查链接状态，并设置xsrf-token */
  checkHealth(): Observable<any> {
    return this.http.get(`${API_BASE_URL}management/health`)
  }

  /* 返回当前是否已经初始化完成baseservice */
  getCheckStatus(): boolean {
    return this.isCheck
  }

  login(url, credentials): Observable<LoginModel> {
    return this.post(url, credentials)
  }
}
