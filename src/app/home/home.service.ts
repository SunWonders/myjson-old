import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
  };

  searchApi: string = environment.searchApi;
  
  constructor(private httpClient: HttpClient) { }

  post(searchData: any): Observable<HttpResponse<any>> {
    let requestData={
      "searchData": searchData
    }
    return this.httpClient.post<any>(this.searchApi, requestData, this.httpOptions);
  }
}
