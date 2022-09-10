import { Veiculo } from './../models/Veiculos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getById(id: number): Promise<Veiculo | undefined> {
    return this.http.get<Veiculo>(`${this.URL}/${id}`).toPromise();
  }

  getAll():Promise<Veiculo[] |undefined>{
    return this.http.get<Veiculo[]>(this.URL).toPromise();
  }

  delete(id: number){
    return this.http.delete<Veiculo>(`${this.URL}/${id}`).toPromise();
  }

  save(veiculo: Veiculo): Promise<Veiculo | undefined> {
    return this.http.post<Veiculo>(
      this.URL,
      veiculo,
      this.httpOptions
    ).toPromise();
  }

  update(veiculo: Veiculo): Promise<Veiculo | undefined> {
    return this.http.put<Veiculo>(
      `${this.URL}/${veiculo.id}`,
      veiculo,
      this.httpOptions
    ).toPromise();
  }

}
