import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/shared-services/toastr.service';

@Component({
    templateUrl: './add-school.component.html'
})
export class AddSchoolComponent implements OnInit{
    uploadedFiles: any[] = [];


    constructor(
        private toastr: ToastrService,
    ) {}

    ngOnInit() {}


    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.toastr.createGeneralToastr('success', "file_upload_success_message");

        // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }


    onBasicUpload() {
        this.toastr.createGeneralToastr('success', "file_upload_success_message");
        // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}


