import { Injectable } from '@angular/core';
import { catchError, map, of, Observable } from 'rxjs';
import { NoteModelsModel, NoteSystemsModel, SchoolModel } from 'src/app/models';
import { UniortalamaHttpService } from 'src/app/shared-services/uniortalama-http.service';

@Injectable({
    providedIn: 'root',
})
export class AddSchoolService {

    constructor(private http: UniortalamaHttpService) { }

    getNoteSystems(): Observable<NoteSystemsModel[]> {
        let path = "assets/uniortalama-data/not-sistemi.json";
        return this.http.request("GET", path, null).pipe(map(response => response.data),
            catchError((error, caught) => {
                let errorMsg = error.message;
                return of(errorMsg);
            }));
    }

    getNoteModels(): Observable<NoteModelsModel[]> {
        let path = "assets/uniortalama-data/not-models.json";
        return this.http.request("GET", path, null).pipe(map(response => response.data),
            catchError((error, caught) => {
                let errorMsg = error.message;
                return of(errorMsg);
            }));
    }

    saveSchool(data: SchoolModel): Observable<NoteModelsModel[]> {
        let path = "/school/create-school";
        return this.http.request("POST", path, data).pipe(map(response => response.data),
            catchError((error, caught) => {
                let errorMsg = error.message;
                return of(errorMsg);
            }));
    }

}
