import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/shared-services/toastr.service';
import { AddSchoolService } from './service/add-school.service';
import { NoteModel, NoteModelsModel, NoteSystemsModel, SchoolModel } from 'src/app/models';
import { SpinerService } from 'src/app/shared-services/spiner.service';

@Component({
    templateUrl: './add-school.component.html'
})
export class AddSchoolComponent implements OnInit{
    uploadedFiles: any[] = [];
    totalSize : number = 0;
    totalSizePercent : number = 0;
    newSchool: SchoolModel = new SchoolModel();

    noteSystems: NoteSystemsModel[] = [];
    // selectedNoteSystem: NoteSystemsModel = new NoteSystemsModel();

    selectedNoteType: boolean = false;
    noteModelList: NoteModelsModel[] = [];
    // selectedNoteModel: NoteModelsModel = new NoteModelsModel();

    constructor(
        private toastr: ToastrService,
        private service: AddSchoolService,
        private spinner:  SpinerService,
    ) {
        this.getNotSistemi();
        this.getNoteModels();
    }

    ngOnInit() {}


    onUpload(event: any) {
        debugger;
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.toastr.createGeneralToastr('success', "file_upload_success_message");

        // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }


    onBasicUpload() {
        debugger
        this.toastr.createGeneralToastr('success', "file_upload_success_message");
        // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    getNotSistemi(){
        this.service.getNoteSystems().subscribe((res: NoteSystemsModel[])=> {
            this.noteSystems = res;
            // this.newSchool.noteModel.system = this.noteSystems[0];
            // this.selectedNoteSystem = this.noteSystems[0];
        })
    }

    getNoteModels(){
        this.service.getNoteModels().subscribe((res: NoteModelsModel[])=> {
            this.noteModelList = res;
            // debugger;
            this.newSchool.noteModel = this.noteModelList[0];
            // this.selectedNoteSystem = this.noteSystems.filter(item => item.id == this.selectedNoteModel.systemId)[0];
            this.changeSystem();
        })
    }

    changeSystem(){
        if(this.selectedNoteType == true){
            // let item: NoteModelsModel = new NoteModelsModel();
            // let note: NoteModel  = new NoteModel();

            // note.name = "";
            // note.note = 0.00;
            // item.notes.push(note);
            // this.newSchool.noteModel = item;
        }
        else{
            this.newSchool.noteModel = this.noteModelList[0];
        }
    }

    addNote(){
        let note: NoteModel  = new NoteModel();
        note.name = "";
        note.note = 0.00;
        this.newSchool.noteModel.notes.push(note);
    }
    deleteNote(index: number){
        this.newSchool.noteModel.notes.splice(index, 1);
    }

    getSystemName(systemId: number){
        return this.noteSystems.filter(item => item.id == systemId)[0].systemName;
    }

    saveSchool(){
        this.spinner.set(true)
        // this.service.saveSchool(this.newSchool).subscribe(res => {
        //     setTimeout(() => this.spinner.set(false), 1000000);
        // })
        setTimeout(() => this.spinner.set(false), 3000);
        this.toastr.createGeneralToastr('success', "file_upload_success_message");
    }


}


