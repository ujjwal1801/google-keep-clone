import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { ADDNOTES, ARCHIVE, PINNOTE, SEARCH } from 'src/app/actions';
import { NOTE } from 'src/app/interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private ngRedux: NgRedux<IAppState>) { 
  }

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
  fnUpdateNote = (noteData: NOTE) => {
    let notesList = this.ngRedux.getState().notesList || [];
    notesList[notesList.findIndex(note=>note._id === noteData._id)] = noteData;
    localStorage.setItem('notesList', JSON.stringify(notesList));
    this.ngRedux.dispatch({type: PINNOTE, payload: notesList })
  }

  fnSearchNotes = (searchString: string) => {
    let masterNotesList = [...this.ngRedux.getState().masterNotesList];
    let notesList = masterNotesList.filter((note) => note.text.toLowerCase().indexOf(searchString) > -1 || note.title.toLowerCase().indexOf(searchString) > -1)
    this.ngRedux.dispatch({type: SEARCH, payload: notesList})
  }

  fnArchiveNote = (noteData: NOTE) => {
    noteData.isArchived = true;
    let masterNotesList = [...this.ngRedux.getState().masterNotesList];
    masterNotesList[masterNotesList.findIndex(note=>note._id === noteData._id)] = noteData;
    localStorage.setItem('notesList', JSON.stringify(masterNotesList));
    this.ngRedux.dispatch({type: ARCHIVE, payload: masterNotesList})
  }

  
  generateNoteID = () => {
    return Date.now()
  }
}
