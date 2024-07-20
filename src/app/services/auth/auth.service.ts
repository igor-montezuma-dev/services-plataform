import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SigninCredentials } from 'src/app/models/auth';

const BASIC_URL = 'http://localhost:8080/';
const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerClient(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + 'client/sign-up', signupRequestDTO);
  }
  registerCompany(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + 'company/sign-up', signupRequestDTO);
  }

  login({ email, password }: SigninCredentials): Observable<SigninCredentials> {
    return this.http.post<SigninCredentials>(
      BASIC_URL + 'authenticate',
      {
        email,
        password,
      },
      { observe: 'response' }
    ).pipe(
      map((response: HttpResponse<any>) => {
        console.log(response.body);
        const tokenLength = response.headers.get(AUTH_HEADER)?.length;
        const bearerToken = response.headers.get(AUTH_HEADER)?.substring(7, tokenLength);
        console.log(bearerToken);
        return response.body;
      })
    );
  }
}
