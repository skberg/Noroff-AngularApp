import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DachbordComponent } from './dachbord.component';

describe('DachbordComponent', () => {
  let component: DachbordComponent;
  let fixture: ComponentFixture<DachbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DachbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DachbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
