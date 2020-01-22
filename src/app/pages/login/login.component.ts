import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {LoginService} from './login.service';
import {TokenService} from '../core/token.service';
import {GlobalConfig, ToastrService} from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser';
import {NgxSpinnerService} from 'ngx-spinner';
import PUBLIC_KEY from '../core/certs.model';
import {UserService} from '../system/user/user.service';
declare var JSEncrypt: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {
    cryptor = new JSEncrypt();
    public router: Router;
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public imageCode: AbstractControl;
    imgSrc = '';    // 验证码
    isLoading = false;
    options: GlobalConfig;
    _interval;
    rememberMe = true;

    constructor(
      router: Router,
      fb: FormBuilder,
      private loginService: LoginService,
      private tokenService: TokenService,
      public toastrService: ToastrService,
      private _sanitizer: DomSanitizer,
      private spinner: NgxSpinnerService,
      // private userService: UserService,
      ) {
      this.router = router;
      this.form = fb.group({
          'email': ['', Validators.compose([Validators.required, CustomValidators.email])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
          'imageCode': ['', Validators.compose([Validators.required])]
      });
      this.email = this.form.controls['email'];
      this.password = this.form.controls['password'];
      this.imageCode = this.form.controls['imageCode'];
      this.options = this.toastrService.toastrConfig;
      // this.cryptor.setPublicKey(PUBLIC_KEY);
        this.hideLoading();
  }

  public onSubmit(values: any): void {
      this.form.valid;
      if (!this.form.valid) {
          return;
      }
      this.isLoading = true;
      // this.spinner.show();
      // RSA
      values.username = this.cryptoData(values.username);
      values.password = this.cryptoData(values.password);
      values.imageCode = this.cryptoData(values.imageCode);
      values.rememberMe = this.rememberMe;
      this.loginService.login(values).subscribe((response: any) => {
          this.syncIdentityCode();
          this.form.controls.imageCode.reset();
          this.isLoading = false;
          // this.spinner.hide();
      });
  }
    syncIdentityCode() {
        this.loginService.getCode()
            .subscribe(resp => {
                this.imgSrc = <string>this._sanitizer.bypassSecurityTrustResourceUrl(resp.imageBase64);
                this.hideLoading();
            }, _ => {
                this.hideLoading();
            });
    }
  // ngAfterViewInit(){
  //     document.getElementById('preloader').classList.add('hide');
  // }
  hideLoading() {
      const doms = document.getElementsByClassName('loader-outer');
      for (const _dom of <any>doms) {
          _dom.classList.add('hide');
      }
  }

  cryptoData(data) {
      return this.cryptor.encrypt(data);
  }

    forgotPassword() {
        window.location.href = 'https://www.cmpassport.com/umc/management/forgetpwd/?from=9';
    }

    ngOnDestroy(): void {
        clearInterval(this._interval);
    }

}
