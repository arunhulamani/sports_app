import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsTypeComponent } from './sports-type.component';

describe('SportsTypeComponent', () => {
  let component: SportsTypeComponent;
  let fixture: ComponentFixture<SportsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
