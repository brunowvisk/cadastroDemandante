import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iapplicantRegModel } from '../models/iapplicantRegModel';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService extends BaseService {

  url = 'http://localhost:3000/cadastrardemandante';
  //Informar a url correta para obter os Estados e CPF
  // url2 = 'http://localhost:3000/'
  //Implementar a url abaixo quando obtiver a url base do endpoint.
  // url = '.../atendimento/atendimento/cadastrardemandante';

  constructor(private _httpClient: HttpClient) {
    super();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAllApplicants(): Observable<iapplicantRegModel[]> {
    return this._httpClient.get<iapplicantRegModel[]>(this.url)
    //super.getHeaderRequest() Incluir após this.url, 
    //depois de vírgula, para buscar token recebido)
      .pipe(
        retry(2),
        catchError(this.handleError))

  }

  saveApplicants(applicant: iapplicantRegModel): Observable<iapplicantRegModel> {
    const headers = { 'content-type': 'application/json'} 
    return this._httpClient.post<iapplicantRegModel>
    (this.url, JSON.stringify(applicant), {'headers': headers})
    //super.getHeaderRequest() Incluir após this.url, 
    //depois de vírgula, para buscar token recebido)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}

