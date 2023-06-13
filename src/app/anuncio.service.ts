import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from './anuncio/anuncio';


@Injectable({
  providedIn: 'root'
})
export class AnuncioService {


   url = "http://localhost:3000/anuncio";

  constructor(private http: HttpClient) { }


  getAnuncio(): Observable<Anuncio[]> {
      return this.http.get<Anuncio[]>(this.url);
  }
      salvar(Anuncio: Anuncio): Observable<Anuncio> {
        return this.http.post<Anuncio>(this.url, Anuncio);
  }
}
