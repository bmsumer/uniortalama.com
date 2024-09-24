import { NoteSystemsModel } from "./note-systems.model";
import { NoteModel } from "./note.model";

export class NoteModelsModel{
    id: number;
    system: NoteSystemsModel;
    notes: NoteModel[]  =[];
}
