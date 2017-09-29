import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketeventComponent } from './cricketevent.component';

describe('CricketeventComponent', () => {
  let component: CricketeventComponent;
  let fixture: ComponentFixture<CricketeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
