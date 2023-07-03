import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient,
  ) { }

  public getTours() {

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + accessToken,
    // });
    const baseUrl: string = 'https://node-graph-ql-vercel.vercel.app/api/tours';
    const url: string = baseUrl;
    // return this.http.get<any>(url, { headers });
    return this.http.get<any>(url);
  }
}
