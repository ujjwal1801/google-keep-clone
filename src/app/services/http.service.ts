import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { ADDNOTES, PINNOTE } from 'src/app/actions';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private ngRedux: NgRedux<IAppState>) { 
    this.ngRedux.select('notesList').subscribe(notes =>console.log('notes in subscription -------> ', notes))
  }

  private notesList = [];

  fnCreateNewNote = (noteData: any = {}) => {
    console.log("state -",this.ngRedux.getState());

    if(noteData.title || noteData.text) {
        noteData._id = this.generateNoteID()

        let notesList = this.ngRedux.getState().notesList || [];
        notesList.push(noteData)
        // Mimicking an api call. Replacing it with localstorage for demo purposes.
        localStorage.setItem('notesList', JSON.stringify(notesList));
        this.ngRedux.dispatch({ type: ADDNOTES, payload: notesList });

    } 
  }
  fnDeleteNote = (noteData: any = {}) => {
    this.notesList.splice(this.notesList.indexOf(noteData), 1);
  }
  fnUpdateNewNote = (noteData: any = {}) => {
    // let noteToUpdate = this.notesList.find(note => note.id === noteData.id);

  }
  fnGetNotes = () => {
    this.notesList = JSON.parse(JSON.stringify(localStorage.getItem('notesList')));
  }

  fnPinNote = (noteData) => {
    let notesList = this.ngRedux.getState().notesList || [];
    let pinnedNotes = this.ngRedux.getState().pinnedNotesList || [];

    noteData.isPinned = !noteData.isPinned; 

    if(noteData.isPinned){
        notesList.splice(notesList.findIndex(note=>note._id === noteData._id), 1);
        pinnedNotes.push(noteData);
    }
    else{ 
        pinnedNotes.splice(pinnedNotes.findIndex(note=>note._id === noteData._id), 1);
        notesList.push(noteData);
    }
    localStorage.setItem('notesList', JSON.stringify(notesList));
    localStorage.setItem('pinnedNotesList', JSON.stringify(pinnedNotes));

    this.ngRedux.dispatch({type: PINNOTE, payload:{ notes: notesList, pinnedNotes: pinnedNotes}})

  }

  
  generateNoteID = () => {
    return Date.now()
  }
}
