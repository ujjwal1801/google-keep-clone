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
    this.ngRedux.select(s=>s.notesList).subscribe(()=>console.log("changessssssssss constructor"))
   }


  public subscription;
  @select('notesList') notes;
  @select('pinnedNotesList') pinnedNotes;

  ngOnInit(): void {
    console.log('this.ngRedux.select<IAppState>("notesList") -------> ', this.ngRedux.select<IAppState>('notesList'));
  }


}
