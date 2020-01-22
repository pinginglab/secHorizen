import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { API_BASE_URL } from '../../../app.constants';
import { BaseService } from '../../core/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    // public url = `${API_BASE_URL}uaa/api/users`;
    //
    // constructor(public http: HttpClient, public baseService: BaseService) { }
    //
    // getUsers(offset: number, size: number): Observable<HttpResponse<any>> {
    //     return this.http.get(`${API_BASE_URL}uaa/api/users?page=${offset}&size=${size}`, { observe: 'response' });
    // }
    //
    // getUserAuthorities(): Observable<string[]> {
    //     return this.baseService.get(`${API_BASE_URL}uaa/api/users/authorities`);
    // }
    //
    // addUser(user: User) {
    //     return this.baseService.post(`${API_BASE_URL}uaa/api/users`, user);
    // }
    //
    // updateUser(user: User) {
    //     return this.http.put(this.url, user);
    // }
    //
    // deleteUser(id: number) {
    //     return this.http.delete(this.url + '/' + id);
    // }
    //
    // optionUser() {
    //     return this.http.options(this.url);
    // }
}
