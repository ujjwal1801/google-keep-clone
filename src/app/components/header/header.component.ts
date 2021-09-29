import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { HttpService } from 'src/app/services/http.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { IAppState } from 'src/app/store';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavigationService, private http: HttpService, public darkModeService: DarkModeService, private ngRedux: NgRedux<IAppState>) { }

  public searchString: string;
  public theme: Observable<string>;
  public category: Observable<string>;

  ngOnInit(): void {
    this.theme = this.ngRedux.select('theme');
    this.category = this.ngRedux.select('category');
  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }

  searchNotes = (dismissSearch: boolean = false) => {
    if(dismissSearch) this.searchString = '';
    this.http.fnSearchNotes(this.searchString);
  }
}