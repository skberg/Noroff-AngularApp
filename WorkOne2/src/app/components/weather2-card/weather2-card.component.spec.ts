import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather2CardComponent } from './weather2-card.component';

describe('Weather2CardComponent', () => {
  let component: Weather2CardComponent;
  let fixture: ComponentFixture<Weather2CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather2CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
