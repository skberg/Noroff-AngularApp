import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recip-puppy',
  templateUrl: './recip-puppy.component.html',
  styleUrls: ['./recip-puppy.component.scss']
})
export class RecipPuppyComponent implements OnInit {
@Input() RecipPuppy : any;
list: any[] = []

  constructor() { }

  ngOnInit() {
    this.list = this.RecipPuppy.ingredients.split(", ")
  }

}
