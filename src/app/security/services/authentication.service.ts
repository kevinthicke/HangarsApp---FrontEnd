import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../core/models/authentication/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost:3011';

  constructor(private httpClient: HttpClient) { }

  authenticate(user: User): Observable<any> {
    return this.httpClient.post<any>(`${ this.url }/authenticate`, user);
  }

  register(username: string, password: string, role: string): Observable<any> {
    return this.httpClient.post<any>(`${ this.url }/register?role=${ role }`, { username, password });
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    return !(user == null);
  }

}
