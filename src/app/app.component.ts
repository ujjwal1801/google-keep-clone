import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'google-keep-clone';

  constructor( private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.initializeTheme();
  }
}
