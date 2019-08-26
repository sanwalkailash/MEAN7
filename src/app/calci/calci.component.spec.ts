import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciComponent } from './calci.component';

describe('CalciComponent', () => {
  let component: CalciComponent;
  let fixture: ComponentFixture<CalciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
