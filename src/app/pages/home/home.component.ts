import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) {
  }


  public subscription;
  notesList: Observable<any>;
  pinnedNotes: Observable<any>;
  otherNotesList: Observable<any>;

  ngOnInit(): void {
    this.notesList = this.ngRedux.select('notesList');
    this.otherNotesList = this.ngRedux.select(state=>state.notesList?.filter(n=>n.isPinned===false))
    this.pinnedNotes = this.ngRedux.select(state=>state.notesList?.filter(n=>n.isPinned===true)) 
  }


}
