import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { NoteComponent } from './components/note/note.component';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { ModalComponent } from './components/modal/modal.component';
import { SidenavAlternateComponent } from './components/sidenav-alternate/sidenav-alternate.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, SideNavComponent, HomeComponent, NoteComponent, AddNoteComponent, ModalComponent, SidenavAlternateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }
}
