import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDevelopers } from '../models/developers';
import { catchError, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevelopersService {
  private readonly API =
    'https://61d4ad578df81200178a8df9.mockapi.io/api/v1/developer';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<IDevelopers[]>(this.API).pipe(take(1));
  }

  createDev(developers: IDevelopers): Observable<Object> {
    const body = {
      name: developers.name,
      avatar: developers.avatar,
    };
    return this.httpClient.post(`${this.API}`, developers);
  }

  updateDev(id: string, developers: IDevelopers): Observable<Object> {
    return this.httpClient.put(`${this.API}/${id}`, developers);
  }

  deleteDev(id: number): any {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
