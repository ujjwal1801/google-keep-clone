import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { 
    
  }

  private notesList = [];

  fnCreateNewNote = (noteData: any = {}) => {
    let prevData = localStorage.getItem('notesList');

    if(prevData){
      this.notesList = JSON.parse(prevData);
    }
    else{
      this.notesList = [];
    }

    if(noteData){
      console.log('this.notesList -------> ', this.notesList);
      this.notesList.push(noteData);
      localStorage.setItem('notesList', JSON.stringify(this.notesList)); 
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
}
