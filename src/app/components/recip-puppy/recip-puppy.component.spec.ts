import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipPuppyComponent } from './recip-puppy.component';

describe('RecipPuppyComponent', () => {
  let component: RecipPuppyComponent;
  let fixture: ComponentFixture<RecipPuppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipPuppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipPuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
