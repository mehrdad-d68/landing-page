import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service'; 

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  forecastdata=[]as any

  constructor(private forecast:ForecastService) { 
    forecast.getforecast()
      .subscribe((forecastdata)=>{
        this.forecastdata=forecastdata
      })
  }

  ngOnInit(): void {
  }

}
