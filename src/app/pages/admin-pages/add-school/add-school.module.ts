import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSchoolRoutingModule } from './add-school-routing.module';
import { AddSchoolComponent } from './add-school.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'src/app/shared-services/toastr.service';

@NgModule({
	imports: [
		CommonModule,
		AddSchoolRoutingModule,
        AutoCompleteModule,
        FormsModule,
        InputTextModule,
        FileUploadModule
	],
    providers: [MessageService, ToastrService],
	declarations: [AddSchoolComponent]
})
export class AddSchoolModule { }
