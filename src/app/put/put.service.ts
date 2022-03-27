import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
  };

  putUploadApi: string = environment.putUploadApi;

  constructor(private httpClient: HttpClient) { }

  post(requestData: any,responseData:any, id:any): Observable<HttpResponse<any>> {
   
    if(id!=undefined&&id!='')
    {
     let request={
        "mappingType": "PUT",
        "responseBody":responseData,
        "requestBody":requestData,
        "id":id
      }
      return this.httpClient.post<any>(this.putUploadApi, request, this.httpOptions);
    }else{
      let request={
        "mappingType": "PUT",
        "responseBody":responseData,
        "requestBody":requestData
      }
      return this.httpClient.post<any>(this.putUploadApi, request, this.httpOptions);
    }
    
  }
}
