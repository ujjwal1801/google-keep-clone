import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { NOTE, BLANK_NOTE } from 'src/app/interfaces/note.interface'
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  
  public blankNote = {...BLANK_NOTE};
  public newNote: NOTE;

  constructor(private ngRedux: NgRedux<IAppState>, private http: HttpService) { }

  ngOnInit(): void {
    this.newNote = {...this.blankNote};
  }

  saveNote = () => {
    console.log('this.newNote -------> ', this.newNote);
    this.http.fnCreateNewNote(this.newNote);
    this.newNote = {...this.blankNote};

  }
}
