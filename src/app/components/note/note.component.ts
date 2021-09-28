import { Component, Input, OnInit } from '@angular/core';
import { MODAL } from 'src/app/actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { tassign } from 'tassign';
import { NOTE, BLANK_NOTE } from 'src/app/interfaces/note.interface'
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input("noteData") data: any = {};

  constructor(private ngRedux: NgRedux<IAppState>, private http: HttpService) { }

  ngOnInit(): void {
  }

  pinNote = () => {
    this.data.isPinned = !this.data.isPinned;
    this.http.fnUpdateNote(this.data);
  }

  editNote = () => {
    this.ngRedux.dispatch({ type: MODAL, payload: {note: this.data, modalOpen: true}})
  }
}
