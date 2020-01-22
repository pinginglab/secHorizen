import { Injectable } from '@angular/core';
import { TokenPayload } from './base.model';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { UserService } from '../system/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    private payload: TokenPayload;

    constructor(private cookieService: CookieService,
                private router: Router) {
    }

    refresh(token: string) {
        this.payload = jwt_decode(token);
        // console.log(this.payload);
        this.cookieService.put('Authorities', this.payload.authorities.join(','));
    }

    getAuthorities() {
        try {
            return this.payload.authorities;
        } catch (e) {
            if (this.cookieService.get('Authorities') !== undefined) {
                const authorities: string[] =  this.cookieService.get('Authorities').split(',');
                return authorities;
            } else {
                this.router.navigate(['/login']);
            }
        }
    }

}
