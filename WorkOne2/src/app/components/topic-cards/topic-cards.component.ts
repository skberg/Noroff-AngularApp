import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-cards',
  templateUrl: './topic-cards.component.html',
  styleUrls: ['./topic-cards.component.scss']
})
export class TopicCardsComponent implements OnInit {
  @Input() TopicalItem ={

  };
  constructor() { }

  ngOnInit() {
    console.log(this.TopicalItem)
  }

}
