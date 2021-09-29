import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavigationService, private http: HttpService) { }

  public searchString: string;

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }

  searchNotes = (dismissSearch: boolean = false) => {
    if(dismissSearch) this.searchString = '';
    this.http.fnSearchNotes(this.searchString);
  }
}