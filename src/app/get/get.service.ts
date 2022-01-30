import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getUploadApi: string = environment.getUploadApi;

  constructor(private httpClient: HttpClient) { }

  post(data: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.getUploadApi, data, this.httpOptions);
  }
  
}
