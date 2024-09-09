import { HttpParams, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SpinerService {

    private spiner: BehaviorSubject<boolean> = new BehaviorSubject(false);
    constructor() {}

    set(status: boolean){
        this.spiner.next(status);
    }
    get(){
        return this.spiner.getValue();
    }

}
