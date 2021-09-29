import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAlternateComponent } from './sidenav-alternate.component';

describe('SidenavAlternateComponent', () => {
  let component: SidenavAlternateComponent;
  let fixture: ComponentFixture<SidenavAlternateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavAlternateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAlternateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
