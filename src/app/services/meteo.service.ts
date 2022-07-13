import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient:HttpClient) { }
  getMeteoData(city:string){
    return this.httpClient.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=a4578e39643716894ec78b28a71c7110")
  }
}
