import { HttpParams, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ToastrService {

    constantLife: number = 2000;

    constructor(
      private messageService: MessageService,
      private translate: TranslateService,
    ) {}

    createGeneralToastr(severity: string, message: string, summary?: string, life?: number){
      let translateMessage:string = this.translate.instant('toastr.' + message.toLowerCase());
      let tempArr = translateMessage.search("toastr");
      if(tempArr == -1){
        message = translateMessage;
      }
      if(!summary){
          summary = this.translate.instant('toastr.' + severity.toLowerCase())
      }
      this.messageService.add({ severity: severity, summary: summary, detail: message, life: life ? life : this.constantLife });
    }



}
