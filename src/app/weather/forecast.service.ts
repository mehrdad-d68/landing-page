import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import {
  map,
  switchMap,
  pluck,
  mergeMap,
  filter,
  toArray,
  share
} from 'rxjs/operators'

interface openweatherresponse{
  list :{
    dt_txt:string;
    main:{
      temp:number
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private url='ttps://api.openweathermap.org/data/2.5/forecast';
  
  constructor(private http:HttpClient) { }

  getforecast(){
    return this.getcurrentlocation()
      .pipe(
        map(coords=>{
          return new HttpParams()
            .set('lat',String(coords.latitude))
            .set('lon',String(coords.longitude))
            .set('units','metric')
            .set('appid', '4258caec3841a893a8201fe5f0df4fdc')
        }),
        switchMap(params =>this.http.get<openweatherresponse>(this.url,{params})),
        pluck('list'),
        mergeMap(value=>of(...value)),
        filter((value,index)=>index % 8 ===0),
        map(value=>{
          return {
            datestring:value.dt_txt,
            temp:value.main.temp
          }
        })
      )
  }

  getcurrentlocation(){
    return new Observable<GeolocationCoordinates>((observer)=>{
      window.navigator.geolocation.getCurrentPosition((position)=>{
        observer.next(position.coords);
        observer.complete()
      },
      (err)=>observer.error(err)
      )
    })
  }

}
