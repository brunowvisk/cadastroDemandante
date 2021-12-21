import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public isUserLoggedIn: boolean;

  public formLogin: FormGroup;

  constructor(
     private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.formLogin = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  public login(){
    // localStorage.setItem('token', '');
    this._router.navigate(['./home']);
  }
    //Inserir este código para utilizar OAuth2 na validação do login, através de token.
    // this._authService.login(this.formLogin.value).subscribe(
    //   (res: any) => {

    //     localStorage.setItem('token', res.token);
    //     this._router.navigate(['./home']);
    //   },
    //   err => {
    //     if (err.status == 400)
    //       console.log('Incorrect username or password.');
    //     else
    //       console.log(err);
    //   }
    // );


  // public login() {
  //   this._spinner.show();    
  //   this._authService.login(this.formLogin.value).subscribe( res => {
  //     this._spinner.hide();
  //     if(res.Success == true) {
  //       sessionStorage.setItem("token", res.Dat.token);
  //       sessionStorage.setItem("ApplicantInfo", JSON.stringify(res.Data.devedor));
  //       this._authService.autenticado = true;
  //       this._toastr.success('Login realizado com sucesso', 'SUCESSO!');
  //       this._router.navigate(['/confirmacaoDados']);
  //     } else {
  //       this._toastr.warning(res.Message, 'FALSE!');
  //     }
  //   }, err => {
  //     this._spinner.hide();
  //   });
  // }

}
