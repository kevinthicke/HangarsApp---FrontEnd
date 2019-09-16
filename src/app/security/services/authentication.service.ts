import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost:3011';

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${ this.url }/authenticate`, { username, password });
  }

  register(username: string, password: string, role: string): Observable<any> {
    return this.httpClient.post<any>(`${ this.url }/register?role=${ role }`, { username, password });
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    return !(user == null);
  }

  logOut(): void {
    sessionStorage.removeItem('username');
  }

  public getUsername(): string {
    return sessionStorage.getItem('username');
  }
}
