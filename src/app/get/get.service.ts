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
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
  };

  getUploadApi: string = environment.getUploadApi;

  constructor(private httpClient: HttpClient) { }

  post(data: any,id:any): Observable<HttpResponse<any>> {
   
    if(id!=undefined&&id!='')
    {
     let requestData={
        "mappingType": "GET",
        "responseBody":data,
        "id":id
      }
      return this.httpClient.post<any>(this.getUploadApi, requestData, this.httpOptions);
    }else{
      let requestData={
        "mappingType": "GET",
        "responseBody":data
      }  
      return this.httpClient.post<any>(this.getUploadApi, requestData, this.httpOptions);
    }
    
  }

}
