import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { ADDNOTES } from 'src/app/actions';
import { NOTE, BLANK_NOTE } from 'src/app/interfaces/note.interface'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  
  public blankNote = {...BLANK_NOTE};
  public newNote: NOTE;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.newNote = {...this.blankNote};
    this.ngRedux.select('pinnedNotesList').subscribe(res=>console.log("changes",res));
  }

  saveNote = () => {
    this.ngRedux.dispatch({ type: ADDNOTES, payload: this.newNote });
    this.newNote = this.blankNote;
  }
}
