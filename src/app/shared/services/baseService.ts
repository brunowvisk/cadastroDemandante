import { Injectable } from '@angular/core';
import { throwError } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export abstract class BaseService {

  protected serviceError(error: Response | any) {
    if (error.status == 401) {
      sessionStorage.removeItem("token");
      window.location.reload();
    }
    return throwError(error.status);
  }

  protected getHeaderLogin() {
    return {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Basic dmVjdG9yOlYzY3QwciMyMDE5')
    };
  }

  protected getHeaderRequest() {
    let token = sessionStorage.getItem('token').replace(/["|']/g, "");

    return {
      headers: new HttpHeaders()
        .set('content-type', 'application/json')
        .append('Authorization', `bearer ${token}`)
    };
  }

  //Necessita da url base para obter a resposta da API.
  protected getHostApi() {
    return "";
  }

}