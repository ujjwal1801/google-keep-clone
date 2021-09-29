import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { ADDNOTES, ARCHIVE, UPDATE_NOTE, SEARCH, DEFAULT, CATEGORY, TRASH } from 'src/app/actions';
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

      let notesList = [...this.ngRedux.getState().notesList || []];
      let masterNotesList = [...this.ngRedux.getState().masterNotesList || []];
      notesList.push(noteData)
      masterNotesList.push(noteData)

      // Mimicking an api call. Replacing it with localstorage for demo purposes.
      this.fnMimicAPI(notesList, masterNotesList);
      this.ngRedux.dispatch({ type: ADDNOTES, payload: {notesList, masterNotesList} });
    } 
  }
  fnDeleteNote = (noteData: any = {}) => {
    let masterNotesList = [...this.ngRedux.getState().masterNotesList];
    let notesList = [...this.ngRedux.getState().notesList];
    masterNotesList.splice(masterNotesList.findIndex(note=>note._id === noteData._id), 1);
    notesList.splice(notesList.findIndex(note=>note._id === noteData._id), 1)
    
    this.fnMimicAPI(notesList, masterNotesList);
    this.ngRedux.dispatch({ type: TRASH, payload: {notesList, masterNotesList} });


  }
  fnUpdateNote = (noteData: NOTE) => {
    let masterNotesList = [...this.ngRedux.getState().masterNotesList];
    let notesList = [...this.ngRedux.getState().notesList] || [];
    notesList[notesList.findIndex(note=>note._id === noteData._id)] = noteData;
    masterNotesList[masterNotesList.findIndex(note=>note._id === noteData._id)] = noteData;
    
    this.fnMimicAPI(notesList, masterNotesList);

    this.ngRedux.dispatch({type: UPDATE_NOTE, payload: notesList })
  }

  fnSearchNotes = (searchString: string) => {
    let masterNotesList = [...this.ngRedux.getState().masterNotesList];

    if(!searchString) {
      let category = this.ngRedux.getState().category;
      this.ngRedux.dispatch({type: CATEGORY, payload: {category, notesList: masterNotesList.filter(note=>note.noteCategory === category)}})
      return;
    }
    let notesList = masterNotesList.filter((note) => note.text.toLowerCase().includes(searchString.toLowerCase()) || note.title.toLowerCase().includes(searchString.toLowerCase()))
    this.ngRedux.dispatch({type: SEARCH, payload: notesList})
  }

  fnArchiveNote = (noteData: NOTE) => {
    noteData.noteCategory = noteData.noteCategory === DEFAULT ? ARCHIVE: DEFAULT;
    let masterNotesList = [...this.ngRedux.getState().masterNotesList];
    masterNotesList[masterNotesList.findIndex(note=>note._id === noteData._id)] = noteData;
    let notesList = masterNotesList.filter(note=>note.noteCategory === this.ngRedux.getState().category);
    
    this.fnMimicAPI(notesList, masterNotesList);

    this.ngRedux.dispatch({type: ARCHIVE, payload: {masterNotesList, notesList}})
  }

  fnMimicAPI = (notesList: Array<any>, masterNotesList: Array<any>) => {
    localStorage.setItem('notesList', JSON.stringify(notesList));
    localStorage.setItem('masterNotesList', JSON.stringify(masterNotesList));
  }
  
  generateNoteID = () => {
    return Date.now()
  }
}
