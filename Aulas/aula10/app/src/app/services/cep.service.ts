import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cep } from "../models/cep";

@Injectable({
  providedIn: 'root'
})
export class CepService {
  constructor(private httpClient: HttpClient) { }

  public buscarCep(cep: string): Observable<any> {
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json`)
  }
}
