import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather/weather.service';
import { Weather2Service } from 'src/app/service/weather2/weather2.service';
import { TopicService } from 'src/app/service/Topic/topic.service';
import { RecipePuppyService } from 'src/app/service/Puppy/recipe-puppy.service';

@Component({
  selector: 'app-dachbord',
  templateUrl: './dachbord.component.html',
  styleUrls: ['./dachbord.component.scss']
})
export class DachbordComponent implements OnInit {

  weatherData = [];    //weather 1
  weather2Data = [];  //weather 2
  tropicData = []; //tropic 1
  PuppyData = [];  //Puppy 1
  showpach = 1;

  display: string;

  constructor(private weather: WeatherService, private weather2: Weather2Service, private Topical: TopicService, private RecipPuppy: RecipePuppyService) { }

  ngOnInit() {
    //number 1: Weather 1
    this.weather.getweahtaer().subscribe(
      (response: any) => {
        this.weatherData = response.consolidated_weather;

      },
      err => { });
    //number 2: weather2
    this.weather2.getweahtaer().subscribe(
      (response: any) => {
        this.weather2Data = response;
        console.log(response);
      },
      err => { });

    this.Topical.getTropical().subscribe(
      (response: any) => {
        this.tropicData = response[1];

      },
      err => { });

    this.RecipPuppy.getPuppyData().subscribe(
      (response: any) => {
        this.PuppyData = response.results;
        console.log(this.PuppyData);
        let liste: any = response.results[0].ingredients.split(", ");
        console.log(liste);
      },
      err => { });
  }
}
