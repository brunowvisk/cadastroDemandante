import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { iapplicantRegModel } from '../models/iapplicantRegModel';
import { BaseService } from "./baseService";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  register(formLogin: FormGroup) {
    throw new Error('Method not implemented.');
  }
  public autenticado: boolean = true;

  constructor(private _httpClient: HttpClient) {
    super();
    this.checkAuth();
  }

  checkAuth() {
    let token = sessionStorage.getItem("token");
    if (!token) {
      this.signout();
    }
  }

  signout() {
    this.autenticado = false;
    sessionStorage.clear();
  }

  public login(dados) {
    let body = {

    };

    return this._httpClient.post<iapplicantRegModel>(`${super.getHostApi()}PortalToken`, body);
  }


  // public login(dados) {

  //   var headers = new Headers()
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   headers.append('Authorization', 'Basic dmVjdG9yOlYzY3QwciMyMDE5');
    
  //   var formData = new FormData();
  //   formData.append('username', dados.username);
  //   formData.append('password', dados.password);
  //   formData.append('grant_type', 'password');

  //   return this._httpClient.post<iapplicantRegModel>(`${super.getHostApi()}PortalToken`, headers);

    // return this._httpClient.post(this.getHostApi(),formData, 
    // super.getHeaderLogin()).pipe( 
    //   catchError(super.serviceError));;
}

