import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getWeather, WeatherResult } from '../weather-api/client';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  city: string = ""
  //полученнные данные о погоде
  address: string=""
  temp: string= ""
  humidity: string=""
  pressure: string=""
  icon: string=""
  error: string=""
  async onFormSubmit(event: any) {
    event.preventDefault();
    await this.GetWeather();
  }
async GetWeather(){
  try{
    this.error=""
    let weather = await getWeather(this.city)
    console.log(weather)
    this.address=weather.address
    this.temp= weather.temp.toString()
    this.humidity=weather.humidity
    this.pressure=weather.pressure
    this.icon=weather.icon+'.png'
  }
  catch(err: any){
    this.error="City not found"
    this.address=""
    this.temp=""
    this.humidity=""
    this.pressure=""
    this.icon=""
    console.log(this.error)
    return
  }
  finally{
  
  }
}
 
}
