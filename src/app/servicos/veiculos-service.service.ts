import { ErrorUtil } from './../utils/error-util';
import { Veiculo } from './../models/Veiculos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosServiceService {
  private URL = "http://localhost:3000/veiculos";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient
  ) { }

  getById(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.URL}/${id}`).pipe(
      catchError(ErrorUtil.handleError)
    );;
  }

  getAll():Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(this.URL).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  delete(id: number){
    return this.http.delete<Veiculo>(`${this.URL}/${id}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  save(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(
      this.URL,
      veiculo,
      this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  update(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(
      `${this.URL}/${veiculo.id}`,
      veiculo,
      this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

}
