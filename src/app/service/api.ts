/* IMPORTS DE ANGULAR Y RXJS */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* SERVICIO PARA CONSUMIR LA API DE GITHUB */
@Injectable({
  providedIn: 'root',
})
export class Api {
  /* ENDPOINT DE REPOSITORIOS DEL USUARIO */
  private urlApi = 'https://api.github.com/users/tonaka96/repos';

  constructor(private http: HttpClient) { }

  /* METODO PARA OBTENER LOS DATOS */
  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
