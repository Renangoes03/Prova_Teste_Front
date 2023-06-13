import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from './anuncio/anuncio';


@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor(private http: HttpClient) { }


  getProduto(): Observable<Anuncio[]> {
      let url = "http://localhost:3000/anuncio";
      return this.http.get<Anuncio[]>(url);
  }
}
