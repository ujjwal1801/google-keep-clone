import { Injectable, Inject, Renderer2, RendererFactory2  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { SWITCH_THEME } from '../actions';


@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  theme: string;
  private renderer: Renderer2
  constructor(@Inject(DOCUMENT) private document: Document, private rendererFactory: RendererFactory2, private ngRedux: NgRedux<IAppState>) { 
    this.renderer = rendererFactory.createRenderer(null, null);
    this.theme = this.ngRedux.getState().theme;
  }
  switchTheme() {
    this.document.body.classList.replace(this.theme, this.theme === 'light-theme' ? (this.theme = 'dark-theme') : (this.theme = 'light-theme'));
    this.ngRedux.dispatch({ type: SWITCH_THEME, payload: this.theme });
  }
  initializeTheme = () => {
    this.renderer.addClass(this.document.body, this.theme);
  }
}

export type Theme = 'light-theme' | 'dark-theme';
