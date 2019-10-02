import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather2-card',
  templateUrl: './weather2-card.component.html',
  styleUrls: ['./weather2-card.component.scss']
})
export class Weather2CardComponent implements OnInit {
  @Input() weatherItem ={

  };
  constructor() { }

  ngOnInit() {
  }

}
