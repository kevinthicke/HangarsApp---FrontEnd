import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3011';

  constructor(private httpClient: HttpClient) { }

  existUserByUsername(username: string): Observable<any> {
    return this.httpClient.get(`${ this.url }/user?username=${ username }`);
  }

  loadRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${ this.url }/role`);
  }
}
