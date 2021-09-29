import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { Observable } from 'rxjs';
import { DEFAULT } from 'src/app/actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  notesList: Observable<any>;
  pinnedNotes: Observable<any>;
  otherNotesList: Observable<any>;
  category: Observable<string>;
  defaultCategory: string = DEFAULT;

  ngOnInit(): void {
    this.notesList = this.ngRedux.select('notesList');
    this.category = this.ngRedux.select('category');
    this.otherNotesList = this.ngRedux.select(state=>state.notesList?.filter(n=>n.isPinned===false))
    this.pinnedNotes = this.ngRedux.select(state=>state.notesList?.filter(n=>n.isPinned===true)) 
  }


}
