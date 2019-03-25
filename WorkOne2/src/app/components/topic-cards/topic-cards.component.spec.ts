import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCardsComponent } from './topic-cards.component';

describe('TopicCardsComponent', () => {
  let component: TopicCardsComponent;
  let fixture: ComponentFixture<TopicCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
