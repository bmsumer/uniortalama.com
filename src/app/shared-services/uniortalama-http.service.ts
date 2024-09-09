import { HttpParams, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
type METHOD = 'POST' | 'GET' | 'PUT';

@Injectable({
    providedIn: 'root',
})
export class UniortalamaHttpService {
    baseUrl = environment.baseUrl;
    private headers = { 'content-type': 'application/json'} ;

    constructor(private http: HttpClient) { }

    request(method: METHOD, path: string, body?: any, params?: {}, headers?: {}): Observable<any> {
        path = this.baseUrl + path;
        if(method == "POST"){
            return this.http.post(path, JSON.stringify(body), {'headers':headers ? headers : this.headers,  params: params});
        }
        else if(method == "GET"){
            return this.http.get(path, {'headers':headers ? headers : this.headers,  params: params});
        }
        else{
            return this.http.put(path, JSON.stringify(body), {'headers':headers ? headers : this.headers,  params: params});
        }
    };
}
