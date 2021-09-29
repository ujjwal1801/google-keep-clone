import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { SideNavDirection } from './side-nav-direction';
import { IAppState } from 'src/app/store';
import { NgRedux } from '@angular-redux/store';
import { CATEGORY } from 'src/app/actions';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  showSideNav: Observable<boolean>;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Left;
  
  constructor(private navService: NavigationService, private ngRedux: NgRedux<IAppState>) {}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
    
    return navBarStyle;
  }

  switchCategory(category: string) {
    let masterNotesList = this.ngRedux.getState().masterNotesList;
    let notesList = masterNotesList.filter(note=>note.noteCategory === category);
    this.ngRedux.dispatch({ type: CATEGORY, payload: { category, notesList } });
    this.onSidebarClose();
  }
}