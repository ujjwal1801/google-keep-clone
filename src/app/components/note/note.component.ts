import { Component, Input, OnInit } from '@angular/core';
import { PINNOTE } from 'src/app/actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { tassign } from 'tassign';
import { NOTE, BLANK_NOTE } from 'src/app/interfaces/note.interface'



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input("noteData") data: any = {};

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  pinNote = () => {
    this.ngRedux.dispatch({type: PINNOTE, payload:{ note: tassign(this.data, { isPinned: !this.data.isPinned }) }})
  }

}
