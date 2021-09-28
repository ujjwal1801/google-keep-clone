import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { ADDNOTES, PINNOTE, SEARCH } from 'src/app/actions';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private ngRedux: NgRedux<IAppState>) { 
  }

  private notesList = [];

  fnCreateNewNote = (noteData: any = {}) => {
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
  }
  fnUpdateNote = (noteData: any = {}) => {
    let notesList = this.ngRedux.getState().notesList || [];

    notesList[notesList.findIndex(note=>note._id === noteData._id)] = noteData;
    localStorage.setItem('notesList', JSON.stringify(notesList));

    this.ngRedux.dispatch({type: PINNOTE, payload:{ notes: notesList }})

  }
  fnGetNotes = () => {
  }

  fnSearchNotes = (searchString: string) => {
    let masterNotesList = [...this.ngRedux.getState().masterNotesList];
    let notesList = masterNotesList.filter((note) => note.text.toLowerCase().indexOf(searchString) > -1 || note.title.toLowerCase().indexOf(searchString) > -1)
    this.ngRedux.dispatch({type: SEARCH, payload: notesList})
  }

  
  generateNoteID = () => {
    return Date.now()
  }
}
