import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftControlMenuComponent } from './left-control-menu.component';

describe('LeftControlMenuComponent', () => {
  let component: LeftControlMenuComponent;
  let fixture: ComponentFixture<LeftControlMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftControlMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftControlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
