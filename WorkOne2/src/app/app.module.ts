import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { AuthService } from './service/auth/auth.service';
import { DachbordComponent } from './pages/dachbord/dachbord.component';
import { WeatherService } from './service/weather/weather.service';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Weather2Service } from './service/weather2/weather2.service';
import { Weather2CardComponent } from './components/weather2-card/weather2-card.component';
import { TopicService } from './service/Topic/topic.service';
import { TopicCardsComponent } from './components/topic-cards/topic-cards.component';
import { RecipPuppyComponent } from './components/recip-puppy/recip-puppy.component';
import { RecipePuppyService } from './service/Puppy/recipe-puppy.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPagesComponent,
    DachbordComponent,
    WeatherCardComponent,
    Weather2CardComponent,
    TopicCardsComponent,
    RecipPuppyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [
    AuthService,
    WeatherService,
    Weather2Service,
    TopicService,
    RecipePuppyService,

  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
