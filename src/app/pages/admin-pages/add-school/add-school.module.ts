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
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';

@NgModule({
	imports: [
		CommonModule,
		AddSchoolRoutingModule,
        AutoCompleteModule,
        FormsModule,
        InputTextModule,
        FileUploadModule,
        InputNumberModule,
        RadioButtonModule,
        DropdownModule,
        TableModule,
        InputTextareaModule,
        BadgeModule,
        ToastModule
	],
    providers: [MessageService, ToastrService],
	declarations: [AddSchoolComponent]
})
export class AddSchoolModule { }
