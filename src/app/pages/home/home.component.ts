import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.subscription = this.ngRedux.select<IAppState>('notesList').subscribe(()=>console.log("changesssssss"))
   }


  public subscription;
  @select('notesList') notes;
  @select('pinnedNotesList') pinnedNotes;

  ngOnInit(): void {
    console.log('this.ngRedux.select<IAppState>("notesList") -------> ', this.ngRedux.select<IAppState>('notesList'));
  }


}
