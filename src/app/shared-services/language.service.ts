import { HttpParams, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    _languages: any[] = [
      { name: 'Türçe', code: 'tr', flag: 'tr'},
      { name: 'English', code: 'en', flag: 'uk' }
    ];
    // selectedLanguage: string | undefined;

    public languages$: BehaviorSubject<any[]> = new BehaviorSubject(this._languages);
    public selectedLanguage$: BehaviorSubject<any> = new BehaviorSubject(this._languages[0]);
    constructor() {
      this.languages$.asObservable();
      this.selectedLanguage$.asObservable();
      let lang = localStorage.getItem('lang');
      if(lang){
        this._languages.forEach(item => {
          if(item.code == lang){
            this.selectedLanguage$.next(item);
          }
        })
      }
    }

    setSelectedLanguage(newLang: any){
        this.selectedLanguage$.next(newLang);
        localStorage.setItem("lang", newLang.code);
    }
    getSelectedLanguage(){
        return this.selectedLanguage$.getValue();
    }

}
