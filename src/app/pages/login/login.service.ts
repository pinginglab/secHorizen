import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../core/base.service';
import { LoginModel } from './loginModel';
import {API_BASE_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private baseService: BaseService) { }

  login(credentials): Observable<LoginModel> {
    return this.baseService.login(`${API_BASE_URL}auth/login`, credentials);
  }

  logout(): Observable<any> {
    return this.baseService.post(`${API_BASE_URL}auth/logout`, null);
  }

  getCode(): Observable<any> {
    return this.baseService.get(`${API_BASE_URL}api/validate/image`);
  }

  /* 返回baseservice是否初始化完成 */
  getCheckStatus(): boolean {
    return this.baseService.getCheckStatus();
  }
}
